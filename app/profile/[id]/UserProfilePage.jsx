'use client'

import {useState,useEffect} from 'react';
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfilePage = ({id}) => {
    console.log(typeof(id))
    const searchParam=useSearchParams();
    const userName=searchParam.get('name');

    const [userPosts, setUserPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts=async()=>{
            const response =await fetch(`/api/users/${id}/posts`);
            const data = await response.json();
      
            setUserPosts(data);
        }

        if (id) fetchPosts();
    },[id])

  return (
    <Profile
        name={userName}
        desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
        data={userPosts}
    />
  )
}

export default UserProfilePage;