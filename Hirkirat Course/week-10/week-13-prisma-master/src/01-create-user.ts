
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
   await prisma.user.create({
     data:{
      email: "kumaryadavx@gmail.com",
      name:"RajuKumaryadav"
     }
   })

   
}

main()