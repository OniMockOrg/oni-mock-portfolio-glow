# 📘 App Router Best Practices

**For pages and routes use Expo Router last version file-based routing for cleaner code organization.**

- Keep client components focused on state management and UI interactions.
- Organize your project with clear directories: `src: /components, /hooks, /services, /lib, /styles, /const`

---

## 🔹 Reusable and Isolated Components

- Keep components small and focused on a single responsibility.
- Use props effectively and avoid excessive prop drilling by leveraging context or hooks where needed.

---

## 🔹 Use Modular Structure

- A **Container Component** (`HomeContainer.tsx`): responsible for business logic, data fetching (via hooks and services), state management, etc. It does not contain UI code directly — it only handles logic and passes data to the screen.
- An optional **custom hook** (`useHomeData.ts`): encapsulates the logic for fetching the user's levels and progress. This helps keep the container cleaner.
- An optional **service** (`HomeService.ts`): centralizes functions and API/Subabase calls. If the data-fetching method changes in the future, the container doesn't need to be modified.
- A **Presenter Component** (`HomeScreen.tsx`): responsible only for rendering the UI. It receives data and callbacks as props.

---

## 🔹 TypeScript First

- Use TypeScript to ensure type safety across the application.
- Define strict types for props, state, and API responses.

---

## 🔹 Clean Code Principles

- Use meaningful variable names and avoid magic numbers.
- Prefer functional components and hooks over class components.

---

## 🔹 Specific Naming Patterns

- Prefix event handlers with `handle`: `handleClick`, `handleSubmit`
- Prefix boolean variables with verbs: `isLoading`, `hasError`, `canSubmit`
- Use complete words over abbreviations except for:
  - `err` (error)
  - `req` (request)
  - `res` (response)
  - `props` (properties)
  - `ref` (reference)

---

## 🔹 Input Validation and Sanitization

- Use **Zod** or **Yup** for schema validation to prevent bad data.
- Sanitize all inputs to prevent XSS and SQL injection.

---

## 🔹 Stay Up-to-Date

- Keep dependencies updated and stay aware of breaking changes in major libraries like **Next.js**, **React**, and **Prisma**.
- If a specific version is provided for a library, always use the given version to ensure compatibility and avoid unexpected behavior.
