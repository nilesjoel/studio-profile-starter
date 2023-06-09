import { getToken } from "next-auth/jwt"
import fetch from 'node-fetch';

export async function getMenuData(req, res){
  // Get Token from request and send to API to get profile data.
  try {
    const token = await getToken({ req })    
    console.log("fetching..", `${process.env.NEXTAUTH_API}/studio-profile/menu/profile`, {token})
    const response = await fetch(`${process.env.NEXTAUTH_API}/studio-profile/menu/profile`, {
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
  const data = await getMenuData(req, res)
  res.send(JSON.stringify(data, null, 2));
}