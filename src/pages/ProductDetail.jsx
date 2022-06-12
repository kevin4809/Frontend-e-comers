import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineDoubleRight, AiOutlineDoubleLeft, } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { fiterCategory } from '../store/slices/products.slice';
import { addToCart, getCart } from '../store/slices/car.slice';

const ProductDetail = () => {

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const token = localStorage.getItem('token')

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const products = useSelector(state => state.produtcs)

  useEffect(() => {

    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products')
      .then(res => {
        const newProduct = res.data?.data.products.find(product => product.id === Number(id))
        setProduct(newProduct)
        dispatch(fiterCategory(newProduct.category.id))

      })
  }, [dispatch, id])

  const addProduct = () => {

    if(token){
      const product = {
        id: id,
        quantity: quantity
      }
      alert("The product was added to the cart")
      dispatch(addToCart(product))
      dispatch(getCart())
      setQuantity(1)
    }else{
      alert("You need login to buy")
    }
   
  }


  return (
    <div className='container-md'>
      <div className='product-description'>
        <div className="row">
          <div className="col-md-5">
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
              <button type="button" data-bs-target="#carouselImgeProducts" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">   <img className='img-fluid img-indicator img-thumbnail' src={product.productImgs?.[0]} alt="" /></button>
              <button type="button" data-bs-target="#carouselImgeProducts" data-bs-slide-to="1" aria-label="Slide 2">   <img className='img-fluid img-thumbnail  img-indicator' src={product.productImgs?.[1]} alt="" /></button>
              <button type="button" data-bs-target="#carouselImgeProducts" data-bs-slide-to="2" aria-label="Slide 3">   <img className='img-fluid img-thumbnail  img-indicator' src={product.productImgs?.[2]} alt="" /></button>
            </div>

          </div>

          <div className="col-md-7">

            <h1 className='name-product'>{product.title}</h1>
            <p>{product.description}</p>

            <div className="row">
              <div className="col-6">
                <h5 className='text-muted'>Price</h5>
                <h2>{product.price}</h2>
              </div>
              <div className="col-6">
                <h5 className='text-muted text-center'>Quantity</h5>
                <div className=" d-flex justify-content-center count-products">
                  <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)}>-</button>
                  <h3>{quantity}</h3>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            <button type="button"
              className="btn btn-danger button-add-card"
              onClick={addProduct}
            >Add to card <AiOutlineShoppingCart /></button>

          </div>
        </div>

      </div>

      <div className="suggestions">
        <div className="row">

          {
            products.data?.products.map(product => (
              <div key={product.id} className='col-md-4'>
                <div className="card container-card-suggestions">
                  <img className='img-fluid mx-auto d-block img-suggestions' onClick={() => navigate(`/products/${product.id}`)} src={product.productImgs[2]} alt="" />

                  <h4 className='title-product-suggestion'>{product.title}</h4>
                  <h5>price</h5>
                  <div className="row">
                    <div className="col-6 text-center ">
                      <h4 className='price'>{product.price}</h4>
                    </div>
                    <div className="col-6">
                      <button onClick={() => {
                        addProduct()
                        setQuantity(1)
                      }} className='button-car float-end' type='button'><AiOutlineShoppingCart /></button>

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