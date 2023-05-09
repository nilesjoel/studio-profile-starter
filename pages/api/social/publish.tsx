// This is an example of how to access a session from an API route
import { getServerSession } from "next-auth"
import authOptions from "../auth/[...nextauth]"

import type { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"



export async function publishInstagramPhoto(req: NextApiRequest, res: NextApiResponse) {

    const { jwt } = await getToken({ req })
    const { data } = req.body;
    const token = await getServerSession(req, res, authOptions)
    // console.log({ token, data })
    try {
        const response = await fetch(`${process.env.NEXTAUTH_API}/studio-social/publish/instagram`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, jwt, photoUrl: data })
        });
        const resData = await response.json();

        console.log("DATA--------", { resData })
        return resData;
    } catch (error) {
        console.log("ERROR", error)
    }
}


export default async function handler(req, res) {
    const data = await publishInstagramPhoto(req, res)
    res.send(JSON.stringify(data, null, 2));
}