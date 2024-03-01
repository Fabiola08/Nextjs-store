interface CategoryProps{

    params:{
        categories: string,
        searhParams: string
    }
}

export default function Category(props: CategoryProps){
    
    console.log(props)

    const { categories } = props.params
    console.log(categories)
    return(
        <h1>Categoría dinámica: {categories} </h1>
    )
}