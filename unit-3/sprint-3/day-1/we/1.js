// ES6


const user = {
    name: 'raj',
    age: 25,
    city: 'pune'
}

let { name, city } = user;
console.log('name:', name);


// fetch request

fetch("https://reqres.in/api/users?page=2")
    .then((res) => {
        return res.json().then((res) => {
            console.log("res:", res)

            // let data = res.data;
            // let name = data.first_name;
            // let email = data.email

            let { first_name, email } = data
            console.log("email :", email)
            console.log("first_name", first_name)
        })
    })

let { name: anything } = user

console.log("name :", anything, city)