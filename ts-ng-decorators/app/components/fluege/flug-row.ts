import { Directive } from './../decorators/directive';

@Directive({
	scope: {
		'flug': '=', 
		'selected': '='
	},
	restrict: 'EA',
	replace: true,
	templateUrl: 'app/components/fluege/flug-row.html'
})
export class FlugRow {
	
	flug;
	selected;
	$log;
	
	constructor($log) {
		$log.debug("FlugRow created ...");
		this.$log = $log;
	}
	
	static link(scope, elm, attrs) {
		scope.vm.$log.debug(scope.vm);
	}
	
	select() {
		this.selected = this.flug; 
	}
	
}