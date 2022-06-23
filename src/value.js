import { atom } from 'recoil';

export const contentValue = atom({
  key: 'searchValue',
  default: '뮤지컬',
});
