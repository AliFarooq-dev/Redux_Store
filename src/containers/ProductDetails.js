import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectiveProduct } from './redux/actions/productCreators';

const ProductDetails = () => {
  const product = useSelector(state => state.product);
  const Dispatch = useDispatch();
  const { productId } = useParams();

  const fetchDetails = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err => console.log(err));
    Dispatch(selectiveProduct(response.data));  //In dispatch we provide the action
  };

  useEffect(() => {
   fetchDetails()
  }, [])
  console.log(product)
  return (
    <div>
      <h2>Details</h2>
    </div>
  )
}

export default ProductDetails