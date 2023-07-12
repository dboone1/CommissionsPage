import dogImg from './images/dog33.jpg'
import './AboutMe.css';
import {Link} from 'react-router-dom';


export function AboutMe(){
    return (
        <body className="bodyAboutMe">
            <section className="about">
                <div className="about-main">
                    <div className="img1">
                    <img src={dogImg}/>
                    </div>
                    <div className="about-text">
                        <h1>About me</h1>
                        <h5 className="shtick">Artist & <span>Anime Fan</span> </h5>
                        <p>I am a artist that loves to draw. I love to draw. Etc. Blablabla im so cute and pretty 
                            and all that. Like god damn im hot asf. Im so beautiful and i look like a kitty but like super gorgeous and all that. I also have shiny eyes :3
                        </p>
                        <Link to="/"><button className="buttonAboutMe" type="button">Go Back</button></Link>
                    </div>
                </div>
            </section>
        </body>
    )
}

