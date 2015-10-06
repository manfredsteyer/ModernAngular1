///<reference path="../typings/angularjs/angular.d.ts" />

import 'core-js';
import * as angular from 'angular';
import 'flug-vm';
import './components/fluege/flug-service';
import './components/fluege/flug-row';
import { Registry } from './components/decorators/registry';

var app = angular.module('app', []);

// app.controller('flugVM', FlugVM);

app.constant('baseUrl', 'http://www.angular.at');


Registry.setupModules();

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});