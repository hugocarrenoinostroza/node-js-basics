let getName = async() => {
    return 'Bob';
}

console.log(getName());

getName().then((name) => console.log(name));


let greeting = async() => {

    let name = await getName();

    return `Hello ${name} `

}

greeting().then((result) => {
    console.log(result);
}).catch((err) => {

});