import {useEffect, useState} from 'react';
import { Table} from 'antd';
import api from '../../services/axios';

import './styles.scss';

function Relatorio() {
  const [volumes, setVolumes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchVolumes() {
      setLoading(true)
      let {data} = await api.get('/produtos')
      setVolumes(data)
      setLoading(false)
    }
    fetchVolumes() 
  }, [])

  const columns = [
    {
      title: 'Data',
      dataIndex: 'Date',
      key: 'Date',
    },
    {
      title: 'Open',
      dataIndex: 'Open',
      key: 'Open',
    },
    {
      title: 'High',
      dataIndex: 'High',
      key: 'High',
    },
    {
      title: 'Low',
      dataIndex: 'Low',
      key: 'Low',
    },
    {
      title: 'Close',
      dataIndex: 'Close',
      key: 'Close',
    },
    {
      title: 'Volume',
      dataIndex: 'Volume',
      key: 'Volume',
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
    },
  ];

  return (
    <div className="container">
        <h1>Relatórios</h1>
        <p className="title-resume">Resumo</p>

        <Table rowSelection dataSource={volumes} columns={columns} loading={loading}/>
    </div>
);
}

export default Relatorio;