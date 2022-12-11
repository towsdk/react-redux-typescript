var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Encapsulation = /** @class */ (function () {
    function Encapsulation(x, y) {
        this.userName = x;
        this.userAge = y;
    }
    Encapsulation.prototype.display1 = function () {
        console.log("it is : ".concat(this.userName, " and it is : ").concat(this.userAge));
    };
    return Encapsulation;
}());
var user1 = /** @class */ (function (_super) {
    __extends(user1, _super);
    function user1(userName, userAge, userId) {
        var _this = _super.call(this, userName, userAge) || this;
        _this.user1Id = userId;
        return _this;
    }
    user1.prototype.display2 = function () {
        console.log("it is : ".concat(this.userName, " and it is : ").concat(this.userAge, " and ").concat(this.user1Id));
    };
    user1.prototype.setStudentName = function (studentName) {
        this.studentName = studentName;
    };
    user1.prototype.getStudentName = function () {
        return this.studentName;
    };
    return user1;
}(Encapsulation));
var student1 = new user1("jewel", 23, 24);
// student1.display2();
student1.setStudentName("Hime");
console.log(student1.getStudentName());
