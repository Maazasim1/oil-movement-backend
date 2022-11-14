const express = require("express")
const router = express.Router()
const pool = require('../Middleware/connection')
const bodyParser = require("body-parser")
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()

const query_promiseGetOMSDailyShipment = (product)=>{
    return new Promise((resolve,reject)=>{
        pool.query(`select litresAt60, volumeAt85 from shipmentIn join shipmentOut on shipmentIn.tokennumber = shipmentout.tokennumber AND productCode ="${product}"`  ,(err,results)=>{
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

const query_promiseGetOMSDailyShipment_Loss_Gain = (product)=>{
    return new Promise((resolve,reject)=>{
        pool.query('',(err,results)=>{
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

const query_promise_getBowserSummary = async()=>{
    var resultfinal={}

    const promise_count_sIN = new Promise((resolve,reject)=>{
        pool.query('select count(tokennumber) from shipmentIn', (err,results)=>{
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
    const promise_count_sOUT = new Promise((resolve,reject)=>{
        pool.query('select count(tokennumber) from shipmentOut',(err,results2)=>{
            if(err){
                return reject(err)
            }
            return resolve(results2)
        })
    })
    const promise_bowserSum = new Promise((resolve,reject)=>{
        pool.query('select * from shipmentin join shipmentout on shipmentin.tokennumber=shipmentout.tokennumber',(err,results3)=>{
            if(err){
                return reject(err)
            }
            return resolve(results3)
        })
    })

   const results_f = await Promise.all([promise_count_sIN,promise_count_sOUT,promise_bowserSum]);
   results_f.forEach(([rows, fields]) => console.log(rows))
   return results_f; 
}



router.get('/admin',async (req,res)=>{
    if(req.body.id==1){
        try{
            const results = await query_promiseGetOMSDailyShipment(req.body.product);
            console.log(results);
            res.send(results)
        }
        catch(error){
            console.log(error)
            res.send(error);
        }
    }
    else if(req.body.id==2){
        try{
            const results =await query_promise_getBowserSummary();
            console.log(results)
            res.send(results);
        }
        catch(error){
            if(error){
                console.log(error)
            }
        }
    }
})

module.exports = router