class Department {
    // private readonly id: string
    // public name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        this.name = name
    }

    describe(this: Department) {
        console.log(`Department ${this.id}: ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInfo() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, "IT")
        this.admins = admins
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
    }
    addReports(text: string) {
        this.reports.push(text)
    }
    getReports() {
        console.log(this.reports)
    }
}

const accounting = new AccountingDepartment("abc123", []);
accounting.addReports("A brand new report for taxes")

const IT = new ITDepartment("d1", ["max"]);

IT.addEmployee("Max");
IT.addEmployee("bob");
//IT.employees[2] ='ss'

IT.printEmployeeInfo();

IT.describe();

console.log(accounting)

console.log(IT)