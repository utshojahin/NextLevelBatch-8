
import type { IncomingMessage } from "http";

export const bodyParser = (req:IncomingMessage):Promise<any>=>{
    let body=""
    return new Promise((resolve,rejects)=>{
        req.on("data",(chunk)=>{
            body+=chunk;
        })
        req.on("end",()=>{
            try{
                resolve(JSON.parse(body));
            }catch(error){
                rejects(error);
            }
        })

    })
}