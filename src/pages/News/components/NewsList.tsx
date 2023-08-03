import { useEffect, useState } from "react";
import { fetchNewsData } from "../redux/news";
import { useAppDispatch, useAppSelector } from "../../../shared/redux/hooks";
import NewsItem from "./NewsItem";


const NewsList = () => {

    const dispatch = useAppDispatch()
    const { newsItems, loading, error } = useAppSelector((state) => state.news);
    console.log('newsItems: ', newsItems);

    const [search, setSearch] = useState('')

    const searchedNews = newsItems.filter((item) => {
        return item.title.includes(search)
    })


    useEffect(() => {
        dispatch(fetchNewsData());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="w-[64%] mx-auto mt-[30px] flex-center">
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="w-full h-[40px] pl-[10px] border-[2px] border-gray-600 rounded"
                />
            </div>
            <div className="w-[70%] mx-auto mt-[30px] flex flex-wrap justify-between">
                {searchedNews.map((item) => (
                    <NewsItem key={item.id} item={item} />
                ))}
            </div>
        </>
    );
}

export default NewsList;