const product ={
    productname : "คอมพิวเตอร์",
    price : 20000,
    stock :10
}
//ซ้ายชื่อ properties ขวา ชื่อตัวแปรที่จะเก็บ
const {productname:Pname,price:p,stock:s}=product
//หรือจะใช้ชื่อเหมือนกัน
const {productname,price,stock}=product
console.log(Pname)
console.log(p)
console.log(s)
console.log("---------------")
console.log(productname)
console.log(price)
console.log(stock)

