# SensAI: Adaptive Cognitive Feedback Engine Architecture

This document provides a comprehensive explanation of the Progressive AI Feedback feature implemented in the SensAI platform. It details the system architecture, integration flow, supported features, expected data inputs, and the frontend user interface implementation.

You can use this document as a reference prompt to implement a similar feature set in another project.

## 1. Core Integration Flow

The integration orchestrates a smooth transition between capturing user input, interacting with a remote AI evaluation backend, and progressively rendering adaptive feedback to the learner.

1. **Answer Capture**: The learner interacts with the quiz interface, submitting text, code, or audio.
2. **Submission Pipeline**: The frontend packages the input along with the user's specific context (cognitive profile, reference materials) and sends it to the backend via a specialized pipeline (e.g., `/ai/code-evaluate` or `/ai/chat`).
3. **LLM Evaluation**: The FastAPI backend instructs an OpenAI/Gemini engine using strict Pydantic models to structurally evaluate the answer, producing both a conversational response and a detailed JSON scorecard/progressive hint array.
4. **Decoupled Display**: Rather than overwhelming the user immediately, the frontend defaults to inserting the AI's conversational response in a standard chat view. The deep "Adaptive Feedback" and scorecard details are deferred until the user clicks to expand and review them.

## 2. Implemented Features

The AI Feedback System includes the following specialized features:

*   **Anti-Hardcoding & Structural Validation**: For coding tasks, the system surpasses simple standard output matching. The LLM reads the AST/logical structure of the submitted code. If it detects that a learner hardcoded variables or print statements instead of utilizing the required core logic (e.g., `for` loops), it assigns a flag (`is_hardcoded = true`) and caps the criteria score heavily.
*   **Progressive 5-Stage Hints Generation**: If a student is stuck or fails constraints, the engine does not immediately provide the full answer. Instead, it maps failures to a JSON array of up to 5 progressive hints. Hints scale from gentle nudges ("What happens if you scale this to 1000 items?") to specific missing concepts and finally pseudo-code.
*   **Decoupled & Imperative Feedback UI**: AI evaluation runs instantly upon submission, but rendering is deferred. The student continues their pacing in the `ChatView` and only initiates the granular split-pane code feedback by clicking "Review AI Code Feedback."
*   **Typesafe Pydantic Enforcement**: The AI engine is strictly bound to Pydantic definitions on the backend. This guarantees that the JSON payloads sent back to the React UI predictably contain all required metrics, hints, and feedback structures, eliminating UI crashes caused by LLM hallucinations.
*   **Multimodal Inputs**: Supports text, code blocks, and audio formats (using the browser's MediaRecorder API).

## 3. Input Data Architecture

When the frontend dispatches a request to the backend for evaluation, it requires specific contextual datasets:

*   **Student Response**: The raw input from the student. This can be text from a textarea, `Monaco Editor` code blocks, or a base64 encoded WAV file payload for audio.
*   **Task/Question Context**: The complete `QuizQuestionConfig` for the problem being evaluated (including the problem statement, expected input type, and scoring parameters).
*   **Cognitive Profile**: JSON data regarding the student's learning styles, recurring weaknesses, and pacing preferences, which the LLM uses to tailor its tone and hint generation.
*   **Knowledge Base / Reference Code**: A critical component for anti-hardcoding. The teacher's or system's intended algorithmic solution. The LLM compares the student's logical structure against this reference content.
*   **Scorecard Criteria**: A definition of grading metrics (min score, max score, pass score, description) that dictate how the response should be numerically evaluated across different axes.

## 4. Frontend Implementation & Display Layout

The frontend presentation is designed to maximize educational value while avoiding cognitive overload. It uses an adaptable layout centered around `LearnerQuizView.tsx`.

### **Dynamic Layout Shifts**
When the student transitions to the deep feedback view, the primary layout dynamically shifts. The standard three-column view hides its Terminal Output pane, transitioning the CSS grid template to `1fr 2fr` to allocate massive horizontal screen space for side-by-side Code and AI Review segments.

### **ChatView (Conversational Anchor)**
The student's primary interaction happens within a standard messaging interface. Code submissions are converted into user messages. When the LLM responds, it drops the primary conversational summary here.

### **Component Breakdowns**

*   **LearnerQuizView**: Orchestrates the active question state, input capture, API transmission, and tracking `completedQuestionIds`. It manages the dynamic layout shifting state.
*   **CodeEditorView**: Wraps the Monaco editor. If the backend returns `is_hardcoded = true`, this component mounts a bright warning banner emphasizing the structural failure and the specific missing concepts.
*   **ProgressiveHintCard**: The 5-stage progressive hints returned in the JSON payload are mapped out to these individual cards. They are vertically stacked and scaled cleanly, allowing the student to unlock deep programming knowledge gradually.
*   **ScorecardView / Feedback Sidebars**: Dedicated paneling components that display individual row-level criteria, showing exactly what worked well and what needs improvement per grading axis.
