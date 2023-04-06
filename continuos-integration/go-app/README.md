# Continuos Integration - Github Actions

> All github official [actions](https://github.com/actions)

## Add files

- [math.go](https://github.com/FelipeNasci/fullcycle-notes/blob/main/continuos-integration/go-app/math.go)
- [math_test.go](https://github.com/FelipeNasci/fullcycle-notes/blob/main/continuos-integration/go-app/math_test.go)

## Setup github workflow

> .github/workflows/ci.yaml

```yaml
name: ci-golang-workflow
on: [push]

jobs:
  check-app:
    strategy:                             # strategy for test in
    matrix:                               # many environments
      go: ["1.15", "1.14"]                # (SO, app versions)
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3         # repository download
      - uses: actions/setup-go@v4         # setup golang
        with:
          go-version: ${{ matrix.go }}
      - run: go test                      # run tests
      - run: go run math.go               # run app
```

### Generating docker image

```yaml
docker-action:
  name: Push Docker image to Docker Hub
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3

      # Add support for more platforms with QEMU (optional)
      # https://github.com/docker/setup-qemu-action
    - name: Set up QEMU
      uses: docker/setup-qemu-action@v1

    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1

    - name: Login to Docker Hub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKERHUB_USERNAME }}
        password: ${{ secrets.DOCKERHUB_TOKEN }}

    - name: Build and push
      id: docker-build
      uses: docker/build-push-action@v2
      with:
        context: ./continuos-integration/docker-actions
        file: ./continuos-integration/docker-actions/Dockerfile
        push: false
        tags: ${{ secrets.DOCKERHUB_USERNAME }}/docker-app:latest
```
## Tips

| keyword | description   |
| ------- | ------------- |
| uses    | Run a action  |
| run     | Run a command |
