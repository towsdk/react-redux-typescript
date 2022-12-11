var users;
users = [];
var user1;
user1 = { userName: "jewel", userId: 26 };
var user2;
user2 = { userName: "towhid", userId: 76 };
users.push(user1);
users.push(user2);
for (var key in users) {
    console.log(users[key]["userName"]);
}
