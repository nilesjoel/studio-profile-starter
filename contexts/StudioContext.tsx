import React, { useContext, useState, useEffect } from "react";


type StudioLinkData = {
    title: string,
    slug: string,
    uid: string
}
type StudioContextData = {
    menu?: Array<StudioLinkData>,
    footer,
    footerSubscription,
    footerLinks,
    siteLinks,
    socialLinks,
    footerMenuSegments,
    footerCopyright,
    footerSocial,
    siteBrandName
};

type StudioUpdateContextData = {
    toggleTheme: () => void;
};

const StudioContext = React.createContext<StudioContextData | undefined>(undefined);
const StudioUpdateContext = React.createContext<StudioUpdateContextData | undefined>(undefined);


export function useStudioContext() {
    const context = useContext(StudioContext);
    if (!context) {
        throw new Error("useStudioContext must be used within a StudioContextProvider");
    }
    return context;
}

export function useStudioContextUpdate() {
    const context = useContext(StudioUpdateContext);
    if (!context) {
        throw new Error("useStudioContextUpdate must be used within a StudioContextProvider");
    }
    return context;
}

type StudioContextProviderProps = {
    children: React.ReactNode;
    state: StudioContextData;
};

export function StudioContextProvider({ children, state }: StudioContextProviderProps) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    }

    const [menuData, setMenuData] = useState([]);
    const contextData: StudioContextData & { darkTheme: boolean } = { ...state, darkTheme };

    // fetch a context from Studio Symmetries API
    useEffect(() => {
        const fetchUser = () => {
            fetch(`/api/profile/menu`)
                .then((response) => response.json())
                .then((json) => {
                    // console.log(json.error, "error?", json)
                    if(!json.error){
                        setMenuData(json);
                    }
                })
                .catch((error) => console.log('An error occurred', error.message));
        };

        fetchUser();
    }, []);



    const siteBrandName = "@nilesjoel";//
    const footerSubscription = {
      display: false,
      // subHeading : ` Follow your breath. Join our inclusive membership to receive reminders and to track your progress.`,
      subHeading: ` Follow your breath. Enter your email to track your progress, and to receive optional reminders.`,
      subText: `You can stop at any time.`,
    };
    const footerSocial = true;
    const socialLinks = [
    //   {
    //     name: 'Instagram',
    //     icon: <FaInstagram />,
    //     href: ''
    //   }, {
    //     name: 'Facebook',
    //     icon: <FaFacebook />,
    //     href: ''
    //   },
    //   {
    //     name: 'YouTube',
    //     icon: <FaYoutube />,
    //     href: ''
    //   },
    //   {
    //       name: 'LinkedIn',
    //       icon: <FaLinkedin/>,
    //       href: ''
    //   },
    ]
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
      // {
      //   title: "Site Links",
      //   data: siteLinks
      // },
      // {
      //   title: "Account Links",
      //   data: siteLinks
      //   // data: (session) ? profileLinks : null
      // }
];





    return (
        <StudioContext.Provider value={{ ...contextData, 
        menu: menuData,
        footerSubscription,
        footerLinks,
        footerMenuSegments,
        footerSocial,
        siteBrandName,
        socialLinks,
        footerCopyright,
        siteLinks,
         }}>
            <StudioUpdateContext.Provider value={{ toggleTheme }}>
                {children}
            </StudioUpdateContext.Provider>
        </StudioContext.Provider>
    );
}
