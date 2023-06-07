import React from "react";

export const themes = {
    light: {
        theme: "#595959",
        subTheme: "#bbbcbd",
        component:{
            backgroundColor: "#f6f6f6",
            color: "#2b2024",
        },
        button:{
            onHover:{
                backgroundColor:"#bbbcbd",
                color:"#191919"
            },
            contained:{
                backgroundColor: "#07689f",
                color:"#fafafa"
            },
            outlined:{
                backgroundColor:"transparent",
                color:"#191919"
            }
        },
        volume:{
            color:"#07689f"
        }
    },
    dark: {
        theme:"#4ecca3",
        subTheme: "#bbbcbd",
        component:{
            backgroundColor: "#232931",
            color: "#eeeeee",
        },
        button:{
            onHover:{
                backgroundColor:"#bbbcbd",
                color:"#fafafa"
            },
            contained:{
                backgroundColor: "#07689f",
                color:"black"
            },
            outlined:{
                backgroundColor:"transparent",
                color:"#fafafa"
            }
        },
        volume:{
            color:"#07689f"
        }
    }
};

export const ThemeContext = React.createContext(
    themes.light
);
