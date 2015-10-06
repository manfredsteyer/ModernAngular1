///<reference path="../typings/angularjs/angular.d.ts" />

export class DemoVM {
	
	info: string;
	$log: ng.ILogService;
	
	constructor($log: ng.ILogService) {
		$log.debug('Hallo Welt!');
		this.$log = $log;
		this.info = "Hallo Welt!";
		
	
		
	}
	
	doStuff() {
		
		this.$log.debug("stuff done ...");
		
	}
	
	
	
}