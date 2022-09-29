let registerData = "https://calm-badlands-50809.herokuapp.com/api/Signup/";




let Register = async () =>{
    try{
      let register_data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      username: document.getElementById("username").value,
      mobile: document.getElementById("mobile").value,
      description: document.getElementById("description").value,
  };

  register_data = JSON.stringify(register_data);

      let res = await fetch(registerData,{   // register
          method: "POST",
          body:register_data,
          headers:{
              "Content-Type":"application/json",
          },
      });
      let data = await res.json();
      console.log(data);
      alert("Registation Succesful!!!");
      window.location.href = "login.html"
    }
    catch(err){
        console.log("err",err);
    }
};