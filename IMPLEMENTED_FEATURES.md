# Implemented Features

This document summarizes the changes implemented for Feature 2: Smart Rubric Scorecard.

## Feature 2: Smart Rubric Scorecard

### Goal
Break down the overall score into specific, transparent criteria rather than an arbitrary number.

### What Was Implemented

#### 1) Standard Rubric (Frontend)
- A hardcoded rubric definition is now part of the frontend.
- The rubric contains three fixed categories:
  - Correctness
  - Efficiency
  - Readability
- The rubric includes labels and short descriptions so the UI can explain each category.

Where:
- sensai-frontend/src/lib/utils/rubric.ts

Key behaviors:
- The rubric keys are enforced in a single place.
- Helpers normalize or infer the rubric category if needed.

#### 2) Rubric Dashboard (Frontend UI)
- The scorecard view now includes a top-level dashboard with three radial progress bars.
- Each radial bar corresponds to one rubric category:
  - Correctness
  - Efficiency
  - Readability
- The radial progress bars show a percentage based on the sum of scores in that category.
- Each category is color coded based on pass/fail status:
  - Red: Critical Fail (score below pass total)
  - Yellow: Sub-optimal (score meets pass but not max)
  - Green: Passed (score meets max)

Where:
- sensai-frontend/src/components/LearnerScorecard.tsx

Key behaviors:
- Scores are grouped by rubric category and aggregated.
- The UI shows a status label (Passed / Sub-optimal / Critical Fail).

#### 3) Rubric Tagging in LLM Output (Backend)
- The LLM schema for assignment and subjective question scorecards now includes a rubric field.
- Each scorecard entry includes:
  - feedback
  - score
  - max_score
  - pass_score
  - rubric_category (Correctness / Efficiency / Readability)

Where:
- sensai-backend/src/api/routes/ai.py

Key behaviors:
- The response model explicitly allows only the three rubric keys.
- The schema is used for both:
  - Assignment key area scores
  - Subjective quiz scorecards

#### 4) LLM Prompt Enforcement (Backend)
- The system prompts instruct the LLM to tag every error using the exact rubric keys.
- The prompts explicitly list the three categories and require rubric tagging.

Where:
- sensai-backend/src/api/prompts/assignment.py
- sensai-backend/src/api/prompts/subjective_question.py

#### 5) Scorecard Parsing (Frontend)
- The frontend keeps the rubric category when parsing scorecards.
- Both assignments and quizzes preserve rubric tags in the scorecard objects.

Where:
- sensai-frontend/src/components/LearnerAssignmentView.tsx
- sensai-frontend/src/components/LearnerQuizView.tsx

#### 6) Scorecard Types Updated (Frontend)
- Scorecard items now allow a rubric field in the type definition.

Where:
- sensai-frontend/src/types/quiz.ts

### How It Works End-to-End

1) LLM receives the system prompt and is required to tag each scorecard item with a rubric category.
2) Backend schema allows only the three rubric keys and returns them in responses.
3) Frontend parses the rubric category and retains it on each scorecard item.
4) The scorecard view aggregates scores by rubric category.
5) The UI renders the rubric dashboard with radial progress bars and status colors.

### Notes
- The rubric is hardcoded in the frontend, as requested for the hackathon.
- The rubric dashboard is shown whenever a scorecard is rendered.
- If a rubric tag is missing, the frontend will infer a category from the criterion name as a fallback.

## Feature 3: Progressive Disclosure "Tutor" Mode

### Goal
Prevent answer-spoon-feeding by forcing the user to think before giving them the solution.

### What Was Implemented

#### 1) Hint Accordion Component (Frontend UI)
- A new "Need Help?" accordion component was added for feedback cards.
- Hints unlock sequentially (Level 1 -> Level 2 -> Level 3).
- Level 3 requires an explicit confirmation warning modal.

Where:
- sensai-frontend/src/components/HintAccordion.tsx

Key behaviors:
- The accordion is collapsed by default.
- Hints reveal one-by-one and cannot be skipped.
- A warning modal interrupts before Level 3 is shown.

#### 2) Feedback Cards Include Tutor Mode
- The "Need Help?" section is embedded under the "Areas for improvement" block in each scorecard item.
- Hints are displayed if present; otherwise, the UI shows a short fallback message.

Where:
- sensai-frontend/src/components/LearnerScorecard.tsx

#### 3) LLM Output Schema Includes Hints
- The scorecard feedback schema now accepts a `hints` array.
- Each `hints` value is an array of three strings.

Where:
- sensai-backend/src/api/routes/ai.py

#### 4) LLM Prompt Enforcement for Hints
- The system prompts require the LLM to generate three hints for every error:
  - Level 1: Conceptual question
  - Level 2: Direct approach suggestion
  - Level 3: Pseudo-code or syntax fix

Where:
- sensai-backend/src/api/prompts/assignment.py
- sensai-backend/src/api/prompts/subjective_question.py

#### 5) Scorecard Types Updated (Frontend)
- Scorecard feedback now supports the `hints` array.

Where:
- sensai-frontend/src/types/quiz.ts

### How It Works End-to-End

1) LLM generates a scorecard with `feedback.hints` for each error.
2) Backend schema accepts the hints array and streams it to the frontend.
3) Frontend renders "Need Help?" inside each improvement card.
4) Learners unlock hints in order and confirm before seeing Level 3.

### Notes
- Hints are optional; if missing, the UI shows a short "not available" message.
- Tutor mode is only shown inside the improvement section to avoid spoiling correct areas.

