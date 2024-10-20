let arr = ['ravi','virat','sachin'];
for(const name of arr){
console.log(name);
}
/**
    ravi
    virat
    sachin
 */
//for In loop
for(const nam in arr){
    console.log(nam);
    } 
    /**
        0
        1
        2
     */
for(const nam in arr){
console.log(nam+" "+arr[nam]);
}
/**
 0  ravi
    1 virat
    2 sachin
 */
//map
arr.map((index)=>{
console.log(index);
})
/**
    ravi
    virat
    sachin
 */

    const map = new Map();
    map.set('In','india');
    map.set('Pac','pakistan');
    map.set('Bang','bangladesh');
    map.set('Nep','nepal');
    console.log(map);
    /**
     Map(4) {
  'In' => 'india',
  'Pac' => 'pakistan',
  'Bang' => 'bangladesh',
  'Nep' => 'nepal'
}
     */
   for(const [key , value] of map){
    console.log(key+" "+value);
    
   }
   /**
    In india
    Pac pakistan
    Bang bangladesh
    Nep nepal
    */
   Map.map((key)=>{
console.log(key.In);

   })