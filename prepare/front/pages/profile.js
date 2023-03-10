import Head from 'next/head';

import AppLayout from '../component/AppLayout';
import NicknameEditForm from '../component/NicknameEditForm';
import FollowList from '../component/FollowList';

const Profile = () => {
    const followingList = [{ nickname: '제로초' }, { nickname: '승택' }, { nickname: '노드버드오피셜' }];
    const followerList = [{ nickname: '제로초' }, { nickname: '승택' }, { nickname: '노드버드오피셜' }];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="팔로잉 목록" data={followingList}/>
                <FollowList header="팔로잉 목록" data={followerList}/>
            </AppLayout>
        </>
    );
}

export default Profile;