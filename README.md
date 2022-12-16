"# htldesk" 

Wie starte ich das Projekt?

Folgende Software wird benötigt: Docker, DBeaver
Optional: 13 verfügbare Gehirnzellen

Schritt 1:
Wenn du das Repo gerade erst geklont hast, musst du die "Docker run.bat" im ersten Unterordner ausführen. 
Sonst Docker starten und den MariaDB Container starten.

Schritt 2: 
Wenn der Container Grün erscheint, kannst du die startServer.bat Datei im selben Verzeichnis ausführen.

Schritt 3:
Wenn das deine erste Ausführung des Projekts ist, musst du erstmal eine neue Database in DBeaver hinzufügen.
Dazu DBeaver starten und unter Database/New Database Connection die Datenbank eingeben.
MariaDB --Next--> 
Port: 13306 
Database leer lassen
Username: root
Password: mariadb_root_password --Finish-->

Sonst Right Click auf localhost:13306 und Refresh.

PS: Könnte sich jederzeit ändern.
