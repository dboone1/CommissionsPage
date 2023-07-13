
import "./FAQ.css"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus, faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import { Cat } from './BlueCat.js';

 export function FAQ(){
 
    
    const accordionData = [
    {
        title: 'Why is your name X?',
        content: 'My name is X because I liked watching X while growing up.'
    },
    {
        title: 'I requested X art days ago, and I got no response!',
        content: "I am sorry for not reaching out to you, and I will reply to any request to the best of my time and ability."
    },
    {
        title: 'Do you draw NSFW?',
        content: "Yes I do draw NSFW.",
    },
    {
        title: 'What tools did you use to make this website?',
        content: 'Someone special made it for me. The person used React, React-bootstrap, and CSS.'
    },
    {
        title:'What is your favorite anime?',
        content: 'Boku no Pico.'
    }
    ]

    const accordionStyles = {
        maxWidth: "600px",
        margin: '0 auto'

    }

    

    const accordionTitleStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
        padding: '5px',
        background: '#21aeca',
        borderRadius: '15px',
        lineHeight: '50px',
        fontSize: '2em',
        marginBottom: '20px'
    };

    const accordionContentStyles = {
        padding: '5px',
        background: '#39b9b2',
        marginBottom: '22px',
        borderRadius: '15px',
        lineHeight:'45px',
        fontSize: '1.8em'
        
    }

    const AccordionSection = ({section, isActiveSection, setActiveIndex, sectionIndex}) => {
        const toggleSection = () =>{
            const nextIndex = isActiveSection ? null : sectionIndex
            setActiveIndex(nextIndex);
        }

        return (
            <div>
                <div>
                    <div style={accordionTitleStyles} className="brighten" onClick={toggleSection}>
                        {section.title} <div>{isActiveSection ? <FontAwesomeIcon icon={faCircleMinus}/> : <FontAwesomeIcon icon={faCirclePlus}/>}</div></div>
                </div>
                {isActiveSection && <div style={accordionContentStyles} className="brighten">{section.content}</div>}
            </div>
        );
    }

    const Accordion = ({sections}) => {
        const [activeIndex, setActiveIndex] = useState(0);

        return (
            <div style={accordionStyles}>
                {sections.map((section, index ) => (
                    <AccordionSection 
                    section={section} 
                    key={index} 
                    isActiveSection={index === activeIndex}
                    setActiveIndex={setActiveIndex}
                    
                    sectionIndex={index}
                    />
                ))}
            </div>
        )
    }

    return(
        <>
        <div className="container">
            <div>
                <span className="accordionTitle">FAQ</span>
                <h1 className="first">Lets answer some of your questions</h1>
                <Accordion sections={accordionData}/>
            </div>
            <div>
            <Link to="/"><Button id="back" className="faqButton">Go Back <FontAwesomeIcon icon={faCircleArrowLeft}/></Button></Link>
            </div>
            <Cat/>
        </div>
        </>  
    );
}

