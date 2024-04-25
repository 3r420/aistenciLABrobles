import express  from "express";
import indexRoutes from './routes/index.js';

const app= express()

app.use(indexRoutes)

app.listen(3000, ()=> {
    console.log('server o port 3000')
})