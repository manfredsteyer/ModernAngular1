///<reference path="../typings/angularjs/angular.d.ts" />

import * as angular from 'angular';

import { DemoVM } from 'demo-vm';

var app = angular.module('app', []);
app.controller('demoVM', DemoVM);

angular.element(document).ready(() => {
	
	angular.bootstrap(document, ['app']);
	
});