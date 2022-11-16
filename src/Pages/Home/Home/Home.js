import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/NewsCard/NewsCard';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
            <div>
                <h2>ST All Course Home:{allnews.length}</h2>

                {
                    allnews.map(news => <NewsCard
                        key={news._id}
                        news={news}
                    ></NewsCard>)
                }
            </div>
        </div>

    );
};

export default Home;