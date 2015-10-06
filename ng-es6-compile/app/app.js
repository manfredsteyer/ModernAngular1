System.register('app', ['angular', 'demo-vm'], function (_export) {
  'use strict';

  var angular, DemoVM, app;
  return {
    setters: [function (_angular) {
      angular = _angular['default'];
    }, function (_demoVm) {
      DemoVM = _demoVm.DemoVM;
    }],
    execute: function () {
      app = angular.module('angular-es6', []);

      app.controller('demoVM', DemoVM);

      // Hallo @NgDays

      angular.element(document).ready(function () {
        angular.bootstrap(document, ['angular-es6']);
      });

      _export('app', app);
    }
  };
});
//# sourceMappingURL=app.js.map
