// This is an example of how to access a session from an API route
import { getServerSession } from "next-auth"
import authOptions from "../auth/[...nextauth]"

import type { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt";



export async function getFocusData(req: NextApiRequest, res: NextApiResponse) {
    const { jwt } = await getToken({ req });
    const token = await getServerSession(req, res, authOptions)
    console.log({ url:`${process.env.NEXTAUTH_API}/studio-focus/entries/profile`,token })
    try {
        const response = await fetch(`${process.env.NEXTAUTH_API}/studio-focus/entries/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, jwt })
        });
        const data = await response.json();
        console.log("getFocusData", { data })
        return data;
    } catch (error) {
        console.log("ERROR", error)
    }
}



export default async function handler(req, res) {
    const data = await getFocusData(req, res)
    res.send(JSON.stringify(data, null, 2));
}