docker run --name mariadb -d -p 13306:3306 -e MARIADB_USER=root -e MARIADB_ROOT_PASSWORD=mariadb_root_password mariadb:10.10.2

rd /S /Q .vs 2> nul
rd /S /Q htldesk.Application/.vs 2> nul
rd /S /Q htldesk.Application/bin 2> nul
rd /S /Q htldesk.Application/obj 2> nul
rd /S /Q htldesk.Webapi/.vs 2> nul
rd /S /Q htldesk.Webapi/bin 2> nul
rd /S /Q htldesk.Webapi/obj 2> nul

:start
cd htldesk.Webapi
dotnet watch run -c Debug
goto start