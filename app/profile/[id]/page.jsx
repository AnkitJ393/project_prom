'use client'

import {useState,useEffect} from 'react';
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfilePage = ({params}) => {
    const searchParam=useSearchParams();
    const userName=searchParam.get('name');

    const [userPosts, setUserPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts=async()=>{
            const response =await fetch(`/api/users/${params?.id}/posts`);
            const data = await response.json();
      
            setUserPosts(data);
        }

        if (params?.id) fetchPosts();
    },[params.id])

  return (
    <Profile
        name={userName}
        desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
        data={userPosts}
    />
  )
}


export default function UserProfile({params}) {
    return (
      <Suspense fallback={<div>Loading Profile details...</div>}>
        <UserProfilePage params={params}/>
      </Suspense>
    );
  }
