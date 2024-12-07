let text = "My name is Bhargav";
let t1 = "Bhargav";
let t2 = "Tank";

console.log("Char : " + text.charAt(0));
console.log("Char Code: " + text.charCodeAt(0));
console.log("at() +ve index: " + text.at(2));
console.log("at() -ve index: " + text.at(-3));
console.log("[] method: " + text[0]);

// Extract Strings
console.log("\n\nExtract String\n");
console.log("Slice(1, 5): " + text.slice(1, 5));
console.log("Slice(5): " + text.slice(5));
console.log("Slice(-1, -5): " + text.slice(-5, -1));
console.log("Slice(-5): " + text.slice(-5));
console.log("SubString(1, 5): " + text.substring(1, 5));
console.log("Concat: " + t1.concat(" ", t2," ", text));


// IndexOf
console.log("\n\nindexOf\n");
console.log("indexOf : " + text.indexOf("i"));
console.log("Match length: " + text.matchAll("a"));
