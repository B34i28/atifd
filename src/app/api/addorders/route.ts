import { NextRequest , NextResponse } from 'next/server';
import { Addorder, NewAddorder, db ,addordersTable } from '@/lib/drizzle';
import { sql } from '@vercel/postgres';
import { eq } from 'drizzle-orm';


export async function GET (request : NextRequest) {
    try{
        const res = await db.select().from(addordersTable)
        return NextResponse.json({ data : res })
    }catch(err){
        console.log((err as {message:string}).message);
        return NextResponse.json({message:"Something went wrong in api"})
        // return new NextResponse("Something went wrong")
    }
    
}


export async function POST(request:NextRequest){
    const req = await request.json();
    try {
        if (req.name && req.number && req.cnic && req.address && req.quantityofitem && req.totalprice){
           const res = await db.insert(addordersTable).values({
            name:req.name,
            number:req.number,
            cnic:req.cnic,
            address:req.address,
            quantityofitem:req.quantityofitem,
            totalprice:req.totalprice
           }).returning()
           return NextResponse.json({message:"Orders are added successfully"})
        } else {
            throw new Error ("Orders Are Required")
        }
    } catch(error) {
        return NextResponse.json({message: (error as {message:string}).message})
    }
}


export async function DELETE(request:NextRequest){
    const req = await request.json();
    try{
        if (req.id) {
            const res = await db.delete(addordersTable).where(eq(addordersTable.id,req.id)).returning()
            return NextResponse.json({message:"Data has been deleted"})
        }
        else {
            throw new Error ("Data is not deleting")
        }
    } catch (error) {
        return NextResponse.json({message: (error as {message:string}).message})
    }
}


export async function PUT(request:NextRequest){
    const req = await request.json();
    try {
        if (req.id && req.name && req.number && req.cnic && req.address && req.quantityofitem && req.totalprice){
            const res = await db.update(addordersTable).set({
                name:req.name,
                number:req.number,
                cnic:req.cnic,
                address:req.address,
                quantityofitem:req.quantityofitem,
                totalprice:req.totalprice
            }).where(eq(addordersTable.id,req.id)).returning()
            return NextResponse.json({message:"Orders are Updated"})
        } else {
            throw new Error ("Orders is Not Updated")
        }
    } catch (error) {
        return NextResponse.json({message: (error as {message:string}).message})
    }
}