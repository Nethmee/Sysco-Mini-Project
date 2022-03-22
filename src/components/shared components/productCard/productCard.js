import React, { Component } from 'react';
import "./productCard.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarIcon from '@mui/icons-material/Star';
//import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ImgFood from "../../../assets/foodAvatar.jpg";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
class productCard extends Component {


    constructor(props){
        super(props);

        //console.log("CARD",this.props.productName)
    }
    render() {
        return (
           
            <Card sx={{ maxWidth: 200, maxHeight: 350 }}>
                <CardMedia
                    component="img"
                    alt="food"
                    height="150"
                    image={this.props.img}
                />
                <CardContent>
                <div className='ratings'> <Rating
                            name="hover-feedback"
                            value={this.props.rating}
                            precision={0.5}
                            size="small"
                            sx={{
                                
                               
                              }}
                            readOnly
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="0.5px" />}
                        /></div>
               
                    <div className='card-heading'>
                        <div className='card-heading-title'> <Typography gutterBottom variant="h6" component="div">
                           {this.props.productName}
                        </Typography></div>
                        

                    </div>
                    <Typography variant="caption" color="#8db600">
                        Supplier name
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ whiteSpace:"nowrap", overflow:"hidden",textOverflow:"ellipsis"}}>
                        Lizards are a widespread group of
                    </Typography>
                </CardContent>

                <CardActions>
                    <div className='card-bottom'>

                        <div className='price-placeholder'> <h3> {this.props.price} </h3></div>
                        <div className='card-action-view'>  <button className='action-button'><VisibilityRoundedIcon fontSize="small" sx={{ color: '#8db600' }} /></button> </div>
                        <div className='card-action-cart'><button className='action-button'><ShoppingCartRoundedIcon fontSize="small" sx={{ color: '#8db600' }} /></button>  </div>
                        <div></div>


                    </div>

                    {/*  
             
              
                <Button size="small"><ShoppingCartRoundedIcon fontSize="small" sx={{ color:'#8db600'}}/></Button> */}
                </CardActions>
            </Card>
        );
    }
}

export default productCard;