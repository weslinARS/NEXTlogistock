import axios from 'axios';
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

export default axiosInstance;
