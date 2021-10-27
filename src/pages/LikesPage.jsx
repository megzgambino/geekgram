import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLiked } from '../store/actions/likeActions'



export default function Likespage() {

    const liked = useSelector((state) => state.likes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchLiked())
          // eslint-disable-next-line
    }, [])

    return (
        <div className= "card w-50 mx-auto">
            {liked.map((post) => {
                return (
                    <div className="card" key={post.id}>
                        {/* { console.log('ini setelah di map')}
                        {console.log(posts)} */}
                        <div className="card-header-center mx-auto">
                            <img  src={post.user.picture} alt={post.user.name} style={{width: '25%'}}/>
                            <p>{post.user.name}</p></div>
                        <div className="card-body">
                            <img src={post.thumbnail} className="img-thumbnail" alt={post.id}/>
                            <p className="card-text">
                                {post.caption}
                            </p>
                        </div>
                      
                    </div>
                )
            })}
        </div>
    )
}
