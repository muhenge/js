const fun = (name,age)=>{
    const me = () =>{
        console.log(`my name is ${name}, I am ${age}`);
    }
    return {name, age, me};
}

const person = fun('herve',35);

person.me();

const myName = name => {
    const out = () => { console.log(name.toUpperCase()); }
    return { name, out }
}

const theName = myName('herve');
theName.out()

const otherFun = ()=> {
    return() => {
         console.log('one');
        }
}
    


const other = otherFun();
other()
otherFun();