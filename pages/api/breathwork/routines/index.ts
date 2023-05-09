import { getToken } from "next-auth/jwt"
import fetch from 'node-fetch';


const ts =  new Date().toISOString();
const workoutLog = {
    "name":"New Name",
    "completed" : ts
};


export async function getRoutinesData(req, res){

  try {
    const response = await fetch(`${process.env.NEXTAUTH_API}/breathwork-studio/routines/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    // console.log("getRoutinesData", {data})
    return data;
  } catch (error) {
    console.log("ERROR", error)
  }
}
export async function addRoutineData(req, res){

  try {
    const response = await fetch(`${process.env.NEXTAUTH_API}/breathwork-studio/routines`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(req.body)
    });
    const data = await response.json();
    res.send(JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.log("ERROR", error)
  }
}

export default async function handler(req, res){
 

  if (req.method === 'POST') {
    // Process a POST request
    const data = await addRoutineData(req, res)
    res.send(JSON.stringify(data, null, 2));
  } else {
    // Handle any other HTTP method
    const data = await getRoutinesData(req, res)
    console.log("getRoutinesData", {data})
    res.send(JSON.stringify(data, null, 2));
  }
}