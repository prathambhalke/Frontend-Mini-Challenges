setInterval(() => {
    let d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();

    hrr = hour * 30 + minute / 2;
    mn= 6*minute;
    sc= 6*second;

    hr.style.transform=`rotate(${hrr}deg)`;
    min.style.transform=`rotate(${mn}deg)`;
    sec.style.transform=`rotate(${sc}deg)`;
},1000);

console.log("hey shivam")