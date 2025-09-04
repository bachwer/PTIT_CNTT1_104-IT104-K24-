import React, {useState} from 'react';
import { BookOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

import TableData from "./TH1/table.tsx"

const { Header, Content, Footer, Sider } = Layout;

const items = [BookOutlined, BookOutlined, BookOutlined, BookOutlined].map(
    (icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `Ex ${index + 1}`,
    }),
);



function RenderEx (key:string){
    switch (key) {

        case "1":
            return <TableData/>
        case "2":
            return <h1>hk2</h1>
        case "3":
            return <h1>hk3</h1>
        case "4":
            return <h1>hk4</h1>
        default:
            return <h1>Error</h1>

    }

}

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [currentBook, setBook] = useState("1");



    const handleMenu = (key: string) =>{
        console.log(key)

        setBook(key)

    }


    return (
        <Layout className={"min-vh-100"}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu onClick={({key}) => handleMenu(key)} theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />


            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            height: "95vh",
                        }}
                    >

                        {RenderEx(currentBook)}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;