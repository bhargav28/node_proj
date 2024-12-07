const { error } = require("console");
const fs = require("fs");

// fs.readFile("file.txt", "utf-8", (error, data) => {
//     console.log(error, data)
// })

const a = fs.readFileSync("file.txt")
console.log(a.toString())

fs.writeFile("file2.txt", "This is data", () => {
    console.log("File written")
})

b = fs.writeFileSync("file2.txt", "This is a data2")
console.log(b)
console.log("Finish reading")