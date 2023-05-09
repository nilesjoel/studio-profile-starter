
import getConfig from 'next/config'
import styled from 'styled-components'
import { useState } from 'react'
import { setCookie } from 'nookies'
import Router from "next/router"
const { publicRuntimeConfig } = getConfig();


const Register = () => {


    const [username, setUsername] = useState("tester");
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("abc123");


    async function handleRegister() {
        console.log("register handled")

        const registerInfo = JSON.stringify({ "username": username, "email": email, "password": password });

        const config = {
            method: 'post',
            url: `${publicRuntimeConfig.API_URL}/auth/local/register`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: registerInfo
        };
        const register = await fetch(`${publicRuntimeConfig.API_URL}/auth/local/register`, config)




        const registerResponse = await register.json();

        // console.log(registerResponse);

        if (registerResponse.jwt) {
            setCookie(null, 'jwt', registerResponse.jwt, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            })

            Router.push('/concept/captainsLog')

        }



    }
    return (
        <>
            <RegisterStyled>
                <Box variant="container">
                    <Box as="h2" my={40}>
                        You need to register to access this page.
                    </Box>

                    <form>
                        <input type="text" onChange={e => setUsername(e.target.value)} value={username} placeholder={"Username"} /><br />
                        <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder={"Email"} /><br />
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder={"Password"} /><br />
                        <button type="button" onClick={() => handleRegister()}>Register</button>
                    </form>
                </Box>
            </RegisterStyled>
        </>
    )
}

const RegisterStyled = styled.div`
input{
    padding:10px;
    margin-bottom:20px;
    border:1px solid #cccccc;
    border-radius : 4px;
}
`

export async function getServerSideProps() {

    return {
        props: {

        }
    }
}


export default Register;