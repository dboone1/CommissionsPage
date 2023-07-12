
import "./FAQ.css"
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus, faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'

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
    }

    const accordionTitleStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        cursor: 'pointer',
        padding: '5px',
        background: '#21aeca',
    };

    const accordionContentStyles = {
        padding: '5px',
        background: '#39b9b2'
    }

    

    const AccordionSection = ({section, isActiveSection, setActiveIndex, sectionIndex}) => {
        const toggleSection = () =>{
            const nextIndex = isActiveSection ? null : sectionIndex
            setActiveIndex(nextIndex);
        }
        
        return (
            <div>
                <div>
                    <div style={accordionTitleStyles} onClick={toggleSection}>
                        {section.title}</div>
                    <div>{isActiveSection ? "-" : "+"}</div>
                </div>
                {isActiveSection && <div style={accordionContentStyles}>{section.content}</div>}
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
                <span className="accordion__title">Frequently asked questions</span>
                <h1 className="first">Lets answer some of your questions</h1>
                <Accordion sections={accordionData}/>
            </div>
            <div>
               
            </div>
        </div>
        </>  
    );
}

