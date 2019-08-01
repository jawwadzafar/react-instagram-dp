import axios from 'axios';

const userId = username => {
	let url =`https://instagram.com/${username}`;
	return axios.get(url)
	.then(res => {
		const data = res.data.split('"id":"')[1].split('",')[0];
		return data;
	})
};
export default userId;