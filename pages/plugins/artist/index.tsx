// import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { getArtistData } from "../../api/artist";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';
const ArtistPage = ({
    artistData
}) => {

    // console.log({ artistData })

    return (
        <>
            <Head>
                <title>Studio Artist</title>
            </Head>
            <DualPanelLayout
                leftPanel={
                    <>
                        <Typography medium>plugin/artist</Typography>
                        <Typography menu><Link href={"/plugins/artist/artworks"}>Artworks</Link></Typography>
                    </>
                }
                rightPanel={
                    <>
                       <Typography large>Artist</Typography>
                            
                            <Typography medium>{artistData.name}</Typography>
                            <Typography small>{artistData.description}</Typography>
                    
                    </>
                } />
        </>
    );
};


// This gets called on every request
export async function getServerSideProps(context) {
    // DEfine the Request
    const { req, res } = context;
    // Get the Artist Data
    const artistData = await getArtistData(req, res);
    // Return the Artist Data to the Page
    return {
        props: {
            artistData
        }
    }
}


export default ArtistPage;