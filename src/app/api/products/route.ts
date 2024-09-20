import { NextRequest , NextResponse } from 'next/server';
import { Product, NewProduct, db ,productsTable } from '@/lib/drizzle';
import { sql } from '@vercel/postgres';
import { eq } from 'drizzle-orm';

export async function GET (request : NextRequest) {
    try{
        await sql`CREATE TABLE IF NOT EXISTS Products(id serial , typeofproduct varchar(255), detailofproduct varchar(255));`
        const res = await db.select().from(productsTable)
        return NextResponse.json({ data : res})
    }catch(err){
        console.log((err as {message:string}).message);
        return NextResponse.json({message:"Something went wrong in api"})
        // return new NextResponse("Something went wrong")
    }
    
}

export async function POST(request:NextRequest){
    const req = await request.json();
    try {
        if (req.typeofproduct && req.detailofproduct){
           const res = await db.insert(productsTable).values({
            typeofproduct:req.typeofproduct,
            detailofproduct:req.detailofproduct
           }).returning()
           return NextResponse.json({message:"Product added successfully"})
        } else {
            throw new Error ("Products Are Required")
        }
    } catch(error) {
        return NextResponse.json({message: (error as {message:string}).message})
    }
}

export async function PUT(request:NextRequest){
    const req = await request.json();
    try {
        if (req.id && req.typeofproduct && req.detailofproduct){
            const res = await db.update(productsTable).set({
                typeofproduct:req.typeofproduct,
                detailofproduct:req.detailofproduct
            }).where(eq(productsTable.id,req.id)).returning()
            return NextResponse.json({message:"Products are Updated"})
        } else {
            throw new Error ("Data is Not Updated")
        }
    } catch (error) {
        return NextResponse.json({message: (error as {message:string}).message})
    }
}

export async function DELETE(request:NextRequest){
    const req = await request.json();
    try{
        if (req.id) {
            const res = await db.delete(productsTable).where(eq(productsTable.id,req.id)).returning()
            return NextResponse.json({message:"Data has been deleted"})
        }
        else {
            throw new Error ("Data is not deleting")
        }
    } catch (error) {
        return NextResponse.json({message: (error as {message:string}).message})
    }
}