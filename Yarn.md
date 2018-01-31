# Yarn Kommandos

## Start eines neuen Projektes
Dieser Befehl wird initial bei Erstellung eines neuen Projektes benötigt um die 'package.json' zu erstellen. 
```
yarn init

```
Er wird im entsprechenden Projektverzeichniss ausgeführt und frag alle entsprechenden Informationen der 'package.json' ab.
```
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

```java
yarn init -y

```

## Hinzufügen von Abhängigkeit/Paketen
```
yarn add package-name //installiert die "neuste" version eines Paket.
yarn add package-name@1.2.3 installs a specific version of a package from the registry.
yarn add package-name@tag installs a specific “tag” (e.g. beta, next, or latest).
```
## Adding a dependency to different categories of dependencies

### Add to devDependencies, peerDependencies, and optionalDependencies respectively:
```
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```
## Upgrading a dependency
```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```
## Removing a dependency
```
yarn remove [package]
```
## Installing all the dependencies of project
```
yarn or yarn install
```
# Revert to NPM
## In case you are unimpressed with yarn or you find the change of command hard to take, you can revert to NPM with the command below.
```
ng set --global packageManager=npm
 ```