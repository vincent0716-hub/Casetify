
import { Box, Grid, Typography, Stack } from '@mui/material';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import { PhoneList, mockItem } from './defined'
const index = () => {
    return (

        <Grid item xs>
            <Grid container spacing={2}>
                {mockItem.map((item, ind) => (
                    <ProductItem key={ind} item={item} />
                ))}

            </Grid>
        </Grid>



    )
}

const ProductItem = ({ item }: { item: PhoneList }) => {
    // const hasMagSafe = true
    return <Grid item xs={3} sx={{
        pt: 0,  // Disable padding top
        pl: 0   // Disable padding left
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 3,
            my: 2,
        }}>
            <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{ width: '100%' }}
            />
            <Stack direction='row'>
                <OfflineBoltOutlinedIcon sx={{ color: 'red' }} fontSize='small' />
                {item.hasMagSafe === true && <Typography sx={{ fontWeight: 700, color: 'red' }} variant="body2" gutterBottom>MagSafe兼容</Typography>}
            </Stack>
            <Typography sx={{ fontWeight: 700 }} variant="body2" gutterBottom>{item.title1}</Typography>
            <Typography sx={{
                fontWeight: 700,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }} variant="body2" gutterBottom>{item.title2}</Typography>
            <Typography sx={{ fontWeight: 700 }} variant="body2" gutterBottom>{item.productName}</Typography>
            <Typography sx={{ fontWeight: 700 }} variant="body2" gutterBottom>{`${item.colorAmount}種顏色`}</Typography>
            <Typography sx={{ fontWeight: 700 }} variant="body2" gutterBottom>{`NT$${item.price}`}</Typography>
        </Box>
    </Grid>
}
export default index