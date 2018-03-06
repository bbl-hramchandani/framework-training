function pluralize(noun, number) {

    if (noun == "goose") {
        if (number == 1) {
            return number + " " + noun; 
        } else {
            return number + " " + "geese"; 
        }
    } else if (noun == "sheep") {
        return number + " " + "sheep"; 
    } else {
        if (number == 1) {
            return number + " " + noun; 
        } else {
            return number + " " + noun + "s"; 
        }
    }

}

console.log(pluralize("cat" , 5));
console.log(pluralize("dog" , 1));
console.log(pluralize("sheep" , 1));
console.log(pluralize("sheep" , 3));
console.log(pluralize("goose" , 1));
console.log(pluralize("goose" , 8));
