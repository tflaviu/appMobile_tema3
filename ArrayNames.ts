class ArrayNames {
    names: Array<String>;

    constructor (names: Array<String>) {
        this.names = names;
    }

    getSortedNames():Array<String> {
        return this.names.sort();
    }
}

let arrNms = new ArrayNames(['flaviu', 'andrei', 'vladut', 'lucas', 'marian']);

console.log(arrNms.getSortedNames());