# AngularJS-ES6 Starterkit

Dieses Starterkit veranschaulicht die gemeinsame Nutzung von AngularJS 1.x und EcmaScript 6. Es kompiliert EcmaScript-6-Dateien mit einem Gulp-Task, der sich auf auf den Transpiler Babel stützt.

## Verwendete Werkzeuge

- [NodeJS](https://nodejs.org)
- [Gulp](http://gulpjs.com/) zum Automatisieren der Kompilierung
- [Babel](https://babeljs.io/) als Compiler (Transpiler)
- [JSPM](http://jspm.io/) als Paket-Manager, der ES6-Module unterstützt

## Verzeichnisstruktur

- src: Hier befinden sich die EcmaScript-6-Dateien
- app: Beinhaltet die Kompilate

## Vor dem Ausführen

**Falls** nicht schon erfolgt: Installieren Sie die folgenden Werkzeuge. Gulp und JSPM können, wie nachfolgend gezeigt, nach der Installation von NodeJS über den Node-Package-Manager (npm) installiert werden: 

- NodeJS (https://nodejs.org)
- Gulp: ``npm install -g gulp``
- JSPM: ``npm install -g jspm``

## Kompilieren 

Sie können mit ``gulp`` den ES6-Code kompilieren oder mit ``gulp watch`` den Quellcode überwachen und alle Änderungen im Verzeichnis ``src`` automatisch kompilieren lassen.

## Ausführen

Starten Sie die Web-Anwendung über einen Web-Server und lade Sie die Datei ``ìndex.html`` in einen Browser.

## Pakete herunterladen

**Falls** dieses Starterkit die benötigten Node- und JSPM-Pakete *nicht* enthält, können Sie sie mit den folgenden Anweisungen installieren:

``
npm install
jspm install
``