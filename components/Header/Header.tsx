import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "../../styles/header.module.css"
import { StyledNav } from "./header.elements"
import Dropdown from "../Shared/Dropdown"
import { useState } from "react"
const options = ['Option 1 Option 1 Option 1 Option 1', 'Option 2', 'Option 3'];

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  const [selectedOption, setSelectedOption] = useState<string>();
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className={styles.signedInStatus}>
        <p
          className={`nojs-show ${!session && loading ? styles.loading : styles.loaded
            }`}
        >
          {!session && (
            <>
              <span className={styles.notSignedInText}>
                You are not signed in
              </span>
              <a
                href={`/api/auth/signin`}
                className={styles.buttonPrimary}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in
              </a>
            </>
          )}
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />
              )}
              <span className={styles.signedInText}>
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
      <StyledNav>
        {selectedOption && <p>You selected: {selectedOption}</p>}
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onSelectOption={handleSelectOption}
        />
        <ul className={styles.navItems}>
          {/* <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/example/client">Client</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/example/server">Server</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/example/protected">Protected</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/example/api-example">API</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/example/me">Me</Link>
          </li> */}
          <li className={styles.navItem}>
            <Link href="/profile">Profile</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/plugins/market">Market</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/plugins/focus">Focus</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/plugins/breath">Breath</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/plugins/social">Social</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/plugins/artist">Artist</Link>
          </li>
        </ul>

      </StyledNav>
    </header>
  )
}



export { Header }