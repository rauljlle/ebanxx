import axios, { AxiosResponse } from "axios";
import { Request, Response } from "express";

type methods = 'post' | 'get';

export async function callOrigin(origin: string, method: methods, req:Request, res:Response){
    try{

        let apiResponse: AxiosResponse;

        switch (method) {
            case 'post':
                apiResponse = await axios.post(`${process.env.API_URL}${origin}`, req.body);
            case 'get':
                apiResponse = await axios.get(`${process.env.API_URL}${origin}`, req.body);
        }
        res.status(apiResponse.status).send(apiResponse.data);
    } 
    catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            res.status(error.response.status).send(error.response.data);
        } else {
            res.status(500).send('Internal Server Error');
        }
    }
}