import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineDoubleRight, AiOutlineDoubleLeft, } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { fiterCategory } from '../store/slices/products.slice';

const ProductDetail = () => {

  const [product, setProduct] = useState({});



  const { id } = useParams();
  const dispatch = useDispatch();


  const products = useSelector(state => state.produtcs)

  useEffect(() => {

    // axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
    //   .then(res => setProduct(res.data?.data.product))

    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
      .then(res => {
        const newProduct = res.data?.data.products.find(product => product.id === Number(id))
        setProduct(newProduct)
        dispatch(fiterCategory(newProduct.category.id))

      })
  }, [dispatch, id])

  console.log(products)

  return (
    <div className='container-md'>
      <div className='product-description'>
        <div className="row">
          <div className="col-md-4">
            <div id="carouselImgeProducts" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active image-carousel">
                  <img className='img-fluid imgs mx-auto d-block' src={product.productImgs?.[0]} alt="" />
                </div>
                <div className="carousel-item  image-carousel">
                  <img className='img-fluid imgs mx-auto d-block' src={product.productImgs?.[1]} alt="" />
                </div>
                <div className="carousel-item  image-carousel">
                  <img className='img-fluid imgs mx-auto d-block' src={product.productImgs?.[2]} alt="" />
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselImgeProducts" data-bs-slide="prev">
                <div className="arrows">
                  <span><AiOutlineDoubleLeft /></span>
                </div>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselImgeProducts" data-bs-slide="next">
                <div className="arrows">
                  <span><AiOutlineDoubleRight /></span>
                </div>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className="select-img-carousel">
              <button type="button" data-bs-target="#carouselImgeProducts" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">   <img className='img-fluid img-indicator' src={product.productImgs?.[0]} alt="" /></button>
              <button type="button" data-bs-target="#carouselImgeProducts" data-bs-slide-to="1" aria-label="Slide 2">   <img className='img-fluid  img-indicator' src={product.productImgs?.[1]} alt="" /></button>
              <button type="button" data-bs-target="#carouselImgeProducts" data-bs-slide-to="2" aria-label="Slide 3">   <img className='img-fluid  img-indicator' src={product.productImgs?.[2]} alt="" /></button>
            </div>

          </div>

          <div className="col-md-8">

            <h1 className='name-product'>{product.title}</h1>
            <p>{product.description}</p>
            <h5 className='text-muted'>Price</h5>
            <h2>{product.price}</h2>

            <button type="button" className="btn btn-danger button-add-card">Add to card <AiOutlineShoppingCart /></button>

          </div>
        </div>

      </div>

      <div className="suggestions">
        <div className="row">

          {
            products.data?.products.map(product => (
              <div className='col-md-4'>
                <div className="card container-card-suggestions">
                  <img className='img-fluid mx-auto d-block img-suggestions' src={product.productImgs[2]} alt="" />
                  <div className="card-body">

                    <h4 className='title-product-suggestion'>{product.title}</h4>
                    <h5>price</h5>
                    <div className="row">
                      <div className="col-6 text-center ">
                        <h4 className='price'>{product.price}</h4>
                      </div>
                      <div className="col">
                        <button className='button-car float-end' type='button'><AiOutlineShoppingCart /></button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default ProductDetail