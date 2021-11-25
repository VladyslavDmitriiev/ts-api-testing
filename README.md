# README

## Install dependencies
```bash
npm install
```

## Download and run api backend with swagger
```bash
docker pull swaggerapi/petstore && 
docker run -d -e SWAGGER_HOST=http://petstore.swagger.io \
  -e SWAGGER_URL=http://localhost \
  -e SWAGGER_BASE_PATH=/v2 -p 80:8080 swaggerapi/petstore
```
## Open swagger
http://localhost