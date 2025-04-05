/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item)=>{
    console.log(`id : ${item.id}, name : ${item.name}, age : ${item.age}, profession : ${item.profession}`);
  })
  
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item)=>{
    console.log(`id : ${item.id}, name : ${item.name}, age : ${item.age}, profession : ${item.profession}`);
  })
}

function addData() {
  //Write your code here, just console.log
  let obj= {id:4, name:"susan", age:"20", profession:"intern"};
  arr.push(obj);
  arr.map((item)=>{
    console.log(`id : ${item.id}, name : ${item.name}, age : ${item.age}, profession : ${item.profession}`);
  }) 
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter((item)=>{
    if(item.profession!=="admin"){
      console.log(`id : ${item.id}, name : ${item.name}, age : ${item.age}, profession : ${item.profession}`);
    }
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [{id:5, name:"SK", age:"24", profession:"SDE1"},
    {id:6, name:"RK", age:"25", profession:"SDE2"},
    {id:7, name:"PK", age:"26", profession:"SDE3"}
  ]
 
  let result=arr.concat(arr2);
  result.map((item)=>{
    console.log(`id : ${item.id}, name : ${item.name}, age : ${item.age}, profession : ${item.profession}`);
  })
  
}
