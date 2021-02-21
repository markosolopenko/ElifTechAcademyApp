import axios from 'axios';

export const getBanks = () => {
    return axios('https://elif-tech-academy-project.herokuapp.com/main/createdBanks')
        .then(res => res.data)
}