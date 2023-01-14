WICHTIG!!!

Unser Testcase ist Lenz.
Alle AccountingAccounts und Entries sind gehardcodet für Lenz. Eigene Accounts werden noch nicht funktionieren.

Folgendes wird zum Testen zu verwenden:

User: Lenz, 1111

File Guid: 08daf345-92a9-4ab8-83e6-db48f1a98c9f (Nur dieses File ist befüllt)

AccountingAccounts: 08daf341-a2c3-4020-8154-4a29c41300b7 , 08daf341-a2c3-4020-8154-4a29c41300b8 , 08daf341-a2c3-4020-8154-4a29c41300b9

Entries haben immer verschiedene Guids, sollte aber irrelevant sein.



"# htldesk"

1) Wie starte ich das Projekt?
Folgende Software wird benötigt: Docker, DBeaver.

Optional: 13 Gehirnzellen

Schritt 1: Das Programm Docker starten.

Schritt 2: startServer.bat im ersten Unterordner ausführen.

Schritt 3: Wenn das deine erste Ausführung des Projekts ist, musst du erstmal eine neue Database in DBeaver hinzufügen. Dazu DBeaver starten und unter Database/New Database Connection die Datenbank eingeben. MariaDB --Next--> Port: 13306, Database leer lassen, Username: root, Password: mariadb_root_password, --Finish-->

Frontend Extra Schritt: Wenn du deine Änderungen auf den Server draufspielen willst und nicht nur in Dev arbeiten willst, musst du nach jeder Veränderung "npm run build" ausführen. Dabei nicht vergessen im htldesk/htldesk/htldesk.Client Verzeichnis sein. (Den Server muss man nicht neustarten, da dieser die Änderungen normalerweise live übernehmen sollte.

Sonst Right Click auf localhost:13306 und Refresh.

2) Ich will am Projekt arbeiten. Was soll ich machen?
Oben links im Browser findest du Issues. Dort siehst du grundsätzlich an was gerade gearbeitet wird. Wenn nichts offen ist, einfach nachfragen.

Wenn du nun weißt, an was du arbeiten willst, musst du erstmal in den richtigen Branch kommen. Wenn es ein Issue gibt, einfach den Branch vom Issue verwenden und wenn nicht, einen erstellen. Zunächst das Repo reseten und syncen (resetGit und syncGit). Jetzt kannst du am Projekt was lokal verändern und auf einen Branch commiten.

3) Ich hab jetzt was geändert, aber wenn ich den Server starte, ändert sich nichts. Was ist los?
Wenn du in Visual Studio was am Backend geändert hast, darfst du nicht vergessen, alle Datein mit STRG + S zu speichern. Im Gegensatz zur Build Aktion in Visual Studio, werden die Datein nicht gespeichert.

Wenn du jedoch am Frontend was geändert hast, musst du vor jeder Ausführung einen extra Schritt erledigen. In Visual Studio oder in CMD musst du dich ins Verzeichnis "C:\HTL Desk Projekt\htldesk\htldesk\htldesk.Client" navigieren und dort "npm run build" ausführen. Jetzt sollte alles funktionieren.

PS: Stand 26.12.2022 02:58: Könnte sich jederzeit ändern. Bei Fragen, Maxim fragen.
