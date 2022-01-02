let fs=require("fs");
// Create File
fs.writeFile("./employees.json",'{"name": "Employee 1 Name", "salary": 2000}',{encoding: "utf-8"},(err)=>{
    if (err) throw err;
})
// Read File
fs.readFile("./employees.json",{encoding: "utf-8"},(err,data)=>{
    if(err) throw err;
    console.log(data);
})
// Update File
fs.appendFile("./employees.json",',{"name":"Employee 2 Name","salary": 5555}',{encoding: "utf-8"},(err)=>{
if(err) throw err;
})
// Delete File
fs.unlink("./employees.json",(err)=>{
    if(err) throw err;
})