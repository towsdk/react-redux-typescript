class UsersLIst{
        userName: string;
        userAge: number;
        userGet : number;
        userGog = 35;

        constructor(x: string, y: number, z:number){
            this.userName =  x;
            this.userAge = y;
            this.userGet = z;
        }

        public display(){
            console.log(`UserName is : ${this.userName} and user age is : ${this.userAge} and ${this.userGog} and usergo ${this.userGet}`);
        }
}

let userOne = new UsersLIst("Towhid", 24, 23);
userOne.display();
let userTwo = new UsersLIst("siddiq", 24, 98);
userTwo.display();