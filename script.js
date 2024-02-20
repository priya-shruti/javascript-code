class employee{
    constructor(name) {
        this.empname=name;
        document.write("Constructor : Employee");
    }
    info(){
        document.write("Employee" + this.empname);
    }
}
class manager extends employee{
    info() {
        document.write("Manager Name:" + this.empname);
    }
}
let a = new manager("Yahoo Baba");
a.info();