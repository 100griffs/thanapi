import express  from "express";
import  cors from 'cors'
const app = express();
app.use(cors())
import {endangered, extinct } from "./try.js";
import {causes,Nature} from "./articles.js";

app.get('/',(req,res)=>{res.send('hello from the natura.api')});

app.get('/endangered', (req,res)=>{
    res.send(endangered)

})
app.get('/endangered/:name', (req,res)=>{
  const {name} =req.params
res.send(endangered.find((Giant)=>Giant.name ===name))
})

app.get('/extinct', (req,res)=>{
  res.send(extinct)

})
 app.get('/extinct/:name',(req,res)=>{
  const {name} =req.params
  res.send(extinct.find((Gi)=>Gi.name ===name))
 })


app.get('/causes', (req,res)=>{
  res.send(causes)

})
 app.get('/causes/:name',(req,res)=>{
  const {name} =req.params
  res.send(causes.find((Gi)=>Gi.name===name))
 })

app.get('/Nature', (req,res)=>{
  res.send(Nature)

})
 app.get('/Nature/:name',(req,res)=>{
  const {name} =req.params
  res.send(Nature.find((Gi)=>Gi.name===name))
 })











//json still fails to make it .. we try again tommorow

const PORT= 8000;

app.listen(PORT,()=>console.log('server on 8000'));