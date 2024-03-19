function cat(input) {
   
    class Cat {
        constructor(name, age){
            this.name=name;
            this.age = age;
        }
        meow (){
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

for (let i=0; i<input.length; i++){
    let data =input[i].split(` `)
    let name=0
    let age=0;
    [name, age] = [data[0], data[1]];
let cat = new Cat(name, age)
cat.meow()
}

}
cat(['Mellow 2', 'Tom 5']);
cat(['Candy 1', 'Poppy 3', 'Nyx 2']);