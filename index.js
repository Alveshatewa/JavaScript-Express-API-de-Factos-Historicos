import express from 'express';
import {validateYear, returnFacttOfYear} from './src/services/service.js';

const app = express();

app.get('/', (req, res) => {

    let yearFact = req.query.year

    if(validateYear(yearFact)){

        let fact = returnFacttOfYear(yearFact)
        
        res.json({fact: fact})
        
    } else{
        
        res.status(400).json({error: 'Year not found. You must insert a year between 1920 and 2020.'})
    }
  
})

const port = 8080;

app.listen(port, () => {

    let data = new Date()

    console.log(`Server is running on port ${port} at ${data.toLocaleTimeString()}`)
})