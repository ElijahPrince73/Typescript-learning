class Department {
    // private readonly id: string
    // public name: string;
    protected employees: string[] = [];

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
    private lastReport:  string;

    get mostRecentReport() {
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found")
    }
    set mostRecentReport(value: string) {
        if(!value) {
            throw new Error("Please add value")
        }
        this.addReports(value)
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0]
    }

    addEmployee(name: string) {
        if(name === 'Max') {
            return
        }
        this.employees.push(name)
    }

    addReports(text: string) {
        this.reports.push(text)
        this.lastReport = text
    }
    getReports() {
        console.log(this.reports)
    }
}

const accounting = new AccountingDepartment("abc123", []);
accounting.mostRecentReport = 'taxes 2021'
accounting.addReports("A brand new report for taxes")
accounting.addEmployee('Herbert')

const IT = new ITDepartment("d1", ["max"]);

IT.addEmployee("Max");
IT.addEmployee("bob");
//IT.employees[2] ='ss'

IT.printEmployeeInfo();

IT.describe();

console.log("Accounting ",accounting)

console.log("IT",IT)

console.log("Most recent report:", accounting.mostRecentReport)