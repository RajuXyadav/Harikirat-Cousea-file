

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(email:string, password:string,firstName:string,lastName:string){
//    const res = await prisma.user.create({
//         data:{
//             email,
//             password,
//             firstName,
//             lastName
//         }
//     })
//     console.log(res)
// }

// insertUser("kumaryadavx@gmail.com","password","Raju","Yadav")
// insertUser("yadavxraju","password","kiyo","yadav")

interface UpdateParams{
    firstName: string,
    lastName: string
}

async function updateUser(email: string,{
    firstName,lastName
}:UpdateParams){
    const res = await prisma.user.update({
        where: {email:email},
        data:{
            firstName,
            lastName
        }
    })
    console.log(res)
}

updateUser("kumaryadavx@gmail.com",{
    firstName:"zetch",
    lastName:"Bell"
})