import axios from "axios";

import { RAPID_API_KEY } from "../../constants/Index";


const baseUrl = 'https://exercisedb.p.rapidapi.com'

const callApi = async(url,params) =>{
    try{
        const options = {
            method:'GET',
            url,
            params,
            headers:{
                'x-rapidapi-key': RAPID_API_KEY,
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        }
        const response = await axios.request(options)
        return response.data
    }
    catch(error){
        console.log(error.msg)
    }
}


export const fetchDataByItem = async(bodyPart) =>{
    let data = await callApi(baseUrl + `/exercises/bodyPart/${bodyPart}`)
    return data;
}