FROM golang:1.18.3-buster AS builder

WORKDIR /app

COPY /app .

RUN go build main.go

FROM scratch

WORKDIR /app

COPY --from=builder /app/main .

CMD [ "./main"] 