import axios from "axios";
import { TwitterApiHeaders } from "../interfaces/twitterApiHeaders.interface";
import { MainQuery } from "../queryData/dataForQuery";



export class AxiosAdapter{

    async get<T>(url:string, headers: TwitterApiHeaders){
        return await axios.get(url, {headers: {"x-api-key": headers.x_api_key,}, params: {query: MainQuery}})
    }


} 