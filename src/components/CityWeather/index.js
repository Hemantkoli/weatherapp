import { Container,Table } from "react-bootstrap";
const CityWeather = (props)=>{
    
    if(!props.weatherinfo){
        return null;
    }
    return (

        <Container>
            <Table striped bordered hover size="sm">
                <thead>

                </thead>

                <tbody>
                    <tr>
                        <th>City</th>
                        <td>{props.weatherinfo.name}</td>
                    </tr>
                    <tr>
                        <th>Cloud</th>
                        <td>{props.weatherinfo.clouds.all}</td>
                    </tr>
                    <tr>
                        <th>Wind Speed </th>
                        <td>{props.weatherinfo.wind.speed}</td>
                    </tr>
                    <tr>
                        <th>Temperature</th>
                        <td>{Math.floor(props.weatherinfo.main.temp - 273)}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        
    )
}
export default CityWeather;