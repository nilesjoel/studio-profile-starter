import { getSession } from "next-auth/react";
import { getToken } from "next-auth/jwt";


export default async (req, res) => {
  const token = await getToken({ req })
  const { body } = req;

  // console.log(req.method, "req.method")

  if (req.method === 'POST') {

    // Process a POST request
    const workoutLogData = { ...body, token }; // console.log("NEW WORKOUT LOG", newWorkoutLog)
    try {
      const response = await fetch(`${process.env.NEXTAUTH_API}/breathwork-studio/workouts/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(workoutLogData)
      });
      const data = await response.json();
      // console.log("DATA", data)
      res.send(data);
    } catch (error) {
      console.error("ERROR", error)
      res.error(error);
    }
  } else {
    // Handle any other HTTP method


    // console.log("BODY", token);

  };

}