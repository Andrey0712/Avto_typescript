// import Header from "./Header";
import * as React from "react";
import { Outlet } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import AdminMenu from './AdminMenu';
import NoMatch from '../../NoMatch';
import CropperPage from '../../admin/CropperPage'

const AdminLayout : React.FC = () => {
    
    const { Header, Content, Footer } = Layout;

    return (
        <>
        <Layout>
          <Header className="header">
            <div className="logo" />
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
            })}
          </Menu> */}
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Layout
              className="site-layout-background"
              style={{ padding: "24px 0" }}
            >
             <AdminMenu/>
              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                {/* <Outlet /> */}
                <CropperPage />
                {/* <NoMatch /> */}
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
        </>
    );
}
export default AdminLayout;