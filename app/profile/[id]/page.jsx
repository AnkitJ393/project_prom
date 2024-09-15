import { Suspense } from 'react';
import UserProfilePage from './UserProfilePage';


export default function UserProfile({params}) {
   const id=params.id;
    return (
        <Suspense fallback={<div>Loading Profile details...</div>}>
        <UserProfilePage id={id} />
      </Suspense>
    );
  }
