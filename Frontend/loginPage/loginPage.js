
// USER SIGNIN / SING UP
const fillDetail = document.querySelector(".fillDetail")
const change = document.querySelector(".changeBtn")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const type = document.querySelector("#select")

let img = document.querySelector(".navImg")
img.addEventListener("click", ()=>{
    // console.log("hello")
    window.location.href = "../index.html"
})

let flag = true
function changeBtn() {
    // console.log("hello")
    if (flag) {
        flag = false
        // console.log("true")
        change.innerText = "SIGN UP"
        fillDetail.innerHTML = `
        <div class="createAccount">
            <h1>LOGIN ACCOUNT</h1>
            <p>use your email for Login:</p>
            <div class="fillCredential">
                <form action="">
                    <input type="email" name="" placeholder="Enter Your Email" id="email" required>
                    <input type="password" name="" id="password" placeholder="Enter password" required>
                </form>
            </div>
            <button  class="signUpBtn">SIGN IN</button>
        </div>
        `
        const email = document.querySelector("#email")
        const password = document.querySelector("#password")
        let create = document.querySelector(".signUpBtn")
        create.addEventListener("click",async ()=>{
            // console.log("hello")
            let obj = {
                email: email.value,
                password: password.value
            }
            if(obj.email=="admin@gmail.com" && obj.password=="admin"){
                try {
                    let res = await fetch(`https://breakable-deer-earrings.cyclic.app/admin/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({"email":"admin@gmail.com","password":"admin"})
                    })
                    if (res) {
                        let data = await res.json()
                        alert(data[0].message)
                        console.log(data)
                    localStorage.setItem("token",data[1].Access_Token) 
                    }
                } catch (error) {
                    console.log("something error while create account")
                }
                window.location.href = "../admin.html"
            }else{
                if(obj.email=="" || obj.password==""){
                    alert("Plz fill credential")
                }else{
                    userLoginAccount(obj)
                }
            }
            // console.log(obj)
        })
    } else {
        flag = true
        // console.log("false")
        change.innerText = "SIGN IN"
        fillDetail.innerHTML = `
        <div class="createAccount">
            <h1>Create Account</h1>
            <p>use your email for registration:</p>
            
            <div class="fillCredential">
                <form action="">
                    <input type="name" name="" id="name" placeholder="Enter Your Name" required>
                    <input type="email" name="" placeholder="Enter Your Email" id="email" required>
                    <input type="password" name="" id="password" placeholder="Enter password" required>
                </form>
            </div>
            <button onclick="createAccount()" class="signUpBtn">SIGN UP</button>
            <p>If You are Lawyer ? <a href="./lawyerLoginpage.html">Click here!</a></p>
        </div>
        `
        const name = document.querySelector("#name")
        const email = document.querySelector("#email")
        const password = document.querySelector("#password")
        let create = document.querySelector(".signUpBtn")
        create.addEventListener("click", ()=>{
            // console.log("hello")
            let obj = {
                username: name.value,
                email: email.value,
                password: password.value,
            }
            if(obj.username=="" || obj.email=="" || obj.password=="" ){
                alert("Plz fill credential")
            }else{
               usersAccountcreate(obj)
            }
        })
    }
}


// CREATE ACCOUNT
const createAccount = () => {
    let obj = {
        username: name.value,
        email: email.value,
        password: password.value,
    }
    if(obj.username=="" || obj.email=="" || obj.password=="" ){
        alert("Plz fill credential")
    }else{
       usersAccountcreate(obj)
    }
}

// ACCOUNT CREATE
async function usersAccountcreate(obj) {
    console.log(obj)
    try {
        let res = await fetch(`https://breakable-deer-earrings.cyclic.app/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if (res) {
            let data = await res.json()
            alert(data[0].message)
        }

    } catch (error) {
        console.log("something error while create account")
    }
}

// LOGIN ACCOUNT
async function userLoginAccount(obj){
    console.log(obj)
    try {
        let res = await fetch(`https://breakable-deer-earrings.cyclic.app/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if (res) {
            let data = await res.json()
            let message = data[0].message
            let name = data[1].username
            let token = data[1].Access_Token
            localStorage.setItem("name", name)
            localStorage.setItem("token", token)
            alert(message)
            window.location="../HomePage.html"
        }
    } catch (error) {
        console.log("something went wrong in login account")
    }
}