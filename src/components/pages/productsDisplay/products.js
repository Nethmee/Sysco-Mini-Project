import React, { Component } from 'react';
import ProductCard from '../../shared components/productCard/productCard';
import './products.css'
import ImageList from '@mui/material/ImageList';
import Img1 from "../../../assets/bg1.jpg"
import ProductList from "../../../models/productList"




   


class products extends Component {

constructor(props){

    super(props);
   


}



    render() {
        console.log("products",ProductList)

        return (
            <div className='container'>
                ALL PRODUCTS

                <ImageList sx={{ width:"80vw", height:"auto" }} cols={4} rowHeight={600} gap={50}>


                {ProductList.map(e=>( <ProductCard productName={e.name} img={e.url} description={e.description} price={e.price} supplier={e.supplier} rating={e.rating}/>))}


                    </ImageList>



            </div>
        );
    }
}

export default products;