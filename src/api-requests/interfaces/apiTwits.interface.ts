import { Tweet } from "./twitterApiResponse.interface";

export interface ApiTweets {
    tweets: Tweet[];
    date: Date
}