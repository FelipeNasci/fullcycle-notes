## Criar uma imagem docker do laravel

1 - (Access docker hub)[https://hub.docker.com/]

In the container

```sh
docker run -it --name php php:7.4-cli bash
```

# update SO
apt-get update && apt-get upgrade -y

# composer install
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

# tools for unzip
apt-get install zip unzip php-zip -y

# clone laravel repository
composer create-project laravel/laravel example-app
```

# Build image

```
docker build -t felipenasci/laravel:latest
```

# Run laravel Server

```
php artisan serve
```

# Run laravel container

```
docker container run -it -p 8000:8000 felipenasci/laravel
```