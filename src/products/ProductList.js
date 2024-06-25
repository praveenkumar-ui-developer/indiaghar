import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchProducts(page);
    }, [page]);

    const fetchProducts = async (page) => {
        try {
            const response = await axios.get(`https://affiliate-s3eu.onrender.com/products?page=${page}&limit=10`);
            const fetchedProducts = response.data.products;
            if (fetchedProducts.length === 0) {
                setHasMore(false);
            } else {
                setProducts((prevProducts) => [...prevProducts, ...fetchedProducts]);
            }
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const fetchMoreData = () => {
        setPage((prevPage) => prevPage + 1);
    };

    return (
        <div className='product-list container mt-3 pages'>
            <div className='row justify-content-center'>
                <InfiniteScroll
                    dataLength={products.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4 className='mt-5'>Loading...</h4>}
                    endMessage={<p style={{ textAlign: 'center' }}>Yay! You have seen it all</p>}
                    className='row justify-content-center'
                >
                    {loading ? (
                        <h5 className='mt-5'>Please wait...</h5>
                    ) : (
                        products.map((product) => (
                            <div key={product.id} className='col-lg-3 col-md-4 col-sm-5 col-5 mb-3 mt-3'>
                                <Product
                                    title={product.productname}
                                    imgUrl={product.imgurl}
                                    link={product.producturl}
                                    id={product.snumber}
                                />
                            </div>
                        ))
                    )}
                </InfiniteScroll>
            </div>
        </div>
    );
}

export default ProductList;
