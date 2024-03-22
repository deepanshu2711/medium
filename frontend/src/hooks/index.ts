import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"

interface Blogs{
    content : string;
    title :string;
    id:string;
    author:{
        username:string
    }
}[]

export interface Blog{
    content : string;
    title :string;
    author:{
        username:string
    }
}

export const useBlogs =() =>{
    const[loading,setLoading] = useState(true)
    const[blogs,setBlogs] = useState<Blogs[]>([])

    useEffect(() =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then((responce) =>{
            setBlogs(responce.data.posts);
            setLoading(false);
        })
},[])

    return{ 
        loading,
        blogs
    }
}


export const useBlog =({id}:{id:string}) =>{
    const[loading,setLoading] = useState(true)
    const[blog,setBlog] = useState<Blog>()

    useEffect(() =>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then((responce) =>{
            setBlog(responce.data.post);
            setLoading(false);
        })
},[id])

    return{ 
        loading,
        blog
    }
}