import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';
import { StyledPanel, StyledPanelLabel, StyledPanelDetails, StyledColumns } from "../../../components/Data/data.elements";
import { getSocialChannelsData } from '../../api/social/channel';

const SocialChannelsPage = ({ channelsData }) => {


    console.log({ channelsData })
    return (<>
        <Head>
            <title>Studio Social</title>
        </Head>
        <DualPanelLayout
            leftPanel={
                <>
                    <Typography medium><Link href={"/plugins/social"}>plugin/social</Link></Typography>
                    <Typography menu><Link href={"/plugins/social/channels"}>Channels</Link></Typography>
                    <Typography menu><Link href={"/plugins/social/campaigns"}>Campaigns</Link></Typography>
                    <Typography menu><Link href={"/plugins/social/posts"}>Posts</Link></Typography>
                </>
            }
            rightPanel={
                <><Typography heading>Channels</Typography>
                    <StyledPanel>
                        <StyledPanelLabel>
                            {JSON.stringify(channelsData)}
                            
                        </StyledPanelLabel>
                        {/* <StyledPanelDetails></StyledPanelDetails> */}
                    </StyledPanel>
                </>
            } />
    </>)
}




// This gets called on every request
export async function getServerSideProps(context) {
    // Define the Request
    const { req, res } = context;
    // Get the Social Channels Data
    const data = await getSocialChannelsData(req, res);
    // Return the Social Channels Data to the Page
    return { props: { channelsData : data } }
}




export default SocialChannelsPage;