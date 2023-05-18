import React, { useState } from 'react';

const FormPost = (props) => {
    const {onPostHandel, onSubmit,title, description} =props
    return (
        <div>
                Post :
                <form>
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
                </form>
                <button type='submit' className='btn btn-success' onClick={onSubmit}>Post</button>
            </div>
    );
};

export default FormPost;
