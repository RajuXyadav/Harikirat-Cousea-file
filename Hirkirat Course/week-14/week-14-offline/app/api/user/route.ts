
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server"


const client = new PrismaClient();


export async function GET(req:NextRequest){
    const user =  await client.user.findFirst();

    return NextResponse.json({
         email:user?.email,
         name:"Raju"
    })
}

export async function POST(req:NextRequest){
    const body = await req.json();
    try{

        const response = await client.user.create({
            data:{
                email:body.email,
                password:body.password
            }
        })
        
        return NextResponse.json({
            response
        })
    }catch(e){
        console.log(e)
        return NextResponse.json({
            message:"Error while signing up"
        },{
            status:411
        })
    }
    
}