import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';


export const useDarkMode = (key, initialValue) => {

    const [value, setValue] = useLocalStorage(key, initialValue);
}