
import {useLocation, Redirect} from 'react-router-dom';
import {useRef} from 'react'
import './Form.css';


export function FormPage(props){
    const location = useLocation();
    console.log(props, " props")
    console.log(location, " useLocation Hook");
    
    const data = location.state;

    const sendEmail = () => {

    }

    const form = useRef();
    return (
        <form>
            <h2 className="stateData" style={{float: 'left', color: 'white'}}>Art Style - {data.artStyle}</h2>
            <br/>
            <h2 className="stateData" style={{float: 'left',  color: 'white'}}>Price - {data.price}$</h2>
            <br/>
            <h2 style={{float: 'left',  color: 'white', background: 'none'}}>Name </h2>
            <input className="feedback-input"type="text" required></input>
            
            <h2 className="props" style={{float: 'left',  color: 'white'}}>Email </h2>
            <br/>
            <input className="feedback-input"type="email" required></input>
            <br/>
            <h2  style={{float:'left', background: 'none', color: 'white'}}>Description</h2>
            <textarea name="text" className="feedback-input" placeholder="Tell me in detail what you desire"></textarea>
            <input type="submit" value="SUBMIT"/>
        </form>
    )
}