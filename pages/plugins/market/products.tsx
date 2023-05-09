import Head from "next/head";
import { DualPanelLayout } from "../../../components/Shared/DualPanelLayout";
import { Typography } from "../../../components/Shared/Typography";
import Link from "next/link";
import { StyledPanel, StyledPanelLabel } from "../../../components/Data/data.elements";
import { getMarketProductsData } from "../../api/market/product";

const MarketProductsPage = ({productsData}) => {

    console.log({productsData})
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
                <> <Typography heading>Products</Typography>
                           
                    <StyledPanel>
                        <StyledPanelLabel>
                            {JSON.stringify(productsData)}
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
    // Get the Market Produts Data
    const data = await getMarketProductsData(req, res);
    // Return the Market Products Data to the Page
    return { props: { productsData : data } }
}
    
    export default MarketProductsPage;