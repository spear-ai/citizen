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

Code vulnerability scanning: **Grype**

Alternatives:

- GitHub Advanced Security (CodeQL)
- Grype
- Snyk
- Trivy

Dependency updates: **GitHub** (GitHub Dependabot)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Dependency scanning: **GitHub** (GitHub Dependabot)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

IaC: **Pulumi**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

IaC policies: **Pulumi (Pulumi Policies)**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Database: **PostgreSQL**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Database platform: **Neon Postgres**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Timeseries database: **PostgreSQL** (timescaledb)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Vector database: **PostgreSQL** (pgvector)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Columnar database: **PostgreSQL** (pg_mooncake / DuckDB)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Job queue: **PostgreSQL** (Graphile Worker)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Cron scheduler: **PostgreSQL** (Graphile Worker)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Authorization: **PostgreSQL** (PostgreSQL RLS)

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Database schema migration: **Graphile Migrate**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Data lake table format: **Iceberg**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Data lake file format: **Parquet**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Object storage: **MinIO**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Web framework: **Next.js**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Component library: **React Aria Components**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

CSS framework: **Tailwind CSS**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

API: **PostGraphile / GraphQL**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

GraphQL client: **Relay**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

REST client: **TanStack Query**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Authentication:

**Better Auth**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

**Ory**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

CMS: **TinaCMS**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

CRM: **Monday.com**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

Data orchestration: **Dagster**

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod rhoncus justo. Vestibulum lorem mi, vehicula nec tortor sed, consectetur pharetra felis. Cras blandit eros dolor. Vivamus sagittis pellentesque tellus, in consequat enim finibus in.

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
