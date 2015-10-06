
function Docu(target, key?, descriptor?) {
	console.debug(target);
	console.debug(key);	
	console.debug(descriptor);	
	console.debug("---");
}

function DocuWithLabel(label: string) {
	
	return function(target, key?, descriptor?) {
		console.debug(label);
		console.debug(target);
		console.debug(key);	
		console.debug(descriptor);	
		console.debug("---");
	}
}

function Log(target, key?, descriptor?) {
	
	if (!key) {
		console.warn("Mit @Log dürfen nur Member dekoriert werden!");
		return;
	}
	var property = descriptor.value; // function
	
	if (!property || typeof property !== "function") return;
	
	descriptor.value = function(...params) {
		console.debug('Calling ' + target.constructor.name + '.' + key);
		return property.apply(this, params);
	}
	
}

@DocuWithLabel("Repräsentiert ein Hotel")
class Hotel {

	constructor(@Docu name: string, ranking: number, price: number) {
		this.name = name;
		this.ranking = ranking;
		this.price = price;
	}
	
	@Docu
	name: string;
	
	@Docu
	ranking: number;
	
	@Docu
	price: number;

	@Log
	@Docu
	info(@Docu preText?: string): string {
		
		return preText + this.name + " "+ this.ranking + " " + this.price;
	}

}

var h = new Hotel('Zur Post', 2, 40);
var h2 = new Hotel('Zur Post', 2, 40);
console.debug(h.info("Tolle News: "));
console.debug(h2.info("Tolle News: "));