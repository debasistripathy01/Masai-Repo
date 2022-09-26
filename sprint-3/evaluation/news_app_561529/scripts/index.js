/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

document.getElementById("form").addEventListener("submit", userData);

// var userDataArr = JSON.parse(localStorage.getItem("user")) || [];

// function fileData(n, i, e, c) {
//   this.name = n;
//   this.pic = i;
//   this.email = e;
//   this.country = c;
// }

function userData(event) {
  event.preventDefault();

  let data = {
    name : form.user_name.value,
    pic : form.user_pic.value,
    email : form.user_email.value,
    country : form.country.value
  }

  console.log(data)

  // let Data = new fileData(name, pic, email, country);


  // userDataArr.push(Data);
  localStorage.setItem("user", JSON.stringify(data));
  document.getElementById("form").innerText = null;
  console.log(user);
  window.location.href="worldNews.html";
}
