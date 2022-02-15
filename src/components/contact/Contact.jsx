
// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { getContactHeader } from '../../redux/contact-reducer';


// export const Contact = (props) => {
//     // const [title_uz, setTitle_uz] = useState('')
//     // const [title_ru, setTitle_ru] = useState('')
//     // const [title_en, setTitle_en] = useState('')
//     // const [title_krl, setTitle_krl] = useState('')

//     // useEffect(() => {
//     //     setTitle_uz(props.title_uz),
//     //     setTitle_ru(props.title_ru),
//     //     setTitle_en(props.title_en),
//     //     setTitle_krl(props.title_krl)
//     // }, [])

//     return (
//         <div>
//             <h1>{props.title_uz}</h1>
//             <h1>{props.title_ru}</h1>
//             <h1>{props.title_en}</h1>
//             <h1>{props.title_krl}</h1>
//         </div>
//     )
// }
import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

import { EditOutlined } from '@ant-design/icons';

export const Contact = (props) => {
  console.log(props.title_uz);
  useEffect(() => {
    props.getContactHeader()
    
  }, [])
  

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Picture', dataIndex: 'picture', key: 'picture' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <a onClick={()=>alert('hi')}><EditOutlined /></a>,
    },
  ];

  const data = [
    {
      key: 1,
      name: 'Contact Header picture',
      title: props.title_uz,
      picture: '--------',
      description: 'Here you can customize the Contact title image title = title You must enter in Uzbek',
    },
    {
      key: 2,
      name: 'Jim Green',
      title: 42,
      picture: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 4,
      name: 'Joe Black',
      title: 32,
      picture: 'Sidney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
  ];

  return <Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />
}