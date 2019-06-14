var print = function (who) {
    console.log("Hello" + who)

}

console.log(print.toString);
console.log(print.toString());
var test = "masti";
print = test;
console.log(print);