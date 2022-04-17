import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue){

    const [ error, setError ] = useState(false);
    const [ item, setItem ] = useState(initialValue);
    const [ loading, setLoading ] = useState(true);

    useEffect(()=>{
        try{
            const localStorageItem = localStorage.getItem(itemName);
            let parseItem;

            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parseItem = initialValue;
            }else{
                parseItem = JSON.parse(localStorageItem);
            }

            setItem(parseItem);
            setLoading(false);

        }
        catch(e){
            setError(e);
        }
    
    },[])


    const saveItem = (newItem)=>{
        try{
            const stringFieldItem = JSON.stringify(newItem);
            localStorage.setItem(newItem, stringFieldItem);
            setItem(newItem)
        }
        catch(e){
            setError(e);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage }

