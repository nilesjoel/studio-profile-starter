import fetch from 'node-fetch';


export async function deleteWorkout(req, res) {
    const { pid } = req.query;
    const response = await fetch(
        `${process.env.NEXTAUTH_API}/breathwork-studio/workouts/delete/${pid}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    const data = await response.json();
    res.send(JSON.stringify(data, null, 2));
}

export default async function handler(req, res) {

    if (req.method === 'GET') {
    } else if (req.method === 'POST') {
    } else if (req.method === 'DELETE') {
        await deleteWorkout(req, res)
    } else {
        res.send("NO METHOD")
    }


}