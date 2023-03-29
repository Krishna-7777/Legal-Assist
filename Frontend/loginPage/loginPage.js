
const fillDetail = document.querySelector(".fillDetail")
const changeBtn  = document.querySelector(".changeBtn")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")




function changeBtn(){
    fillDetail.innerHTML = ""
    // changeBtn.innerText = "signb"
}


//it is for create account

const createAccount = () =>{
    let obj = {
        name : name.value,
        email : email.value,
        password : password.value
    }
    postNewCreateAccount(obj);
}


async function  postNewCreateAccount(obj) {
    // console.log(obj)
    try {
        let res = await fetch("",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })
        if(res){
            let data = await res.json()
            alert(data.msg)
        }
        
    } catch (error) {
        console.log("something error while create account")
    }

}