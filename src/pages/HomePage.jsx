import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../store/actions/postActions'
import Swal from 'sweetalert2'
import { likePost } from '../store/actions/likeActions'

export default function Homepage() {
    const posts = useSelector((state) => state.posts)
    const likedPost = useSelector((state) => state.likes)
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
        // eslint-disable-next-line
    }, [])

    function likedSelection(postId) {
        const filteredPost = likedPost.filter((post) => post.id === postId )

        if (filteredPost.length < 1) {
            return true
        } else {
            return false
        }
    }

    function handleOnClickLike(post) {
        // console.log(post)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You have successfully Liked the post',
            showConfirmButton: false,
            timer: 1500,
        })
        dispatch(likePost(post))
    }

    return (
        <div className= "card w-50 mx-auto">
            {posts.map((post) => {
                
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
                            {likedSelection(post.id) ? (
                            <button onClick={() => handleOnClickLike(post)} className="btn btn-primary">
                                Like this post
                            </button>
                            ) : (false
                            )}
                            <Link to={`/post/${post.id}`} className="btn btn-secondary">
                                Detail
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
