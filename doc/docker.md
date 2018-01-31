# Docker 
## Installation des Dockers unter Windows

1. [Docker Toolbox](https://github.com/docker/toolbox/releases) für Windows (aktuelle Version: `DockerToolbox-18.01.0-ce.exe`) runterladen und installieren. Sollte sich das Installationsprogramm "aufhängen", dann liegt es am Proxy. Internetverbindung ohne Proxy aufbauen und die Installation erneut probieren :-)

2. Diesen Schritt nur ausführen, falls Docker Toolbox mit Proxy genutzt wird. Ins Installationsverzeichnis gehen (i.d.R. `C:\Program Files\Docker Toolbox\`) und dort in der Datei `start.sh` ganz am Anfang die Proxy-Einstellungen eintragen:
```powershell
#!/bin/bash

HTTP_PROXY="http://proxy:3128"
HTTPS_PROXY="http://proxy:3128"
...

```
3. Jetzt kann zum ersten Mal der `Docker Quickstart Terminal` gestartet werden (Start > Alle Programme > Docker > Docker Quickstart Terminal). Bei diesem Start wird in der `Oracle VM VirtualBox` die Maschine `default` mit ggf. o.g. Proxy-Einstellungen angelegt.

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

## MongoDB als Docker-Image
...

