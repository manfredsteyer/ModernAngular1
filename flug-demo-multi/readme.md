# component-router-ng-1.x-multi-views 

Veranschaulicht die Nutzung des Component Routers, welcher mit AngularJS 1.4 bereitgestellt wird und sowohl mit AngularJS 1.3+ als auch mit Angular 2.0 genutzt werden kann. Der Fokus liegt bei diesem Beispiel auf multiple Views.

## Verwendete Werkzeuge

- [NodeJS](https://nodejs.org)
- [Gulp](http://gulpjs.com/) zum Automatisieren der Kompilierung
- [Babel](https://babeljs.io/) als Compiler (Transpiler)
- [JSPM](http://jspm.io/) als Paket-Manager, der ES6-Module unterstützt
- [Angular](https://angular.io)
- [Component Router](https://github.com/angular/router) in der Version 0.5.x

## Verzeichnisstruktur

- src: Hier befinden sich die EcmaScript-6-Dateien
- components: Beinhaltet die Kompilate

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