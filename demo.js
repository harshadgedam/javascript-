const fs1=require("fs");
let text=fs1.readFileSync("roundup.txt");
console.log(text);
let text2=fs1.writeFileSync("ali1.txt",text);
console.log(text2);