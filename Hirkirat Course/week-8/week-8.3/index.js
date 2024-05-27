
const axios = require('axios')
// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//     .then(async response =>{
//         const json = await response.json();
//         console.log(json.todos.length)
//     })
// }

async function main(){
    const response = await axios.post("https://httpdump.app/dumps/60519535-d478-4556-b0aa-ef898bfb1de6",{
        username:"Raju",
        password:"123456"
    },{
        headers:{
            Authorization:"Bearer 123"
        }
    }
    
    
    );
    
    
}



main()