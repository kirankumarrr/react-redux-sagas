import axios from 'axios'

export function  requestGetUser() {
  return axios.request({
    method : 'get',
    url: 'https://jsonplaceholder.typicode.com/users'
  })
}