let deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    power: 'Regeneración',
    getName: function() {
        return `${this.name} ${this.lastName} - Power : ${this.power}`;
    }

}

console.log(deadpool.getName());


let { name, lastName, power } = deadpool;

console.log(name, lastName, power);