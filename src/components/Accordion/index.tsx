import {
  Accordion as MAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from './styles.module.scss';

type AccordionProps = {
  items: {
    id: string;
    summary: string | JSX.Element;
    details: string | JSX.Element;
    disabled?: boolean;
  }[];
};

const Accordion = ({ items }: AccordionProps) => {
  return (
    <>
      {items.map(({ summary, details, id }) => (
        <MAccordion className={classes.accordion} key={id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`accordion-${id}`}
            id={id}
            className={classes.accordionSummary}
          >
            <Typography className={classes.summary}>{summary}</Typography>
          </AccordionSummary>
          <AccordionDetails>{details}</AccordionDetails>
        </MAccordion>
      ))}
    </>
  );
};

export default Accordion;
