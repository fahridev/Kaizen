import axios from 'axios';
const url = 'https://api.extrazone.com';

export const api = () =>
  axios.create({
    baseURL: url,
    responseType: 'json',
    headers: {
      common: {
        'Content-Type': 'application/json;charset=utf-8',
        Accept: 'application/json',
        'X-Country-Id': 'TR',
        'X-Language-Id': 'TR',
      },
    },
  });
export const AllServices = {
  getList: async () => {
    const response = await api().get('/tags/list');
    return response.data;
  },
  getPromotions: async () => {
    const response = await api().get('/promotions/list?Channel=PWA');
    return response.data;
  },
  getPromotionsById: async (id: number) => {
    const response = await api().get(`/promotions?Id=${id}`);
    return response.data;
  },
};
