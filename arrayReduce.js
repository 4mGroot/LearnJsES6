const cart = [
    {neme:"กระเป๋า",price:5000,v:100},
    {neme:"รองเท้า",price:5000,v:200},
    {neme:"กระเป๋า",price:2000,v:300},
]
const summation =cart.reduce((value,e)=>{
    const total = e.price+value
    return total
},0)
console.log(summation)
//รูปย่อ
const summation1 =cart.reduce((value,e)=>e.v+value,0)
console.log(summation1)