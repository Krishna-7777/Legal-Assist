let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IktyaXNobmFAZ21haWwuY29tIiwiaWF0IjoxNjgwMTgyOTQwLCJleHAiOjE2ODA3ODc3NDB9.sOaQeyXlTxuwt-qcE8yI9USYc373lnttNai7SH-kEjU";

let admintoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IktyaXNobmFAZ21haWwuY29tIiwiaWF0IjoxNjgwMTgyOTQwLCJleHAiOjE2ODA3ODc3NDB9.sOaQeyXlTxuwt-qcE8yI9USYc373lnttNai7SH-kEjU"

let body=document.querySelector("#mainBody");

document.querySelector("#userDetails").addEventListener("click",()=>{
    body.innerHTML="<h1>User Details</h1>"
})

document.querySelector("#lawyerDetails").addEventListener("click",async()=>{
    let Html="<h2 style='text-align:center'>Lawyer Details</h2><div class='Lawyer'><h3>Name</h3><h3>Type</h3></div>";
        let data= await (await fetch("http://127.0.0.1:4500/avail/",{
          headers:{
            "Authorization":token
          }
        })).json();
      data.map(i => {
        Html += `
        <div class="Lawyer">
          <h3>${i.username}</h3>
          <h3>${i.type}</h3>
        </div>
        `
      })
    body.innerHTML=Html
})

document.querySelector("#showBookings").addEventListener("click",()=>{
    body.innerHTML="<h1>Booking Details</h1>"
})