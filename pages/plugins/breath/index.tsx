import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { getProfileData } from "../../api/profile";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';
import RoutineForm from '../../../components/Form/RoutineForm';
import { StyledPanelLabel, StyledPanelDetails, StyledColumns } from "../../../components/Data/data.elements";

const BreathPage = () => {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const createdAt = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;
  const ts = new Date().toISOString();



  return (<DualPanelLayout
    leftPanel={
      <>
        <Typography medium>plugin/breath</Typography>
        <Typography menu><Link href={"/plugins/breath/routines"}>Routines</Link></Typography>
        <Typography menu><Link href={"/plugins/breath/workouts"}>Workouts</Link></Typography>
      </>
    }
    rightPanel={
      <>
      <Typography heading>Add Routine</Typography>
      <RoutineForm />
      
      </>
    } />)
};


// This gets called on every request
export async function getServerSideProps(context) {
  // DEfine the Request
  const { req, res } = context;
  // Get the Profile Data
  const data = await getProfileData(req, res);
  // Return the Profile Data to the Page
  return { props: { profileData: data } }
}


export default BreathPage;