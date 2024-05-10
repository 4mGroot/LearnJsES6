getDataCustomer=(customername,customerAddress="กรุงเทพมหานคร")=>{
    const address =`ชื่อลูกค้า : ${customername}
    ที่อยู่ : ${customerAddress}`
    return address
}
console.log(getDataCustomer('earth'))
console.log(getDataCustomer('earth','น่าน'))