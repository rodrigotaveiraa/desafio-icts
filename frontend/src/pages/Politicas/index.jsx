import {useEffect, useState} from 'react';
import { Button, Table, Modal, Form, Input, message} from 'antd';
import api from '../../services/axios';

import './styles.scss';

function Politica() {
  const [politica, setPolitica] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [flag, setFlag] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values) => {
    await api.post('/politicas', values)
    handleOk()
    setFlag(!flag)
    message.success('Política cadastrada com sucesso!')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    async function fetchVolumes() {
      setLoading(true)
      let {data} = await api.get('/politicas')
      setPolitica(data)
      setLoading(false)
    }
    fetchVolumes() 
  }, [flag])

  const columns = [
    {
      title: 'Ótimo',
      dataIndex: 'otimo',
      key: 'otimo',
    },
    {
      title: 'Bom',
      dataIndex: 'bom',
      key: 'bom',
    },
    {
      title: 'Crítico',
      dataIndex: 'critico',
      key: 'critico',
    }
  ];

  return (
    <div className="container">
        <h1>Política de Estoque</h1>
        <Button onClick={showModal} style={{border: '1px solid red', color: "red", marginBottom: "1rem"}}>CADASTRAR POLÍTICA DE ESTOQUE</Button>
        <Table  dataSource={politica} columns={columns} loading={loading}/>
        <Modal title="Cadastrar política de estoque" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
          footer={[
            // <Button key="back" onClick={handleCancel}>
            //   Cancelar
            // </Button>,
            // <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            //   Cadastrar
            // </Button>
          ]}
        >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Ótimo"
            name="otimo"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Bom"
            name="bom"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Crítico"
            name="critico"
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </Form.Item>
        </Form>
      </Modal>
    </div>
);
}

export default Politica;