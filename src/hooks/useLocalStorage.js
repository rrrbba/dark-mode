import { useState } from 'react';



export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState( () => {

        //This is getting from the local storage by the key
        const item = window.localStorage.getItem(key);

        //This is saying if there is a item to return it and parse it using JSON
        //OR if no item then return the initialValue
        return item ? JSON.parse(item) : initialValue;

        //we made the value part of the hook with the above now we need to make the setter
    });

    //Function that takes in a value parameter
    const setValue = value => {
        //updating state of stored value with value
        setStoredValue(value);
        //setting the value of local storage using the key that was passed into the hook (this value needs to be stringified for objects and arrays)
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];


}