function toggle() {
  document.getElementById("myDropdown").classList.toggle("show");
}

let cache;

let DummyData = [
  {
    "name": "John Smith",
    "email": "johnsmith@gmail.com",
    "type": "Environmental Lawyer"
  },
  {
    "name": "Sarah Davis",
    "email": "sarahdavis@yahoo.com",
    "type": "Family Lawyer"
  },
  {
    "name": "Michael Johnson",
    "email": "michaeljohnson@outlook.com",
    "type": "Corporate Lawyer"
  },
  {
    "name": "Emily Wilson",
    "email": "emilywilson@gmail.com",
    "type": "Civil Lawyer"
  },
  {
    "name": "David Lee",
    "email": "davidlee@yahoo.com",
    "type": "Intellectual Property Lawyer"
  },
  {
    "name": "Samantha Scott",
    "email": "samanthascotate Planning Lawyert@outlook.com",
    "type": "Tax Lawyer"
  },
  {
    "name": "Daniel Rodriguez",
    "email": "danielrodriguez@gmail.com",
    "type": "Cyber Lawyer"
  },
  {
    "name": "Rachel Green",
    "email": "rachelgreen@yahoo.com",
    "type": "Estate Planning Lawyer"
  },
  {
    "name": "Adam Johnson",
    "email": "adamjohnson@gmail.com",
    "type": "Workers Compensation Lawyer"
  },
  {
    "name": "Mary Thompson",
    "email": "marythompson@outlook.com",
    "type": "Public Interest Lawyer"
  },
  {
    "name": "Jennifer Hernandez",
    "email": "jenniferhernandez@yahoo.com",
    "type": "Medical Malpractice Lawyer"
  },
  {
    "name": "Kevin Brown",
    "email": "kevinbrown@gmail.com",
    "type": "Merger and Acquisition Lawyer"
  },
  {
    "name": "William Martin",
    "email": "williammartin@outlook.com",
    "type": "Merger and Acquisition Lawyer"
  },
  {
    "name": "Laura Wilson",
    "email": "laurawilson@yahoo.com",
    "type": "Bankruptcy Lawyer"
  },
  {
    "name": "Edward Davis",
    "email": "edwarddavis@gmail.com",
    "type": "Securities Lawyer"
  },
  {
    "name": "Brian Lee",
    "email": "brianlee@yahoo.com",
    "type": "Military Lawyer"
  },
  {
    "name": "Ashley Green",
    "email": "ashleygreen@gmail.com",
    "type": "Contract Lawyer"
  },
  {
    "name": "Christopher Hernandez",
    "email": "christopherhernandez@outlook.com",
    "type": "Government Lawyer"
  },
  {
    "name": "Stephanie Nguyen",
    "email": "stephanienguyen@yahoo.com",
    "type": "Immigration Lawyer"
  },
  {
    "name": "Jason Kim",
    "email": "jasonkim@gmail.com",
    "type": "Environmental Lawyer"
  }, {
    "name": "Katherine Evans",
    "email": "katherineevans@gmail.com",
    "type": "Family Lawyer"
  },
  {
    "name": "Oliver Brown",
    "email": "oliverbrown@outlook.com",
    "type": "Corporate Lawyer"
  },
  {
    "name": "Jessica Martinez",
    "email": "jessicamartinez@yahoo.com",
    "type": "Civil Lawyer"
  },
  {
    "name": "Ryan Patel",
    "email": "ryanpatel@gmail.com",
    "type": "Intellectual Property Lawyer"
  },
  {
    "name": "Natalie Davis",
    "email": "nataliedavis@yahoo.com",
    "type": "Tax Lawyer"
  },
  {
    "name": "William Jones",
    "email": "williamjones@gmail.com",
    "type": "Cyber Lawyer"
  },
  {
    "name": "Julia Kim",
    "email": "juliakim@outlook.com",
    "type": "Estate Planning Lawyer"
  },
  {
    "name": "Lucas Garcia",
    "email": "lucasgarcia@yahoo.com",
    "type": "Worker's Compensation Lawyer"
  },
  {
    "name": "Samantha Patel",
    "email": "samanthapatel@gmail.com",
    "type": "Public Interest Lawyer"
  },
  {
    "name": "Anthony Rodriguez",
    "email": "anthonyrodriguez@yahoo.com",
    "type": "Medical Malpractice Lawyer"
  }
];

;(async()=>{
  let token=localStorage.getItem("token");
  let data= await (await fetch("http://127.0.0.1:4500/avail/",{
    headers:{
      "Authorization":token
    }
  })).json();
  if(!token){
    window.location="./loginPage/loginPage.html"
  }
  let Html = "";
data.map(i => {
  Html += `
  <div class="Lawyer">
    <div></div>
    <h3>${i.username}</h3>
    <h3>${i.type}</h3>
    <button onClick='Redirect("${i.username}","${i.type}","${i._id}")'>Book Now</button>
  </div>
  `
})
cache=Html;
document.querySelector("#LawyerList").innerHTML = Html;
})()

Redirect = (name, type, id) => {
  let lawyer = { name, type, id };
  localStorage.setItem("lawyer", JSON.stringify(lawyer))
  window.location = "./booking.html"
}

let btns=document.querySelectorAll("#myDropdown button");
for(let b of btns){
b.addEventListener("click",async(e)=>{
  let type=e.target.innerText
  document.querySelector("#LawyerList").innerHTML =`Loading the data of ${type}...`
    let token=localStorage.getItem("token");
    let data= await (await fetch(`http://127.0.0.1:4500/avail/type/${type}`,{
      headers:{
        "Authorization":token
      }
    })).json();
    let Html = `No Lawyers Found with type ${type}`;
    if(data.length){
      Html=""
      data.map(i => {
    Html += `
    <div class="Lawyer">
      <div></div>
      <h3>${i.username}</h3>
      <h3>${i.type}</h3>
      <button onClick='Redirect("${i.username}","${i.type}","${i._id}")'>Book Now</button>
    </div>
    `
  })
    }
  document.querySelector("#LawyerList").innerHTML = Html;
})
}

document.querySelector("#Search").addEventListener("click",async()=>{
  let name=document.querySelector("#inputBox").value;
    let token=localStorage.getItem("token");
    if(name.length){
  document.querySelector("#LawyerList").innerHTML =`Loading the data with name ${name}...`
      let data= await (await fetch(`http://127.0.0.1:4500/avail/name/${name}`,{
      headers:{
        "Authorization":token
      }
    })).json();
    let Html = `No Lawyers Found with name ${name}`;
    if(data.length){
      Html=""
      data.map(i => {
    Html += `
    <div class="Lawyer">
      <div></div>
      <h3>${i.username}</h3>
      <h3>${i.type}</h3>
      <button onClick='Redirect("${i.username}","${i.type}","${i._id}")'>Book Now</button>
    </div>
    `
  })
    }else{
 setTimeout(()=>{
      document.querySelector("#LawyerList").innerHTML =cache
    },1500)
    }
  document.querySelector("#LawyerList").innerHTML = Html;
    }
    
})