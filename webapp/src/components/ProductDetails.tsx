import React, { useEffect, useState } from 'react';
import { getProduct, addCarrito } from '../api/api';
import { useParams } from "react-router-dom";
import { Product } from '../shared/shareddtypes';
import { Button } from 'react-bootstrap';

    
function ProductDetails() {


    const [product,setProduct] = useState<Product>({name:"Nombre", description:"Description", category: "Category", color:"Color", price:55, talla_stock:[{talla:"talla"},{stock:50}], url:""});

    type ProductoName = {
        name: string;
    }

    const {name} = useParams<ProductoName>();

    const refreshProducts = async () => {
       //await getProduct(name!).then(val => console.log(val.at(0)?.name))
       //await getProduct(name!).then(val => setProduct(val.at(0)!))
        setProduct(await getProduct(name!));
    }

    useEffect(()=>{
        refreshProducts();
    },[]);

    const [amountp, setAmountp] = useState<number>(1);

    const refreshAmountp = (event: any) => {
        setAmountp(event.target.value);
    }

    const [tallap, setTallap] = useState<string>();

    const refreshTallap = (event: any) => {
        setTallap(event.target.value);
    }
    
    const checkCampos = () => {
        return false;
    }

    return (
       
        <React.Fragment>
            {console.log(product.name)}
            <div className="ProductDetails">
            <div className="ProductImage">
                {
                   <img src = {product?.url.toString()} alt={product?.name.toString()} />
                }
            </div>

            <div className="Box">
                <div className="Row">
                    <h2>{product.name}</h2>
                </div>
                
            
            </div>  
            <div>
                <label>
                    Cantidad:
                    <input type="number" name='cantidad' onChange={refreshAmountp}/>
                </label>
                <br/>
                <label>
                    Talla:
                    <input type="text" name='talla' onChange={refreshTallap}/>
                </label>
            </div> 
            <span id="price">{product.price} €</span>
            <p>{product?.description}</p> 
        </div>
        <Button disabled={checkCampos()} onClick={() => addCarrito(product, amountp, tallap!)}>Añadir al carrito</Button>
        </React.Fragment>
        
    );
}


export default ProductDetails;