import Head from "next/head";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from "../../../components/Shared/Typography";
import Link from "next/link";
import { StyledPanel, StyledPanelLabel } from "../../../components/Data/data.elements";
import { getMarketOrdersData } from "../../api/market/order";

const MarketOrdersPage = ({ ordersData }) => {

    console.log({ ordersData })
    return (<>
        <Head>
            <title>Studio Market</title>
        </Head>
        <DualPanelLayout
            leftPanel={
                <>
                    <Typography medium><Link href={"/plugins/market"}>plugin/market</Link></Typography>
                    <Typography menu><Link href={"/plugins/market/carts"}>Carts</Link></Typography>
                    <Typography menu><Link href={"/plugins/market/orders"}>Orders</Link></Typography>
                    <Typography menu><Link href={"/plugins/market/products"}>Products</Link></Typography>
                </>
            }
            rightPanel={
                <> <Typography heading>Orders</Typography>

                    <StyledPanel>
                        <StyledPanelLabel>
                            {JSON.stringify(ordersData)}
                        </StyledPanelLabel>
                        {/* <StyledPanelDetails></StyledPanelDetails> */}
                    </StyledPanel>
                </>
            } /></>)
}


// This gets called on every request
export async function getServerSideProps(context) {
    // Define the Request
    const { req, res } = context;
    // Get the Market Orders Data
    const data = await getMarketOrdersData(req, res);
    // Return the Market Orders Data to the Page
    return { props: { ordersData: data } }
}

export default MarketOrdersPage;