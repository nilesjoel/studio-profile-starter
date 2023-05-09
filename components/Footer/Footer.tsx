import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './footer.elements';

import Link from 'next/link'
import { useRouter } from 'next/router';

export function Footer() {

  const router = useRouter();



  const siteBrandName = "@nilesjoel";

  const footerSubscription = {
    display: false,
    // subHeading : ` Follow your breath. Join our inclusive membership to receive reminders and to track your progress.`,
    subHeading: ` Follow your breath. Enter your email to track your progress, and to receive optional reminders.`,
    subText: `You can stop at any time.`,
  };

  const footerSocial = true;
  const socialLinks = [
    // {
    //   name: 'Instagram',
    //   icon: <FaInstagram />,
    //   href: ''
    // }, {
    //   name: 'Facebook',
    //   icon: <FaFacebook />,
    //   href: ''
    // },
    // {
    //   name: 'YouTube',
    //   icon: <FaYoutube />,
    //   href: ''
    // },
    // {
    //     name: 'LinkedIn',
    //     icon: <FaLinkedin/>,
    //     href: ''
    // },
  ]


  // const siteLinks = [{
  //   _id: "604a633fa4a8ed922c21ba56",
  //   title: "Index",
  //   slug: "/profile",
  //   published_at: "2021-03-11T18:36:52.034Z",
  //   createdAt: "2021-03-11T18:36:47.253Z",
  //   updatedAt: "2021-03-11T18:36:52.245Z",
  //   __v: 0,
  //   id: "604a633fa4a8ed922c21ba56"
  // }];

  const siteLinks = [
    // {
    //   title: "Artist",
    //   slug: "/artist"
    // },
    // {
    //   title: "Gallery",
    //   slug: "/"
    // },
    // {
    //   title: "Contact",
    //   slug: "/contact"
    // },

    // {
    //   title: "Swipe",
    //   slug: "/swipe"
    // },
    // {
    //   title: "Slides",
    //   slug: "/slide"
    // }
  ];



  const footerCopyright = `${siteBrandName} © ${new Date().getFullYear()}`;

  const footerLinks = true;


  const footerMenuSegments = [
    {
      title: "Site Links",
      data: siteLinks
    },
    {
      title: "Account Links",
      // data: (session) ? profileLinks : null
    }];

  return (
    <FooterContainer>

      {footerSubscription.display && (
        <FooterSubscription>

          <FooterSubHeading>
            {footerSubscription.subHeading}
          </FooterSubHeading>

          <FooterSubText>{footerSubscription.subText}</FooterSubText>

          <Form>
            <FormInput name='email' type='email' placeholder='Your Email' />
            {/* <Button fontBig>Subscribe</Button> */}
          </Form>

        </FooterSubscription>
      )}

      {footerLinks && (
        <FooterLinksContainer>
          {footerMenuSegments && footerMenuSegments.map((menuSegment, idx) => (
            menuSegment.data ? (
              <FooterLinksWrapper key={`linkWrapper_${idx}`}>
                <FooterLinkItems key={`linkItems_${idx}`}>

                  {/* <FooterLinkTitle  key={`linkTitle_${idx}`}>{menuSegment.title}</FooterLinkTitle> */}
                  {menuSegment.data.map((data, idx) => (
                    <FooterLink key={`footerLink${idx}`}>
                      <Link href={`${data.slug}`}>{data.title}</Link>
                    </FooterLink>
                  ))}

                </FooterLinkItems>
              </FooterLinksWrapper>
            ) : null

          ))}
        </FooterLinksContainer>
      )}



      {footerSocial && (
        <SocialMedia>
          <SocialMediaWrap>


            {/* 
            <SocialLogo>
              <SocialIcon/> {siteBrandName}
            </SocialLogo> 
            */}

            <SocialIcons>
              {socialLinks && socialLinks.map((socialMenuItem, idx) => (
                <SocialIconLink key={idx}>
                  {socialMenuItem.icon}
                </SocialIconLink>
              ))}
            </SocialIcons>
            
          </SocialMediaWrap>
        </SocialMedia>
      )}
      <WebsiteRights>{footerCopyright}</WebsiteRights>
    </FooterContainer>
  );
}
