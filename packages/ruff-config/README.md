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

Add the following to your `ruff.toml` file, modifying the path to your virtual environment site-packages directory as necessary:

```toml
extend = "./.venv/lib/python3.10/site-packages/spear-ai-ruff-config/config.toml"
```
