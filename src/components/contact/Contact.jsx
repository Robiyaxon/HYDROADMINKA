import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Modal, Table } from 'antd';

import { EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getContactHeaderImageUpdate } from '../../redux/contact-reducer';

export const Contact = (props) => {
  useEffect(() => {
    props.getContactHeader()
  }, [])

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);

  };

  const ChangeData = (e) => {
    let text = e.currentTarget.value
    console.log(text);
    debugger
    props.upDateContactHeaderText(text)
  }

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Picture', dataIndex: 'picture', key: 'picture' },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <>
        <Modal
          title="Title"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <input type="text" value={props.title_uz} onChange={ChangeData} />
        </Modal>
        <Button type="primary" onClick={showModal}><EditOutlined /></Button>
      </>,
    },
  ];

  const data = [
    {
      key: 1,
      name: 'Contact Header picture',
      title: props.title_uz,
      picture: props.photoUrl,
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
