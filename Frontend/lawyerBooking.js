(async () => {
    let data = await (await fetch(`http://127.0.0.1:4500/avail/lawyerBookings/${localStorage.getItem("name")}`, {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    })).json();
    console.log(data);
    let Html = "";
    if (data.length) {
        data.map((b) => {
        let date=b.date.split(' ')
        date.pop()
        date.pop()
        date.pop()
        date.pop()
        date.pop()
            Html += `
    <div>
    <h2>Client : ${b.username}</h2>
    <h2>Time : ${b.time}</h2>
    <h2>Date : ${date.join(' ')}</h2>
    <h2>Description : ${b.description}</h2>
    </div>
    <hr>
    `})
    } else {
        Html = "<h2>No Bookings Found</h2>"
    }
    document.getElementById("bookingList").innerHTML = Html
})()