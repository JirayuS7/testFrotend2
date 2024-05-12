"use client";
import { Breadcrumb, Layout, Menu, Select, theme } from "antd";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  useTransition } from "react";

const { Header, Content, Footer } = Layout;

 

export default function LayoutInner({
    children,
}: {
    children: React.ReactNode;
}) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const router = useRouter();
    const localActive =  useLocale();
    const [isPending, startTransition] = useTransition();

    const items = [
        {
            key: "1",
            label: <Link href={`/${localActive}`}>Home</Link>,
        },
        {
            key: "2",
            label: <Link href={`/${localActive}/sharp`} >Option1</Link>,
        },
        {
            key: "3",
            label: <Link href={`/${localActive}/form`}>Option2</Link>,
        },
    ];

    function handleSelect(e: string) {
 
      
        startTransition(() => {
            router.replace(`/${e}`);
        });
    }

    return (
        <Layout>
            <Header style={{ display: "flex", alignItems: "center" }}>
                <h1 className="text-white h2 me-3">JIRAYU SRIPUD</h1>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
                <div>
                    <Select
                        defaultValue="En"
                        disabled={isPending}
                        style={{ width: 120 }}
                        value={localActive}
                        onChange={(e) => handleSelect(e as string)}
                        options={[
                            { value: "en", label: "En" },

                            { value: "th", label: "Th" },
                        ]}
                    />
                </div>
            </Header>
            <Content style={{ padding: "0 48px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                ©{new Date().getFullYear()} Created by Jirayu{" "}
                <span className="ms-4"> Contact me :</span>{" "}
                <a href="mail@jirayudesign@gmail.com">jirayudesign@gmail.com</a>
            </Footer>
        </Layout>
    );
}
