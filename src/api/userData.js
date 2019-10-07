import axios from 'axios';

// let username='instagram';
const userData = username => {
    let url =`https://instagram.com/${username}/?__a=1`;
    return axios.get(url).then(data=>{
            return data.data.graphql.user
    })
};

export default userData