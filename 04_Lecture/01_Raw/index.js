let num = 10
let num2 = 50


// console.log(num);

num2 = "Aditya"

num2 = null

let Firstname;
// console.log(Firstname);


// console.log(typeof Firstname)


let email = Symbol()

let username = {
    Firstname : "aniket",
    age: 18,
    [email]: "aniket@gmail.com"
}

console.log(username.Firstname);

console.log(username['Firstname']);


console.log("email : ", username[email]);


console.log("Object Keys : ", Object.keys(username));

// console.log(username.age);
// console.log(username.email);

// console.log(typeof username);


let rollno = [10, 20, 50, 60]

console.log(rollno);
console.log(typeof []);