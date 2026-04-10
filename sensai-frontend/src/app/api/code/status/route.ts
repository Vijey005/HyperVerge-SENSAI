import { NextRequest, NextResponse } from 'next/server';

/**
 * API route to proxy requests to Judge0 API for checking submission status
 * This avoids CORS issues when calling Judge0 directly from the browser
 */
export async function GET(request: NextRequest) {
  const judge0Url = process.env.JUDGE0_API_URL;

  // Get the token from the query parameters
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get('token');

  // Guard: If Judge0 is not configured or it's a mock token
  if (!judge0Url || judge0Url === 'LINK_TO_JUDGE0_API' || !judge0Url.startsWith('http') || token === 'mock-local-token') {
    return NextResponse.json({
        status_id: 3, // Complete / Accepted
        status: { id: 3, description: 'Accepted' },
        stdout: '[SIMULATED RUN]\nSuccessfully executed the code! Since Judge0 is not connected locally, this is a simulated success message.',
        stderr: null,
        compile_output: null,
        message: null,
        time: '0.001',
    });
  }

  if (!token) {
    return NextResponse.json(
      { error: 'Missing token' },
      { status: 400 }
    );
  }

  try {
    // Forward the request to Judge0
    const response = await fetch(
      `${judge0Url}/submissions/${token}?base64_encoded=true&fields=status_id,stdout,stderr,compile_output,message,time`
    );

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

    // Helper to decode base64 fields
    function decodeBase64Field(field: any) {
      if (typeof field === 'string') {
        return Buffer.from(field, 'base64').toString('utf-8');
      }
      return field;
    }

    // Decode relevant fields
    const judge0DecodedResponse = {
      ...data,
      stdout: decodeBase64Field(data.stdout),
      stderr: decodeBase64Field(data.stderr),
      compile_output: decodeBase64Field(data.compile_output),
      message: decodeBase64Field(data.message),
    };

    // Return the decoded data from Judge0
    return NextResponse.json(judge0DecodedResponse);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Failed to connect to Judge0: ${message}` },
      { status: 502 }
    );
  }
}