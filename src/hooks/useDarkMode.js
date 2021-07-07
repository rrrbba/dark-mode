import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

//setting up function for useDarkMode
export const useDarkMode = () => {

    //calling useLocalStorage and passing in the key ('darkMode') that's stores whether dark mode is enabled or not (false). darkOn is the value and setDarkOn as the setter
    //'darkMode' is defined in the navbar.jsx
    const [darkOn, setDarkOn] = useLocalStorage('darkMode', false);

    //in order to add the class to the body so it shows up on the screen, we need to manipulate the DOM. Since any direct DOM manipulation is considered a side effect,use the effect hook.
    useEffect(() => {
        
        //this is checking to see if the value from useLocalStorage ('darkMode') is true or false
        if(darkOn === true){
            //if true add class 'dark-mode' to the body element
            document.querySelector('body').classList.add('dark-mode')
        } else {
            //if not true (false) remove the class 'dark-mode' from the body element
            document.querySelector('body').classList.remove('dark-mode')
        }
        //Since we don't want this effect to run every time something in the component changes and since darkOn is the data the hook depends on we'll add in a dependency array
    }, [darkOn]);

    //in order to use this in our app, we'll need to return darkOn to know whether dark mode is enabled or not and the setter function that toggles dark mode
    return [darkOn, setDarkOn]
};

//go on to Navbar.jsx