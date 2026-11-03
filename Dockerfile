FROM php:8.2-apache

# Extensions PHP pour parler à MySQL (PDO / mysqli)
RUN docker-php-ext-install pdo_mysql mysqli

# Le projet est servi tel quel par Apache (index.html, js/, assets/, php/)
WORKDIR /var/www/html
COPY . /var/www/html

RUN chown -R www-data:www-data /var/www/html

EXPOSE 80