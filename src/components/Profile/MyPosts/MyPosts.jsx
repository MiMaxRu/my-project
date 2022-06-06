import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = ()=>{
    return <div>My post
    <div><h3>Новый пост</h3>

    <textarea></textarea>
    <div>
    <button>Добавить</button>
    <button>Удалить</button>
    </div>

</div>
    <div className={p.posts}>
     <Post text = 'Я Вова'/>
     <Post text = 'Я люблю гонаять на гелике'/>
     <Post text = 'А ещё люблю ездить на нём на рыбалку'/>
     </div>
    </div>


   
}
export default MyPosts;