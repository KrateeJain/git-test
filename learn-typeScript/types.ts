class person{
    name: String;
    constructor (name:string){
        this.name=name;
    }
    dance(){
        console.log(this.name+ " is dancing");
    }
}

var katty = new person("katty");
katty.dance();

class AwsomPerson extends person{
    dance(){
        console.log("so Awsm Person !");
        super.dance();
    }
}

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