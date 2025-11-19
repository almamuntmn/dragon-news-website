import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = (news) => {
    return (
        <div className='space-y-5'>
            <img className='w-full h-[350px] object-cover rounded-2xl' src={news.news.image_url} alt="" />
            <h2 className='text-2xl'>{news.news.title}</h2>
            <p>{news.news.details}</p>
            <Link className='btn btn-secondary' to={`/category/${news.news.category_id}`}>Back to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;