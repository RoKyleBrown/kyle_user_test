import axios from 'axios';

 export const getUsers = async () => {
    const data = await axios.get('/api/users/');
    return data;
};

 export const getUser = async (email) => {
    const data = await axios.get(`/api/users/${email}/`);
    return data;
};
