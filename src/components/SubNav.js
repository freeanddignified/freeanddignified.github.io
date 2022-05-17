import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import {useNavigate} from "react-router-dom";

const SubNav = ({catName, catSlug, subCategories}) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <IconButton
                id={`button-${catName}`}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                { open ?
                    <ArrowDropDownIcon/>
                    :
                    <ArrowRightIcon/>
                }
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id={`menu-${catName}`}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        // '& .MuiAvatar-root': {
                        //     width: 32,
                        //     height: 32,
                        //     ml: -0.5,
                        //     mr: 1,
                        // },
                        // '&:before': {
                        //     content: '""',
                        //     display: 'block',
                        //     position: 'absolute',
                        //     top: 0,
                        //     right: 14,
                        //     width: 10,
                        //     height: 10,
                        //     bgcolor: 'background.paper',
                        //     transform: 'translateY(-50%) rotate(45deg)',
                        //     zIndex: 0,
                        // },
                    },
                }}
                // transformOrigin={{ horizontal: 190, vertical: 'top' }}
                anchorOrigin={{ horizontal: 70, vertical: -20 }}
            >
                {subCategories.map((sub, index) => (
                    <MenuItem
                        key={index}
                        onClick={() => {
                            navigate(`/s-${sub.subCategorySubSlug}`)
                        }}
                    >
                        <ListItemText primary={sub.subCategoryName} />
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    )
}

export default SubNav