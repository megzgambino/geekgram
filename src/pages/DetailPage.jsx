import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getDetailPost } from '../store/actions/postActions'

export default function Detailpage() {
    const detailPost = useSelector((state) => state.detailPost)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        // console.log('masuk useEffect')
        dispatch(getDetailPost(id))
        // eslint-disable-next-line
    }, [])

    return (
        <div className="w-50 mx-auto">
            {/* {console.log(detailPost)} */}
            <div className="card">
                <div className="card-header-center mx-auto">
                    <img
                        src={detailPost.user.picture}
                        alt={detailPost.user.name}
                        style={{ width: '25%' }}
                    />
                    <p>{detailPost.user.name}</p>
                </div>
                <p>{detailPost.createdAt}</p>
                <div className="card-body">
                    <img
                        src={detailPost.thumbnail}
                        className="img-thumbnail"
                        alt={detailPost.id}
                    />
                    <p className="card-text">{detailPost.caption}</p>
                    <a href={{}} className="btn btn-primary">
                        Like this post
                    </a>
                </div>
            </div>
        </div>
    )
}
