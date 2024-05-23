import { useState } from 'react'
import { AppBar, ListItemButton, List, ListItemText, Box, Toolbar, Typography, Divider, IconButton, Badge, Grid } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LOGO from '../../images/Casetify_logo.png'
import { projectRouter } from '../../router/router'
import { newPageList, recommondedPageList } from './defined'
const AppNav = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Box sx={{
            flexGrow: 1,
        }}>
            <AppBar position="static" style={{ backgroundColor: 'white', color: 'black' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {/* <TokenIcon /> */}
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                //mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',

                            }}
                        >
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }} >
                                <img src={LOGO} alt="Logo" style={{ height: '50px', paddingTop: '0.5rem', paddingLeft: '1rem' }} />
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Grid container spacing={3} direction="row">

                            {projectRouter.map((routerProps, ind) => {
                                if (routerProps.text === '精選商品&關於品牌') {
                                    return <Grid item xs="auto" key={ind}><Typography
                                        textAlign="center"
                                        onMouseEnter={() => { setIsHovered(true); }}

                                    >
                                        {/* <Link to={routerProps.path} style={{ textDecoration: 'none', color: 'inherit' }} >
                                          {routerProps.text}
                                        </Link>  */}
                                        {routerProps.text}
                                    </Typography> </Grid>
                                }
                                else {
                                    return <Grid item xs="auto" key={ind}>
                                        <Typography textAlign="center">
                                            <Link to={routerProps.path} style={{ textDecoration: 'none', color: 'inherit' }} >
                                                {routerProps.text}
                                            </Link>
                                        </Typography>
                                    </Grid>
                                }

                            })}

                        </Grid>


                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            // aria-controls={menuId}
                            aria-haspopup="true"
                            //onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
                {
                    isHovered === true
                    && <ExpandedNav setIsHovered={setIsHovered} />
                }
            </AppBar>


        </Box>
    )
}
const ExpandedNav = ({ setIsHovered }: { setIsHovered: (v: any) => void }) => {
    const [hoveredText, setHoveredText] = useState<string>("recommnad")
    return <Box sx={{
        position: 'absolute',
        top: 110,
        left: 0,
        height: '500px',
        backgroundColor: 'white',
        zIndex: 1
    }}

        onMouseLeave={() => {
            setIsHovered(false);
        }}>

        <Divider sx={{ width: '100%' }} />
        <Grid container spacing={2} sx={{ my: 2, px: 18 }}>
            <Grid item xs={2}>
                <List>
                    <ListItemButton onMouseEnter={() => { setHoveredText("recommnad"); }}>
                        <ListItemText
                            //  onMouseLeave={() => { setHoveredText(""); }}
                            primary={'精選系列'}
                            sx={{ '& .MuiListItemText-primary': { fontWeight: 'bold' } }} />
                        <ArrowForwardIosIcon fontSize='small' />
                    </ListItemButton>
                    <ListItemButton onMouseEnter={() => { setHoveredText("new"); }}>
                        <ListItemText
                            primary={'全新商品'}
                            sx={{ '& .MuiListItemText-primary': { fontWeight: 'bold' } }} />
                        <ArrowForwardIosIcon fontSize='small' />
                    </ListItemButton  >

                </List>
            </Grid>
            <Grid item xs={10}>
                {
                    hoveredText === "recommnad" && <>
                        {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
                        <Typography variant="h6">精選系列</Typography>
                        <Grid container spacing={6} sx={{ py: 4 }}>
                            {
                                recommondedPageList.map((v, ind) => (
                                    <Grid item xs={3} key={ind}>
                                        <Link to={v.path} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => { setIsHovered(false); }}>
                                            <img
                                                alt='imageRecommand'
                                                src={v.src}
                                                style={{ height: '296px' }}
                                            />
                                            <Typography variant="subtitle1" gutterBottom sx={{ color: '#f15b41', textAlign: 'center' }}>{v.name}</Typography>
                                        </Link>
                                    </Grid>
                                ))
                            }

                        </Grid>
                    </>
                }
                {
                    hoveredText === "new" && <>
                        <Typography variant="h6">全新商品</Typography>
                        <Grid container spacing={6} sx={{ py: 4 }}>
                            {
                                newPageList.map((v, ind) => (
                                    <Grid item xs={3} key={ind}>
                                        <Link to={v.path} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => { setIsHovered(false); }}>
                                            <img
                                                alt='imageNew'
                                                src={v.src}
                                                style={{ height: '296px' }}
                                            />
                                            <Typography variant="subtitle1" gutterBottom sx={{ color: '#f15b41', textAlign: 'center' }}>{v.name}</Typography>
                                        </Link>
                                    </Grid>
                                ))
                            }

                        </Grid></>

                }
            </Grid>
        </Grid>

    </Box>
}

export default AppNav
