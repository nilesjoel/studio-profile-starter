import { getToken } from "next-auth/jwt"
import fetch from 'node-fetch';


export async function getProfileWorkouts(req, res) {

  const token = await getToken({ req })
  try {
    const response = await fetch(`${process.env.NEXTAUTH_API}/breathwork-studio/workouts/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(token)
    });
    const data = await response.json();
    console.log("getBYPROFILE---------------- ", data)
    return data;
  } catch (error) {
    console.log("ERROR", error)
  }
}



export default async function handler(req, res) {

  if (req.method === 'GET') {
    const data = await getProfileWorkouts(req, res)
    res.send(JSON.stringify(data, null, 2));
  } else if (req.method === 'POST') {

  } else if (req.method === 'DELETE') {


  } else {

  }
}