var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Docu(target, key, descriptor) {
    console.debug(target);
    console.debug(key);
    console.debug(descriptor);
    console.debug("---");
}
function DocuWithLabel(label) {
    return function (target, key, descriptor) {
        console.debug(label);
        console.debug(target);
        console.debug(key);
        console.debug(descriptor);
        console.debug("---");
    };
}
function Log(target, key, descriptor) {
    if (!key) {
        console.warn("Mit @Log dürfen nur Member dekoriert werden!");
        return;
    }
    var property = descriptor.value; // function
    if (!property || typeof property !== "function")
        return;
    descriptor.value = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i - 0] = arguments[_i];
        }
        console.debug('Calling ' + target.constructor.name + '.' + key);
        return property.apply(this, params);
    };
}
var Hotel = (function () {
    function Hotel(name, ranking, price) {
        this.name = name;
        this.ranking = ranking;
        this.price = price;
    }
    Hotel.prototype.info = function (preText) {
        return preText + this.name + " " + this.ranking + " " + this.price;
    };
    __decorate([
        Docu, 
        __metadata('design:type', String)
    ], Hotel.prototype, "name");
    __decorate([
        Docu, 
        __metadata('design:type', Number)
    ], Hotel.prototype, "ranking");
    __decorate([
        Docu, 
        __metadata('design:type', Number)
    ], Hotel.prototype, "price");
    Object.defineProperty(Hotel.prototype, "info",
        __decorate([
            Log,
            Docu,
            __param(0, Docu), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', [String]), 
            __metadata('design:returntype', String)
        ], Hotel.prototype, "info", Object.getOwnPropertyDescriptor(Hotel.prototype, "info")));
    Hotel = __decorate([
        DocuWithLabel("Repräsentiert ein Hotel"),
        __param(0, Docu), 
        __metadata('design:paramtypes', [String, Number, Number])
    ], Hotel);
    return Hotel;
})();
var h = new Hotel('Zur Post', 2, 40);
var h2 = new Hotel('Zur Post', 2, 40);
console.debug(h.info("Tolle News: "));
console.debug(h2.info("Tolle News: "));
//# sourceMappingURL=first_steps.js.map