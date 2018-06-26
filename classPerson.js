class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.autoIncrement = this.autoIncrement.bind(this);
      this.stop = this.stop.bind(this);
      this.interval = null;
      this.autoIncrement();
    }
    autoIncrement() {
       this.interval = setInterval (() => {
         this.age++;
         console.log(this.age)
       }, 1000);   
    }
    stop(){
        clearInterval(this.interval);
    }
  }
  
  let A = new Person("A", 37);
  let B = new Person("B", 36);
  let C = new Person("C", 33);
  let D = new Person("D", 35);
  const arr1 = [A,B,C,D];

function check(arr){
  
  setInterval(() => {
      arr.forEach((person, index) => {
          if (person.age >= 40) {
            arr.splice(index, 1);
            console.log(person.name + " dead");
            person.stop();
        }
    });
  }, 1000);
}  

check(arr1);

function createMember() {
  let names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  let myArr =[];

  setInterval(() => {
    let randomAge = Math.floor(Math.random() * 50 +1);
    let randomName = names[Math.floor(Math.random()*names.length)];

    myArr.push(new Person(randomName, randomAge));

  }, 2000);

  return myArr;
}
  check(createMember());



