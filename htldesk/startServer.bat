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