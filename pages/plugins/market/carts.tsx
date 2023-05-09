import Head from "next/head";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from "../../../components/Shared/Typography";
import Link from "next/link";
import { StyledPanel, StyledPanelLabel } from "../../../components/Data/data.elements";
import { getMarketCartsData } from "../../api/market/cart";

const MarketCartsPage = ({cartsData}) => {

    console.log({cartsData})
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
                <>  <Typography heading>Carts</Typography>

                    <StyledPanel>
                        <StyledPanelLabel>{JSON.stringify(cartsData)}

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
    // Get the Market Carts Data
    const data = await getMarketCartsData(req, res);
    // Return the Market Carts Data to the Page
    return { props: { cartsData: data } }
}

export default MarketCartsPage;