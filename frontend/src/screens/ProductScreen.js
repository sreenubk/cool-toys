import {React, useState, useEffect} from 'react'
import {Row, Col, Image, Card, ListGroup, Button} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import Ratings from '../components/Ratings'
// import products from '../products'
import axios from 'axios'

const ProductScreen = () => {
    const params = useParams();
    const [product,setProduct] = useState({});

    useEffect(()=>{
        const fetchProduct = async () =>{
          const {data} = await axios.get(`/api/products/${params.id}`)
          console.log(data)
          setProduct(data)
        }
        fetchProduct()
      },[])
      console.log(product)  
    
  return (
    <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={6} >
                <Image src={product.image} alt={product.name} fluid>

                </Image>
            </Col>
            <Col md={3} >
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Ratings value={product.rating} text={`${product.numReviews}  reviews` }/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Description: {product.description}
                    </ListGroup.Item>

                </ListGroup>
            </Col>
            <Col md={3} >
                <Card>
                    <ListGroup variant='flush'>

                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Price:
                                </Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>

                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock===0}>
                                Add to cart
                              </Button>  
                        </ListGroup.Item>

                    </ListGroup>
                </Card>
            </Col>
            
        </Row>
    </>
  )
}

export default ProductScreen    