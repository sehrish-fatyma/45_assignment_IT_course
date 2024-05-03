//Datatype of person
interface person {
  age: number;
  name: string;
  nationality: string;
  student: boolean;
}
//person object
let person: person = {
  age: 26,
  name: "sehrish",
  nationality: "Pakistani",
  student: true,
};
console.log(person);

interface car {
  brand: string;
  color: string;
  automatic: boolean;
}
//car object
let car = {
  brand: "Toyota",
  color: "red",
  automatic: true,
};
console.log(car);
