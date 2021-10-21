const Employee= require("./Employee");

class Manager extends Employee{
    constructor (name, id, email, role, officeNo) {
        super(name, id, email);
        this.officeNo = officeNo;
    }
    
    getRole() {
        return "Manager";
    }
    getOfficeNo() {
        return this.officeNo;
    }
}

module.exports = Manager;