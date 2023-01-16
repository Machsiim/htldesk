# Projekt HtlDesk

Klone das Repository mit folgendem Befehl:

```
git clone https://github.com/Machsiim/htldesk
```

## Kurzbeschreibung

// TODO

## Teammitglieder

| Name                    | Email                  | Aufgabenbereich                           |
| ----------------------- | -------------------------| ----------------------------------------|
| Mohamad Aldulemi, 3CHIF | alu22162@spengergasse.at | Frontend Design, Content                |
| Amin Dashaev,     3CHIF | das22180@spengergasse.at | Code Optimierung, Debugging             |
| Eric Fischer,     3CHIF | fis22360@spengergasse.at | Design, Login/Register Pages            |
| Dominik Kusion,   3CHIF | kus22544@spengergasse.at | Authentication, Backend                 |
| Maxim Romanenko,  3CHIF | rom22634@spengergasse.at | C# Backend                              |

## Voraussetzungen

Das Projekt verwendet .NET in der Version >= 6. Prüfe mit folgendem Befehl, ob die .NET SDK in der
Version 6 oder 7 am Rechner installiert ist:

```
dotnet --version
```

Die .NET 6 SDK (LTS Version) kann von https://dotnet.microsoft.com/en-us/download/dotnet/6.0 für alle
Plattformen geladen werden.

Zum Prüfen der Docker Installation kann der folgende Befehl verwendet werden. Er muss die Version
zurückgeben:

```
docker --version
```

Im Startskript wird der Container geladen, bevor der Server gestartet wird.

## Starten des Programmes

Führe nach dem Klonen im Terminal den folgenden Befehl aus, um den Server zu starten.

**Windows**

```
startServer.cmd
```

**macOS, Linux**

```
./startServer.sh
```

Nach dem Starten des Servers kann im Browser die Seite **http://localhost:5000**
aufgerufen werden. Falls die Meldung erscheint, dass das Zertifikat nicht geprüft werden kann,
muss mit *Fortsetzen* bestätigt werden.

