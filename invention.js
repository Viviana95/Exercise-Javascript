var n1 = "7";
var i = 2;
while (n1 % i !== 0 && i < n1 / 2 ) {
i++;
}
if (n1 % i !== 0) {
console.log("El número es primo");
} else {
console.log("El número no es primo");
}