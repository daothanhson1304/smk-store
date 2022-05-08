import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import tw from 'twin.macro';
import { Header } from '../components/Header';
import Dropzone from 'react-dropzone';
const AddOrEditProductPageContainer = styled.div`
  ${tw`

  `}
`;

const AddOrEditProductContent = styled.div`
  ${tw`
      grid
      grid-cols-2
      gap-8
      px-6
      py-8
      mt-8
      bg-[white]
      shadow-xl
  `}
  input ,
  textarea {
    border: 1px solid #eff0f2;
    width: 100%;
    padding: 10px 20px;
  }
  textarea {
    height: 150px;
  }
`;

const ContentLeft = styled.div`
  ${tw`

  `}
`;
const ContentRight = styled.div`
  ${tw`

  `}
`;
const Group = styled.div`
  ${tw`
    my-3
  `}
`;
const Label = styled.div`
  ${tw`
    mb-3
  `}
`;
const LgGroup = styled.div`
  ${tw`
      grid
      grid-cols-2
      gap-4
  `}
`;
const SubLabel = styled.div`
  ${tw`
    text-gray-400
  `}
`;
const AddOrEditButton = styled.div`
  ${tw`
  text-white
  mt-8
    bg-[#0e357b]
    cursor-pointer
    w-[200px]
    text-center
    px-4
    py-3
    rounded-xl
  `}
`;
const Image = styled.div`
  ${tw`
    mt-3
`}
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }
`;
const DropZone = styled.p`
  ${tw`
    px-12
    py-14
`}
  border: 1px dashed gray;
`;
export const AddOrEditProductPage = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <AddOrEditProductPageContainer>
      <Header title={'Add Product'} />
      <AddOrEditProductContent>
        <ContentLeft>
          <Group>
            <Label>Product Name</Label>
            <input type='text' />
          </Group>
          <Group>
            <Label>Category</Label>
            <input type='text' />
          </Group>
          <LgGroup>
            <Group>
              <Label>Price</Label>
              <input type='text' />
            </Group>
            <Group>
              <Label>Sale</Label>
              <input type='text' />
            </Group>
          </LgGroup>
          <Group>
            <Label>Description</Label>
            <textarea />
          </Group>
        </ContentLeft>
        <ContentRight>
          <Group>
            <Label>Product image</Label>
            <section className='container'>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <DropZone>
                  Drag 'n' drop some files here, or click to select files
                </DropZone>
              </div>
            </section>
            {files.length > 0 &&
              files.map((file: any) => {
                return (
                  <Image>
                    <img src={file.preview} alt='' />
                  </Image>
                );
              })}
          </Group>
          <SubLabel>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea qui
            ipsa possimus pariatur nisi debitis quidem illum quibusdam corporis
            corrupti? Quis id exercitationem praesentium doloremque voluptatibus
            unde aspernatur facilis veritatis!
          </SubLabel>
          <Group>
            <Label>Quantity</Label>
            <input type='text' />
          </Group>
          <AddOrEditButton>Add Product</AddOrEditButton>
        </ContentRight>
      </AddOrEditProductContent>
    </AddOrEditProductPageContainer>
  );
};
