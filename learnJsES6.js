c =(coment)=>"--"+coment+"--"

//Arrow function
console.log(c("Arrow Function"))
fullname = (fname,lname)=>fname+lname
setage = (age)=>"อายุ = "+age
console.log(fullname("nontawat","noituptim"))
console.log(setage(20))

//Object
console.log(c("Object"))
const customername ="nontawat"
const age = 25
const address ="thai"
const customer = {customername,age,address,
    //method
    showData(){
        console.log("ข้อมูลลุกค้า = "+customername)
    }
}
//แสดง object
console.log(customer);
//เรียกใช้ method
customer.showData()

//rest Paremeter
console.log(c("Rest parameter"))
summation =(...numberArr)=>{
    let total = 0
    //วนลูปเข้าไปนับข้อมูลใน Array
    for(let number of numberArr) total+=number
    return total
}
console.log(summation(500,100,1500,2000))