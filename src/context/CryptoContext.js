import { useLayoutEffect } from "react";
import { createContext, useState } from "react";

// create context object
export const CryptoContext = createContext({});

// create provider object
export const CryptoProvider = ({children}) => {
    const [cryptoData, setCryptoData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [coinSearch, setCoinSearch] = useState("");
    const [currency, setCurrency] = useState("usd");
    const [order, setOrder] = useState("market_cap_desc")
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [coinData, setCoinData] = useState(""); 
    const [trendingData, setTrendingData] = useState([]);
    const [allSavedCoins, setSavedCoins] = useState([]);
    const [savedData, setSavedData] = useState([]);


    const getCryptoData = async () => {
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/coins/list`                
            ).then(res => res.json()).then(json => json) ;
            
            setTotalPages(data.length)
        } catch (error) {
            console.log(error);
        }
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${order}&per_page=${perPage}&page=${currentPage}&price_change_percentage=1h%2C%2024h%2C%207d&locale=en&precision=2&x_cg_demo_api_key=CG-ktbLeNZvNaxHNJmxjrTNyPrS`                
            ).then(res => res.json()).then(json => json) ;
            
            setCryptoData(data);
        } catch (error) {
            console.log(error);
        }
    }
    const getCoinData = async (coinId) => {
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false&x_cg_demo_api_key=CG-ktbLeNZvNaxHNJmxjrTNyPrS`                
            ).then(res => res.json()).then(json => json) ;
            setCoinData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const getSearchData = async (query) => {
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/search?query=${query}&x_cg_demo_api_key=CG-ktbLeNZvNaxHNJmxjrTNyPrS`
            ).then(res => res.json()).then(json => json) ;
            
            setSearchData(data.coins); 
        } 
        catch (error) {
            console.log(error);
        }
    }
    const getTrendingData = async () => {
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-ktbLeNZvNaxHNJmxjrTNyPrS`                
            ).then(res => res.json()).then(json => json) ;
            console.log(data);
            setTrendingData(data);
        } catch (error) {
            console.log(error);
        }
    }
    const getSavedData = async () => {
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${allSavedCoins}&order=${order}&per_page=${perPage}&page=${currentPage}&price_change_percentage=1h%2C%2024h%2C%207d&locale=en&precision=2&x_cg_demo_api_key=CG-ktbLeNZvNaxHNJmxjrTNyPrS`                
            ).then(res => res.json()).then(json => json) ;
            
            setSavedData(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const resetPage = () =>
    {
        setCurrency("USD");
        setOrder("market_cap_desc")
        setCurrentPage(1);
        setCoinSearch("");
        setPerPage(10);
    } 
    
    const saveCoin = (coinId) =>
    {
        let oldCoins = JSON.parse(localStorage.getItem("coins"));
        if(oldCoins.includes(coinId))
        {
            return;
        }
        else
        {
            let newCoin = [...oldCoins, coinId];
            setSavedCoins(newCoin);
            localStorage.setItem("coins", JSON.stringify(newCoin));
        }
    }
    
    const unsaveCoin = (coinId) =>
    {
        let oldCoins = [];
        try {
            const storedCoins = localStorage.getItem("coins");
            if (storedCoins) {
                oldCoins = JSON.parse(storedCoins);
            }
        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
            // If there's an error, clear the localStorage to avoid future errors
            localStorage.removeItem("coins");
        }
        if(oldCoins.includes(coinId))
        {
            const remainingCoins = oldCoins.filter((id) =>  
            id !== coinId)
            setSavedCoins(remainingCoins);
            localStorage.setItem("coins", JSON.stringify(remainingCoins));
        }
        else
        {
            return;
        }
    }

    useLayoutEffect(() => {
        getCryptoData();
    }, [coinSearch, currency, order, currentPage, perPage])

    useLayoutEffect(() => {
        if(allSavedCoins.length > 0)
        {
            getSavedData();
        }
        else
        {
            setSavedData([]);
        }
    }, [allSavedCoins, currency, order, currentPage, perPage])
    
    useLayoutEffect(() => {
        getTrendingData();
    }, [])

    useLayoutEffect(() => {
        try {
            let storedCoins = localStorage.getItem("coins");
            if (!storedCoins) {
                localStorage.setItem("coins", JSON.stringify([]));
                setSavedCoins([]);
            } else {
                let totalCoins = JSON.parse(storedCoins);
                setSavedCoins(totalCoins);
            }
        } catch (error) {
            console.error("Error parsing JSON from localStorage:", error);
            // Initialize localStorage with an empty array if there is an error
            localStorage.setItem("coins", JSON.stringify([]));
            setSavedCoins([]);
        }

    }, [])
 
    return(
        <CryptoContext.Provider value={{cryptoData, searchData, getSearchData, setCoinSearch, setSearchData, setCurrency, currency, setOrder, setCurrentPage, currentPage, totalPages, setTotalPages, resetPage, setPerPage, perPage, getCoinData, coinData, trendingData, saveCoin, allSavedCoins, unsaveCoin, savedData}}>
            {children}
        </CryptoContext.Provider>
    )
};