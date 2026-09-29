FROM mcr.microsoft.com/devcontainers/base:3.0.8-noble

# Ensure an exit code is returned when part of a piped command fails
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Set home and current working directory
ENV HOME=/root
WORKDIR $HOME

# Update and install the latest APT developer packages
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install --no-install-recommends -y \
  build-essential=12.10ubuntu1 \
  direnv=2.32.1-2ubuntu0.24.04.3 \
  libbz2-dev=1.0.8-5.1ubuntu0.1 \
  libffi-dev=3.4.6-1build1 \
  liblzma-dev=5.6.1+really5.4.5-1ubuntu0.3 \
  libncurses-dev=6.4+20240113-1ubuntu2.2 \
  libreadline-dev=8.2-4build1 \
  libsqlite3-dev=3.45.1-1ubuntu2.8 \
  libssl-dev=3.0.13-0ubuntu3.15 \
  make=4.3-4.1build2 \
  tk-dev=8.6.14build1 \
  vim=2:9.1.0016-1ubuntu7.20 \
  xz-utils=5.6.1+really5.4.5-1ubuntu0.3 \
  zlib1g-dev=1:1.3.dfsg-3.1ubuntu2.2 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Install direnv
# hadolint ignore=SC2016
RUN echo 'eval "$(direnv hook bash)"' >> .bashrc

# Install Docker
ENV DOCKER_CONFIG="$HOME/.docker"
ENV PATH="$DOCKER_CONFIG/bin:$PATH"
RUN mkdir -p $DOCKER_CONFIG/bin
RUN export VERSION=29.8.1 && curl -sSL https://get.docker.com | bash
RUN mv /usr/bin/docker $DOCKER_CONFIG/bin

# Install Docker Compose
ENV PATH="$DOCKER_CONFIG/cli-plugins:$PATH"
RUN mkdir -p $DOCKER_CONFIG/cli-plugins
RUN curl -LS https://github.com/docker/compose/releases/download/v5.5.1/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose \
  && chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose

# Install fnm
ENV FNM_ROOT="$HOME/.fnm"
ENV PATH="$FNM_ROOT:$PATH"
RUN curl -LSfs https://fnm.vercel.app/install | bash -s -- --install-dir "$FNM_ROOT" --release v1.39.0

# Preinstall Node.js “LTS” (Long term support) release
RUN fnm install 24.21.0 \
  && fnm default 24.21.0

# Install pnpm
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN eval "$(fnm env)" && \
  corepack enable && \
  corepack prepare pnpm@11.1.3 --activate

# Install pyenv
ENV PYENV_GIT_TAG=v2.8.6
ENV PYENV_ROOT="$HOME/.pyenv"
ENV PATH="$PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH"
RUN curl -LSfs https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash
# hadolint ignore=SC2016
RUN echo 'eval "$(pyenv init -)"' >> .bashrc

# Preinstall the Python release the workspace pins
RUN pyenv install 3.11.16 \
  && pyenv global 3.11.16

# Install uv
ENV UV_INSTALL_DIR="$HOME/.local/bin"
ENV PATH="$UV_INSTALL_DIR:$PATH"
RUN curl -LSfs https://astral.sh/uv/0.12.20/install.sh | env UV_NO_MODIFY_PATH=1 sh

# Install Pulumi
ENV PULUMI_ROOT="$HOME/.pulumi"
ENV PATH="$PULUMI_ROOT/bin:$PATH"
RUN curl -fsSL https://get.pulumi.com | bash -s -- --version 3.265.0
