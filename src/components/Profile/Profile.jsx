import React from 'react';
import MyPosts from './MyPosts/MyPosts';

import p from './Profile.module.css'

const Profile = ()=>{
    return (
    <div className={p.content}>
    <div> 
    <img src ='https://get.wallhere.com/photo/landscape-sea-reflection-bridge-suspension-bridge-1680x1050-px-nonbuilding-structure-cable-stayed-bridge-truss-bridge-706446.jpg'></img>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
    </div>)
}
export default Profile;