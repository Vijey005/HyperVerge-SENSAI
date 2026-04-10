import { NextRequest, NextResponse } from 'next/server';

/**
 * API route to proxy requests to Judge0 API for code submissions
 * This avoids CORS issues when calling Judge0 directly from the browser
 */
export async function POST(request: NextRequest) {
  const judge0Url = process.env.JUDGE0_API_URL;

  // Guard: If Judge0 is not configured, return a mocked successful token
  if (!judge0Url || judge0Url === 'LINK_TO_JUDGE0_API' || !judge0Url.startsWith('http')) {
    // Return a mock token that the status endpoint will recognize
    return NextResponse.json({ token: 'mock-local-token' }, { status: 201 });
  }

  try {
    // Parse the request body
    const payload = await request.json();

    // Forward the request to Judge0
    const response = await fetch(`${judge0Url}/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // If the response wasn't successful, throw an error
    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Judge0 API error: ${response.status} ${errorText}` },
        { status: response.status }
      );
    }

    // Get the JSON response
    const data = await response.json();

    // Return the data from Judge0
    return NextResponse.json(data);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to connect to Judge0: ${message}` },
      { status: 502 }
    );
  }
}