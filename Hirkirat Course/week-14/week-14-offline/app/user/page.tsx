
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


async function fetchData(){
     const user = await client.user.findFirst();
      return {
        email: user?.email,
        name: "Raju"
      }

}

export default  async function User(){
    const data = await fetchData();

    return <div>
        {data.email}
        {data.name}
    </div>
}