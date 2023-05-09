import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { getProfileData } from "../../api/profile";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import ObjectTable from "../../../components/Table/ObjectTable";
import { StyledPanel, StyledPanelLabel, StyledPanelDetails } from "../../../components/Data/data.elements";
import { Typography } from "../../../components/Shared/Typography";

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
                    </>
                }
                rightPanel={
                    <>
                      <StyledPanel>
                        <StyledPanelLabel>
                        <h1>Market Orders</h1>
                            <ObjectTable objectData={market?.studio_market_orders} />
                            <h1>Market Carts</h1>
                            <ObjectTable objectData={market?.studio_market_carts} />
                            <Typography></Typography>
                            <Typography></Typography>
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