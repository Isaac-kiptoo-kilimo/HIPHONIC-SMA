import TimelinePostCard from '../../components/Timeline/timelineStatusPost'

import React from 'react'

import { useGetPostsQuery } from '../../features/posts/postApi'
import { ClipLoader } from 'react-spinners';

const PostList = () => {
    const { data: posts, error, isLoading, isError, isFetching } = useGetPostsQuery({ refetchOnReconnect: true });

    return (
        <div>
            {isError && <div>{error.data.message} </div> }
            {(isLoading || isFetching) && <ClipLoader color='#000' loading={true}/>}
            <section>
                {posts && posts.map((post, index) => (
                    <TimelinePostCard key={index} post = {post}/>
                ))}
            </section>
        </div>
    )
}

export default PostList;