
import Image from 'next/image'
import styles from './MainProducts.module.sass'
import { getProducts } from 'app/services/shopify/products'


export const MainProducts = async() => {

    const response = await fetch('http://localhost:3000/api')
    const {products} = await response.json()

    //console.log(products)
    //console.log("variable de entorno",process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME)

    return(
        <section className={styles.MainProducts}>
      <h3>New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products?.map((product: {  
          id: string,
          title: string,
          images: {
            src: string
          }[]
        
        }) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          )
        })}
      </div>
    </section>
    )
}