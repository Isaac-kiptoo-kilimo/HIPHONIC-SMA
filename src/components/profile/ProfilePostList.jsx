import ProfilePostCard from './ProfilePostCard';
import './ProfilePostList.scss';
import React from 'react';
import { useGetPostsQuery } from '../../features/posts/postApi';
import { ClipLoader } from 'react-spinners';

const PostList = () => {
    const { data: posts, error, isLoading, isError, isFetching } = useGetPostsQuery({ refetchOnReconnect: true });

    let latestPost = null;

    if (isLoading || isFetching) {
        return <ClipLoader color='#000' loading={true}/>;
    }

    if (isError) {
        return <div>{error.data.message}</div>;
    }

    if (posts && posts.length > 0) {

        // Find the most recent post
        latestPost = posts[0];
    }

    return (
        <div className='UserPostsList'>
            {latestPost && <ProfilePostCard key={latestPost.id} post={latestPost} />}
        </div>
    );
}

export default PostList;
