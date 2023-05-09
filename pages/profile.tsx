import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { useSession } from "next-auth/react"
import styles from "../styles/header.module.css"

import { getProfileData } from "./api/profile";
import { DualPanelLayout } from "../components/Shared/DualPanelLayout";
import { Layout } from "../components/Layout";
import { Typography } from '../components/Shared/Typography';

const ProfilePage = ({
    session2, profileData
}) => {

    // const { data: session } = useSession()
    // console.log({session})

    const { loginCount, breath, market, social, poetry } = profileData;



    return (<DualPanelLayout
        leftPanel={
            <>
                <Typography medium>plugin/profile</Typography>
                <Typography menu><Link href={"/plugins/breath/workout-log"}>profile</Link></Typography>
            </>
        }
        rightPanel={
            <>
               
        <Layout>
            <h1>Profile</h1>
         
        <h3>Email : {profileData.user.email}</h3>
        <br /> <h3>Login Count : {loginCount}</h3>
        {/* <pre>{JSON.stringify({breath, market, social, poetry}, null, 2)}</pre> */}
        <br/> <pre>{JSON.stringify(profileData, null, 2)}</pre>
        </Layout>
            </>
        } /> 
    );
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


export default ProfilePage;