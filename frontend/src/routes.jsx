import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Relatorio from './pages/Relatorio'
import Upload from './pages/Upload'
import Politicas from './pages/Politicas'
import Sidebar from "./components/Sidebar";
import { Layout } from 'antd';
const { Header, Content } = Layout;

const Rotas = () => {

  const PageLayout = () => {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout className="site-layout">
          <Header className="header" style={{ padding: 0 }} />
          <Content style={{ margin: '2rem 3.5rem' }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
            <Route path="/" element={<Relatorio />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/politicas" element={<Politicas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;