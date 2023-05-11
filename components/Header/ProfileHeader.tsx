import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { signIn, signOut, useSession } from "next-auth/react"

import Link from 'next/link'
import {
    HeaderBar,
    HeaderContainer,
    HeaderLogo,
    HeaderIcon,
    MobileIcon,
    HeaderMenu,
    HeaderItem,
    HeaderItemBtn,
    HeaderLinks,
    HeaderBtnLink,
    SignedInStatus,
    NotSignedInText,
    ButtonPrimary,
    ProfileAvatar,
    SignedInText,
    AuthButton,
    AuthText,
    StyledHeaderLogo,
    StyledIdentityPanel,
    StyledMenuContainer
} from './header.elements';
import Image from "next/image";
import { useRouter } from 'next/router';
import { useStudioContext } from '../../contexts/StudioContext';

export function ProfileHeader() {

    const { data: session, status } = useSession()
    const loading = status === "loading"

    const { menu } = useStudioContext();


    const router = useRouter();

    const [clicked, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!clicked);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
    }, []);



    const HeaderLogoNav = () => {
        return (
            <StyledHeaderLogo>
                <Link href="/">
                    <HeaderLogo onClick={closeMobileMenu}>
                        <HeaderIcon>
                            <Image
                                alt={'logo'}
                                src={'/images/brand_logo.png'}
                                width={100}
                                height={100}
                                quality={70}
                            />
                        </HeaderIcon>
                    </HeaderLogo>
                </Link>
            </StyledHeaderLogo>
        )
    }

    return (
        <>
            <HeaderBar>



                <HeaderContainer >
                    <HeaderLogoNav />
                    
                   

                    <StyledMenuContainer>
                        <StyledIdentityPanel>
                            {!session && (
                                <>
                                    <AuthText>
                                        You are not signed in
                                    </AuthText>
                                    <AuthButton
                                        // href={`/api/auth/signin`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            signIn()
                                        }}
                                    >
                                        Sign in
                                    </AuthButton>
                                </>
                            )}
                            {session?.user && (
                                <>
                                    {session.user.image && (
                                        <ProfileAvatar
                                            style={{ backgroundImage: `url('${session.user.image}')` }}

                                        />
                                    )}
                                    <SignedInText>
                                        <small>Signed in as &nbsp; </small>
                                        <br />
                                        <strong>{session.user.email ?? session.user.name}</strong>
                                    </SignedInText>
                                    <AuthButton
                                        // href={`/api/auth/signout`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            signOut()
                                        }}
                                    >
                                        Sign out
                                    </AuthButton>
                                </>
                            )}
                        </StyledIdentityPanel>
                        

                        <HeaderMenu onClick={handleClick} clicked={clicked}>

                            {/* MENU SEGMENTS */}
                            {menu && menu.map((link) => {
                                return (
                                    <Link href={`${process.env.NEXTAUTH_URL}/${link.slug}`} key={link.uid}>
                                        <div className={router.pathname === link.slug ? 'active' : ''}>
                                            <HeaderItem>
                                                <HeaderLinks onClick={closeMobileMenu}>
                                                    {link.title.charAt(0).toUpperCase() + link.title.slice(1)}
                                                </HeaderLinks>
                                            </HeaderItem>
                                        </div>
                                    </Link>
                                )
                            })}


                        </HeaderMenu>
                    </StyledMenuContainer>
                    
                     <MobileIcon onClick={handleClick}>
                        {clicked ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                </HeaderContainer>


            </HeaderBar>

        </>
    );
}
