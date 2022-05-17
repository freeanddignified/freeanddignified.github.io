import React, {useContext} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from "@mui/material/Box";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import BestBuyLogo from '../logo/BestBuyLogo.svg'
import AmazonLogo from '../logo/AmazonLogo.svg'
import MediaMarkt from '../logo/MediaMarktLogo.svg'
import WalmartLogo from '../logo/WalmartLogo.svg'
import AllegroLogo from '../logo/AllegroLogo.svg'
import EbayLogo from '../logo/EbayLogo.svg'

const BackOfficeModalShops = () => {

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gridGap: '20px',
        }}>
            <Card sx={{ width: '100%' }} elevation={2}>
                <CardMedia
                    component="img"
                    height="200"
                    image={BestBuyLogo}
                    alt="Best Buy"
                    objectFit="contain"
                    sx={{width: '70%', margin: 'auto'}}
                />
                <CardActionArea
                    sx={{
                        backgroundColor: '#E8EAEA',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2
                    }}>
                    <Typography variant="body2" color="text.secondary">
                        Best Buy
                    </Typography>
                    <ArrowRightIcon/>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '100%' }} elevation={2}>
                <CardMedia
                    component="img"
                    height="200"
                    image={AmazonLogo}
                    alt="Amazon"
                    objectFit="contain"
                    sx={{width: '70%', margin: 'auto'}}
                />
                <CardActionArea
                    sx={{
                        backgroundColor: '#E8EAEA',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2
                    }}>
                    <Typography variant="body2" color="text.secondary">
                        Amazon.com
                    </Typography>
                    <ArrowRightIcon/>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '100%' }} elevation={2}>
                <CardMedia
                    component="img"
                    height="200"
                    image={MediaMarkt}
                    alt="Media Markt"
                    objectFit="contain"
                    sx={{width: '70%', margin: 'auto'}}
                />
                <CardActionArea
                    sx={{
                        backgroundColor: '#E8EAEA',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2
                    }}>
                    <Typography variant="body2" color="text.secondary">
                        MediaMarkt
                    </Typography>
                    <ArrowRightIcon/>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '100%' }} elevation={2}>
                <CardMedia
                    component="img"
                    height="200"
                    image={WalmartLogo}
                    alt="Walmart"
                    objectFit="contain"
                    sx={{width: '70%', margin: 'auto'}}
                />
                <CardActionArea
                    sx={{
                        backgroundColor: '#E8EAEA',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2
                    }}>
                    <Typography variant="body2" color="text.secondary">
                        Walmart
                    </Typography>
                    <ArrowRightIcon/>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '100%' }} elevation={2}>
                <CardMedia
                    component="img"
                    height="200"
                    image={AllegroLogo}
                    alt="Allegro"
                    objectFit="contain"
                    sx={{width: '70%', margin: 'auto'}}
                />
                <CardActionArea
                    sx={{
                        backgroundColor: '#E8EAEA',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2
                    }}>
                    <Typography variant="body2" color="text.secondary">
                        Allegro
                    </Typography>
                    <ArrowRightIcon/>
                </CardActionArea>
            </Card>
            <Card sx={{ width: '100%' }} elevation={2}>
                <CardMedia
                    component="img"
                    height="200"
                    image={EbayLogo}
                    alt="Ebay"
                    objectFit="contain"
                    sx={{width: '70%', margin: 'auto'}}
                />
                <CardActionArea
                    sx={{
                        backgroundColor: '#E8EAEA',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2
                    }}>
                    <Typography variant="body2" color="text.secondary">
                        Ebay
                    </Typography>
                    <ArrowRightIcon/>
                </CardActionArea>
            </Card>
        </Box>
    )
}

export default BackOfficeModalShops