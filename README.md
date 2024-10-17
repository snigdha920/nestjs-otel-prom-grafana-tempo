# Prometheus + Grafana + Tempo + Loki Observability Stack example

## Running

`docker-compose up --build`

### Reproduce the issue

1. Navigate to `http://localhost:5556/docs`
2. Execute the `GET /movies` endpoint
3. You will see the logger interceptor log the name of the `MovieController`, but it cannot log the name of the `list` method of the controller correctly because of the @Span decorator. It logs `PropertyDescriptor` instead.

![alt text](image.png)
