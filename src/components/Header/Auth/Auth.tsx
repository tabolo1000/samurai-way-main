import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { Button, Checkbox, Form, Input } from 'antd';
import type { FormProps } from 'antd';


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};


export const Auth = (props: any) => {
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <MainAuth>
            <NameSection>Log in</NameSection>
            <FormCustom
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </FormCustom>

        </MainAuth>
    )
}


const FormCustom = styled(Form)`
    padding: 20px
`

const MainAuth = styled.div`
    background-color: ${theme.colors.backgorundSection};
    border: 2px solid ${theme.colors.borderSection};
    padding: 20px;
    border-radius: 20px;
    width: 50%;
    margin: 30px auto 0;
`

const NameSection = styled.h2`
    text-align: center;
    font-size: 30px;
    border-bottom: 2px solid #ffffff;
    padding-bottom:30px;
`

