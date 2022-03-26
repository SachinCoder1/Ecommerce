import {products} from './items.js'

import productSchema from './model/itemSchema.js'

const defaultProducts = async ()=>{
  try {
    await productSchema.deleteMany();
      await productSchema.insertMany(products)
       
  } catch (error) {
      console.log('there is error in product.js', error.message)
  }
}

export default defaultProducts

