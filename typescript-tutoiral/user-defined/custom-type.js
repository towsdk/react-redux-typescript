var users;
users = [];
var user1;
user1 = { userName: "jewel", userId: 26 };
var user2;
user2 = { userName: "towhid", userId: 76 };
var user3;
user3 = { userName: "towhid", userId: 76 };
users.push(user1);
users.push(user2);
users.push(user3);
console.log(users);
var getRequest;
getRequest = "Get";
function request(requestType) {
    console.log(requestType);
}
request("Get");
