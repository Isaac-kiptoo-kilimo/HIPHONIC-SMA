import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Photo from '../../components/photos/Photo';
import { useGetPhotosQuery } from '../../features/Photos/Photoapi'; 

const PhotoList = () => {
  const { data: photos, error, isLoading, isError, isFetching } = useGetPhotosQuery({ refetchOnReconnect: true });

  return (
    <div>
      {isError && <div>Error: {error.data.message}</div>}
      {(isLoading || isFetching) && <ClipLoader color="#000" loading={true} size={150} />}
      <section className='container'>
        {photos && photos.map((photo, index) => (
          <Photo key={index} photo={photo} />
        ))}
      </section>
    </div>
  );
};

export default PhotoList;
