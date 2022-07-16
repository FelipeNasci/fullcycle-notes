## Criar uma imagem docker do node

```sh
docker container run --rm -it --name node -p 3000:3000 -v $PWD/app:/app node bash
```

# update SO
apt-get update && apt-get upgrade -y

# create app folder
cd /app

# create app folder
npm init
npm install express --save
