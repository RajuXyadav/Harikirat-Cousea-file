
import {atomFamily, selectorFamily} from 'recoil'
import axios from 'axios'

export const todosAtomFamily = atomFamily({
    key:"todosAtomFamily",
    default: selectorFamily({
       key:"todoSelectorFamily",
       get: function(id){
         return async function({get}){
            await new Promise(r=> setTimeout(r,5000))
             const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
             return res.data.todo;
         }
       }
       
    })
});