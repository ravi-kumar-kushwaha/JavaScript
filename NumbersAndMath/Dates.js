//+++++++++++++++++++++++++++++Dates+++++++++++++++++++++++++++++
 let myDate = new Date();
console.log(myDate);//2024-10-07T07:04:29.407Z
console.log(myDate.toString());//Mon Oct 07 2024 07:05:11 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());//Mon Oct 07 2024
console.log(myDate.toISOString());//2024-10-07T07:08:54.389Z
console.log(myDate.toJSON());//2024-10-07T07:08:54.389Z
console.log(myDate.toLocaleDateString());//10/7/2024
console.log(myDate.toLocaleString());//10/7/2024, 7:08:54 AM
console.log(myDate.toLocaleTimeString());//7:08:54 AM
console.log(myDate.toTimeString());//07:08:54 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());//Mon, 07 Oct 2024 07:08:54 GMT
console.log(myDate.getTimezoneOffset());//0
console.log(typeof (myDate));//object

let myCreatedDate = new Date("2024,12,12");
console.log(myCreatedDate);//2024-12-12T00:00:00.000Z
console.log(myCreatedDate.toDateString());//Thu Dec 12 2024

let mytimestamps = Date.now();
console.log(mytimestamps);//17282856945
console.log(mytimestamps/1000);//1728285889.587
console.log(myCreatedDate.getTime());//1733961600000


let newDate = new Date();
console.log(newDate.getDate());//7
console.log(newDate.getDay());//1
console.log(newDate.getFullYear());//2024
console.log(newDate.getHours());//7
console.log(newDate.getMonth()+1);//10

console.log(newDate.toLocaleString("default",{
    weekday:"long"
}))//Monday
