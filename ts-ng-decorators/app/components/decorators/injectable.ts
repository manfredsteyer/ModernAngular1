/// <reference path="../../../typings/angularjs/angular.d.ts" />

import { Registry } from './registry';

export function Injectable(options: any = {}) {

    if (!options) options = {};
    options.module = options.module || 'app';
    return function(target) {
        Registry.services.push({
            service: target,
            name: target.name,
            moduleName: options.module
        });

        if (options.injectables) {
            target.$inject = options.injectables;   
        }
    }
}