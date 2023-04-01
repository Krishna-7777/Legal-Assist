function savename() {
  // localStorage.setItem("name", "Nikhil");
  window.location.href ="./loginPage/loginPage.html";
}

// let logout = document.getElementById("logout");
let profile = document.getElementById("profile");
let fullname = localStorage.getItem("name") || null;
profile.innerHTML = fullname || "My Profile";

let signupdiv = document.getElementById("signup-logout-btn");
!fullname
  ? (signupdiv.innerHTML = `
<button id="signup" class="signup"  onclick="savename()">Sign up</button>`)
  : (signupdiv.innerHTML = `<button id="logout" onclick="logout()" class="signup" >Log Out</button>`);
let logoutbtn = document.getElementById("logout");

function logout() {
  localStorage.removeItem("name");
  profile.innerHTML = "My Profile";
  window.location.reload();
}

// logoutbtn.addEventListener("click",((e)=>{
// }))
