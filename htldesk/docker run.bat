docker run --name mariadb -d -p 13306:3306 -e MARIADB_USER=root -e MARIADB_ROOT_PASSWORD=mariadb_root_password mariadb:10.10.2