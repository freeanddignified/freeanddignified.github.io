import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { footerData } from '../data/footerData'

const Footer = () => {

    return (
        <footer style={{marginTop: 'auto'}}>
            <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2} sx={{width: '100%', justifyItems: 'center'}}>
                {footerData.map((footerCol, index) => (
                    <Box key={index}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6" component="div">
                            {footerCol.title}
                            <List dense={true}>
                                {footerCol.links.map((link, index) => (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={link.title} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Typography>
                    </Box>
                ))}

                <div>

                </div>
            </Box>
        </footer>
    )
}

export default Footer