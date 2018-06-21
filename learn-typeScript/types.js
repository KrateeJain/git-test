var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return person;
}());
var katty = new person("katty");
katty.dance();
var AwsomPerson = /** @class */ (function (_super) {
    __extends(AwsomPerson, _super);
    function AwsomPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwsomPerson.prototype.dance = function () {
        console.log("so Awsm Person !");
        _super.prototype.dance.call(this);
    };
    return AwsomPerson;
}(person));
var neo = new AwsomPerson("krip");
neo.dance();
/*class Stark{
    name: String = "Katty";
    static castle : String = "winterfell!"
    saying: String;

    constructor(){
        this.saying = Stark.castle;
    }

    hello(person: String){
        console.log("hello " +person);
    }
}

var ned = new Stark();
ned.saying = "winter is coming";
//console.log(Stark.castle);
ned.hello("katty");
*/
// var n : number = 1;
/*
var iswinter : boolean = true;

// iswinter = 123; because it is not assignable to boolean.
var count : number = 5;
var fname : string = "Deshna";

var fnames : string[] = ["Deshna", "Aishwarya","khushi"];

enum Starck {johnn, minion, sinchan};

var cat = Starck;

function getName() : string{
    return "Deshna";
}

interface Stark{
    name: string;
    age?: number;
}

function printName(stark : Stark ){
    console.log(stark.name);
}
printName({name:"moni"});
printName({name: "john"});
*/ 
