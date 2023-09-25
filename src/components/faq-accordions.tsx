import React from 'react';
import { CSSProperties } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faq from '../faq.json';

function FaqAccordions() {
    const root: CSSProperties = {
        fontFamily: 'monospace'
    }

    const accordion: CSSProperties = {
        border: '0.15rem solid black',
        boxShadow: '0.25rem 0.25rem',
        margin: '1rem 0'
    }

    const questionRoot: CSSProperties = {
        fontSize: '2rem',
        fontWeight: 'bold'
    }

    const answerRoot: CSSProperties = {
        fontSize: '1.2rem',
    }

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const accordians = () => {
        return faq.map((question) => 
            <Accordion style={accordion} expanded={expanded === question.title} onChange={handleChange(question.title)} square={true}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={question.title + 'bh-content'} id={question.title + 'bh-header'}>
                    <div style={questionRoot}>
                        {question.title}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={answerRoot}>
                        {question.content}
                    </div>
                </AccordionDetails>
            </Accordion>
        )
    }

    return (
        <div style={root}>
            {accordians()}
        </div>
    );
}

export default FaqAccordions;