let users : object[];
users = [];

let user1 : {userName: string, userId: number};
user1 = {userName :"jewel", userId:26};


let user2 : {userName: string, userId: number};
user2 = {userName :"towhid", userId:76};

users.push(user1);
users.push(user2);

for (const key in users) {
     console.log(users[key]["userName"]);
    }