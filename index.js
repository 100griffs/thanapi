import express  from "express";
import  cors from 'cors'
const app = express();
app.use(cors())
import {endangered, extinct } from "./try.js";
import {causes,Nature,Quotes} from "./articles.js";
import way from "./way.js";

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

 app.get('/way', (req,res)=>{
  res.send(way)

})
 app.get('/way/:name',(req,res)=>{
  const {name} =req.params
  res.send(way.find((Gi)=>Gi.name===name))
 })

app.get('/Quotes', (req,res)=>{
  res.send(Quotes)

})
 app.get('/Quotes/:name',(req,res)=>{
  const {name} =req.params
  res.send(Nature.find((Gi)=>Gi.name===name))
 })










//json still fails to make it .. we try again tommorow

const PORT= 8000;

app.listen(PORT,()=>console.log('server on 8000'));