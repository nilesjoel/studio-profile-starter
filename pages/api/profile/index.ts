import { getToken } from "next-auth/jwt"
import { getSession } from "next-auth/react";
import fetch from 'node-fetch';

export async function getProfileData(req, res){
  // Get Token from request and send to API to get profile data.
  try {
    const session = await getSession({ req });
    // console.log("session", {session})
    const token = await getToken({ req })    
    // console.log("fetching..", `${process.env.NEXTAUTH_API}/studio-profile/profile`);
    // console.log("session", {session})
    const response = await fetch(`${process.env.NEXTAUTH_API}/studio-profile/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({token})
    });
    const data = await response.json();
    // console.log("returned", {data})
    return data;
  } catch (error) {
    console.log("ERROR", error)
  }
}

export default async function handler(req, res){
  const data = await getProfileData(req, res)
  res.send(JSON.stringify(data, null, 2));
}