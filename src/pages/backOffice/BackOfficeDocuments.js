import React from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const BackOfficeDocuments = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

   return (
      <Box
          display="grid"
          gridTemplateColumns="1fr"
          gap={0}
          sx={{ width: "calc(100% - 30px)", padding: "20px", marginLeft: '20px' }}
      >
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>1. Категорія діяльності</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography>2. Рідкатегорія діяльності</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography>3. Виробничі процеси. Унікальні технології та рецептура</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary aria-controls="panel5d-content" id="panel4d-header">
                  <Typography>4. Виробничі процеси. Габаритні машини та автомати</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                  <Typography>5. Виробничі процеси. Виробництво за ліцензією</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
              <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                  <Typography>6. Логістичні потужності</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
              <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
                  <Typography>7. Сертифікація відповідності</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
              <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
                  <Typography>8. Складські потужності</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
              <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
                  <Typography>9. Принципи роботи із людським капіталом</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                  </Typography>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
              <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
                  <Typography>10. Сервісна стратегія</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                  </Typography>
              </AccordionDetails>
          </Accordion>
      </Box>
  )
};

export default BackOfficeDocuments
