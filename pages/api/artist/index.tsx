// This is an example of how to access a session from an API route
import { getServerSession } from "next-auth"
import authOptions from "../auth/[...nextauth]"

import { getToken } from "next-auth/jwt"

import type { NextApiRequest, NextApiResponse } from "next"


export async function getArtistData(req: NextApiRequest, res: NextApiResponse) {
    const token = await getServerSession(req, res, authOptions)
    // console.log({ token })
    console.log(`${process.env.NEXTAUTH_API}/studio-artist/artist`)
    try {
        const response = await fetch(`${process.env.NEXTAUTH_API}/studio-artist/artist`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        // console.log("getArtistData", { data })
        return data;
    } catch (error) {
        console.log("ERROR", error)
    }
}
export async function getArtworksData(req: NextApiRequest, res: NextApiResponse) {

    const { jwt } = await getToken({ req })
    const token = await getServerSession(req, res, authOptions)
    console.log({ token })
    try {
        const response = await fetch(`${process.env.NEXTAUTH_API}/studio-artist/artworks/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token, jwt })
        });
        const data = await response.json();
        // console.log("getArtworksData", { data })
        return data;
    } catch (error) {
        console.log("ERROR", error)
    }
}



export default async function handler(req, res) {


    const artistData = await getArtistData(req, res)

    const artworksData = await getArtworksData(req, res)

    res.send(JSON.stringify({ artistData, artworksData }, null, 2));
}