import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React, { useState} from "react";

import { getProfileData } from "../../api/profile";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';
import ObjectTable from "../../../components/Table/ObjectTable";
import { StyledPanel, StyledPanelLabel, StyledPanelDetails, StyledColumns } from "../../../components/Data/data.elements";
import Dropdown from '../../../components/Shared/Dropdown';
const MarketPage = ({
    profileData
}) => {

    const { social } = profileData;
 
    return (
        <>
            <Head>
                <title>Studio Social</title>
            </Head>
            <DualPanelLayout
                leftPanel={
                    <>
                        <Typography medium>plugin/social</Typography>
                        <Typography menu><Link href={"/plugins/social/channels"}>Channels</Link></Typography>
                        <Typography menu><Link href={"/plugins/social/campaigns"}>Campaigns</Link></Typography>
                        <Typography menu><Link href={"/plugins/social/posts"}>Posts</Link></Typography>
                        <Typography menu>
                     
                        </Typography>
                    </>
                }
                rightPanel={
                    <>
                        <Typography heading>Social</Typography>
                        <StyledPanel>
                            <StyledPanelLabel>

                            </StyledPanelLabel>
                        </StyledPanel>
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
    const data = await getProfileData(req, res);
    // Return the Profile Data to the Page
    return { props: { profileData: data } }
}


export default MarketPage;