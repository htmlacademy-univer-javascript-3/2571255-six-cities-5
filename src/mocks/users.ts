import {User, UserData, UserCreds} from '../models/user.ts';


export const MockUserCreds: UserCreds[] = [
  {
    email: 'test_email1@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
  },
  {
    email: 'test_email2@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb21='
  },
  {
    email: 'test_email3@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb22='
  },
  {
    email: 'test_email4@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb23='
  },
  {
    email: 'test_email5@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb24='
  },
  {
    email: 'test_email6@test.ts',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb25='
  }
];

export const MockUserData: UserData[] = [
  {
    avatarUrl: 'https://url-to-image/image1.png',
    isPro: true,
    name: 'test1'
  },
  {
    avatarUrl: 'https://url-to-image/image2.png',
    isPro: false,
    name: 'test2'
  },
  {
    avatarUrl: 'https://url-to-image/image3.png',
    isPro: true,
    name: 'test3'
  },
  {
    avatarUrl: 'https://url-to-image/image4.png',
    isPro: false,
    name: 'test4'
  },
  {
    avatarUrl: 'https://url-to-image/image5.png',
    isPro: true,
    name: 'test5'
  },
  {
    avatarUrl: 'https://url-to-image/image6.png',
    isPro: false,
    name: 'test6'
  },
];

export const MockUsers: User[] = MockUserData.map((userData, index) => ({
  ...userData,
  ...MockUserCreds[index]
}));
