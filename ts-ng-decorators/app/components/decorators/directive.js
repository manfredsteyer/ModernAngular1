System.register(['./registry'], function(exports_1) {
    var registry_1;
    var defaultOptions;
    /*
     {
         link: ....,
         complile: ...,
         controller: ....
         
     }
    */
    function Directive(options) {
        return function (target) {
            var controllerOption = { controller: target };
            var ddo = Object.assign(defaultOptions, controllerOption, options);
            if (target.link)
                ddo.link = target.link;
            if (target.compile)
                ddo.compile = target.compile;
            registry_1.Registry.directives.push({
                name: target.name,
                moduleName: ddo.moduleName,
                ddo: ddo
            });
        };
    }
    exports_1("Directive", Directive);
    return {
        setters:[
            function (registry_1_1) {
                registry_1 = registry_1_1;
            }],
        execute: function() {
            defaultOptions = {
                moduleName: 'app',
                restrict: 'E',
                scope: {},
                controllerAs: 'vm',
                bindToController: true
            };
        }
    }
});
//# sourceMappingURL=directive.js.map