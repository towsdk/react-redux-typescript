enum userType {
    name,
    id,
    home
}


console.log(userType.name);
console.log(userType["id"]);
console.log(userType);

enum userType1 {
    name = "read",
    id = "go",
    home="home"
}
console.log(userType1)