import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useNavigate, Routes, BrowserRouter , Link} from 'react-router-dom';
import {
  SolutionOutlined,
  SecurityScanOutlined,
  RightOutlined,
  LeftOutlined,
  UploadOutlined
} from '@ant-design/icons';
import './styles.scss'

const {  Sider } = Layout;
const { SubMenu } = Menu;

export default function Sidebar() {
    let navigate = useNavigate()

    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };

    return (
        <Sider theme="light" collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo">
            {!collapsed && <p>Módulo do sistema</p>}
            <div onClick={() => setCollapsed(!collapsed)}>
            {!collapsed ? <RightOutlined /> : <LeftOutlined />} 
            </div> 
          </div>
          <Menu  defaultSelectedKeys={['1']} mode="inline">

              <Menu.Item key="1" icon={<UploadOutlined />} onClick={() => navigate('/upload')}>
                <Link to="/upload">
                  Upload do Arquivo
                </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<SolutionOutlined />} onClick={() => navigate('/')}>
                Relatórios
              </Menu.Item>
              <Menu.Item key="3" icon={<SecurityScanOutlined />} onClick={() => navigate('/politicas')}>
                Políticas
              </Menu.Item>
          </Menu>
        </Sider>
    )
}