import paytmchecksum from '../paytm/PaytmChecksum.js';
import formidable from 'formidable';
import { paytmParams,paytmMerchantkey} from "../index.js";
import https from 'https';
export const addPaymentGateway=async(request,response)=>{
    try {
        let paytmCheckSum=await paytmchecksum.generateSignature(paytmParams,paytmMerchantkey);

        let params={
            ...paytmParams,'CHECKSUMHASH':paytmCheckSum
        }

        response.status(200).json(params);
    } catch (error) {
        response.status(500).json({error:error.message})
    }
}

export const paytmResponse=(require,response)=>{
    const from=new formidable.IncomingForm()
;
let paytmCheckSum=Request.body.CHECKSUMHASH;
delete request.body.CHECKSUMHASH;

let isVerifySignature=paytmchecksum.verifySignature(Request.body,paytmMerchantkey,paytmCheckSum);
if(isVerifySignature){
    let paytmParams={};
    paytmParams['MID']=request.body.MID;
    paytmParams['ORDERID']=request.body.ORDERID;

    paytmchecksum.generateSignature(paytmParams,paytmMerchantkey).then(function(checksum){

        paytmParams['CHECKSUMHASH']=checksum;

        let post_data=JSON.stringify(paytmParams);

        let options={
            hostname:'securegw-stage.paytm.in',
            port:443,
            path:'/order/status',
            headers:{
                'Content-Type':'application/json',
                'content-Length':post.data.length
            }
        }
        let res=""
        let post_req=https.request(options,function(post_res){
            post_res.on('data',function(chunk){
                res+=chunk;
            });
            post_res.on('end',function(){
                let result=JSON.parse(res)
                response.redirect('http://localhost:3000/');
            }) 
        });
        post_req.write(post_data);
        post_req.end();
    })
}else{
    console.log('checksum mismatched')
}

}