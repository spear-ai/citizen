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

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

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

- Hasura
- Supabase
- WunderGraph

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

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

## CRM: [monday.com](https://monday.com/)

A management platform that enables teams to plan, track, and collaborate on projects through customizable workflows, automation, and visual tools.

## Data orchestration: [Dagster](https://dagster.io)

An open-source data orchestration framework that allows you to define, test, and monitor data pipelines as code using Python, providing features like dependency management, scheduling, and observability through a unified platform.

Streaming data platform: **RedPanda**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Application performance monitoring: **Sentry**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Error monitoring: **Sentry**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Session replay: **Sentry**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Frontend/Backend host: **Vercel**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Web analytics: **Vercel** (Vercel Analytics)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Model experiment tracking: **Wandb**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Model registry: **Wandb**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Model serving: **BentoML**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Task orchestration: **Turborepo**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Code quality: **SonarQube**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Communication: **Slack**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

---

Node.js version manager: **fnm**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript package manager: **Yarn**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript application build system: **Next.js** (Turbopack)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript library build system: **tsup** (ESBuild)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript validation: **Zod**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript testing: **Vitest**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript snapshot testing: **Vitest**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript code coverage: **Vitest**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript benchmarking: **Vitest**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript internationalization: **FormatJS**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript CLI: **yargs**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Alternatives:

- Stricli
- Brocli

JavaScript CLI UI: **Ink**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript linting: **ESLint**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript formatting: **Prettier**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

JavaScript logging: **Pino**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

---

Python dataframe: **Polars**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python CLI: **jsonargparse**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python logging: **structlog**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python validation: **Pydantic**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python version manager: **uv**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python package manager: **uv**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python linting: **Ruff**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python formatting: **Ruff**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python testing: **pytest**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python property testing: **Hypothesis**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python snapshot testing: **pytest Syrupy**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python code coverage: **pytest** (pytest-cov)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Python benchmarking: **pytest** (pytest-benchmark)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

---

Rust version manager: **rustup**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Rust package manager: **Cargo**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Rust build system: **Cargo**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Rust testing: **Cargo**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Rust snapshot testing: **insta**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Rust code coverage: **Cargo (Tarpaulin)**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Rust benchmarking: **Cargo**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Rust CLI: **clap**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Rust linting: **Clippy**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Rust formatting: **rustfmt**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

---

CSS linting: **Stylelint**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

## Languages

TypeScript, Python, Rust

## Recommended software

Code editor: **Cursor / VSCode**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Code assistant: **Cursor / Claude**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Docker runtime: **OrbStack**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Git UI: **GitHub Desktop**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

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
