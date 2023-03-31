let token = localStorage.getItem("token")
let username =localStorage.getItem("name")
if (!token) {
    window.location = "./Lawyerlogin.html"
}

document.getElementById("bookSlot").addEventListener("click", async () => {
        let time=document.getElementById("time").value
        let date=document.getElementById("date").value
        if(time && date){
            let res = await fetch("http://127.0.0.1:4500/lawyer/add", {
        method: "POST",
        headers: {
            "authorization": token,
            body: {
                username,time,date,available:"true"
            }
        }

    })
    document.getElementById("response").innerText="res"
    setTimeout(()=>{
        document.getElementById("response").innerText=""
     },1000)
    console.log(await res.json(),time)
        }else{
             document.getElementById("response").innerText="Please enter Date and Time"
             setTimeout(()=>{
                document.getElementById("response").innerText=""
             },1000)
        }
    
})