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
import { useStudioContext } from '../../contexts/StudioContext';

export function Footer() {

  const router = useRouter();


  const { 
    menu,
    footerSubscription,
    footerLinks,
    footerMenuSegments,
    footerSocial,
    siteBrandName,
    socialLinks,
    siteLinks,
    footerCopyright,
   } = useStudioContext();


  return (
    <FooterContainer>

      {footerSubscription && footerSubscription.display && (
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

                  <FooterLinkTitle  key={`linkTitle_${idx}`}>{menuSegment.title}</FooterLinkTitle>
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


            
            <SocialLogo>
              <SocialIcon/> {siteBrandName}
            </SocialLogo> 
           

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
