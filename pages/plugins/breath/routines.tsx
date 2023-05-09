
import Head from 'next/head';
import Link from "next/link";
import React from "react";
import styled from 'styled-components';
import styles from "../../../styles/header.module.css"
import { useRouter } from 'next/dist/client/router';

import { getRoutinesData } from "../../api/breathwork/routines";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';


// TODO MOVE TO Components
const StyledRoutineList = styled.div`
display: flex;
align-items: center;
padding: 1rem;
// background: silver;
margin-top: 0.5rem;
justify-content: space-between;
flex-direction: column;
`
const StyledRoutinePanel = styled.div`
display:flex;
justify-content: space-between;
width: 100%;
padding: 1rem;
background: silver;
margin-top: 0.5rem;
margin-top: 0.5rem;
align-items: center;
`



/**
 * Breath > Routines Page
 * @param param0 
 * @returns 
 */
export default function RoutinesPage({
    routinesData
}) {
  
    const ts = new Date().toISOString();

    const router = useRouter()

    const handleSubmit = async (routine) => {

        try {
            const workoutLog = {
                "name": "Daily Breath",
                "completed": ts,
                routine
            };

            const response = await fetch('/api/breathwork', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ workoutLog })
            });
            const data = await response.json();
            
            router.push('/plugins/breath/workouts')
            console.log('----------------------', data)
        }
        catch (error) {
            console.log(error);
        }
        
       
    };


    const routinePanel = (routine) => {

        return (<><StyledRoutinePanel>
            <div>{routine.name}</div>
            <div className={styles.buttonPrimary}
                onClick={(e) => {
                    e.preventDefault()
                    handleSubmit(routine)
                }}>
                Log Workout
            </div></StyledRoutinePanel>
        </>)
    }
    return (
        <>
            <Head>
                <title>Studio Breath</title>
            </Head>
            <DualPanelLayout
                leftPanel={
                    <>
                        <Typography medium><Link href={"/plugins/breath"}>plugin/breath</Link></Typography>
                        <Typography menu><Link href={"/plugins/breath/workouts"}>Workouts</Link></Typography>
                    </>
                }
                rightPanel={
                    <><Typography large>Routines</Typography>
                        <StyledRoutineList>
                            {routinesData.map(routine => routinePanel(routine))}
                        </StyledRoutineList>
                    </>
                } />
        </>
    );
  }



// This gets called on every request
export async function getServerSideProps(context) {
    // Define the Request
    const { req, res } = context;
    // Get the Profile Data
    const data = await getRoutinesData(req, res);
    // Return the Profile Data to the Page
    return { props: { routinesData: data } }
}

