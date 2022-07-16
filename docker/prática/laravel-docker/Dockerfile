FROM php:7.4-cli

WORKDIR /var/www

#update SO
RUN apt-get update && apt-get upgrade -y

# tools for unzip
RUN apt-get install zip unzip -y

# composer install
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"  && \
  php composer-setup.php  && \ 
  php -r "unlink('composer-setup.php');"

# clone laravel project
RUN  php composer.phar create-project laravel/laravel /var/www/laravel-app

ENTRYPOINT [ "php", "laravel-app/artisan", "serve" ]

CMD [ "--host=0.0.0.0" ]