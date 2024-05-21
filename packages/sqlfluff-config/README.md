# @spear-ai/sqlfluff-config

A [SQLFluff](https://sqlfluff.com) config.

## Installation

```shell
poetry add -D spear_ai_sqlfluff_config
```

## Usage

Configure `poetry.toml` to save the virtual environment to your local project:

```
[virtualenvs]
in-project = true
```

Copy the following to your `.sqluff` file:

```shell
cp ./.venv/lib/python3.11/site-packages/spear-ai-sqlfluff-config/.sqlfluff .sqlfluff
```
