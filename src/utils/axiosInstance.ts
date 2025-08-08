import axios, { AxiosError } from 'axios';
import qs from 'qs';
const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});
axiosInstance.interceptors.request.use((config) => {
	if (config.params) {
		config.paramsSerializer = (params) =>
			qs.stringify(params, {
				arrayFormat: 'repeat',
			});
	}
	return config;
});

// interceptar la respuesta de la api para obtener el objeto data
axiosInstance.interceptors.response.use(
	(response) => {
		return response.data;
	},
	(error: AxiosError<unknown>) => {
		const body = error.response?.data;
		console.debug('Axios error es :', body);
		return Promise.reject(body);
	}
);
export default axiosInstance;
