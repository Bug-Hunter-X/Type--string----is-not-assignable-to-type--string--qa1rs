function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
// Solution 1: Accessing the array element
console.log(greeter(user[0])); // Accesses the first element of the array

//Solution 2: Handling array input
function greeterArray(people: string[]): string {
    return "Hello, " + people.join(', ');
}
console.log(greeterArray(user)); //Correctly handles the array input
//Solution 3: Using a type assertion (less recommended, use only if you are 100% sure)
console.log(greeter(user as unknown as string)); //Less recommended