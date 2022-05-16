import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useContext} from "react";
import {AppContext} from "../context/AppDataContext";
import {Button, Link, Drawer} from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import SubNav from "./SubNav";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%'
    },
}));

export default function Header() {
    const {isUserAuth, setIsUserAuth, categories} = useContext(AppContext);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const [openMenu, setOpenMenu] = React.useState(false);


    const toggleDrawer = (newOpen) => () => {
        setOpenMenu(newOpen);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            keepMounted
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            sx={{zIndex: '10001'}}
        >
            <MenuItem>
                <Link href="/#/dashboard" underline="none" color="inherit">
                    Мій кабінет
                </Link>
            </MenuItem>
            <MenuItem onClick={() => {
                setIsUserAuth(false)
                navigate("/#")
                handleMenuClose()
            }}>
                Вийти
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1, position: "fixed", top: 0, left: 0, right: 0, zIndex: '10000' }}>
            <AppBar position="static">
                <Toolbar>
                    <Link href="/#" sx={{ mr: 2 }} underline="none" color="inherit">
                        Вільні та Гідні
                    </Link>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2, ml: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={openMenu}
                        onClose={toggleDrawer(false)}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                        <Box
                            role="presentation"
                            sx={{ paddingTop: '84px', minWidth: '300px' }}
                            // onClick={toggleDrawer(false)}
                            // onKeyDown={toggleDrawer(false)}
                        >
                            <MenuList>
                                {categories.map((cat, index) => (
                                    cat.subCategories.length > 0 ? (
                                        <MenuItem
                                            key={index}
                                        >
                                            <ListItemText onClick={() => {
                                                navigate(`/c-${cat.categorySlug}`)
                                            }} primary={cat.categoryName} />

                                            <SubNav catName={cat.categoryName} catSlug={cat.categorySlug} subCategories={cat.subCategories}/>
                                        </MenuItem>
                                    ) : (
                                        <MenuItem
                                            key={index}
                                            onClick={() => {
                                                navigate(`/c-${cat.categorySlug}`)
                                            }}
                                        >
                                            <ListItemText primary={cat.categoryName} />
                                        </MenuItem>
                                    )
                                ))}
                            </MenuList>
                        </Box>
                    </Drawer>
                    <Search sx={{ flexGrow: 1 }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ mr: 2, ml: 2 }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="shoping basket"
                            // aria-controls={menuId}
                            aria-haspopup="true"
                            // onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <ShoppingBasketIcon/>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        {isUserAuth ?
                            (
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            ) : (
                                <Button
                                    color="inherit"
                                    sx={{ mr: 2, ml: 2 }}
                                    href="/#/register"
                                >
                                    Реєстрація
                                </Button>
                            )}
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
}
