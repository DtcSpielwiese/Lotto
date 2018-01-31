# Yarn Kommandos

## Setzen von Yarn als Standard packageManager 
```powershell
 ng set --global packageManager=yarn 
```
## Start eines neuen Projektes
Dieser Befehl wird initial bei Erstellung eines neuen Projektes benötigt um die 'package.json' zu erstellen. 
```powershell
yarn init
```
Er wird im entsprechenden Projektverzeichniss ausgeführt und frag alle entsprechenden Informationen der 'package.json' ab.
```powershell
question name (testdir): my-awesome-package
question version (1.0.0):
question description: The best package you will ever find.
question entry point (index.js):
question git repository: https://github.com/yarnpkg/example-yarn-package
question author: Yarn Contributor
question license (MIT):
question private:
success Saved package.json
```

durch den Parameter '-y' kann die Abfrage Übersprungen werden und es wird eine default 'package.json' angelegt.

```powershell
yarn init -y 
```

## Hinzufügen von Abhängigkeit/Paketen
```powershell
yarn add [package-name] #installiert die "neuste" version eines Paket.
yarn add [package-name]@[version] #installiert die angegebene Version
yarn add [package-name]@[tag] # installiert den angegebenen “tag” (z.B. beta, next, or latest).
```
## Hinzufügen von Abhängigkeit/Paketen zu verschiedenen Kategorien
### dependencies [-kein parameter]
Dies sind die normalen Abhängigkeiten welche benötigt werden, wenn der  Code ausführt wird (zB React oder ImmutableJS).

### devDependencies [-dev]
Dies sind Entwicklungsabhängigkeiten. Abhängigkeiten, die nur zu einem bestimmten Zeitpunkt im Entwicklungs-Workflow, aber nicht während der Laufzeit benötigt werden.(z. B. Babel oder Flow).

### peerDependencies [-peer]
Peer-Abhängigkeiten sind eine besondere Art von Abhängigkeiten, die nur dann auftreten würden, wenn Sie Ihr eigenes Paket veröffentlichen würden.

### optionalDependencies [-optional]
Wenn die Installation fehlschlägt, liefert  Yarn immer noch, dass der Installationsprozess erfolgreich war.

Dies ist nützlich für Abhängigkeiten, die nicht unbedingt auf jeder Umgebung funktionieren und ein Fallback-Plan implementiert wurde, falls sie nicht installiert sind (zB Watchman).

```powershell
yarn add [package] 
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```
## Aktualisieren von Abhängigkeit/Paketen
```powershell
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```
## Deinstallieren von Abhängigkeit/Paketen
```powershell
yarn remove [package]
```
## Installieren aller hinzugefügten Abhängigkeit/Paketen
Befehl lädt und Installiert alle mit 'add' hinzugefüge Pakete.
```powershell
yarn
yarn install
```
# Rückkehr zu NPMM
## Setzen des Standard 'packageManager' auf NPM
```powershell
ng set --global packageManager=npm
 ```
