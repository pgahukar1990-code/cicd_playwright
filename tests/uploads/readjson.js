const fs= require('fs')
const data=fs.readFileSync('C:\\Users\\NOKIA\\Desktop\\sample1.json','utf8')
const jsonData=JSON.parse(data)
console.log("Raw Data",typeof data)
console.log("Raw Data", data)
console.log("Json Data",typeof jsonData)
console.log("Json Data", jsonData)

