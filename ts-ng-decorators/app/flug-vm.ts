import { Component } from './components/decorators/component';
import { FlugService } from './components/fluege/flug-service'; 

@Component({
	injectables: ['flugService', '$log']
})
export class FlugVM {
	
	selectedFlug;
	fluege;
	message;
	flugVonFilter = "Graz";
	flugNachFilter = "Hamburg";
	flugService: FlugService;
	$log;
	
	constructor(flugService: FlugService, $log) {
		this.$log = $log;
		this.flugService = flugService;
	}
	
	loadFluege() {

		this.flugService
			.find(this.flugVonFilter, this.flugNachFilter)
			.then((result) => {

        	    this.fluege = result.data;

			}).catch((p) => {
					this.message = "Beim Laden der Daten ist ein Fehler aufgetreten";
	
					this.$log.error("Fehler beim Laden von Flügen");
					this.$log.error(p.data);
					this.$log.error(p.status);
			});
    }

    selectFlug(flug) {
        this.selectedFlug = flug;
    }

}