import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return;
        }
        else if (id == '1') {
            const filteredNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        }
        else {
            const filteredNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filteredNews);
        }
        const filteredNews = data.filter((news) => news.category_id == id);
        console.log(filteredNews);
        setCategoryNews(filteredNews);
    }, [data, id]);


    return (
        <div>
            <h2 className='font-bold mb-5'>Dragon News Home</h2>
            {
                categoryNews.map((news) => <NewsCard key={news._id} news={news}></NewsCard>)
            }

        </div>
    );
};

export default CategoryNews;