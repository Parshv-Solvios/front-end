import axiosInstance from './axios-client';

export const GetStatus = async (data) => {
    return await axiosInstance.get(`/app/get-status`);
}

export const Register = async (val) => {
    return await axiosInstance.post(`/app/Register?regCode=${val}`);
}

export const RestartServer = async (val) => {
    return await axiosInstance.get('/app/Restart');
}

