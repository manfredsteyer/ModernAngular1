/// <reference path="../../../typings/angularjs/angular.d.ts" />

export var Registry = {
    controllers: [],
    services: [],
    directives: [],
    toPropertyName: function(name: string) {
        var first = name.substr(0, 1).toLowerCase();
        var rest = name.substr(1, name.length-1);
        return first + rest;
    },
    setupModules() {

        angular.forEach(this.controllers, (entry) => { 

            var name = this.toPropertyName(entry.name);
            angular
                .module(entry.moduleName)
                .controller(name, entry.controller);
        });    

        angular.forEach(this.services, (entry) => { 

            var name = this.toPropertyName(entry.name);

            angular
                .module(entry.moduleName)
                .service(name, entry.service);


        });

        
        angular.forEach(this.directives, (entry) => { 

            var name = this.toPropertyName(entry.name);

            angular
                .module(entry.moduleName)
                .directive(name, () => entry.ddo);

            

        });   
        
        this.controllers = [];
        this.services = [];
        this.directives = [];

    }
}
