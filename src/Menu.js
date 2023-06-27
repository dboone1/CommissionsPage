import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Figure, Card, Form, Button} from 'react-bootstrap'
import './App.css';
import './App.js';
import catImg from './images/catBackground.jpg'
import dogImg from './images/dog33.jpg'
import{useState} from 'react'
import {Routes, Route, Link, redirect} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleCheck, faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import spaceBackground from './images/space-background.jpg'

 export function Menu(){

    const [artStyle, setArtStyle] = useState("");
    const [checked, setChecked] = useState(false);
    const [NSFW, setNSFW] = useState(false);
    const [letter, setLetter] = useState("");

    const [artObject, setArtObject] = useState({
        artType : artStyle,
        NSFW : NSFW,
        checked : checked
    })
    

    const buttonRender = (style) =>{
        if (style === artStyle && checked === true){
        return <FontAwesomeIcon icon={faCircleCheck} style={{color: "#3afd51", fontSize: 40}}/>
        }
        return <FontAwesomeIcon icon={faCirclePlus}  style={{color: "#e8ff3d", fontSize: 40}}/>
    }

    const changeStyle = (style) => { 
        if(style === artStyle){
            setChecked(false);
            setArtStyle("")
            
        }
        else{
            setChecked(true);
            setArtStyle(style);
            
        }
    }

    const useRadient = (style) => {
        return artStyle === style ? true : false
    }

    const useRadientNSFW = () =>{
        return NSFW === true ? true : false
    }


    const isNSFW = () => {
         if (NSFW === false){
            setNSFW(true);
            return;
         }
         setNSFW(false);   
         return; 
         
    }

    const NSFWbuttonRender = () => {
        if (NSFW === true){
            return <FontAwesomeIcon icon={faCircleCheck} style={{color: "#3afd51", fontSize: 40}}/>
        }
        else{
        return <FontAwesomeIcon icon={faCirclePlus}  style={{color: "#e8ff3d", fontSize: 40}}/>
        }
    }

    const handleSubmit = () => {
        setArtObject(artStyle, NSFW, checked);
        
    }

    
    
    
    return (
        <>
        <Container fluid style={{padding: '40px', backgroundImage: `url(${spaceBackground})`}}>
            <Row>
            <Col lg={4} className="d-none d-sm-block" ></Col>
            <Col lg={2} xs={12}>
                <p className="chooseOne">Choose One</p></Col>
            </Row>
            <Row className="menuRow" xs={1} md={6} lg={6} style={{gap: '10px'}}>
                
                <Col className="card-background text-wrap overflow-auto">
                <Card className="h-100">
                        <Card.Img variant="top" src={catImg}/>
                        <Card.Body className="cardColor"  style={{backgroundColor: useRadient('chibi') &&  '#e91e63'}}>
                            <Card.Title className="titleSize" style={{fontWeight: 'bold'}}>Chibi</Card.Title>
                            <Card.Text>10$</Card.Text>
                            <Card.Text className="text-end"><button onClick={() => changeStyle('chibi')}>{buttonRender('chibi')}</button></Card.Text>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col className="card-background overflow-auto">
                    <Card className="h-100">
                        <Card.Img variant="top" src={catImg}/>
                        <Card.Body className="cardColor"  style={{backgroundColor: useRadient('line art') && '#e91e63'}}>
                            <Card.Title style={{fontWeight: 'bold'}}>Line Art</Card.Title>
                            <Card.Text>10$</Card.Text>
                            <Card.Text className="text-end"><button onClick={() => changeStyle('line art')}>{buttonRender('line art')}</button></Card.Text>
                        </Card.Body>
                        
                    </Card>
                </Col>
                    <Col className="card-background overflow-auto">
                    <Card className="h-100">
                        <Card.Img variant="top" src={catImg}/>
                        <Card.Body className="cardColor"  style={{backgroundColor: useRadient('portrait') &&  '#e91e63'}}>
                            <Card.Title style={{fontWeight: 'bold' }}>Half Body</Card.Title>
                            <Card.Text>20$</Card.Text>
                            <Card.Text className="text-end">
                            <button onClick={() => changeStyle('portrait')}>{buttonRender('portrait')}</button>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col className="card-background overflow-auto">
                    <Card className="h-100">
                        <Card.Img variant="top" src={catImg}/>
                        <Card.Body className="cardColor" style={{ backgroundColor: useRadient('full body') && '#e91e63'}}>
                            <Card.Title style={{fontWeight: 'bold'}}>Full Body</Card.Title>
                            <Card.Text>40$</Card.Text>
                            <Card.Text className="text-end">
                            <button onClick={() => changeStyle('full body')}>{buttonRender('full body')}</button>
                            </Card.Text>
                        </Card.Body>
                        
                    </Card>
                </Col>
                <Col className="card-background overflow-auto">
                <Card className="h-100">
                        <Card.Img variant="top" src={catImg}/>
                        <Card.Body className="cardColor"  style={{backgroundColor: useRadientNSFW() &&  '#e91e63'}}>
                            <Card.Title className="nsfwSize" style={{fontWeight: 'bold'}}>NSFW(optional)</Card.Title>
                            <Card.Text style={{textAlign: 'center'}}>2x</Card.Text>
                            <Card.Text className="text-end">
                                <button onClick={() => isNSFW()}>{NSFWbuttonRender()} </button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col id="mascot" className="h-25" style={{width: 'fit-content'}}><p>Mascot here</p></Col>  
        </Row>
        
        <Row className="navRow">
            
            <Col lg={3} className="d-none d-sm-block" ></Col>
            <Col lg={2} xs={6} id="back">
            
            <Link to="/"><Button id="back" style={{width: '90%'}} variant="primary">Go Back <FontAwesomeIcon icon={faCircleArrowLeft} style={{color: "#f02889",}} /></Button></Link>
                
            </Col>
            <Col lg={1} className="d-none d-sm-block"></Col>
            <Col lg={2} xs={6}>
            <Link to="/request" state={{artObject: NSFW, artStyle, checked}}> 
                <Button disabled= {!checked} id="continue" onClick={() => handleSubmit()}  style={{width: '90%'}} variant="primary">
                    Request<FontAwesomeIcon icon={faCircleArrowRight} style={{color: "#f02889",}} />
                </Button>
            </Link>
            </Col>
        

        </Row>  
    </Container>
         
        </>
    

   
    )
    
}