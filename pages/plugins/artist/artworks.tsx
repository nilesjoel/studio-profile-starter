// import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React, { useState } from "react";

import { getArtistData, getArtworksData } from "../../api/artist";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';

import { publishInstagramPhoto } from '../../api/social/post';
import StudioImage from '../../../components/Image/StudioImage';
import styled from 'styled-components';
import { StyledButton } from '../../../components/Form/form.elements';

const StyledPhotoGrid = styled.div`
    display:flex;
    flex-wrap:wrap;
`
const ArtworksPage = ({
    artworksData
}) => {


    // console.log({ artworksData })
    const [text, setText] = useState('');


    const { artworks } = artworksData;
    return (
        <>
            <Head>
                <title>Studio Artist</title>
            </Head>
            <DualPanelLayout
                leftPanel={
                    <>
                        <Typography medium>plugin/artist</Typography>
                        <Typography menu><Link href={"/plugins/artist"}>Artist</Link></Typography>
                    </>
                }
                rightPanel={
                    <>
                        <Typography heading>Artworks</Typography>
                        <StyledPhotoGrid>
                            {artworks.map((artwork, idx) => <div key={idx}>
                                <StudioImage src={artwork.cover['thumbnail'].url} height={artwork.cover['thumbnail'].height} width={artwork.cover['thumbnail'].width} alt="demo" />
                                <h1>{artwork.caption}</h1>
                            </div>)}
                        </StyledPhotoGrid>
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
    const artworksData = await getArtworksData(req, res);
    console.log({ artistData, artworksData })
    // Return the Artist Data to the Page
    return {
        props: {
            artistData,
            artworksData
        }
    }
}


export default ArtworksPage;