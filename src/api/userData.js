import axios from 'axios';
import userId from './userId';
import { reject } from 'q';


// let username='instagram';
const userData = username => userId(username).then(id=>{
    let url =`https://i.instagram.com/api/v1/users/${id}/info/`;
    return axios.get(url).then(data=>{
        return new Promise((resolve,reject)=>{
            return resolve(data.data.user)
        })
    })
});

export default userData