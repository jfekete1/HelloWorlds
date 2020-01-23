class Student {
    fullName: string;
	asdf: string;
	protected static SInit = (() => {
        Student.prototype.asdf = "asdasd";
    })();
    constructor(public firstName: string, private middleInitial: string, public lastName: string, public dasdas?: string, public luofa: string = "optional luofa") {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
		this.asdf = dasdas ? dasdas : this.asdf;
    }
}
interface Person {
    firstName: string;
    lastName: string;
	asdf: string;
	luofa: string;	
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.asdf + " " + person.luofa;
}
let user = new Student("Joe", "M.", "User", "(optional parameter)");

document.body.textContent = greeter(user);