
// setItem(name, value) – set the value for a name
// removeItem(name) – remove the name-value pair identified by name.
// getItem(name) – get the value for a given name.
// key(index) – get the name of the value in the given numeric position.
// clear() – remove all values.

localStorage.setItem("name","aman");
localStorage.setItem("theme","dark")

let data=localStorage.getItem("name")
let theme=localStorage.getItem("theme");

console.log(data)
console.log(theme)


// if we want to store array in local storage we have 
// to use Json.ToStringify method to set local storage
// to get JSON.parse method to get data;

let arr=["pubg","call of duty","other games"];

localStorage.setItem("games",JSON.stringify(arr))

let gamesData=JSON.parse(localStorage.getItem("games"))

console.log(gamesData)