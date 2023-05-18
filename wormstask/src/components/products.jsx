import React, { useEffect, useState } from 'react'
import '../styles/products.css'
import SearchBar from './search';
import FormPost from './formPost';
const initial = {
    title: "",
    description: ""
}
const Product = () => {
    const [post, setPost] = useState(initial);
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10);
    useEffect(() => {
        fetchProducts();
    }, []);
    useEffect(() => {
        filterProducts();
    }, [products, search]);
    const fetchProducts = async () => {
        try {
            const response = await fetch(
                `https://dummyjson.com/product?size=${perPage}&page=${currentPage}`
            );
            if (!response.ok) {
                throw new Error('failed to fetch Product')
            }
            const data = await response.json();
            setProducts(data.products);
            setError(null);
        }
        catch (error) {
            setError('Error fetching products');
            console.error(error);
        }
    };
     /*function to search post in list*/ 
    const filterProducts = () => {
        const filt = products?.filter((product) =>
            product.title?.toLowerCase().includes(search.toLowerCase()) ||
            product.description?.toLowerCase().includes(search.toLowerCase())
        );
        setFiltered(filt);
    }
    const handelSearch = (e) => {
        setSearch(e.target.value)
    }
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }; 
    /*function to delete post from list Assuming here Title is unique*/ 
    const deleteHandel = (productTitle) => {
        const updatedProd = products.filter((product) => product.title !== productTitle);
        setProducts(updatedProd);
    }
    const postHandel = (e) => {
        const { value, name } = e.target;
        setPost({
            ...post,
            [name]: value
        });
    }
    /*function to add post in list*/ 
    const onSubmit = (e) => {
        e.preventDefault();
        const updateProd = [...products];
        if (post.title === '' || post.description === '') {
            alert("Please enter Title and Description");
        }
        else {
            updateProd.splice(0, 0, post);
            setProducts(updateProd);
            setPost(initial)
        }
    }
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const LastPage = currentPage * perPage >= products.length;
    return (
        <div>
            <FormPost title={post.title} description={post.description} onSubmit={onSubmit} onPostHandel={postHandel} />
            <SearchBar searchTerm={search} onSearchChange={handelSearch} />
            {error ? <div className='text-danger'> {error} </div> :
                <>
                    <ol className='container d-flex flex-column'>
                        {/* without filter */}
                        {/* {products.slice(startIndex, endIndex).map((product, index) => (
                    <li className='list bg-light' key={product.id}> {product.id}.&nbsp; <strong>{product.title}</strong> : &nbsp; <p> {product.description}</p></li>
                ))} */}
                        {/* With filter */}
                        {filtered.slice(startIndex, endIndex).map((product, index) => (
                            <li className='d-flex p-10 list bg-light' key={index}>&nbsp; <strong>{product.title}</strong> : &nbsp; <p> {product.description}</p>
                                <button className='btn btn-danger' onClick={() => { deleteHandel(product.title) }} >Delete</button>
                            </li>
                        ))}
                    </ol>
                    <div>
                        <button className='btn btn-primary' onClick={previousPage} disabled={currentPage === 1}>
                            Previous Page
                        </button>
                        <>    </>
                        <button className='btn btn-primary' onClick={nextPage} disabled={LastPage}>Next Page</button>
                    </div>
                </>
            }

        </div>
    )
}
export default Product;