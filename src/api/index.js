import axios from 'axios'

axios.defaults.baseURL = "http://ipo.zj-runyang.com/v1"


export let getVideo= (data)=>{
    return axios.post('/nx_image/',data)
}


