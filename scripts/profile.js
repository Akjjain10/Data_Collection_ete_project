const name = document.getElementById("name");
const age = document.getElementById("age");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const email = document.getElementById("email");


btn.addEventListener("click", getInput);
function getInput() {
  let checkname = name.value;
  let checkage = age.value;
  let checkaddress = address.value;
  let checkphone = phone.value;
  let checkemail = email.value;
  if (checkname === "") {
    alert("Please fill all fields");
    return;
  }
  if(checkaddress==="")
  {
    alert("Please fill all fields");
    return; 
  }
  if(checkage==="")
  {
    alert("Please fill all fields");
    return;
  }
  if(checkemail==="")
  {
    alert("Please fill all fields");
    return;
  }
  if(checkphone==="")
  {
    alert("Please fill all fields");
    return;
  }
}