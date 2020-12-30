import axios from 'axios';

const KEY ='AIzaSyCAm4azd26qhrqxF7JSEtGJV78Gi-W4LKc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
