
import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { getProfileWorkouts } from "../../api/breathwork/workouts";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";

import { Typography } from '../../../components/Shared/Typography';
import styles from "../../../styles/header.module.css"

import { StyledList, StyledPanel, StyledPanelLabel, StyledPanelDetails } from "../../../components/Data/data.elements";
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { devices } from '../../../styles/devices';

const StyledWorkoutList = styled.div`
display: flex;
align-items: center;
padding: 1rem;
// background: silver;
margin-top: 0.5rem;
justify-content: space-between;
flex-direction: column;
`

const StyledWorkoutPanel = styled.div`
display:flex;
justify-content: space-between;
min-width: 100%;
padding: 1rem;
background: silver;
margin-top: 0.5rem;
margin-top: 0.5rem;
align-items: center;
flex-direction: column;

overflow-wrap: break-word;
@media ${devices.tabletS} {
    flex-direction: row;
}
    `
const WorkoutsPage = ({
    profileWorkouts
}) => {

    // console.log({ profileWorkouts })
    const router = useRouter();
    // Call this function whenever you want to
    // refresh props!
    const refreshData = () => {
        router.replace(router.asPath);
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        // console.log('delete', id);
        try {
            const res = await fetch(`/api/breathwork/workouts/${id}`, {
                method: 'DELETE',
            });
            const data = await res.json();
            // console.log(data);
            refreshData();
        } catch (error) {
            console.log(error);
        }

    }


    const routineList = (routines, id) => {

        return (<StyledList>
            <ul>
                {routines.map(routine => <li>{routine.name}  </li>)}
            </ul>
        </StyledList>)
    }

    const workoutPanel = (workout) => {

        const isComplete = (completed) => {
            // console.log(completed);
            const date = new Date(completed);
            // console.log({ date });
            // Format the date string
            const formattedString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}/${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

            // console.log(formattedString);

            return formattedString;
        }


        const { id, name, routines, completed, createdAt } = workout;
        // console.log(workout,"workout")
        return (<>
            <StyledWorkoutPanel>
                <StyledPanelLabel>
                    <Typography>{name}</Typography>
                    <Typography>{routineList(routines, id)}</Typography>
                    <Typography>Completed:{isComplete(completed)}</Typography>
                </StyledPanelLabel>
                <StyledPanelDetails>

                    <div><div className={styles.buttonPrimary}
                        onClick={(e) => {
                            e.preventDefault()
                            handleDelete(e, id)
                        }}>
                        Delete
                    </div></div>
                </StyledPanelDetails>
            </StyledWorkoutPanel>
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
                        <Typography menu><Link href={"/plugins/breath/routines"}>Routines</Link></Typography>
                  </>
                }
                rightPanel={
                    <><Typography large>Workouts</Typography>
                        {/* {JSON.stringify(workoutsData, null, 2)} */}
                        <StyledWorkoutList>
                            {profileWorkouts.map(workout => workoutPanel(workout))}
                        </StyledWorkoutList>
                    </>
                } />


        </>
    );
};


// This gets called on every request
export async function getServerSideProps(context) {
    // DEfine the Request
    const { req, res } = context;
    // Get the Profile Data
    const profileWorkouts = await getProfileWorkouts(req, res);
    // Return the Profile Workouts Data to the Page
    return { props: {  profileWorkouts } }
}


export default WorkoutsPage;