let token = localStorage.getItem("token")
let username =localStorage.getItem("name")
if (!token) {
    window.location = "./Lawyerlogin.html"
}

document.getElementById("bookSlot").addEventListener("click", async () => {
        let time=document.getElementById("time").value.toString()
        let date=(document.getElementById("date").value).toString()
        let available=true
        let payload= JSON.stringify({ username,time,date,available})
        if(time && date){
            let res = await fetch("http://127.0.0.1:4500/lawyer/add", {
        method: "POST",
        headers: {
            "authorization": token,
            "Content-Type":"application/json"
        },body: payload 
    })
    res=await res.json()
    document.getElementById("response").innerText=res.msg
    setTimeout(()=>{
        document.getElementById("response").innerText=""
     },1000)
        }else{
             document.getElementById("response").innerText="Please enter Date and Time"
             setTimeout(()=>{
                document.getElementById("response").innerText=""
                document.getElementById("time").value=""
                document.getElementById("date").value=""
             },1000)
        }
    
})