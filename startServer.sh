docker rm -f htldesk_mariadb &> /dev/null
docker run --name htldesk_mariadb -d -p 13306:3306 -e MARIADB_USER=root -e MARIADB_ROOT_PASSWORD=mariadb_root_password mariadb:10.10.2
dotnet build htldesk/htldesk.Webapi --no-incremental --force
dotnet watch run -c Debug --project htldesk/htldesk.Webapi
