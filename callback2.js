let employees = [{
        id: 1,
        name: 'Fernando'
    },
    {
        id: 2,
        name: 'Melissa'
    },
    {
        id: 3,
        name: 'Juan'
    }
];

let salaries = [{
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 2000
    }
]

let getEmployee = (id, callback) => {

    let employee = employees.find(employee => employee.id === id)

    if (!employee) {
        callback(`Employee with ${id} doesn't exist`);
    } else {
        callback(null, employee);
    }
};

let getSalary = (employee, callback) => {
    let salary = salaries.find(salario => salario.id === employee.id);

    if (!salary) {
        callback(`Salary of ${employee.id} doesn't exist`)
    } else {
        callback(null, {
            name: employee.name,
            salary: salary.salary
        })
    }
};

getEmployee(4, (err, employee) => {
    if (err) {
        return console.log(err);
    }

    getSalary(employee, (err, salary) => {
        if (err) {
            return console.log(err);
        }

        console.log(`The salary of ${employee.name} is ${salary.salary}`);
    })

});