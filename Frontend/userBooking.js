(async()=>{
    let data= await (await fetch(`http://127.0.0.1:4500/avail/userBookings/${localStorage.getItem("name")}`,{
    headers:{
      "Authorization":localStorage.getItem("token")
    }
  })).json();
  console.log(data);
  let Html="";
  if(data.length){
    data.map((b)=>{
    Html+=`
    <div>
    <h2>Lawyer : ${b.lawyername}</h2>
    <h2>Time : ${b.time}</h2>
    <h2>Date : ${b.date}</h2>
    <h2>Description : ${b.description}</h2>
    </div>
    <hr>
    `})
  }else{
    Html="No Bookings Found"
  }
    document.getElementById("bookingList").innerHTML=Html
})()