# @spear-ai/ruff-config

A [Ruff](https://docs.astral.sh/ruff) config.

## Installation

```shell
poetry add -D spear_ai_ruff_config
```

## Usage

Configure `poetry.toml` to save the virtual environment to your local project:

```
[virtualenvs]
in-project = true
```

Add the following to your `ruff.toml` file:

```toml
extend = "./.venv/lib/python3.11/site-packages/spear_ai_ruff_config/config.toml"
```
