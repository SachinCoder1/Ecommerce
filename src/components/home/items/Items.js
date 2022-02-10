import React, { useEffect } from 'react'
import ItemBody from './ItemBody'
import { getProducts as listProducts } from '../../../redux/actions/productAction'

import { useSelector, useDispatch } from 'react-redux'

// import { dealData } from '../../../DATA/item'


function Items() {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.getProducts)
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
          <ItemBody title={"Deal of the day"} products={products} />
          <ItemBody title={"Top Products"} products={products} />
          <ItemBody title={"Men's Wear"} products={products} />
          <ItemBody title={"Toys, Games and more"} products={products} />
          <ItemBody title={"Foods, Beverages"} products={products} />
        </div>
    )
}

export default Items
