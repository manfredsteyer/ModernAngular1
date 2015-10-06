///<reference path="../../../typings/core-js/core-js.d.ts" />
import { Registry } from './registry';

const defaultOptions = {
	moduleName: 'app',
	restrict: 'E',
	scope: { },
	controllerAs: 'vm',
	bindToController: true
}


/*
 {
	 link: ....,
	 complile: ...,
	 controller: ....
	 
 }
*/
export function Directive(options) {
	
	return function(target) {
		
		var controllerOption = { controller: target };
		var ddo = Object.assign(defaultOptions, controllerOption, options);
		
		if (target.link) ddo.link = target.link;
		if (target.compile) ddo.compile = target.compile;
		
		Registry.directives.push( {
			name: target.name,
			moduleName: ddo.moduleName,
			ddo: ddo
		});
		
	}
	
}