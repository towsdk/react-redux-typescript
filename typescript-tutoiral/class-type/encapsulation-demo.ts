class Encapsulation{
    userName: string;
    userAge: number;

    constructor(x: string, y: number){
        this.userName = x;
        this.userAge = y;
    }

    public display1():void {
        console.log(`it is : ${this.userName} and it is : ${this.userAge}`);
    }
}

class user1 extends Encapsulation{
    user1Id : number;
    private studentName: string;
   
    constructor(userName:string, userAge: number, userId: number){
        super(userName, userAge);
        this.user1Id = userId;
    }

    public display2(): void {
        console.log(`it is : ${this.userName} and it is : ${this.userAge} and ${this.user1Id}`);
    }
    setStudentName(studentName: string){
            this.studentName = studentName;
    }
    getStudentName(){
        return this.studentName;
    }
}

let student1 = new user1("jewel", 23, 24);
// student1.display2();

student1.setStudentName("Hime");
console.log(student1.getStudentName());
