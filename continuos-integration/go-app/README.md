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
    strategy:                           # strategy for test in
    matrix:                             # many environments
      go: ["1.15", "1.14"]              # (SO, app versions)
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3       # repository download
      - uses: actions/setup-go@v4       # setup golang
        with:
          go-version: ${{ matrix.go }}
      - run: go test                    # run tests
      - run: go run math.go             # run app
```

## Tips

| keyword | description        |
| ------- | ------------------ |
| uses    | Executa uma action |
| run     | Executa um comando |
