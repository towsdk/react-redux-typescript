var UsersLIst = /** @class */ (function () {
    function UsersLIst(x, y, z) {
        this.userGog = 35;
        this.userName = x;
        this.userAge = y;
        this.userGet = z;
    }
    UsersLIst.prototype.display = function () {
        console.log("UserName is : ".concat(this.userName, " and user age is : ").concat(this.userAge, " and ").concat(this.userGog, " and usergo ").concat(this.userGet));
    };
    return UsersLIst;
}());
var userOne = new UsersLIst("Towhid", 24, 23);
userOne.display();
var userTwo = new UsersLIst("siddiq", 24, 98);
userTwo.display();
