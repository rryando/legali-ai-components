# Research Brief – Rich Code Editor Component

- Task ID: `rich-code-editor-001`
- Task Slug: `rich-code-editor`
- Author: `User`
- Date: `2025-11-19`
- Source Request: `@[/research-and-discussion] let's create a rich code editor components`

## 1. Request Summary
- **Goal**: Create a "rich code editor component".
- **Context**: Part of `legali-ai-components` library.
- **Success Criteria**: A functional, reusable code editor component that is light, modern, and aesthetically pleasing.

## Checklist
- [x] Clarify underlying library preference (CodeMirror 6 selected).
- [x] Define feature set (Focus on aesthetics, syntax highlighting).
- [x] Determine theming requirements (Must look beautiful).
- [x] Confirm language support requirements (JS/TS, Python, JSON, SQL).

## 2. Current Knowledge Snapshot
- Project uses React, Vite, Tailwind CSS, Storybook.
- User prefers "light and modern" -> CodeMirror 6 is the best fit.
- Usage: Small snippets/components, not full IDE.

## 3. Clarifications & Responses
| Question | Answer | Status | Reference |
| --- | --- | --- | --- |
| Preferred library? | Light and modern (CodeMirror) | Answered | User Chat |
| Key features? | Focus on looks, no heavy IDE features | Answered | User Chat |
| Language support? | JS/TS, Python, JSON, SQL | Answered | User Chat |
| Context? | Small snippets/components | Answered | User Chat |

## 4. Assumptions & Risks
- **Assumption**: `@uiw/react-codemirror` is an acceptable wrapper to speed up integration.
- **Risk**: Styling CodeMirror to match specific "beautiful" expectations might require custom CSS overrides.

## 5. Opportunity & Alternative Approaches
- **Selected Approach**: Use `@uiw/react-codemirror` with a modern theme (e.g., `github-dark` or `dracula`) and ensure the container is styled with Tailwind for rounded corners, shadows, etc.

## 6. Raw Requirement Draft
- [ ] Component: `RichCodeEditor`
- [ ] Props: `value`, `onChange`, `language`, `theme` (optional), `readOnly`.
- [ ] Styling: Clean border, rounded corners, nice scrollbars, appropriate padding.
- [ ] Dependencies: `@uiw/react-codemirror`, `@codemirror/lang-javascript`, `@codemirror/lang-python`, etc.

## 7. Hand-off Notes
- Proceed to Planning.
