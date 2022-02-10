import productSchema from "../model/itemSchema.js";


export const Products = async (req, res) => {

    try {
        const allProducts = await productSchema.find();
        res.json(allProducts)

    } catch (error) {
        res.json("there is an error in Products.js", error.message)
    }

}


export const ProductsById = async (req, res) => {
    try {

        let response = await productSchema.findOne({'id': req.params.id})

        if(response){
            res.json(response)

        }else{
            res.status(400).json('no results found ')
        }
        
    } catch (error) {
        res.json('there is an error in product by id', error.message)
    }
}

