import { useState } from "react";
import "../../css/createLocation.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import createLocation from "../../api/location/createLocation";
import locationFilter from "../../api/location/locationFilter";
 
export default function CreateLocationPage() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [locationString, setLocationString] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit() {
        if(isSubmitting)
            return;
        setIsSubmitting(true);
        await createLocation(name, address, city, country, locationString);
        setIsSubmitting(false);
        const locationFilterRes = await locationFilter(name);
        navigate(`/location/${locationFilterRes[0].id}`);
    }

    return (
        /*
        <div className = "formContainer">
            <div className = "row-name">
                Nume
            </div>
            <div className = "address">
                <div> Adresa </div>
                <div> LocationString </div>
            </div>
            <div className = "geoLocation">
                <div> City </div>
                <div> country </div>
            </div>
        </div>*/
        <div>
            <Form>
                <div className = "row-name">
                    <Form.Group>
                        <Form.Label> Name </Form.Label>
                        <Form.Control type = "text" value = {name} onChange = {(e) => setName(e.target.value)} />
                    </Form.Group>
                </div>
                <div className = "address">
                    <Form.Group>
                        <Form.Label> Address </Form.Label>
                        <Form.Control type = "text" value = {address} onChange = {(e) => setAddress(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> LocationString </Form.Label>
                        <Form.Control type = "text" value = {locationString} onChange = {(e) => setLocationString(e.target.value)} />
                    </Form.Group>
                </div>
                <div className = "geoLocation">
                    <Form.Group>
                        <Form.Label> City </Form.Label>
                        <Form.Control type = "text" value = {city} onChange = {(e) => setCity(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Country </Form.Label>
                        <Form.Control type = "text" value = {country} onChange = {(e) => setCountry(e.target.value)} />
                    </Form.Group>
                </div>
                <div className = "centerButton">
                    <Button variant = "addLocationButton" onClick = {handleSubmit}> Add it! </Button>
                </div>
            </Form>
        </div>
    );
}