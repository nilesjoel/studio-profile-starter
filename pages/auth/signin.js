import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { signIn, getSession, getProviders, getCsrfToken } from "next-auth/react";
import styled from "styled-components";


const Container = styled.div``
const Heading  = styled.h1``
const Box = styled.div``
const Input = styled.input``
const Button = styled.button``
const Stack = styled.div``

export default function SignIn({ providers, csrfToken }) {
  // console.log(providers);

  const [redirectUrl, setRedirectUrl] = useState(process.env.NEXTAUTH_API);
  const router = useRouter()
  useEffect(() => {
    const url = new URL(location.href);
    setRedirectUrl(url.searchParams.get("callbackUrl"))
  })

  return (
    <Container maxW="xl" centerContent>
      <Heading as="h1" textAlign="center">
        Profile
      </Heading>
      {`Dont worry, we'll bring you back here ${redirectUrl}`}
      <Box alignContent="center" justifyContent="center" marginTop={12}>
        <Box className="email-form">
          <form method="post" action="/api/auth/signin/email">
            <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <label>
              Email address
              <Input type="text" id="email" name="email" />
            </label>
            <Button type="submit">Use your Email</Button>
          </form>
        </Box>
        <Stack isInline marginTop={12}>
          {Object.values(providers).map((provider) => {
            if (provider.name === "Email") {
              return;
            }
            return (
              <Box key={provider.name}>
                <Button variant="outline" onClick={() => signIn(provider.id, { callbackUrl: router.query.callbackUrl })}>
                  Sign in with {provider.name}
                </Button>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Container >
  );
}

SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await getProviders(context),
    csrfToken: await getCsrfToken(context),
  };
};
