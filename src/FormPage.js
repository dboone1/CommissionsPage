
import {useLocation, Redirect} from 'react-router-dom';
import './Form.css';


export function FormPage(props){
    const location = useLocation();
    console.log(props, " props")
    console.log(location, " useLocation Hook");
    const artObject = location.state?.artObject;

    return (
        <form>
            <h2>{artObject.artStyle}</h2>
            <h2>{artObject.NSFW}</h2>
            <h2>{artObject.checked}</h2>
            <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT"/>
        </form>
    )
}