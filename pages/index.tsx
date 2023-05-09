import { getSession, signIn, signOut } from "next-auth/react";
import Head from 'next/head';
import Link from "next/link";
import React from "react";

import { useSession } from "next-auth/react"

import { getProfileData } from "./api/profile";
import { DualPanelLayout } from "../components/Shared/DualPanelLayout";

const IndexPage = ({
  session2, profileData
}) => {

  const { data: session } = useSession()
  // console.log({session})


  const signInButtonNode = () => {
    // console.log({session})
    if (session) {
      return false;
    }
    return (<div>
        <Link href="/api/auth/signin">
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Signeth In
          </button>
        </Link>
      </div>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }
    return (
      <div><h1>{profileData.user.email}</h1>
        <Link href="/api/auth/signout">
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </button>
        </Link>
      </div>
    );
  };



  return (
    <div className="hero">
      <Head>
        <title>Studio Social</title>
      </Head>
      <DualPanelLayout
        leftPanel={
          <>
            <h1>api/profile</h1>
        
          </>
        }
        rightPanel={
          <> 
            {/* <div className="navbar"> */}
              {signOutButtonNode()}
              {signInButtonNode()}
            {/* </div> */}

          
      {/* <h1>{JSON.stringify(profileData, null, 5)}</h1> */}
          </>
        } />

      <div className="text">
       
      {/* <h1>{JSON.stringify(profileData.user, null, 5)}</h1> */}
      </div>
    </div>
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


export default IndexPage;