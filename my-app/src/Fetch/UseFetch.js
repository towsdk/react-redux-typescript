import React, {useState, useEffect} from 'react'

const UseFetch = (url) => {

    const [datas, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=> {
       setTimeout(()=>{
        fetch(url)
        .then((res)=> {
            if(!res.ok){
                throw Error ("something wrong");
            }else{
            return res.json();
            }
        })
        .then((data)=> {
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        })
       }, 2000);

    }, [url])
  return {datas, isLoading, error};
}

export default UseFetch