///<reference path="../typings/angularjs/angular.d.ts" />
System.register(['angular', 'demo-vm'], function(exports_1) {
    var angular, demo_vm_1;
    var app;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (demo_vm_1_1) {
                demo_vm_1 = demo_vm_1_1;
            }],
        execute: function() {
            app = angular.module('app', []);
            app.controller('demoVM', demo_vm_1.DemoVM);
            angular.element(document).ready(function () {
                angular.bootstrap(document, ['app']);
            });
        }
    }
});
//# sourceMappingURL=app.js.map