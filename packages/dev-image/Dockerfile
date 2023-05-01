FROM mcr.microsoft.com/devcontainers/base:1.0.12-jammy

# Ensure an exit code is returned when part of a piped command fails
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Set home and current working directory
ENV HOME /root
WORKDIR $HOME

# Update and install the latest APT developer packages
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install --no-install-recommends -y \
  build-essential=12.9ubuntu3 \
  direnv=2.25.2-2 \
  libbz2-dev=1.0.8-5build1 \
  libffi-dev=3.4.2-4 \
  liblzma-dev=5.2.5-2ubuntu1 \
  libncurses5-dev=6.3-2 \
  libncursesw5-dev=6.3-2 \
  libreadline-dev=8.1.2-1 \
  libsqlite3-dev=3.37.2-2ubuntu0.1 \
  libssl-dev=3.0.2-0ubuntu1.7 \
  make=4.3-4.1build1 \
  tk-dev=8.6.11+1build2 \
  vim=2:8.2.3995-1ubuntu2.1 \
  xz-utils=5.2.5-2ubuntu1 \
  zlib1g-dev=1:1.2.11.dfsg-2ubuntu9.2 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Install direnv
# hadolint ignore=SC2016
RUN echo 'eval "$(direnv hook bash)"' >> .bashrc

# Install Docker
ENV DOCKER_CONFIG "$HOME/.docker"
ENV PATH "$DOCKER_CONFIG/bin:$PATH"
RUN mkdir -p $DOCKER_CONFIG/bin
RUN export VERSION=20.10.21 && curl -sSL https://get.docker.com | bash
RUN mv /usr/bin/docker $DOCKER_CONFIG/bin

# Install Docker Compose
ENV PATH "$DOCKER_CONFIG/cli-plugins:$PATH"
RUN mkdir -p $DOCKER_CONFIG/cli-plugins
RUN curl -LS https://github.com/docker/compose/releases/download/v2.14.0/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose \
  && chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose

# Install fnm
ENV FNM_ROOT "$HOME/.fnm"
ENV PATH "$FNM_ROOT:$PATH"
RUN curl -LSfs https://fnm.vercel.app/install | bash -s -- --install-dir "$FNM_ROOT" --release v1.33.1

# Preinstall Node.js “LTS” (Long term support) release
RUN fnm install 18.12.1 \
  && fnm default 18.12.1

# Install Yarn
RUN eval "$(fnm env)" && \
  corepack enable && \
  corepack prepare yarn@3.3.0 --activate

# Install pyenv
ENV PYENV_GIT_TAG=v2.3.7
ENV PYENV_ROOT "$HOME/.pyenv"
ENV PATH "$PYENV_ROOT/bin:$PATH"
RUN curl -LSfs https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash
# hadolint ignore=SC2016
RUN echo 'eval "$(pyenv init -)"' >> .bashrc

# Preinstall Python’s oldest “Bugfix” release
RUN pyenv install 3.9.10 \
  && pyenv global 3.9.10

# Install Poetry
ENV POETRY_HOME "$HOME/.poetry"
ENV PATH "$POETRY_HOME/bin:$PATH"
RUN eval "$(pyenv init -)" && python3 -m venv $POETRY_HOME
RUN $POETRY_HOME/bin/pip install poetry==1.2.2

# Install Pulumi
ENV PULUMI_ROOT "$HOME/.pulumi"
ENV PATH "$PULUMI_ROOT/bin:$PATH"
RUN curl -fsSL https://get.pulumi.com | bash -s -- --version 3.48.0
