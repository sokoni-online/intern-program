import {useState,useEffect} from 'react';

function getStorageValue(key, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}
function getStorageValue1(key1, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(key1);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}
function getStorageValue2(key2, defaultValue) {
    // getting stored value
    const saved = localStorage.getItem(key2);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}
export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });
    const [value1, setValue1] = useState(() => {
        return getStorageValue1(key, defaultValue);
    });

    const [value2, setValue2] = useState(() => {
        return getStorageValue2(key, defaultValue);
    });
    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value,setValue,value1,setValue1,value2,setValue2];
};


