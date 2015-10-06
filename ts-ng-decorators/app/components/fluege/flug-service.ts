import {Injectable} from './../decorators/injectable';

@Injectable()
export class FlugService {
	
	$http;
	baseUrl;
	
	constructor($http, baseUrl) {
		
		this.$http = $http;
		this.baseUrl = baseUrl;
		
	}
	
	find(flugVonFilter, flugNachFilter) {
		var params: any = {};
		params.abflugOrt = flugVonFilter;
		params.zielOrt = flugNachFilter;

        return this
				.$http
				.get(this.baseUrl + "/api/flug", { params: params });
	}
}