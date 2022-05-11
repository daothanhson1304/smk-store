import React, { useState } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import styled from 'styled-components';
import tw from 'twin.macro';
import { storage } from '../../../firebase/firebaseConfig';
interface IProps {
  saveImage: (url: string) => void;
  urlImage?: string;
}
const Text = styled.div`
  ${tw`
    px-3
    py-2
    text-white
    inline-block
    rounded-xl
    my-4
    cursor-pointer
    bg-[#0e357b]
  `}
`;
const ImageContainer = styled.div`
  ${tw`
  `}
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;
export const UploadImage: React.FC<IProps> = ({ saveImage, urlImage }) => {
  const [file, setImage] = useState<File>();
  const [url, setUrl] = useState('');
  const handleUpload = () => {
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          saveImage(downloadURL);
          setUrl(downloadURL);
        });
      }
    );
  };
  const handleChange = (e: any) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <>
      <input onChange={handleChange} type='file' className='input' />
      <Text onClick={handleUpload}>Upload</Text>
      <ImageContainer>
        <img
          src={url || urlImage || 'http://via.placeholder.com/300'}
          alt='firebase-image'
        />
      </ImageContainer>
    </>
  );
};
