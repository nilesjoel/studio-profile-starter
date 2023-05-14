import React, { useContext, useState, useEffect } from "react";


type StudioLinkData = {
    title: string,
    slug: string,
    uid: string
}
type StudioContextData = {
    menu?: Array<StudioLinkData>,
    footer?,
    footerSubscription?,
    footerLinks?,
    siteLinks?,
    socialLinks?,
    footerMenuSegments?,
    footerCopyright?,
    footerSocial?,
    siteBrandName?,
    websiteData?,
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
    const [menuData, setMenuData] = useState([]);
    const [websiteData, setWebsiteData] = useState({});

    const [ siteBrandName, setSiteBrandName ] = useState("");
    const [ siteMenu, setSiteMenu ] = useState([]);
    const [ siteMetadata, setSiteMetadata ] = useState([]);

    // const [ siteLinks, setSiteLinks ] = useState([]);
    // const [ socialLinks, setSocialLinks ] = useState([]);
    // const [ footerMenuSegments, setFooterMenuSegments ] = useState([]);
    // const [ footerSocial, setFooterSocial ] = useState([]);
    // const [ footerLinks, setFooterLinks ] = useState([]);
    // const [ footerSubscription, setFooterSubscription ] = useState([]);
    // const [ footer, setFooter ] = useState([]);
    // const [ footerCopyRight, setFooterCopyRight ] = useState([]);





    function toggleTheme() {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    }

    const contextData: StudioContextData & { darkTheme: boolean } = { ...state, darkTheme };

    // fetch a context from Studio Symmetries API
    useEffect(() => {
        const fetchUser = () => {
            fetch(`/api/profile/menu`)
                .then((response) => response.json())
                .then((json) => {
                    // console.log(json.error, "error?", json)
                    if (!json.error) {
                        setMenuData(json);
                    }
                })
                .catch((error) => console.log('An error occurred', error.message));
        };
        const fetchWebContext = () => {
            fetch(`/api/website/context`)
                .then((response) => response.json())
                .then((json) => {
                    // console.log(json.error, "error?", json)
                    if (!json.error) {
                        setWebsiteData(json);

                        const {
                            siteBrandName,
                            metadata,
                            menus
                        } = json.websiteEntity;
                        
                        setSiteMenu(menus);
                        setSiteBrandName(siteBrandName);
                        setSiteMetadata(metadata);

                    }
                })
                .catch((error) => console.log('An error occurred', error.message));
        };
        fetchWebContext();
        // fetchUser();
    }, []);


const test = {
    siteLinks : [ // {
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
    ],
    subscription : {
        display: false,
        // subHeading : ` Follow your breath. Join our inclusive membership to receive reminders and to track your progress.`,
        subHeading: ` Follow your breath. Enter your email to track your progress, and to receive optional reminders.`,
        subText: `You can stop at any time.`,
    },
    socialLinks : [
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
    ],
    footerMenuSegments : [
        {
            title: "Links",
            data: 'siteLinks'
        }
    ]
}
  


    // const siteBrandName = "@nilesjoel";//
    const footerSocial = true;
    const footerCopyright = `${siteBrandName} © ${new Date().getFullYear()}`;
    const footerLinks = true;






    return (
        <StudioContext.Provider value={{
            ...contextData,
            menu: siteMenu,
            // footerSubscription,
            footerLinks,
            // footerMenuSegments,
            footerSocial,
            siteBrandName,
            // socialLinks,
            footerCopyright,
            // siteLinks,
            websiteData
        }}>
            <StudioUpdateContext.Provider value={{ toggleTheme }}>
                {children}
            </StudioUpdateContext.Provider>
        </StudioContext.Provider>
    );
}
