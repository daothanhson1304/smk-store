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
import { PRODUCT_STATUS } from 'constants/constants';
import { IProduct } from '../types/types';
import { addProduct, editProduct } from '../redux/AdminThunk';
import { useLocation } from 'react-router';
import { UploadImage } from '../containers/UploadImage';
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
const Select = styled.select`
  ${tw`
  px-2
  py-[11px]
  w-full
`}
  border: 1px solid #eff0f2;
`;
const schema = yup
  .object()
  .shape({
    title: yup.string().required(),
    image: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    sale: yup.number().required(),
    categoryId: yup.number().required(),
    quantity: yup.number().required(),
    status: yup.number().required(),
  })
  .required();
interface IState {
  productId: number;
}

export const AddOrEditProductPage = () => {
  const { register, handleSubmit, reset, setValue, getValues } =
    useForm<IProduct>({
      resolver: yupResolver(schema),
    });
  const { products } = useAppSelector((state) => state.adminReducer);
  const { state } = useLocation();
  const dispatch = useAppDispatch();

  const onSubmitProduct = async (formData: IProduct) => {
    dispatch(showLoading());
    const data = state as IState;
    let id = null;
    if (state && data && data.productId) {
      id = data.productId;
    }
    if (id) {
      await dispatch(editProduct({ product: formData, id }));
    } else {
      await dispatch(addProduct(formData));
    }

    dispatch(hiddenLoading());
    reset();
  };
  const handleGetImageUrl = (url: string) => {
    setValue('image', url);
  };
  useEffect(() => {
    const data = state as IState;
    if (state && data && data.productId) {
      const product = products.find(
        (item: IProduct) => item.id === data.productId
      );
      if (product) {
        reset({
          title: product.title,
          categoryId: product.categoryId,
          price: product.price,
          sale: product.sale,
          quantity: product.quantity,
          description: product.description,
          image: product.image,
          status: product.status,
        });
      }
    }
    reset();
  }, [reset, products, state]);
  return (
    <AddOrEditProductPageContainer>
      <Header title={'Add Product'} />
      <form onSubmit={handleSubmit(onSubmitProduct)}>
        <AddOrEditProductContent>
          <ContentLeft>
            <Group>
              <Label>Product Name</Label>
              <input type='text' {...register('title')} />
            </Group>
            <Group>
              <Label>Category</Label>
              <input type='text' {...register('categoryId')} />
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
              <UploadImage
                saveImage={handleGetImageUrl}
                urlImage={getValues('image')}
              />
            </Group>
            <SubLabel>
              You need add image. Pay attention to the quality of the pictures
              you add, comply with the background color standards. Pictures must
              be in certain dimensions. Notice that the product shows all the
              details
            </SubLabel>
            <LgGroup>
              <Group>
                <Label>Quantity</Label>
                <input type='text' {...register('quantity')} />
              </Group>
              <Group>
                <Label>Status</Label>
                <Select {...register('status')}>
                  <option value={PRODUCT_STATUS.NEW}>New</option>
                  <option value={PRODUCT_STATUS.PROMOTION}>Promotion</option>
                  <option value={PRODUCT_STATUS.SALE}>Sale</option>
                  <option value={PRODUCT_STATUS.DEACTIVE}>DeActive</option>
                </Select>
              </Group>
            </LgGroup>
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
