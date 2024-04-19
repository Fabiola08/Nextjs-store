
import { ProductView } from "app/componentes/product/ProductView"
import { getProducts } from "app/services/shopify/products"
import { useParams, useSearchParams } from "next/navigation"

interface ProductPageProps {
    searchParams: {
        id: string
    }
}

export default async function ProductPage({ searchParams }: ProductPageProps){
    
    // const params = useParams()
    // const searchParams= useSearchParams()
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]
    
    return <ProductView product={product}/>
}