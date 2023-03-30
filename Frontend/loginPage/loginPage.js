
// USER SIGNIN / SING UP
const fillDetail = document.querySelector(".fillDetail")
const change = document.querySelector(".changeBtn")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const type = document.querySelector("#select")

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
                <div>
                    <select name="" id="giveType">
                        <option value="">Option</option>
                        <option value="users">User</option>
                        <option value="lawyer">lawyer</option>
                    </select>
                </div>
                <div>
                    <!-- <span>Email</span> -->
                    <input type="email" name="" placeholder="Enter Your Email" id="email" required>
                </div>
                <div>
                    <!-- <span>Password</span> -->
                    <input type="password" name="" id="password" placeholder="Enter password
                    " required>
                </div>
                
            </div>
            <button  class="signUpBtn">SIGN IN</button>
        </div>
        `
        const option = document.querySelector("#giveType")
       
        const email = document.querySelector("#email")
        const password = document.querySelector("#password")
        let create = document.querySelector(".signUpBtn")
        create.addEventListener("click", ()=>{
            // console.log("hello")
            let obj = {
                email: email.value,
                password: password.value
            }
            if(obj.email=="admin@gmail.com" && obj.password=="admin"){
                alert("hello admin")
                // window.location.href = "admin.html"
            }else{
                if(option.value=="" || option.value=="users"){
                    loginAccount(obj, "users")

                }else{
                    loginAccount(obj, "lawyer")
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
                <div>
                 
                    <input type="name" name="" id="name" placeholder="Enter Your Name" required>
                </div>
                <div>
                    
                    <input type="email" name="" placeholder="Enter Your Email" id="email" required>
                </div>
                <div>
                    <input type="password" name="" id="password" placeholder="Enter password
                    " required>
                </div>
                <p>If You Are Lawer Fill Below <span style="color:red;">Type</span></p>
                <div>
                    <select name="hello" id="select" onchange="select()">
                        <option value="">NOTHING</option>
                        <option value="Environmental Lawyer">Environmental Lawyer</option>
                        <option value="Family Lawyer">Family Lawyer</option>
                        <option value="Corporate Lawyer">Corporate Lawyer</option>
                        <option value="Civil Lawyer">Civil Lawyer</option>
                        <option value="Intellectual Property Lawyer">Intellectual Property Lawyer</option>
                        <option value="Tax Lawyer">Tax Lawyer</option>
                        <option value="Cyber Lawyer">Cyber Lawyer</option>
                        <option value="Estate Planning Lawyer">Estate Planning Lawyer</option>
                        <option value="Workers Compensation Lawyer">Workers Compensation Lawyer</option>
                        <option value="Public Interest Lawyer">Public Interest Lawyer</option>
                        <option value="Medical Malpractice Lawyer">Medical Malpractice Lawyer</option>
                        <option value="Merger and Acquisition Lawyer">Merger and Acquisition Lawyer</option>
                        <option value="Labour Lawyer">Labour Lawyer</option>
                        <option value="Bankruptcy Lawyer">Bankruptcy Lawyer</option>
                        <option value="Securities Lawyer">Securities Lawyer</option>
                        <option value="Military Lawyer">Military Lawyer</option>
                        <option value="Contract Lawyer">Contract Lawyer</option>
                        <option value="Government Lawyer">Government Lawyer</option>
                        <option value="Immigration Lawyer">Immigration Lawyer</option>
                       
                    </select>
                </div>
            </div>
            <button class="signUpBtn">SIGN UP</button>
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
            if(type.value!=""){
                obj.type = type.value
                NewCreateAccount(obj, "lawyer")
                // console.log(obj)
            }else{
                NewCreateAccount(obj, "users");
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
    if(type.value!=""){
        obj.type = type.value
        NewCreateAccount(obj, "lawyer")
    }else{
        NewCreateAccount(obj, "users");
    }
}

// ACCOUNT CREATE
async function NewCreateAccount(obj, type) {
    // console.log(obj, type)
    try {
        let res = await fetch(`http://localhost:4700/${type}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if (res) {
            let data = await res.json()
            alert(data.msg)
        }

    } catch (error) {
        console.log("something error while create account")
    }
}

// LOGIN ACCOUNT
async function loginAccount(obj, type){
    // console.log(obj, type)
    try {
        let res = await fetch(`http://localhost:4700/${type}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        if (res) {
            let data = await res.json()
            alert(data.msg)
        }
    } catch (error) {
        console.log("something went wrong in login account")
    }
}