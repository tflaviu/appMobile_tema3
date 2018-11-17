var ArrayNames = /** @class */ (function () {
    function ArrayNames(names) {
        this.names = names;
    }
    ArrayNames.prototype.getSortedNames = function () {
        return this.names.sort();
    };
    return ArrayNames;
}());
var arrNms = new ArrayNames(['flaviu', 'andrei', 'vladut', 'lucas', 'flaviu']);
console.log(arrNms.getSortedNames());
