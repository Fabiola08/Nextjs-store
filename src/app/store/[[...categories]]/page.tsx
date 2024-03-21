import { ProductsWrapper } from "app/componentes/Store/ProductsWrapper"
import { getProducts } from "app/services/shopify"


interface CategoryProps{

    params:{
        categories: string,
        searhParams: string
    }
}

export default async function Category(props: CategoryProps){
    
    const products = await getProducts()

    const { categories } = props.params
    //throw new Error('Error: Boom!')
    // Throw Error #2
    // console.log(categories)
    return(
        <ProductsWrapper products={products}/>
    )
}