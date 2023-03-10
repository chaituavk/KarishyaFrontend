import React, { memo, useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { getPoojasAsync, selectPooja } from './poojaSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

interface PoojaEntry {
  key: string;
  name: string;
  description: string;
}

const columns: ColumnsType<PoojaEntry> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  }
];


const Pooja: React.FC = memo(() => {
    const data = useAppSelector(selectPooja);

    const tableData = data.map((entr) => {
        return {
            key: entr.id,
            name: entr.name,
            description: entr.description
        }
    })
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(getPoojasAsync()); 
      return () => {
        console.log("unmounting");
      }
    }, []);
    

  
    return <Table columns={columns} dataSource={tableData} />
})

export default Pooja;