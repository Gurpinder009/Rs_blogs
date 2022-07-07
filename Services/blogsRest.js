import axios from "axios";

export  function getAllBlogData(){
   return axios.get("http://192.168.2.102:8000/blogs/")
}

export function getBlogData(slug){
    return axios.get(`http://192.168.2.102:8000/blogs/${slug}`)
}


export function getBlogByTitle(title){
    return axios.get(`http://192.168.2.102:8000/blogs/search/${title}`)
}

export function storeBlogData(data){
    return axios.post(`http://192.168.2.102:8000/blogs/store`,data);
}
