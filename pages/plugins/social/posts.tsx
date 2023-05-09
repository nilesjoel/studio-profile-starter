import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React, { useState } from "react";

import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography';
import { StyledPanel, StyledPanelLabel, StyledPanelDetails, StyledColumns } from "../../../components/Data/data.elements";
import SymmetryForm from "../../../components/Form/DataSymmetry";
import { getSocialPostsData } from "../../api/social/post";
import styled from "styled-components";
import StudioImage from "../../../components/Image/StudioImage";
import { StyledButton } from "../../../components/Button/Button.styled";
import InstagramPost from "../../../components/Image/InstagramPost";

const StyledPhotoGrid = styled.div`
    display:flex;

`
const StyledPost = styled.div`
    display:flex;
    flex-direction:column;
    flex:1;
    justify-content: space-between;
    align-items:flex-start;
`

const SocialPostsPage = ({ postsData }) => {

    console.log({ postsData })
    const { media } = postsData;
    const [text, setText] = useState('');

    const handleClick = async (param) => {
        try {
            const res = await fetch('/api/social/publish', {
                method: 'POST',
                body: JSON.stringify({ data: param }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            console.log({ data })
            setText(data.message);
            return data;
        } catch (error) {
            console.error(error);
        }
    };
    const imageSize = 'large'
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
                <><Typography heading>Posts</Typography>
                    <StyledPanel>
                        <StyledPhotoGrid>

                            {postsData.map((post, idx) =>
                                <StyledPost key={idx}>
                                    <Typography menu>{post.name}</Typography>
                                    <InstagramPost src={post.media.large.url} 
                                    height={200} width={200}
                                    // height={post.media.large.height} 
                                    // width={post.media.large.width} 
                                    alt={post.name}></InstagramPost>
                                    <Typography small>{post.caption}{post.media.large.height}</Typography>
                                    <StyledButton onClick={() => handleClick(post.media.large.url)}>Post</StyledButton>
                                </StyledPost>
                            )}

                        </StyledPhotoGrid>
                        {/* <StyledPanelLabel>{JSON.stringify(postsData)}
                            <SymmetryForm symmetryFields={postDataFields}/>
                        </StyledPanelLabel> */}
                        {/* <StyledPanelDetails>
                            <Typography menu><Link href={"/plugins/social/posts-edit"}>Edit</Link></Typography>
                        </StyledPanelDetails> */}
                    </StyledPanel>
                </>
            } />


    </>)
}

export default SocialPostsPage;

// This gets called on every request
export async function getServerSideProps(context) {
    // DEfine the Request
    const { req, res } = context;
    // Get the Social Posts Data
    const data = await getSocialPostsData(req, res);
    // Return the Profile Data to the Page
    return { props: { postsData: data } }
}
