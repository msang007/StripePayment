import express from 'express';
import stripe from ('stripe')("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");
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
app.use(stripe());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.post('/checkout', async(req,res)=>{
    console.log(req.body)
})
app.listen(5000, ()=>{console.log('server is listening on port 5000...')})
