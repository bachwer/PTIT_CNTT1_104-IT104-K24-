import React, { useState } from 'react';
import {
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    DollarOutlined,
    BellOutlined
} from '@ant-design/icons';
import {Avatar, type MenuProps} from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Search from "antd/es/input/Search";

import Table from "./table.tsx"

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Tổng quát', '1', <PieChartOutlined />),
    getItem('Quản lý tiền Lương', '2', <DollarOutlined />),

    getItem('Quản Lý Nhân Sự', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Quản Lý Đào Tạo', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Quản Lý File', 'sub3', <FileOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
];


function renderContent(key:string){
    switch (key){
        case "1":
            return <Table/>
        case "2":
            return <h1>2</h1>
        case "3":
            return <h1>3</h1>
        case "4":
            return <h1>4</h1>
        case "5":
            return <h1>5</h1>
        case "6":
            return <h1>112</h1>
        default:
            return <div>🏠 Trang mặc định</div>;

    }
}


const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentPage, setCurrentPage] = useState("1");
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const setCurren = (key: string) => {
        console.log("Selected key:", key);
        setCurrentPage(key);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                    onClick={(e) => setCurren(e.key)}
                />
            </Sider>

            <Layout>
                <Header className={"flex justify-between items-center "} style={{ padding: 0, background: colorBgContainer }} >
                    <Search className={"ml-10"} placeholder="input search text"  style={{ width: 200 }} />

                   <div className={"mr-10 flex gap-3.5"}>
                       <BellOutlined />
                       <Avatar size={32} icon={<UserOutlined />} />
                   </div>

                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} />
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >


                        {renderContent(currentPage)}
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