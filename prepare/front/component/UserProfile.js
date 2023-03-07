import React, { useState, useCallback } from 'react';

import { Avatar, Card, Button } from 'antd';

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    return (
        <Card
            actions={[
                <div key="twitter">짹짹<br />0</div>,
                <div key="followings">팔로워<br />0</div>,
                <div key="followings">팔로워<br />0</div>
            ]}
        >
            <Card.Meta
                avatar={<Avatar>ZC</Avatar>}
                title="tmdxor"
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;