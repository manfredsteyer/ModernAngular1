/// <reference path="../../../typings/angularjs/angular.d.ts" />
System.register(['./registry'], function(exports_1) {
    var registry_1;
    function Component(options) {
        if (!options)
            options = {};
        options.module = options.module || 'app';
        return function (target) {
            registry_1.Registry.controllers.push({
                controller: target,
                name: target.name,
                moduleName: options.module
            });
            if (options.injectables) {
                target.$inject = options.injectables;
            }
        };
    }
    exports_1("Component", Component);
    return {
        setters:[
            function (registry_1_1) {
                registry_1 = registry_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=component.js.map