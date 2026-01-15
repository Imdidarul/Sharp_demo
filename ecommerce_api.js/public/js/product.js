const onSubmitHandler = (e)=>{
    e.preventDefault()

    const product = e.target.productName.value

    const obj = {
        "productName": product
    }

    axios.post('http://localhost:3000'+"/products",obj).then((result)=>{
        console.log(`Added product: ${result.data.value}`)
    })

}