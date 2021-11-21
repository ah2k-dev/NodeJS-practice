const fs = require('fs')
const start = async() => {
    try{
        await fs.readFile('./file1.txt', 'utf8', (err, data)=>{
            if(err){
                console.log(err);
            }else{
                console.log(data);
            }
        })
    }catch(error){
        console.log(error);
    }
}
start()