
import { useEffect} from "react";
import React from "react"

const initialState={
    light: {
        name: "light",
        color: "#45413C",
        background: "#F5F2E8",
    },
    dark: {
        name: "dark",
        color: "#FBFDFF",
        background: "#27272A",
      },
}
// const darkMode = window.matchMedia()
const useDarkMode = () => {

    const [ isDarkMode, toggleDarkMode]= useDarkMode(initialState, );


    useEffect(()=>{
        toggleDarkMode()
    }, [isDarkMode])
    return (
        <div>

        </div>
    )

};

export default useDarkMode;
