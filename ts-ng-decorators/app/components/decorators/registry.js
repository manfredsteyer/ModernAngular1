/// <reference path="../../../typings/angularjs/angular.d.ts" />
System.register([], function(exports_1) {
    var Registry;
    return {
        setters:[],
        execute: function() {
            exports_1("Registry", Registry = {
                controllers: [],
                services: [],
                directives: [],
                toPropertyName: function (name) {
                    var first = name.substr(0, 1).toLowerCase();
                    var rest = name.substr(1, name.length - 1);
                    return first + rest;
                },
                setupModules: function () {
                    var _this = this;
                    angular.forEach(this.controllers, function (entry) {
                        var name = _this.toPropertyName(entry.name);
                        angular
                            .module(entry.moduleName)
                            .controller(name, entry.controller);
                    });
                    angular.forEach(this.services, function (entry) {
                        var name = _this.toPropertyName(entry.name);
                        angular
                            .module(entry.moduleName)
                            .service(name, entry.service);
                    });
                    angular.forEach(this.directives, function (entry) {
                        var name = _this.toPropertyName(entry.name);
                        angular
                            .module(entry.moduleName)
                            .directive(name, function () { return entry.ddo; });
                    });
                    this.controllers = [];
                    this.services = [];
                    this.directives = [];
                }
            });
        }
    }
});
//# sourceMappingURL=registry.js.map