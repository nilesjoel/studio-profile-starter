import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { getProfileData } from "../../api/profile";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';
import ObjectTable from "../../../components/Table/ObjectTable";

const MarketPage = ({
    profileData
}) => {

    const { social } = profileData;

    return (
        <div className="hero">
            <Head>
                <title>Studio Social</title>
            </Head>
            <DualPanelLayout
                leftPanel={
                    <>
                        <Typography medium>plugin/social</Typography>
                    </>
                }
                rightPanel={
                    <>
                        <div className="text">
                            <h1>Social Posts</h1>
                            <ObjectTable objectData={social?.studio_social_posts} />
                            <h1>Social Campaigns</h1>
                            <ObjectTable objectData={social?.studio_social_campaigns} />
                            <h1>Social Channel</h1>
                            <ObjectTable objectData={social?.studio_social_channels} />
                        </div>
                    </>
                } />


        </div>
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


export default MarketPage;