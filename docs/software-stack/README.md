# Tech stack

Developers do their best work when they have access to the right tools. But lots of different tools adds complexity and hard-to-maintain glue code.
This list tries to strike a balance between the two. Moreover, none of these tools exist in isolation. Choosing one tool may preclude the use of one tool _or_ enhance the effectiveness of another.

There are a number of “reasons” in this list. We strive to offer unbiased justifications for each component in the stack, but ultimately, trial-and-error shapes our choices. As such, expect this list to change over time.

## Version control: [Git](https://git-scm.com)

A distributed version control system.

Alternatives:

- [Fossil](https://fossil-scm.org)
- [Mercurial](https://www.mercurial-scm.org)

## Code collaboration: [GitHub](https://github.com)

A popular code collaboration platform built on top of Git.

- ✅ Popular among developers
- ✅ Great UI/UX
- ✅ Great ecosystem (GitHub Actions, etc.)
- ✅ Easy to self-host
- ❌ Not open source
- ❌ Expensive

Alternatives:

- [Bitbucket](https://bitbucket.org)
- [GitLab](https://gitlab.com)

## Project management: [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)

An adaptable spreadsheet, task-board, and road map that integrates with your issues and pull requests on GitHub.

- ✅ Simple
- ✅ Integrates with GitHub issues and pull requests
- ❌ Lacks dependency tracking
- ❌ Lacks kanban board

Alternatives:

- [Jira](https://www.atlassian.com/software/jira)
- [Linear](https://linear.app)

## CI/CD: [GitHub Actions](https://github.com/features/actions)

Continuous integration and continuous delivery in GitHub.

- ✅ Simple (YAML based)
- ✅ Integrates with GitHub events
- ❌ Local development experience is poor

Alternatives:

- [Bamboo](https://www.atlassian.com/software/bamboo)
- [CircleCI](https://circleci.com)
- [GitLab CI](https://docs.gitlab.com/ee/ci/)
- [Harness](https://www.harness.io)
- [Jenkins](https://www.jenkins.io)
- [Semaphore](https://semaphoreci.com)
- [Travis CI](https://www.travis-ci.com)

## Remote development: [GitHub Codespaces](https://github.com/features/codespaces)

- ✅ Integrates with GitHub code

## Container registry: [GitHub Packages](https://docs.github.com/en/packages/quickstart)

TODO: Fill me in

Container vulnerability scanning: **Grype**

We adopted Grype because it was required for SUNet cross-domain transfers. However, SUNet is transitioning to Trivy.

Alternatives:

- [Docker Scout](https://docs.docker.com/scout)
- [Grype](https://github.com/anchore/grype)
- [Snyk](https://snyk.io)
- [Trivy](https://trivy.dev/latest)

We can use multiple scanners to increase vulnerability coverage, but that comes at the cost of increased maintenance and CI/CD times.

## Code scanning: **Grype**

Alternatives:

- GitHub Advanced Security (CodeQL)
- Grype
- Snyk
- Trivy

## Dependency monitoring: [GitHub Dependabot](https://docs.github.com/en/code-security/getting-started/dependabot-quickstart-guide)

Automatically monitor Git repository's dependencies and creates pull requests to update them when new versions are available, and alerts you about any known security vulnerabilities.

## IaC: [Pulumi](https://www.pulumi.com)

Pulumi is an open-source Infrastructure as Code platform that allows developers to write, deploy, and manage cloud infrastructure using familiar programming languages like Python, TypeScript, Go, or C# instead of domain-specific languages or YAML.

## Database: [PostgreSQL](https://www.postgresql.org)

A powerful, open-source object-relational database management system that emphasizes extensibility, standards compliance, and reliability while supporting advanced features

## Database platform: [Neon Postgres](https://neon.tech)

A serverless PostgreSQL database platform that separates storage and compute, offering automatic scaling, branching of entire databases, and serverless compute with consumption-based pricing.

## Timeseries database: [Timescale](https://www.timescale.com) (Postgres extension)

An open-source time-series database built as a Postgres extension that provides automatic partitioning across time and space, native compression, continuous aggregations, and specialized time-series functions while maintaining full SQL compatibility.

## Vector database: [pgvector](https://github.com/pgvector/pgvector) (Postgres extension)

A Postgres extension that enables vector similarity search and adds support for vector data types and operations, making it possible to store embeddings and perform efficient nearest neighbor searches directly within PostgreSQL databases.

## Columnar database: [pg_mooncake](https://github.com/Mooncake-Labs/pg_mooncake) (Postgres extension)

A Postgres extension that embeds DuckDB within PostgreSQL, allowing users to leverage DuckDB's analytical capabilities directly inside PostgreSQL databases.

## Job queue: [Graphile Worker](https://github.com/graphile/worker)

Graphile Worker is a job queue system for PostgreSQL and Node.js that enables background task processing with features like job scheduling, retries, priorities, and concurrency control while maintaining strong guarantees through PostgreSQL's transactional system.

## Cron scheduler: [Graphile Worker](https://github.com/graphile/worker)

Graphile Worker can also be used to schedule cron jobs.

## Authorization: **PostgreSQL** (PostgreSQL RLS)

A security feature in PostgreSQL that allows database administrators to define row-based access control policies that restrict which rows users can view or modify based on their credentials or context.

## Database schema migration: [graphile-migrate](https://github.com/graphile/migrate)

A PostgreSQL-focused migration tool that enables developers to write SQL migrations in files.

## Data lake table format: [Apache Iceberg](https://iceberg.apache.org)

An open table format for analytic datasets that provides snapshots, schema evolution, and ACID guarantees.

## Data lake file format: [Apache Parquet](https://parquet.apache.org)

A columnar storage file format designed for efficient data compression and encoding for analytics on big data.

## Object storage: [MinIO](https://min.io)

An open-source object storage server that provides S3-compatible API access to get and put objects.

## Web framework: [Next.js](https://nextjs.org)

A fullstack (frontend and backend) React framework that simplifies building production-ready web applications with server-side rendering.

## Component library: [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html)

A library of accessible, unstyled UI components built on top of React Aria hooks that provides ARIA-compliant behavior and keyboard interactions while letting developers maintain full styling control.

## CSS framework: [Tailwind CSS](https://tailwindcss.com)

A utility-first CSS framework that enables rapid UI development through composable classes that can be applied directly in HTML markup.

## GraphQL API: [PostGraphile](https://postgraphile.org)

A GraphQL server that automatically generates a highly performant and customizable GraphQL API from your PostgreSQL database schema, including tables, views, relationships, and stored procedures.

Alternatives:

- [Hasura](https://hasura.io)
- [Supabase](https://supabase.com)
- [WunderGraph](https://wundergraph.com)

## GraphQL client: [Relay](https://relay.dev)

A JavaScript framework developed by Meta that provides a comprehensive set of tools and patterns for building data-driven React applications with GraphQL, including features like automatic data consistency, optimistic updates, and pagination.

## REST client: [TanStack Query](https://tanstack.com/query/latest)

A powerful data-fetching and state management library that simplifies server state handling in React applications by providing automatic caching, background updates, and optimized data synchronization.

## Authentication: [Better Auth](https://www.better-auth.com), [Ory](https://www.ory.sh)

**Better Auth**

An authentication framework for TypeScript that integrates with existing backend frameworks such as Next.js.

**Ory**

An open-source identity infrastructure platform that provides authentication, authorization, and user management services through a set of cloud-native microservices and APIs.

## CMS: [Tina](https://tina.io)

A Git-backed headless content management system that provides a visual editing interface directly within your website, allowing developers and content creators to make real-time changes while maintaining version control through Git.

## CRM: [monday.com](https://monday.com/)

A management platform that enables teams to plan, track, and collaborate on projects through customizable workflows, automation, and visual tools.

## Data orchestration: [Dagster](https://dagster.io)

An open-source data orchestration framework that allows you to define, test, and monitor data pipelines as code using Python, providing features like dependency management, scheduling, and observability through a unified platform.

## Streaming data platform: [RedPanda](https://redpanda.com)

A modern streaming data platform that's API-compatible with Apache Kafka but designed to be faster, easier to operate, and more resource-efficient.

## Error monitoring: [Sentry](https://sentry.io)

An error monitoring and performance tracking platform that helps developers identify, track, and fix crashes, errors, and performance issues in real-time across multiple programming languages and frameworks.

## Application performance monitoring: [Sentry](https://sentry.io)

Sentry also tracks end-to-end application performance through transaction tracing, helping developers identify bottlenecks and optimize code performance.

## Session replay: [Sentry](https://sentry.io)

Sentry also captures and reconstructs user interactions, errors, and UI states leading up to crashes, allowing developers to visually debug issues by watching exactly what users experienced.

## App deployment: [Vercel](https://vercel.com)

A cloud platform that enables developers to deploy, scale, and host web applications and serverless functions with features like automatic deployments, edge functions, and seamless integration with popular frameworks like Next.js.

## App analytics: [Vercel Web Analytics](https://vercel.com/docs/analytics)

Tracks user interactions, page views, and visitor data through automatic client-side instrumentation, providing real-time insights into user journeys and click patterns without requiring manual event tracking code.

## Model experiment tracking: [Wandb](https://wandb.ai)

TODO: Fill me in

## Model registry: [Wandb](https://wandb.ai)

TODO: Fill me in

## Model deployment: [BentoML](https://bentoml.com)

An open-source platform that simplifies ML model deployment by packaging machine learning models with their dependencies into standardized units called "Bentos," which can be easily served as REST APIs or deployed to various cloud platforms.

## Task orchestration: [Turborepo](https://turbo.build)

A task runner and build system that optimizes monorepo workflows through intelligent caching and parallel execution.

## Code quality: [SonarQube](https://sonarcloud.io)

A continuous code quality inspection platform that automatically analyzes source code to detect bugs, code smells, and security vulnerabilities while providing detailed metrics and reports for multiple programming languages.

## Communication: [Slack](https://slack.com)

A team communication platform that combines chat rooms, direct messaging, and app integrations to streamline workplace collaboration.

---

## Node.js version manager: **fnm**

TODO: Fill me in

## JavaScript package manager: **Yarn**

TODO: Fill me in

## JavaScript application build system: **Next.js** (Turbopack)

TODO: Fill me in

## JavaScript library build system: **tsup** (ESBuild)

TODO: Fill me in

## JavaScript validation: **Zod**

TODO: Fill me in

## JavaScript testing: **Vitest**

TODO: Fill me in

## JavaScript snapshot testing: **Vitest**

TODO: Fill me in

## JavaScript code coverage: **Vitest**

TODO: Fill me in

## JavaScript benchmarking: **Vitest**

TODO: Fill me in

## JavaScript internationalization: **FormatJS**

TODO: Fill me in

## JavaScript CLI: **yargs**

TODO: Fill me in

Alternatives:

- Stricli
- Brocli

## JavaScript CLI UI: **Ink**

TODO: Fill me in

## JavaScript linting: **ESLint**

TODO: Fill me in

## JavaScript formatting: **Prettier**

TODO: Fill me in

## JavaScript logging: **Pino**

TODO: Fill me in

---

## Python dataframe: **Polars**

TODO: Fill me in

## Python CLI: **jsonargparse**

TODO: Fill me in

## Python logging: **structlog**

TODO: Fill me in

## Python validation: **Pydantic**

TODO: Fill me in

## Python version manager: **uv**

TODO: Fill me in

## Python package manager: **uv**

TODO: Fill me in

## Python linting: **Ruff**

TODO: Fill me in

## Python formatting: **Ruff**

TODO: Fill me in

## Python testing: **pytest**

TODO: Fill me in

## Python property testing: **Hypothesis**

TODO: Fill me in

## Python snapshot testing: **pytest Syrupy**

TODO: Fill me in

## Python code coverage: **pytest** (pytest-cov)

TODO: Fill me in

## Python benchmarking: **pytest** (pytest-benchmark)

TODO: Fill me in

---

## Rust version manager: **rustup**

TODO: Fill me in

## Rust package manager: **Cargo**

TODO: Fill me in

## Rust build system: **Cargo**

TODO: Fill me in

## Rust testing: **Cargo**

TODO: Fill me in

## Rust snapshot testing: **insta**

TODO: Fill me in

## Rust code coverage: **Cargo (Tarpaulin)**

TODO: Fill me in

## Rust benchmarking: **Cargo**

TODO: Fill me in

## Rust CLI: **clap**

TODO: Fill me in

## Rust linting: **Clippy**

TODO: Fill me in

## Rust formatting: **rustfmt**

TODO: Fill me in

---

## CSS linting: **Stylelint**

TODO: Fill me in

## Languages

TypeScript, Python, Rust

## Recommended software

## Code editor: **Cursor / VSCode**

TODO: Fill me in

## Code assistant: **Cursor / Claude**

TODO: Fill me in

## Docker runtime: **OrbStack**

TODO: Fill me in

## Git UI: **GitHub Desktop**

TODO: Fill me in

Alternatives:

- Cody
- GitHub Copilot

## What we’re missing

- Artifact store(s) (e.g. [JFrog Artifactory](https://jfrog.com/artifactory))
- Observability platform (e.g. [SigNoz](https://signoz.io))
- Secrets management (e.g. [Infisical](https://infisical.com))

## What we might need in the future

- Container orchestration (e.g. [Kubernetes](https://kubernetes.io))
- Container package manager (e.g. [Helm](https://helm.sh))
- Durable execution (e.g. [Temporal](https://temporal.io))
- Feature flags (e.g. [LaunchDarkly](https://launchdarkly.com))
- Mobile framework (e.g. [Expo](https://expo.dev) / [React Native](https://reactnative.dev))
- Payment processor (e.g. [Stripe](https://stripe.com))
- Translation management system (e.g. [Lokalise](https://lokalise.com))

## Requirements

- Fast local development
- Hot reloading
- Preview deployments
- Type safety
- Works in airgapped environments

## Nice to have

- Embedded (runs as a library)
- Flexible
- Actively maintained
- Good documentation
- Good developer experience
- Affordable
- Scale to zero
- Scale to infinity
