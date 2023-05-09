import 'styled-components'

declare module 'styled-components' {
  export interface HeaderMenu {
    clicked : boolean
  }
  export interface DefaultTheme {
    colors: {
      primaryColor: string,
      // primaryBlue: string,
      secondaryColor: string,
      secondaryDark : string,
      darkColor: string,
      // lightColor: string,
      // accentColor: string,
      // accentBlue: string,
      primary: string,
      secondary: string,
      background: string
      lightWhite1: string,
      lightWhite2: string,
      primaryTextColor: string
    },
    fonts: {
      body: string
    }
    sizes: {
      fs600 : string,
      fs800 : string
    },
    breakpoints: {

    },
    flow: string,
    big: boolean
  }
}
