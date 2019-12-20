---
title: Do not install databases on your development machine, use containers instead.
---

I'm not particularly eager to install databases on my development machine because it installs unnecessary libraries and services on my system, and it is difficult to install, update, and remove them.
Therefore I prefer to install development databases using containers since it is easier to maintain my machine that way.

## Install podman

I am using Fedora, so `podman` comes preinstalled with the system, to install `podman` on other systems, see: https://podman.io/getting-started/installation.html
I prefer `podman` over `docker` since it has the `create` command that can create a layer over a specified image and prepares it for running a specified command.

## Use mongodb development database

Pull the `tutum/mongodb` image from the docker.io registry:
```bash
podman pull docker.io/tutum/mongodb
```

Create another layer over the base container and name it as `mongo_dev` for ease of use (this option does not exist in docker):
```bash
podman create --name=mongo_dev -d -p 27017:27017 -p 28017:28017 -e AUTH=no tutum/mongodb
```

Run your `mongo_dev` container:
```bash
podman start mongo_dev
```

**Happy Hacking!!!**

Your mongodb database should be accessible from without a password: `mongodb://localhost:27017`

## Stopping and starting your containers

To see a list of running containers run:
```bash
podman ps
# see stopped containers as well
podman ps -a

# Start a container
podman start <container-name>
# Stop a container
podman stop <container-name>
```

## Pull more databases

### PostgreSQL

```bash
podman pull postgres
podman create --name postgres_dev -d postgres
```

## MySQL

```bash
podman pull mysql
podman create --name mysql_dev mysql
```