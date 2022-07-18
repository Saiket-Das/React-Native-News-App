import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./Api";

export const NewsContext = createContext();

const Context = ({ children }) => {

    const [news, setNews] = useState([])
    const [category, setCategory] = useState('general')
    const [index, setIndex] = useState(1);
    const [sources, setSources] = useState(1);


    const fetchNews = async (reset = category) => {
        const { data } = await axios.get(getNewsAPI(reset));
        setNews(data);
        setIndex(1)
    }

    const fetchNewsFromSource = async () => {
        try {
            const { data } = await axios.get(getSourceAPI(sources));
            setNews(data);
            setIndex(1)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNews();
    }, [category]);

    useEffect(() => {
        fetchNewsFromSource();
    }, [sources]);

    return (
        <NewsContext.Provider value={{ news, index, setIndex, fetchNews, setCategory, setSources }}>{children}
        </NewsContext.Provider>
    )
}

export default Context;