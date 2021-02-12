import React,{useState}from 'react';
import { Form,Button, Container, FormLabel } from 'react-bootstrap';


const CityInput = (props)=>{
    
    let [error,seterror] = useState(null);

    const handleInputChange = (event)=>{
        props.setcity(event.target.value);
    }

    const HandleClick = (e)=>{
        e.preventDefault();
        if(props.city == ""){
            seterror("city is invalid");
            return;
        }
        props.fetchcityweather();
    }

    
    return (
        <Container>
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control value={props.city} type="text" placeholder="Enter city" onChange={handleInputChange}>
                </Form.Control>
                
            </Form.Group>

            <p className="text-danger">{error}</p>
            <Button onClick={HandleClick} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

export default CityInput;