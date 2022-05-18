import React from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

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
                  <Typography>Документ 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Stack direction="row" spacing={1}>
                      <IconButton size="large">
                          <InsertDriveFileIcon/>
                      </IconButton>
                      <IconButton size="large">
                          <InsertDriveFileIcon/>
                      </IconButton>
                      <IconButton size="large">
                        <InsertDriveFileIcon/>
                      </IconButton>
                  </Stack>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography>Документ 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Stack direction="row" spacing={1}>
                      <IconButton size="large">
                          <InsertDriveFileIcon/>
                      </IconButton>
                      <IconButton size="large">
                          <InsertDriveFileIcon/>
                      </IconButton>
                      <IconButton size="large">
                          <InsertDriveFileIcon/>
                      </IconButton>
                  </Stack>
              </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography>Документ 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Stack direction="row" spacing={1}>
                      <IconButton size="large">
                          <InsertDriveFileIcon/>
                      </IconButton>
                      <IconButton size="large">
                          <InsertDriveFileIcon/>
                      </IconButton>
                      <IconButton size="large">
                          <InsertDriveFileIcon/>
                      </IconButton>
                  </Stack>
              </AccordionDetails>
          </Accordion>
      </Box>
  )
};

export default BackOfficeDocuments
