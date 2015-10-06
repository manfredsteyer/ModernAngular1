System.register(['./../decorators/injectable'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var injectable_1;
    var FlugService;
    return {
        setters:[
            function (injectable_1_1) {
                injectable_1 = injectable_1_1;
            }],
        execute: function() {
            FlugService = (function () {
                function FlugService($http, baseUrl) {
                    this.$http = $http;
                    this.baseUrl = baseUrl;
                }
                FlugService.prototype.find = function (flugVonFilter, flugNachFilter) {
                    var params = {};
                    params.abflugOrt = flugVonFilter;
                    params.zielOrt = flugNachFilter;
                    return this
                        .$http
                        .get(this.baseUrl + "/api/flug", { params: params });
                };
                FlugService = __decorate([
                    injectable_1.Injectable()
                ], FlugService);
                return FlugService;
            })();
            exports_1("FlugService", FlugService);
        }
    }
});
//# sourceMappingURL=flug-service.js.map