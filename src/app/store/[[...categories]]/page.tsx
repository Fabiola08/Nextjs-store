import { ProductsWrapper } from "app/componentes/Store/ProductsWrapper"
import { getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"


interface CategoryProps{

    params:{
        categories: string[],
    }
        searhParams: string
    }


export default async function Category(props: CategoryProps){
    
    const products = await getProducts()
    //const collections = await getCollections()

    const { categories } = props.params
    //throw new Error('Error: Boom!')
    // Throw Error #2
    // console.log(categories)
    return(
        <ProductsWrapper products={products}/>
    )
}