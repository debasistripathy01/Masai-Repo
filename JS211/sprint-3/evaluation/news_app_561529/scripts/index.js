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

var userDataArr = JSON.parse(localStorage.getItem("user")) || [];

function fileData(n, i, e, c) {
  this.name = n;
  this.pic = i;
  this.email = e;
  this.country = c;
}

function userData(event) {
  event.preventDefault();

  let name = form.user_name.value;
  let pic = form.user_pic.value;
  let email = form.user_email.value;
  let country = form.country.value;

  let Data = new fileData(name, pic, email, country);

  userDataArr.push(Data);
  localStorage.setItem("user", JSON.stringify(userDataArr));
  console.log(userDataArr);
  window.location.reload();
}
