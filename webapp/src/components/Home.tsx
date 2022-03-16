import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Product } from "../../../restapi/models/ProductModel";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import  ProductDetails  from "../components/ProductDetails";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getProducts } from "../api/api";




function Home() {
    const [products,setProducts] = useState<Product[]>([]);

    const refreshProducts = async () => {
      console.log("hola");
      setProducts(await getProducts());
    }
  
    useEffect(()=>{
      refreshProducts();
    },[]);

    return(
        
        <Container fluid>
            <Row>
        {products.map((product: Product) => {
            <Router>
            <Routes>
            
            </Routes>
            </Router>
            return(
            <Col xs md lg ="auto">
            <Card sx={{ maxWidth: 280 }}>
                <CardActionArea to="/product-details" component={Link}>
                
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.price + "€"}
                    </Typography>
                </CardContent>
                </CardActionArea>
                
            </Card>
            </Col>
            )
            
        })}
        </Row>
        
        </Container>
    );
}

/*
<CardMedia
                    component="img"
                    height="450"
                    image={product.photo}
                    alt="sudadera"
                />
 */

export default Home;