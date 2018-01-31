# Visual Studio Code
## Neuanlage Angular Projekt
1. Öfnnen der VS-Code Lotto-App.code-workspace Datei

2. Setzen des globalen Package Managers für dieses Projekt
```powershell
ng set --global packageManager=yarn
```
3. Erstellen eines Angular Projektes mit der Angular-CLI
```powershell

#########################################################
# ng new [name] --style=[css-Art] --skip-install 
#   new : erstellt neues Projekverzeichniss
#   [name]: Name des zu erstellenden Projektes
#   --style=[css-Art]: gibt an mit welcher Stylesheet-Sprache das Projekt erstellt wird (sass, scss) 
#   --skip-install: verhindert, dass initial alle Abhängikeiten installiert werden. Dies erfolgt zu einem späteren Zeitpunkt (Kurzschreibweise: -si)
#########################################################

ng new myApp --style=scss --skip-install
or
ng new myApp --style=scss -si
```
## Erstmaliges Öffnen eines neu angelegten Projektes
1. Navigation in das Project
```powershell
cd myApp
```
2. Installtion der Packages
```powershell
yarn install
```
3. Einrichtung WebPack-Server
```powershell
ng eject
```
4. Installtion weiterer Packages
```powershell
yarn install
```
## Erstmaliges Öffnen eines bestehenden Projektes
1. Navigation in das Project
```powershell
cd myApp
```
2. Installtion der Packages
```powershell
yarn install
```
## Arbeiten mit dem Projekt
* Manueller Build
```powershell
yarn build
```
* Start Dev-Server
```powershell
yarn start
```
* Einrichten automatisierter Build beim Speichern von Dateien
```powershell
yarn webpack -- --watch
```