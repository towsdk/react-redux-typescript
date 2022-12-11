class User{
    userName: string;
    userId: number;

    constructor(userName: string, userId: number){
        this.userName = userName;
        this.userId = userId;
    }

    public display():void {
        console.log(`username is : ${this.userName} & userid is: ${this.userId}`);
    }
}

class Student extends User{
    studentId: number;

    constructor(userName: string, userId: number, studentId: number){
        super(userName, userId);
        this.studentId= studentId;
    }
    public display(): void {
        console.log(`username is : ${this.userName} and userid is : ${this.userId} and studentid is: ${this.studentId}`);
    }
}

let student1 = new Student('towhid', 23, 234);
student1.display();