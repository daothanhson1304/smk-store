import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
const TableCustom = styled.table`
  ${tw`
      w-full
      shadow-xl
      divide-y
    bg-[#f8f9fd]

  `}
`;
const THeadCustom = styled.thead`
  ${tw`
  `}
`;
const TrCustom = styled.tr`
  ${tw`
    my-8
    hover:bg-[#f4f8fa]
  `}
`;
const TdCustom = styled.td`
  ${tw`
    text-xl
    p-6
  `}
`;
const TBodyCustom = styled.tbody`
  ${tw`

  `}
`;
const TableContainer = styled.div`
  ${tw`
      mt-8
  `}
`;
const Icon = styled.div`
  ${tw`
  mx-2
  cursor-pointer
`}
`;
const ActionCol = styled.div`
  ${tw`
  flex
  items-center
`}
`;
interface IProps {
  data: any;
  handleDelete?: () => void;
  handleEdit?: () => void;
}
export const Table: React.FC<IProps> = ({ data, handleEdit, handleDelete }) => {
  const keys = data && data.length > 0 && Object.keys(data[0]);
  const hasAction = handleEdit || handleDelete;
  return (
    <TableContainer>
      <TableCustom>
        <THeadCustom>
          <TrCustom>
            {keys && keys.map((key: any) => <TdCustom>{key}</TdCustom>)}
            {hasAction && <TdCustom>Action</TdCustom>}
          </TrCustom>
        </THeadCustom>
        <TBodyCustom>
          {data &&
            data.map((item: any) => {
              return (
                <TrCustom>
                  {keys &&
                    keys.map((key: any) => {
                      return <TdCustom>{item[key]}</TdCustom>;
                    })}
                  {hasAction && (
                    <TdCustom>
                      <ActionCol>
                        {handleEdit && (
                          <Icon onClick={handleEdit}>
                            <AiOutlineEdit></AiOutlineEdit>
                          </Icon>
                        )}
                        {handleDelete && (
                          <Icon onClick={handleDelete}>
                            <AiOutlineDelete></AiOutlineDelete>
                          </Icon>
                        )}
                      </ActionCol>
                    </TdCustom>
                  )}
                </TrCustom>
              );
            })}
        </TBodyCustom>
      </TableCustom>
    </TableContainer>
  );
};
