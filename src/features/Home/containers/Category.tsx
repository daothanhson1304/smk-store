import React from 'react';
import DressIcon from '../../../assets/svg/dress.svg';
import ShoesIcon from '../../../assets/svg/shoes.svg';
import JewelryIcon from '../../../assets/svg/jewelry.svg';
import PerfumeIcon from '../../../assets/svg/perfume.svg';
import CosmeticsIcon from '../../../assets/svg/cosmetics.svg';
import GlassesIcon from '../../../assets/svg/glasses.svg';
import BagIcon from '../../../assets/svg/bag.svg';
import styled from 'styled-components';
import tw from 'twin.macro';

const categoriesData = [
  { icon: DressIcon, title: 'Clothes' },
  { icon: ShoesIcon, title: 'Footwear' },
  { icon: JewelryIcon, title: 'Jewelry' },
  { icon: PerfumeIcon, title: 'Perfume' },
  { icon: CosmeticsIcon, title: 'Cosmetics' },
  { icon: GlassesIcon, title: 'Glasses' },
  { icon: BagIcon, title: 'Bag' },
];

const CategoryContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-start
    w-full
    rounded-lg
    px-6
    py-8
    sticky
    top-0
    left-0
  `}
  border: 1px solid #ededed;
`;
const CategoryItem = styled.div`
  ${tw`
  flex
  items-center
  py-2
  cursor-pointer
`}
  img {
    width: 25px;
    margin-right: 10px;
  }
`;
const CategoryTitle = styled.p`
  ${tw`
    text-base
    font-semibold
    text-[#787878]
`}
`;
const CategorySideBar = styled.p`
  ${tw`
    uppercase
    text-base
    font-medium
    mb-3
`}
`;
export const Category = () => {
  return (
    <CategoryContainer>
      <CategorySideBar>Category</CategorySideBar>
      {categoriesData.map(category => {
        return (
          <CategoryItem>
            <img src={category.icon} />
            <CategoryTitle>{category.title}</CategoryTitle>
          </CategoryItem>
        );
      })}
    </CategoryContainer>
  );
};
