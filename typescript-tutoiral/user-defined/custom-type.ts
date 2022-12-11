type Users = {userName: string, userId: number};
let users : Users[];
users = [];

let user1 : Users;
user1 = {userName :"jewel", userId:26};


let user2 : Users;
user2 = {userName :"towhid", userId:76};

let user3 : Users;
user3 = {userName :"towhid", userId:76};

users.push(user1);
users.push(user2);
users.push(user3);

console.log(users)

type RequestType = "Get" | "Set";
let getRequest : RequestType;
getRequest = "Get";

function request(requestType: RequestType){
    console.log(requestType);
}

request("Get");