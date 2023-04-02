let token=localStorage.getItem('token')
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY4MDMzNzczMywiZXhwIjoxNjgwMzQ4NTMzfQ.lMVP-uH6mR-lRqAKN9fqAxRJVVlNjy7Iq4gQBOC49I4"

let body=document.querySelector("#mainBody");

document.querySelector("#userDetails").addEventListener("click", async()=>{
  body.innerHTML="<h2 style='text-align:center'>Loading User Details</h2>"
    let Html="<h2 style='text-align:center'>User Details</h2><div class='Lawyer'><h3>Name</h3><h3>Email</h3></div>";
    let data= await (await fetch("https://breakable-deer-earrings.cyclic.app/users/all",{
      headers:{
        "Authorization":token
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
        let data= await (await fetch("https://breakable-deer-earrings.cyclic.app/avail/",{
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
  let data= await (await fetch("https://breakable-deer-earrings.cyclic.app/book/allBookings",{
    headers:{
      "Authorization":token
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