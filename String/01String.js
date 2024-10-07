console.log(" Hello "+"World!");  // Hello World!
let name = "Ravi Kumar Kushwaha"
let age = 25;
console.log(`my name is ${name} and i am ${age} year old!`);
//my name is Ravi Kumar Kushwaha and i am 25 year old!
console.log(`my name is ${name.toUpperCase()} and i am ${age} year old!`);
//my name is RAVI KUMAR KUSHWAHA and i am 25 year old!

const studentName = new String("Virat Verma");
console.log(studentName);//[String: 'Virat Verma']
console.log(studentName[0]);//V
console.log(studentName.__proto__);//{}
//length
console.log(studentName.length);//11
//toUpperCase()
console.log(studentName.toUpperCase());//VIRAT VERMA
//charAt()
console.log(studentName.charAt(3));//a
//indexOf()
console.log(studentName.indexOf("a"));//3
//substring()
const studentName1 = studentName.substring(0,5);//used to return the substring of original string
console.log(studentName1);//Virat
//slice(start,end)
const studentName2 = studentName.slice(0,5);//it also return the value of negative index
console.log(studentName2);//Virat
const studentName3 = studentName.slice(-5);//Verma
console.log(studentName3);
const studentName4= studentName.slice(-11,5);
console.log(studentName4);//Virat
//trim()
const newString = "    Ravi    ";
console.log(newString);//    Ravi    
console.log(newString.trim());//Ravi

//replace()
console.log(newString.replace("Ravi","Manish"));//    Manish  
console.log(newString.replace("Ravi","Manish").trim());//Manish
//includes()
console.log(newString.includes("vi"));//true

//split
console.log(name.split("-"));//[ 'Ravi Kumar Kushwaha' ]
