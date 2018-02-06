# Docker 
## Installation des Dockers unter Windows

1. [Docker Toolbox](https://github.com/docker/toolbox/releases)  für Windows (aktuelle Version: `DockerToolbox-18.01.0-ce.exe`) runterladen und installieren. Sollte sich das Installationsprogramm "aufhängen", dann liegt es am Proxy. Oflline gehen, oder Internetverbindung ohne Proxy aufbauen und die Installation erneut probieren :-)

2. Diesen Schritt nur ausführen, falls Docker Toolbox mit Proxy genutzt wird. Ins Installationsverzeichnis gehen (i.d.R. `C:\Program Files\Docker Toolbox\`) und dort in der Datei `start.sh` ganz am Anfang die Proxy-Einstellungen eintragen:
```powershell
#!/bin/bash

HTTP_PROXY="http://proxy:3128"
HTTPS_PROXY="http://proxy:3128"
...

```
3. Jetzt kann zum ersten Mal der `Docker Quickstart Terminal` gestartet werden (Start > Alle Programme > Docker > Docker Quickstart Terminal - Bei Windows 10 - Bitte als Administrator ausführen!). Bei diesem Start wird in der `Oracle VM VirtualBox` die Maschine `default` mit ggf. o.g. Proxy-Einstellungen angelegt. Sollten hier Probleme auftreten, dann gibt es folgendes Workaround:
 - Mit Schritt 5 weiter machen: In diesem Schritt wird die Maschine `default` ebenfalls angelegt, allerdings ohne Proxy!
 - `Oracle VM VirtualBox` starten und die `default` Maschine löschen
 - Mit Schritten 3 und 4 fortfahren

4. Die Verifikation der Installation kann durch den Befehl `docker run hello-world` in dem Docker Terminal nachvollzogen werden. Es ist dann erfolgreich, wenn es bei diesem Befehl keine Fehler auftreten.

5. Zur Verwaltung der Docker-Images und der Docker-Container kann auch das `Kitematic` - Tool genutzt werden (Start > Alle Programme > Docker > Kitematic). Sollte Kitematic mit Proxy-Einstellungen genutzt werden, dann bitte im Verzeichnis `C:\Program Files\Docker Toolbox\` folgendes Skript anlegen (`kitematic_proxy.cmd`), welches beim Start auch genutzt werden soll:       

```powershell
set proxy=http://proxy:3128
SET HTTP_PROXY=%proxy%
SET HTTPS_PROXY=%proxy%
for /f %%i in ('docker-machine.exe ip default') do set DOCKER_HOST=%%i
SET NO_PROXY=%DOCKER_HOST%
set DOCKER_HOST=tcp://%DOCKER_HOST%:2376
cd Kitematic
Kitematic.exe
```

## MongoDB als Docker-Image/Container
1. `Docker Quickstart Terminal` starten
2. Im Terminal ins Docker Verzeichnis wechseln z.B.: `cd /c/Projekte/DTC/Lotto/docker`
3. `docker-compose up` - Befehl ausführen. Beim erstmaligen Start dieses Befehls wird ein entsprechendes docker-image erstellt und ein docker-container mit dem Namen `lotto-mongo-db` gestartet. In diesem Container wird die MongoDB-Instanz gestartet, welche wiederum beim erstmaligen Start die `lotto-mongo-db` Datenbank anlegt mit zwei Nutzern: Login: `admin`, Passwort: `admin` und Login: `lotto`, Passwort `lotto123`.
4. Folgende Informationen nutzen, um mit einem Client gegen die gestartete DB zu verbinden - Adresse: `192.168.99.100:27020`, Authentication - Database: `admin`, Login: `admin`, Passwort: `admin`
5. Das docker-container ist mit der Option `restart: always` eingerichtet, so das beim nächstmaligen Start des `Docker Quickstart Terminals` das entsprechende Container und somit auch die MongoDB automatisch gestartet werden.

![MongoDB](../doc/mongodb.png "MongoDB")


