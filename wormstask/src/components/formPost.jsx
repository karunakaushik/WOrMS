import React from 'react';
import '../styles/formPost.css'
const FormPost = (props) => {
    const { onPostHandel, onSubmit, title, description } = props
    return (
        <div className='container d-flex'>
            Post :
            <form className='myForm d-flex'>
                <label>Title</label>
                <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={onPostHandel}
                    required
                />
                <label>Discription</label>
                <input
                    type='text'
                    name='description'
                    value={description}
                    onChange={onPostHandel}
                    required
                />
                <button type='submit' className='btn btn-success' onClick={onSubmit}>Post</button>
            </form>
        </div>
    );
};

export default FormPost;
