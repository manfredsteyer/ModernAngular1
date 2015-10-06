export class DemoVM {
 
    constructor($http, $log) {
        this.$http = $http;
        this.$log = $log;
        
        $log.log("DemoCtrl has been created ...");
        this.info = "Hallo Welt!!";
    }
    
    doStuff() {
        this.$log.debug("stuff ...");
    }
    
    load() {
        
        this.$log.log("running load() ...");
        
        var url = "http://www.angular.at/api/flug";
        this.$http.get(url).then(result => { 
            this.flugCount = result.data.length;
        }).catch(result => { 
            this.flugCount = "Fehler beim Ausführen des Services: " + result.status;
        });
        
    }
    
}