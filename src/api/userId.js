// 'use strict';

import axios from 'axios';

const userId = username => {
	return axios.get(`https://instagram.com/${username}`).then(res => {
		const data = res.data.split('"id":"')[1].split('",')[0];
		return data;
	}).catch(err => {
		if (err) {
			return err.message;
		}
	});
};
export default userId;