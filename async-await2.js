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


let getEmployee = async(id) => {


    let employee = employees.find(employee => employee.id === id)

    if (!employee) {
        throw new Error(`Employee with id : ${id} doesn't exist`)
    } else {
        return employee
    }


}

let getSalary = async(employee) => {

    let salary = salaries.find(salary => salary.id === employee.id);

    if (!salary) {
        throw new Error(`Salary with id: ${employee.id} doesn't exist`)
    } else {
        return {
            name: employee.name,
            salary: salary.salary
        }
    }
}

let getSalaryEmployee = async(id) => {

    let employee = await getEmployee(id);
    let salary = await getSalary(employee);

    return `The salary of ${employee.name} is ${salary.salary}`

}

getSalaryEmployee(3).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err.message);
});