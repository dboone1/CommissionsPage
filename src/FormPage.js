
import {useLocation, Navigate} from 'react-router-dom';
import {useRef, useEffect} from 'react'
import {Helmet} from 'react-helmet';
import './Form.css';



export function FormPage(props){
    const location = useLocation();
    console.log(props, " props")
    console.log(location, " useLocation Hook");

    const data = location.state;

    {/*const redirectPage = () =>{
        if(Object.values(data).length === 0){
            <Navigate to="/" replace={true} />
        }
    }

    useEffect(() =>{
        redirectPage()
    }, [redirectPage]
    */}
    

    const form = useRef();
    return (
        <>
        <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="83817b2d-df89-46bf-a8df-4bc0f929cef6"/>
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

        <Helmet>
        <script src="https://web3forms.com/client/script.js" async defer></script>
        </Helmet>
        </>
        
    )
}