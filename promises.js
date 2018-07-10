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


let getEmployee = (id) => {
    return new Promise((resolve, reject) => {

        let employee = employees.find(employee => employee.id === id)

        if (!employee) {
            reject(`Employee not found with id: ${id}`);
        } else {
            resolve(employee);
        }

    })
}

let getSalary = (employee) => {
    return new Promise((resolve, reject) => {

        let salary = salaries.find(salary => salary.id === employee.id);

        if (!salary) {
            reject(`Salary not found for id: ${employee.id}`)
        } else {
            resolve({
                name: employee.name,
                salary: salary.salary
            })
        }

    })
}


getEmployee(34)
    .then((empleado) => getSalary(empleado))
    .then((result) => console.log(result))
    .catch((err) => {
        console.log(err);
    })