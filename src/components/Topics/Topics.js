import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = ({topicsDaTa}) => {
    const loaderTopics =useLoaderData();
    const topics=topicsDaTa||loaderTopics;
    return (
        <div className='d-flex flex-column justify-content-center px-5'>
            <h1 className='py-2'>Quiz Topics</h1>
            <div className="row row-cols-2 row-cols-md-3 g-4 justify-content-center">
            
                {
                    topics.data.map(topic=><Topic topic={topic} key={topic.id}/>)
                }
            </div>
        </div>
    );
};

export default Topics;