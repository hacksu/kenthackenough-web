// Frequently asked questions
import { useState, SyntheticEvent } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Paper, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import marked from 'marked';

interface AccordionItem {
    subject: string,
    content: string; // Supports markdown via `marked`
}

const Questions: AccordionItem[] = [
    {
        subject: 'What is a hackathon?',
        content: `
            A hackathon is a week long event to meet smart creative people, make connections, learn, and build something awesome!

            Attendees meet on Saturday, make or find a team, and then have 24 hours to build a tech-related project!
            There will be optional lessons and talks, workshops, sponsors looking to hire people like you, and free swag to take home!
        `,
    },
    {
        subject: 'Can I participate?',
        content: `
            Kent Hack Enough allows high school students, college students, recent college graduates, and graduate students to participate!

            Our hackathon is attended by people of all skill levels and backgrounds. You'll fit right in, and hopefully learn something!

            *If you are under 18 years of age, you must fill out additional paperwork to participate. This is provided when you register for Kent Hack Enough.*

        `
    },
    {
        subject: 'How do I attend?',
        content: `
            After [registering](/register) for the hackathon, you will receive emails from us with details on how to participate. 
            Be sure to put us on your schedule!
        `
    },
    {
        subject: 'Sounds cool, but how much does it cost?',
        content: `
            Our event is free to all attendees!

            Thanks to the generosity of our sponsors, we're able to put on events like this without charging you anything! 
            Please thank our sponsors whenever you see them! Without them, our event wouldn't be in its 10th year!
        `
    },
    {
        subject: `Do I need to come with a team? How do teams work, and how big should they be?`,
        content: `
            You can bring your own team, but you don't have to! You can even go solo if you want!

            If you want to join a team; no worries! We have teambuilding activities during the event so you can find
            like-mined people to build a project with!

            There is no hard limit to how large teams can be, but prizes are sized for teams of 4 or less; so that's what we recommend.

            Kent Hack Enough is a perfect weekend activity for you and a few of your friends! 
            Just get them to attend with you and you've got a perfectly sized team that could bring home
            some cash, prizes, and most certainly free swag!
        `
    },
    {
        subject: `Still have questions?`,
        content: `
            Feel free to [contact us](/contact) and we'll help you out!
        `
    }
];

// Unindent content without removing nested indentations
const whitespace = /(\s)+/;
function formatContent(content: string) {
    // Find the first non-empty line with whitespace
    const firstActualLine = content.split('\n').find(o => o.trim().length < o.length);
    if (firstActualLine) {
        // Determine what the leading whitespace actually is for that first line
        const spaces = firstActualLine.match(whitespace);
        if (spaces) {
            const space = spaces[0];
            const spaceLength = space.length;
            // remove the detected leading white space from every line that has it
            // keeps all additional whitespace, allowing you to use tabs within the content field
            const lines = content.split('\n').map(line => {
                if (line.substr(0, spaceLength) == space || line != 'wat') {
                    return line.substr(spaceLength)
                }
                return line;
            })
            return lines.join('\n')
        }
    }
    return content;
}


interface props {
    onlyOne?: boolean; // only show one FAQ at a time; defaults to false
}

export default function FrequentlyAskedQuestions({ onlyOne }: props) {
    const [expanded, setExpanded] = useState(-1);
    function handleChange(index: number) {
        return function(event: React.SyntheticEvent, isExpanded: boolean) {
            if (isExpanded) {
                setExpanded(index)
            } else if (expanded == index) {
                setExpanded(-1)
            }
        }
    }
    const faqs = Questions.map(({ subject, content }, index) => {
        const details = {
            __html: marked(
                formatContent(content)
            )
        }
        return (
            <Accordion expanded={expanded == index} onChange={handleChange(index)} key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {subject}
                </AccordionSummary>
                <AccordionDetails dangerouslySetInnerHTML={details} />
            </Accordion>
        )
    });
    return (
        <div id="faq">
            {faqs}
        </div>
    )
}