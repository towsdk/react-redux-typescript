var userType;
(function (userType) {
    userType[userType["name"] = 0] = "name";
    userType[userType["id"] = 1] = "id";
    userType[userType["home"] = 2] = "home";
})(userType || (userType = {}));
console.log(userType.name);
console.log(userType["id"]);
console.log(userType);
var userType1;
(function (userType1) {
    userType1["name"] = "read";
    userType1["id"] = "go";
    userType1["home"] = "home";
})(userType1 || (userType1 = {}));
console.log(userType1);
