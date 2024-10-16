const getIndex =(req, res)=>{
    console.log(`Index`)
    res.render(`index`, {
        description: `Descripción del index`
    })
}

const getProducts =(req, res)=>{
    console.log(`Products`)
}

const getServices =(req, res)=>{
    console.log(`Services`)
}


module.exports = {
    getIndex,
    getProducts,
    getServices
}