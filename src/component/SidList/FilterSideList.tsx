import React from 'react'
import { Container, Typography, Box, Grid, List, ListItem, ListItemText, Divider, Collapse, ListItemButton, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import { mockFilter, TitleGroup, Color, ColorType } from './defined'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { pink, grey } from '@mui/material/colors';
const FilterSideList = () => {

    return (
        <Grid item sx={{ width: 300 }}>
            <List >
                <Box>
                    {mockFilter.titleGroup.map((v, ind) => (
                        <ListItemButton key={ind} sx={{ pl: 4, '&:hover': { backgroundColor: 'transparent' } }}>
                            <ListItemText primary={v.titleName} sx={{ '& .MuiListItemText-primary': { fontWeight: 'bold' } }} />
                        </ListItemButton>
                    ))}
                </Box>
                <Divider />
                {mockFilter.titleGroup.map((groupProps: TitleGroup, ind) => (
                    <>
                        <Box sx={{ py: 2 }}>
                            <CollapseList key={ind} group={groupProps} />
                        </Box>
                        <Divider />
                    </>

                ))}
                <Box sx={{ py: 2 }}>
                    <CollapseColor color={mockFilter.color} />
                </Box>
                <Divider />

            </List>
        </Grid>

    )
}
const CollapseColor = ({ color }: { color: Color[] }) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick} sx={{ pl: 4, '&:hover': { backgroundColor: 'transparent' } }}>
                <ListItemText primary="顏色及圖案" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <FormGroup sx={{ pl: 4 }}>
                        <Grid container spacing={0} >
                            {color.map((colorProps: Color, ind) => (
                                <>
                                    <Grid key={ind} item xs={4} sx={{ py: 2 }} justifyContent="center" alignItems="center" direction="column" display="flex" >
                                        <Box
                                            width={30}
                                            height={30}
                                            borderRadius="50%"
                                            sx={{ bgcolor: colorProps.color }}

                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                        />
                                        <Typography variant="body2" gutterBottom sx={{ my: 1 }}>
                                            {ColorType[colorProps.name as keyof typeof ColorType]}
                                        </Typography>

                                    </Grid>
                                </>

                            ))}
                        </Grid>

                    </FormGroup>
                </List>
            </Collapse >
        </>
    )
}
const CollapseList = ({ group }: { group: TitleGroup }) => {
    const [open, setOpen] = React.useState(false);
    const [moreOpen, setMoreOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const handleMoreOpenClick = () => {
        setMoreOpen(!moreOpen);
    };
    return (
        <>
            <ListItemButton onClick={handleClick} sx={{ pl: 4, '&:hover': { backgroundColor: 'transparent' } }}>
                <ListItemText primary={group.titleName} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <FormGroup sx={{ pl: 4 }}>
                        {group.titleChild.map((child, ind) => {
                            if (ind < 4) {
                                return <FormControlLabel key={ind} control={<Checkbox

                                    sx={{
                                        color: grey[400],
                                        '&.Mui-checked': {
                                            color: 'black',
                                        },
                                    }} />} label={child.childName} />
                            }

                        })}
                        <Collapse in={moreOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <FormGroup >
                                    {group.titleChild.map((child, ind) => {
                                        if (ind > 4) {
                                            return <FormControlLabel key={ind} control={<Checkbox sx={{
                                                color: grey[400],
                                                '&.Mui-checked': {
                                                    color: 'black',
                                                },
                                            }} />} label={child.childName} />
                                        }
                                    })}
                                </FormGroup>
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleMoreOpenClick} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                            <ListItemText primary={moreOpen ? <FormControlLabel control={<RemoveIcon />} label={"更少"} /> : <FormControlLabel control={<AddIcon />} label={"更多"} />} />
                        </ListItemButton>
                    </FormGroup>
                </List>
            </Collapse >

        </>
    )
}
export default FilterSideList