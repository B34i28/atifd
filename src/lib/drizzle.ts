import { pgTable ,serial,text,varchar,timestamp,boolean, integer } from "drizzle-orm/pg-core";
import { drizzle} from "drizzle-orm/vercel-postgres";
import { InferModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";

export const productsTable = pgTable("products",{
    id: serial("id").primaryKey(),
    typeofproduct: varchar("typeofproduct" ,{length:255}),
    detailofproduct: varchar ("detailofproduct" ,{length:255})
})

export const addordersTable = pgTable ("addorders",{
    id : serial("id").primaryKey(),
    name: varchar("name",{length:100}),
    number: varchar("number",{length:20}),
    cnic: varchar("cnic",{length:15}),
    address: text("address"),
    quantityofitem: varchar("quantityofitem",{length:50}),
    totalprice: varchar("totalprice",{length:50})
})

// Types for products Table
export type Product = InferModel<typeof productsTable>;
export type NewProduct = InferModel<typeof productsTable, "insert">;

// Types for addorders Table

export type Addorder = InferModel<typeof addordersTable>;
export type NewAddorder = InferModel<typeof addordersTable, "insert">;

export const db = drizzle(sql)

// db.insert(productsTable).values({
//     typeofproduct:"water 3",
//     detailofproduct:"200 ml"
// })