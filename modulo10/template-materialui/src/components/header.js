import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 4 }}
                    />
                    <Typography 
                        variant="h1" 
                        component="div" 
                        sx={{
                            flexGrow: 1,
                            fontSize: '3rem', // Altera o tamanho da fonte
                            fontFamily: 'Arial, sans-serif', // Altera a fonte
                            fontWeight: 'bold', // Define o peso da fonte como bold
                        }}
                    >
                        Projeto
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
