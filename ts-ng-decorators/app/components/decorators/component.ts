/// <reference path="../../../typings/angularjs/angular.d.ts" />

import { Registry } from './registry';

export function Component(options) {

    if (!options) options = {};
    options.module = options.module || 'app';
    
    return function(target) {
        
        Registry.controllers.push({
            controller: target,
            name: target.name,
            moduleName: options.module
        });

        if (options.injectables) {
            target.$inject = options.injectables;   
        }
    }
   
}
