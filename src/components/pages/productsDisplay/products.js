import React, { Component } from 'react';
import ProductCard from '../../shared components/productCard/productCard';
import './products.css'
import ImageList from '@mui/material/ImageList';
import Img1 from "../../../assets/bg1.jpg"
import ProductList from "../../../models/productList"
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

   


class products extends Component {

constructor(props){

    super(props);
   


}



    render() {
        console.log("products",ProductList)

        return (
            <div className='container'>
               

                <div className='filter-container'>
                    <h3>Filter By:</h3>

<div className='cat-container'>
<h5>Catergory:</h5>
<RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={null}
          onChange={null}
        >
          <FormControlLabel value="Meats" control={<Radio />} label="Meat" />
          <FormControlLabel value="Seafood" control={<Radio />} label="Seafood" />
          <FormControlLabel value="Poultry" control={<Radio />} label="Poultry" />
          <FormControlLabel value="Dairy" control={<Radio />} label="Dairy" />
          <FormControlLabel value="Canned & Dry" control={<Radio />} label="Canned & Dry" />
          <FormControlLabel value="Frozen" control={<Radio />} label="Frozen" />
          <FormControlLabel value="Dispenser Beverages" control={<Radio />} label="Dispenser Beverages" />
          </RadioGroup>
</div>
                     
                   
                </div>
                <div className='results-container'>
                <ImageList sx={{ width:"80vw", height:"auto" }} cols={4} rowHeight={600} gap={50}>


{ProductList.map(e=>( <ProductCard productName={e.name} img={e.url} description={e.description} price={e.price} supplier={e.supplier} rating={e.rating}/>))}


    </ImageList>

                </div>

               


            </div>
        );
    }
}

export default products;