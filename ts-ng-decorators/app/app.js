///<reference path="../typings/angularjs/angular.d.ts" />
System.register(['core-js', 'angular', 'flug-vm', './components/fluege/flug-service', './components/fluege/flug-row', './components/decorators/registry'], function(exports_1) {
    var angular, registry_1;
    var app;
    return {
        setters:[
            function (_1) {},
            function (angular_1) {
                angular = angular_1;
            },
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (registry_1_1) {
                registry_1 = registry_1_1;
            }],
        execute: function() {
            app = angular.module('app', []);
            // app.controller('flugVM', FlugVM);
            app.constant('baseUrl', 'http://www.angular.at');
            registry_1.Registry.setupModules();
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['app']);
            });
        }
    }
});
//# sourceMappingURL=app.js.map