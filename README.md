# Lotto
Mit diesem Beispielprojekt sollen folgende Technologien näher angeschaut werden:

* angular.io
* REST Client API
* docker
* docker compose
* kafka
* GIT 
* Java ab Version 8
* Orika Mapper
* Gradle 
* Jenkins
* Openshift
* Dropwizard
* NoSQL (MongoDb)

## Umgang mit GIT
Folgendes Bild beschreibt den Umgang mit dem GIT in diesem Projekt:

![GIT Branches](doc/git.png "GIT Branches")

Es gelten dabei folgende Regeln:
1. Jeder Entwickler muss bei sich lokal den `develop` Branch auschecken 
2. Die Entwicklung einer Aufgabe erfolgt immer in einem feature erfolgen. 
  - Das feature Branch ist immer von `remotes/origin/develop` abzuleiten
  - Als Name ist folgender Muster zu verwenden: `feature/Ticket - Aufgabe`, z.B. `feature/LOTTO-10 - Integration Persistenzframework`
  - Sollte das feature anderen Entwicklern zur Verfügung gestellt werden, so ist dieser remote wie folgt zu "pushen": `remotes/origin/feature/Ticket - Aufgabe`, z.B.: `remotes/origin/feature/LOTTO-10 - Integration Persistenzframework` 
  - ![GIT Branches](doc/create_feature.png "GIT Branches")
3. Nach Beendigung der Aufgabe mergt (`git push`) der Entwickler seine Arbeiten in den `remotes/origin/develop` Branch zurück und erstellt einen Pull-Request


## Entwicklungsumgebung
Das Backend kann mit [Eclipse Oxygen](http://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/oxygen/2/eclipse-java-oxygen-2-win32-x86_64.zip "Zum Download") oder auch mit [Visual Studio Code](https://code.visualstudio.com/download "Zum Download") entwickelt werden. Damit das Backend mit `Visual Studio Code` lauffähig ist muss [Java Extension Pack](https://code.visualstudio.com/docs/java/extensions "Zum Download") für VS Code installiert werden.

Das Frontend wird mit [Visual Studio Code](https://code.visualstudio.com/download "Zum Download") entwickelt.

## Backend - Durchstich
Als Backend-Durchstich dient zur Zeit ein kleines REST Service. Dieses kann zur Zeit wie folgt gestartet werden:
- im Eclipse: Dazu LottoServices Projekt im Eclipse importieren und dort `LottoApplication` Configuration ausführen
- im VS Code: Verzeichnis öffnen, `LottoApplication.java` im Editor öffnen `F5` zum Start der Applikation drücken.

Beim Starten der Applikation wird ein Jetty HTTP Server gestartet. Das Rest-Service ist unter folgenden URL's erreichbar:
- http://localhost:8080/lotto-service 
- oder parametrisierbar, z.B: http://localhost:8080/lotto-service?name=World  

