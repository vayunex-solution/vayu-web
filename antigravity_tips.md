# 🚀 Antigravity Tips & Tricks

Follow these 4 key tips to get elite code generation, zero hallucinations, and maximum productivity from Antigravity:

---

## 1. 🎯 Use `/grill-me` for Complex Requirements
Never let the agent guess your architectural preferences or business rules. 
- **Action**: When starting a new feature, run `/grill-me` or ask the agent to **"Grill my plan first"**.
- **Result**: The agent will ask 4-5 sharp, critical questions about edge cases, authentication flow, database schemas, and state management *before* writing a single line of code.

---

## 2. ⚓ Keep `CLAUDE.md` Updated (Workspace Rules Anchor)
Antigravity automatically reads the `CLAUDE.md` file at the root of your project at the beginning of each session.
- **Action**: Keep your `CLAUDE.md` updated with exact development commands (build, run, test) and code style guidelines (e.g., Next.js structure, Tailwind styling, error-handling conventions).
- **Result**: The agent will format all generated code and execute terminal commands exactly according to your project's standards, avoiding wrong framework conventions.

---

## 3. 🧪 Leverage the TDD Validation Loop (Test-First)
Antigravity can run terminal commands. Make the agent prove its code works before presenting it to you.
- **Action**: Command the agent: *"Write unit/integration tests first. Run them to confirm they fail, then implement the code and run the tests again until they pass."*
- **Result**: The agent will use its terminal tools to iteratively debug and fix its own code based on test failures, delivering verified, functional code.

---

## 4. 🪵 Inject Raw Logs, Errors, and Schemas
Avoid summarizing or paraphrasing error messages. LLMs process raw data much better than human summaries.
- **Action**: Directly copy-paste the raw terminal output, stack traces, browser console errors, or OpenAPI schemas.
- **Result**: The agent will parse the exact stack trace, pinpoint the failing file and line, and fix it instantly without needing back-and-forth clarification.
