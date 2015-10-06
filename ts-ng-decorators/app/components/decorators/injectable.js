/// <reference path="../../../typings/angularjs/angular.d.ts" />
System.register(['./registry'], function(exports_1) {
    var registry_1;
    function Injectable(options) {
        if (options === void 0) { options = {}; }
        if (!options)
            options = {};
        options.module = options.module || 'app';
        return function (target) {
            registry_1.Registry.services.push({
                service: target,
                name: target.name,
                moduleName: options.module
            });
            if (options.injectables) {
                target.$inject = options.injectables;
            }
        };
    }
    exports_1("Injectable", Injectable);
    return {
        setters:[
            function (registry_1_1) {
                registry_1 = registry_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=injectable.js.map