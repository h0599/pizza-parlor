import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import './PizzaList.css'
import swal from 'sweetalert';



function PizzaList() {

const onSubmit = () => {
  swal({
    title: "Added to cart 👍",
    text: "Total:",
    text: "$15.00",
    icon: "success",
  });
}
  
  return (
    <>
    
    <div className="title-container">
    <h3 className="step-one">Step 1: Select Your Pizza</h3>
    
    <h3 className="cart">
    <ShoppingCartOutlined className="cart-icon" />
    </h3>
    </div>
    
    
    <h4>1. Meat Lovers, 2. Hawaiian, 3. Veggie, 4. Cheese</h4>

    <div>  
    <img className="meat_lovers" onClick={onSubmit} src="https://www.jessicagavin.com/wp-content/uploads/2022/02/meat-lovers-pizza-28-1200.jpg"/>
    </div>
    
    
    <div>  
    <img className="meat_lovers" onClick={onSubmit} src="https://www.thespruceeats.com/thmb/c57iCi93U2l6xHJ1Af4kz6OLo38=/3661x3661/smart/filters:no_upscale()/hawaiian-pizza-4691857-hero-01-1a8f6764c70e4113bbf31bd1a73aca2e.jpg"/>
   
    </div>
    
    <div>  
    <img className="meat_lovers" onClick={onSubmit} src="https://www.twopeasandtheirpod.com/wp-content/uploads/2021/03/Veggie-Pizza-8.jpg"/>
  
    </div>
    
    
    <div>  
    <img className="meat_lovers" onClick={onSubmit} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/classic-cheese-pizza-1617996277.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*"/>
 
    </div>
    
    
   
    <Link to="/customer-info-form">
    <Button className="next-button" size="md" variant="primary">
    Next
    </Button>
    </Link>
    </>
    );
  }
  
  export default PizzaList;
  