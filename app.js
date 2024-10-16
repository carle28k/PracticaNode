const express=require('express');
const app=express();
const port=process.env.PORT || 3000;




app.use(express.static(__dirname + "/public"))

/* VIEWS */

/* TEMPLATE ENGINE */
app.set(`view engine`, `ejs`)
app.set(`views`,__dirname + `/views`)

/* MIDDLEWARE */


/* RUTAS */

app.use(`/`, require(`./routers/front-router`))





app.listen(port, ()=>{
        console.log(`server on port ${port}`)
})