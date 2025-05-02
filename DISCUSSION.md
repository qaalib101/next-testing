# Areas I’d Explore with More Time

1. Server-Side Filtering & Pagination

To better handle scalability, I would move the filtering logic to the backend. This would improve performance, especially with a large dataset (hundreds of thousands of advocates). Paginated API endpoints would help reduce payload size and improve initial load times.

2. Advanced Search Filters

I’d implement more structured filters (e.g., dropdowns for cities or degrees, range sliders for years of experience) to offer a more guided search experience for patients.

3. Accessibility Improvements

I’d ensure full accessibility compliance (WCAG AA+) by adding aria attributes, improving keyboard navigation, and validating color contrast ratios across components.

4. Error Logging and Observability

I’d integrate a lightweight logging system (like Sentry) to capture runtime errors, along with custom error boundaries in React for better visibility into UI issues.

5. Improved Type Safety

While I added basic type definitions, I would go further and:
•	Create zod schemas or similar for runtime validation
•	Strongly type API responses using shared types/interfaces between client and server

6. Codebase Organization

I would improve folder structure by separating API routes, UI components, and utilities into clearly defined directories. This makes the project easier to navigate and scale as more features are added.


# Time & Git Constraints

Due to time constraints and Git history limitations, I wasn’t able to split the bug fixes and UI improvements into separate branches and PRs. In a production environment, I would take the time to separate concerns properly to make reviews and rollbacks easier. I’ve noted the nature of each improvement in the PR description to help differentiate between functional fixes and UX enhancements.
