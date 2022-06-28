const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    return cats.push("Ralph");
}

function destructivelyPrependCat() {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop("Milo", "Otis");
}

function destructivelyRemoveFirstCat() {
    return cats.shift("Milo");
}

function appendCat() {
    let newCats = [];
    return newCats = [ ...cats, "Broom",];
}

function prependCat() {
    let newCats = [];
    return newCats = ["Arnold", ...cats];
}

function removeLastCat() {
    let newCats = [];
    return newCats = cats.slice(0, -1);
}

function removeFirstCat () {
    let newCats = [];
    return newCats = cats.slice(1); 
}