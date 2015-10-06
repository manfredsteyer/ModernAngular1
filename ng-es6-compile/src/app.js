import angular from 'angular';
import {DemoVM} from 'demo-vm';

var app = angular.module('angular-es6', []);

app.controller('demoVM', DemoVM);

// Hallo @NgDays

angular.element(document).ready(function() {
  angular.bootstrap(document, ['angular-es6']);
});

export {app};
