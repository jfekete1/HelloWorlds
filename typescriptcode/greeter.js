var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName, dasdas, luofa) {
        if (luofa === void 0) { luofa = "optional luofa"; }
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.dasdas = dasdas;
        this.luofa = luofa;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.asdf = dasdas ? dasdas : this.asdf;
    }
    Student.SInit = (function () {
        Student.prototype.asdf = "asdasd";
    })();
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.asdf + " " + person.luofa;
}
var user = new Student("Joe", "M.", "User", "(optional parameter)");
document.body.textContent = greeter(user);
