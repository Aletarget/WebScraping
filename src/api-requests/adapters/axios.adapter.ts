import axios from "axios";
import { TwitterApiHeaders } from "../interfaces/twitterApiHeaders.interface";



export class AxiosAdapter{

    async get(url:string, headers: TwitterApiHeaders, query: string){
        return await axios.get(url, {headers: {"x-api-key": headers.x_api_key,}, params: {query}})
    }


} 