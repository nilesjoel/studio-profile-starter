import Head from 'next/head';
import Link from "next/link";
import React from "react";
import { getSocialCampaignsData } from '../../api/social/campaign';
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';
import { StyledPanel, StyledPanelLabel, StyledPanelDetails, StyledColumns } from "../../../components/Data/data.elements";


const SocialCampaignsPage = ({ campaignsData }) => {

    const { name, frequency, posts, channels, user } = campaignsData;
    return (<>
        <Head>
            <title>Studio Social</title>
        </Head>
        <DualPanelLayout leftPanel={
                <>
                    <Typography medium><Link href={"/plugins/social"}>plugin/social</Link></Typography>
                    <Typography menu><Link href={"/plugins/social/channels"}>Channels</Link></Typography>
                    <Typography menu><Link href={"/plugins/social/campaigns"}>Campaigns</Link></Typography>
                    <Typography menu><Link href={"/plugins/social/posts"}>Posts</Link></Typography>
                </>
            }
            rightPanel={
                <><Typography heading>Campaigns</Typography>
                    <StyledPanel>
                        <StyledPanelLabel>
                            {campaignsData.map((campaign, index) => {

                                console.log({ campaign })
                                return (
                                    <div key={index}>
                                        <>
                                            <Typography>{campaign.name}</Typography>
                                            {/* <Typography>{campaign.frequency}</Typography> */}

                                            <Typography>POSTS</Typography>
                                            {campaign.posts.map((post, index) => {
                                                return (
                                                    <div key={index}>
                                                        <Typography>{post.title}</Typography>
                                                        <Typography>{post.description}</Typography>
                                                        <Typography>{post.image}</Typography>
                                                        <Typography>{post.url}</Typography>
                                                        {/* <Typography>{post.tags}</Typography> */}
                                                    </div>
                                                )
                                            })}

                                        </>
                                        <Typography>CHANNELS</Typography>
                                        {campaign.channels.map((channel, index) => {
                                            return (
                                                <div key={index}>
                                                    <Typography>{channel.name}</Typography>
                                                    <Typography>{channel.type}</Typography>
                                                    <Typography>{channel.url}</Typography>
                                                    <Typography>{channel.token}</Typography>
                                                </div>
                                            )
                                        })}


                                        {/* <Typography>{JSON.stringify(campaign.user)}</Typography> */}
                                    </div>

                                )
                            })}
                        </StyledPanelLabel>
                    </StyledPanel>
                </>
            } />
    </>)
}




// This gets called on every request
export async function getServerSideProps(context) {
    // Define the Request
    const { req, res } = context;
    // Get the Campaign Data
    const data = await getSocialCampaignsData(req, res);
    // Return the Profile Data to the Page
    return { props: { campaignsData: data } }
}

export default SocialCampaignsPage;