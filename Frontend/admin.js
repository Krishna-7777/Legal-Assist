let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IktyaXNobmFAZ21haWwuY29tIiwiaWF0IjoxNjgwMTgyOTQwLCJleHAiOjE2ODA3ODc3NDB9.sOaQeyXlTxuwt-qcE8yI9USYc373lnttNai7SH-kEjU";

let admintoken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY4MDI2MDY4OCwiZXhwIjoxNjgwMjcxNDg4fQ.QIfzewPPgbl3MpEGBt93hEheqhP8n5jN5bBftiVDh9g"

let body=document.querySelector("#mainBody");

document.querySelector("#userDetails").addEventListener("click", async()=>{
  body.innerHTML="<h2 style='text-align:center'>Loading User Details</h2>"
    let Html="<h2 style='text-align:center'>User Details</h2><div class='Lawyer'><h3>Name</h3><h3>Email</h3></div>";
    let data= await (await fetch("http://127.0.0.1:4500/users/all",{
      headers:{
        "Authorization":admintoken
      }
    })).json();
  data.map(i => {
    Html += `
    <div class="Lawyer">
      <h3>${i.username}</h3>
      <h3>${i.email}</h3>
    </div>
    `
  })
body.innerHTML=Html
})

document.querySelector("#lawyerDetails").addEventListener("click",async()=>{
  body.innerHTML="<h2 style='text-align:center'>Loading Lawyers Data</h2>"
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

document.querySelector("#showBookings").addEventListener("click",async()=>{
  body.innerHTML="<h2 style='text-align:center'>Loading Bookings Data</h2>"
  let Html="<h2 style='text-align:center'>Lawyer Details</h2>";
  let data= await (await fetch("http://127.0.0.1:4500/book/allBookings",{
    headers:{
      "Authorization":admintoken
    }
  })).json();
  console.log(data);
data.map(i => {
  let date=i.date.split(' ');
  date.pop()
  date.pop()
  date.pop()
  date.pop()
  Html += `
  <div class="Booking">
    <h3>User Name : ${i.username}</h3>
    <h3>Lawyer Name : ${i.lawyername}</h3>
    <h3>${date.join(' ')}</h3>
    <h3>${i.time}</h3>
    <h3>Description</h3>
    <h3>${i.description}</h3>
  </div>
  `
})
body.innerHTML=Html
})