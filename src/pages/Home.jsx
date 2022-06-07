import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { filterHeadline, fiterCategory, getProducts } from '../store/slices/products.slice'

const Home = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  const products = useSelector(state => state.produtcs.data?.products)

  useEffect(() => {
    dispatch(getProducts())


    axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
      .then(res => setCategories(res.data?.data.categories))

  }, [dispatch])

  const filterProducts = () => {
    dispatch(filterHeadline(search))
  }


  const selectCategory = (id) => {
    dispatch(fiterCategory(id))
  }



  return (
    <div className='container'>
      <h1>Home</h1>
      <div className="input-group mb-3">
        <input type="text" className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        <button className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={filterProducts}
        >Search</button>
      </div>


      <div className="row">
        <div className="col-md-2">
          <ul className="list-group">

            {
              categories.map(category => (
                <li className="list-group-item" key={category.id} onClick={() => selectCategory(category.id)} >{category.name}</li>
              ))
            }
          </ul>
        </div>
        <div className="col-md-10">

            {
              products?.map(product => (
                <div className='card products-cards' key={product.id} onClick={() => navigate(`/products/${product.id}`)}>
                  <img className='img-fluid text-center' src={product.productImgs[2]} alt="" />
                  <h3 className='text-center'>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              ))
            }


        </div>
      </div>







    </div>
  )
}

export default Home