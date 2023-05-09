import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { getProfileData } from "../../api/profile";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from '../../../components/Shared/Typography'; import { StyledPanel, StyledPanelLabel, StyledPanelDetails } from "../../../components/Data/data.elements";

const MarketPage = ({
    profileData
}) => {

    const { market } = profileData;

    return (
        <>
            <Head>
                <title>Studio Market</title>
            </Head>
            <DualPanelLayout
                leftPanel={
                    <>
                        <Typography medium>plugin/market</Typography>
                        <Typography menu><Link href={"/plugins/market/carts"}>Carts</Link></Typography>
                        <Typography menu><Link href={"/plugins/market/orders"}>Orders</Link></Typography>                    
                        <Typography menu><Link href={"/plugins/market/products"}>Products</Link></Typography>

                    </>
                }
                rightPanel={
                    <><Typography heading>Market</Typography>
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