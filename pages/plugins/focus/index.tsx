// import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import React from "react";

import { getFocusData } from "../../api/focus";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';
import { StyledPanel, StyledPanelDetails, StyledPanelLabel } from "../../../components/Data/data.elements";
import Link from 'next/link';

const PoetryPage = ({
    focusData
}) => {

    return (
        <>
            <Head>
                <title>Studio Poetry</title>
            </Head>
            <DualPanelLayout
                leftPanel={
                    <>
                        <Typography medium>plugin/focus</Typography>
                        <Typography menu><Link href={"/plugins/focus/tags"}>Tags</Link></Typography>
                    </>
                }
                rightPanel={
                    <> <Typography large>Entries</Typography>
                        {focusData && focusData.map(entry => <StyledPanel>
                            <StyledPanelLabel>
                                <Typography>{entry.title}</Typography>
                                <Typography>{entry.text}</Typography>
                            </StyledPanelLabel>
                            <StyledPanelDetails>Edit</StyledPanelDetails>
                        </StyledPanel>)}
                    </>
                } />
        </>
    );
};


// This gets called on every request
export async function getServerSideProps(context) {
    // Define the Request
    const { req, res } = context;
    // Get the Focus Data
    const data = await getFocusData(req, res);
    console.log({data})
    // Return the Profile Data to the Page
    return { props: { focusData: data } }
}


export default PoetryPage;