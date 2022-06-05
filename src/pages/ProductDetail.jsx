import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
const ProductDetail = () => {



  const [product, setProduct] = useState({});
  

  const { id } = useParams();


  // const products = useSelector(state => state.produtcs)

  useEffect(() => {

    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then(res => setProduct(res.data?.data.product))



  }, [id])




  return (
    <div className='container-md'>
      <div className='product-description'>productselect
        <div className="row">
          <div className="col-md-4">
            <div id="carouselImgeProducts" class="carousel slide" data-bs-ride="carousel">

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className='img-fluid imgs' src={product.productImgs?.[0]} alt="" />
                </div>
                <div className="carousel-item">
                  <img className='img-fluid imgs' src={product.productImgs?.[1]} alt="" />
                </div>
                <div className="carousel-item">
                  <img className='img-fluid imgs' src={product.productImgs?.[2]} alt="" />
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

            <button type="button" className="btn btn-danger button-add-card">Add to card <AiOutlineShoppingCart /></button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail