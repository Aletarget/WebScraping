import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Tweet, TweetType, TwitterAPIResponse } from "../interfaces/twitterApiResponse.interface";
import { Document } from "mongoose";


@Schema({timestamps:true})
export class ApiComments extends Document{
    @Prop({type: [Object], required:true})
    tweets: object[];

    @Prop()
    has_next_page: boolean;

    @Prop()
    next_cursor: string;

}

export const ApiCommentsSchema = SchemaFactory.createForClass(ApiComments);
