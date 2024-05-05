import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { status } from '../utils/helpers';
import {
    fetchProductSingle,
    getProductSingle,
    getSingleProductStatus,
} from '../redux/productSlice';
import ProductDetail from '../components/ProductDetail';
import Loader from '../components/Loader';

const ProductSingle = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const productSingle = useSelector(getProductSingle);
    const productStatus = useSelector(getSingleProductStatus);

    useEffect(() => {
        dispatch(fetchProductSingle(id));
    }, [dispatch, id]);

    return (
        <div className='max-w-screen-lg mx-auto p-4 h-full'>
            {productStatus === status.loading ? <Loader /> : <ProductDetail {...productSingle} />}
        </div>
    );
};

export default ProductSingle;
