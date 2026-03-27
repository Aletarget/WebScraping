import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { WebscrapInterface } from "../interface/WebScraping.interface";


@Schema()
export class newsData implements WebscrapInterface{
    @Prop({required: true})
    newsLink: string
    @Prop({type: Array, required: true})
    comments: string[]
} 

@Schema({timestamps:true})
export class NewSnapshot extends Document{
    @Prop({required:true})
    date:string;


    @Prop({type: [newsData], required:true})
    news: newsData[]
}



export const NewSnapshotSchema = SchemaFactory.createForClass(NewSnapshot);

