import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const TopBar = () => {

    return (
        <AppBar position="static" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h3"
                        noWrap
                        sx={{ mr: 2, display: { xs: 'flex' } }}
                        color='white'
                    >
                        NFT
                    </Typography>

                    <Typography
                        variant='body2'
                        noWrap
                        sx={{ mr: 2, display: { xs: 'flex' } }}
                        color='white'
                    >
                        Match your random number and get token
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default TopBar;