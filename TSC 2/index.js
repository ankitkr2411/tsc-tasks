function checkData() {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;

  let ph = document.getElementById("phone").value;
  let p = document.getElementById("password").value;
  let cp = document.getElementById("cpassword").value;

  

  let le = localStorage.getItem("email");

  if (e === le) {
    alert("email already registered");
  } else if (p === cp) {
    alert("registered");
    localStorage.setItem("name", n);
    localStorage.setItem("email", e);
    localStorage.setItem("phone", ph);
    localStorage.setItem("password", p);
    window.open("./login.html");
  } else {
    alert("Password not same");
  }
}

function validate() {
  let e = document.getElementById("email").value;
  let p = document.getElementById("password").value;

  let pass = localStorage.getItem("password");


  if (p == pass) {
    window.open("./user.html");
  } else {
    alert("Invalid Credentials");
  }
}


function forgot(){
    let email=prompt("Enter your email");

    let getemail = localStorage.getItem("email");

    if(email!=getemail)
    {
        alert("Email is not Valid");
        return;
    }

    let password=prompt("Enter new password");
    localStorage.setItem("password",password);
}


