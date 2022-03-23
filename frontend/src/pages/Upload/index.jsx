import {useState} from 'react';
import {
  CloudUploadOutlined
} from '@ant-design/icons';
import {Button, Upload, message} from 'antd'

import './styles.scss';
import api from '../../services/axios';

function UploadFile() {
  // const [files, setFiles] = useState([])

  const handleUpload = async (e) => {
    console.log(e.file)
    try {
      const data = new FormData()
      data.append('file', e.file)
      await api.post('/produtos', data)
      message.success('Upload realizado com sucesso')
    } catch (error) {
      message.error('Erro no upload')
    }
  }

  return (
    <div className="container">
      <h1>Upload de Arquivo</h1>
      <p>Estoque principal</p>

      <Upload
        onChange={(e) => handleUpload(e)}
        beforeUpload={() => false}
      >
        <div className="container-upload">
            <div>
              <p>Clique para subir seu arquivo</p>
              <CloudUploadOutlined/>
            </div>
        </div>
      </Upload>
    </div>)
}

export default UploadFile;