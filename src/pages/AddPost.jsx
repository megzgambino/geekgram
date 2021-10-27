import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'
import { addPost } from '../store/actions/postActions'

export default function AddPost() {
    const dispatch = useDispatch()
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [pictures, setPictures] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [caption, setCaption] = useState('')
    const [date, setDate] = useState('')
    function handleOnChangeUsername(username) {
        username.preventDefault()
        setUsername(username.target.value)
    }
    function handleOnChangePictures(pic) {
        pic.preventDefault()
        setPictures(pic.target.value)
    }
    function handleOnChangeThumbnail(thumbnail) {
        thumbnail.preventDefault()
        setThumbnail(thumbnail.target.value)
    }
    function handleOnChangeCaption(caption) {
        caption.preventDefault()
        setCaption(caption.target.value)
    }
    function handleOnChangeDate(date) {
        date.preventDefault()
        setDate(date.target.value)
    }

    function handleOnClickForm(e) {
        e.preventDefault()
        // console.log('masuk on click')
        let post = {
            user: { name: username, picture: pictures },
            thumbnail,
            caption,
            createdAt: date,
        }
        if (!username || !pictures || !thumbnail || !caption || !date) {
            // console.log({...post})
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please fill all the empty field',
            })
        } else {
            // console.log(post)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You have successfully add the post',
                showConfirmButton: false,
                timer: 1500,
            })
            dispatch(addPost(post))
            
            
            history.push('/home')
        }
    }

    return (
        <div className="card w-50 mx-auto">
            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Username</label>
                    <input
                        onChange={(username) =>
                            handleOnChangeUsername(username)
                        }
                        type="username"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="write your username here..."
                    />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">User Pictures</label>
                    <input
                        onChange={(Pictures) =>
                            handleOnChangePictures(Pictures)
                        }
                        type="user-picture"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="write your user picture link here..."
                    />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">
                        Post Thumbnail
                    </label>
                    <input
                        onChange={(Thumbnail) =>
                            handleOnChangeThumbnail(Thumbnail)
                        }
                        type="post-thumbnail"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="write your user picture link here..."
                    />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">
                        Post Caption
                    </label>
                    <textarea
                        onChange={(Caption) => handleOnChangeCaption(Caption)}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">
                        Post Created At
                    </label>
                    <input
                        onChange={(Date) => handleOnChangeDate(Date)}
                        type="date"
                        id="post-created-at"
                        name="createdAt"
                    />
                </div>
                <button
                    onClick={handleOnClickForm}
                    type="submit"
                    className="btn btn-primary"
                >
                    Add New Post
                </button>
            </form>
        </div>
    )
}

