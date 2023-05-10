// import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { getArtistData } from "../../api/artist";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';
const TagsPage = ({
    tagsData
}) => {

    // console.log({ artistData })

    return (
        <>
            <Head>
                <title>Studio Poetry : Tags</title>
            </Head>
            <DualPanelLayout
                leftPanel={
                    <>
                        <Typography medium>plugin/focus</Typography>
                        <Typography menu><Link href={"/plugins/focus"}>Focus : Daily</Link></Typography>
                    </>
                }
                rightPanel={
                    <>
                       <Typography large>Tags</Typography>
                    </>
                } />
        </>
    );
};


// This gets called on every request
export async function getServerSideProps(context) {
    // Define the Request
    const { req, res } = context;
    
    let tagsData = {};
    return {
        props: {
            tagsData
        }
    }
}


export default TagsPage;