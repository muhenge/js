const fun = (name,age)=>{
    const me = () =>{
        console.log(`my name is ${name}, I am ${age}`);
    }
    return {name, age, me};
}

const person = fun('herve',35);

person.me();
