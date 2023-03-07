import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { Form } from 'antd';

import AppLayout from '../component/AppLayout';

const Signup = () => {
    const onSubmit = useCallback(() => {

    }, []);

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} onChange={onChangeId} required />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-nick" value={nick} onChange={onChangeNick} required />
                </div>
                <div>
                    <label htmlFor="user-password">닉네임</label>
                    <br />
                    <Input name="user-password" value={password} onChange={onPassword} required />
                </div>
            </Form>
        </AppLayout>
    );
}

export default Signup;