var amitabh = new Object();
console.log(amitabh);

amitabh.name = "Amitabh";
amitabh.familyname = "Bachhan";

console.log(amitabh);
console.log(amitabh.__proto__);

var abhishek = Object.create(amitabh);
abhishek.name = "Bunty";
console.log(abhishek);
console.log(abhishek.familyname);
console.log(abhishek.__proto__)

var shweta = Object.create(amitabh);
shweta.name = "Shweta";
shweta.familyname = "Nanda";
console.log(shweta);

abhishek.__proto__.familyname = "Patel"
console.log(amitabh.familyname);
console.log(abhishek.familyname);