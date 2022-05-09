import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import tw from 'twin.macro';
import { Header } from '../components/Header';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { hiddenLoading, showLoading } from 'features/App/redux/AppSlice';
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

const Image = styled.div`
  ${tw`
    mt-3
`}
  img {
    width: 200px;
    height: 250px;
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
const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    category: yup.number().required(),
    price: yup.number().required(),
    sale: yup.number().required(),
    quantity: yup.number().required(),
    description: yup.string().required(),
    imageUrl: yup.string().required(),
  })
  .required();
interface IProductFormData {
  name: string;
  category: number;
  price: number;
  sale: number;
  quantity: number;
  description: string;
  imageUrl: string;
}

export const AddOrEditProductPage = () => {
  const { register, handleSubmit } = useForm<IProductFormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useAppDispatch();
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
  const onSubmitProduct = async (formData: IProductFormData) => {
    dispatch(showLoading());
    // await dispatch;
    dispatch(hiddenLoading());
  };
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () =>
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <AddOrEditProductPageContainer>
      <Header title={'Add Product'} />
      <form onSubmit={handleSubmit(onSubmitProduct)}>
        <AddOrEditProductContent>
          <ContentLeft>
            <Group>
              <Label>Product Name</Label>
              <input type='text' {...register('name')} />
            </Group>
            <Group>
              <Label>Category</Label>
              <input type='text' {...register('category')} />
            </Group>
            <LgGroup>
              <Group>
                <Label>Price</Label>
                <input type='text' {...register('price')} />
              </Group>
              <Group>
                <Label>Sale</Label>
                <input type='text' {...register('sale')} />
              </Group>
            </LgGroup>
            <Group>
              <Label>Description</Label>
              <textarea {...register('description')} />
            </Group>
          </ContentLeft>
          <ContentRight>
            <Group>
              <Label>Product image</Label>
              <section className='container'>
                <div {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} {...register('imageUrl')} />
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
              You need add image. Pay attention to the quality of the pictures
              you add, comply with the background color standards. Pictures must
              be in certain dimensions. Notice that the product shows all the
              details
            </SubLabel>
            <Group>
              <Label>Quantity</Label>
              <input type='text' {...register('quantity')} />
            </Group>
            <button
              type='submit'
              className='text-white mt-8 bg-[#0e357b] cursor-pointer w-[200px]
              text-center px-4 py-3 rounded-xl'
            >
              Add Product
            </button>
          </ContentRight>
        </AddOrEditProductContent>
      </form>
    </AddOrEditProductPageContainer>
  );
};
