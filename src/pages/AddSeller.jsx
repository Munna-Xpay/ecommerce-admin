import React from 'react'
import PageHead from '../components/PageHead'
import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

const AddSeller = () => {
    return (
        <>
            <PageHead heading='Add Seller' />
            <Paper sx={{ width: '100%', marginTop: '50px' }}>
                <Grid container spacing={4} p={3}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2}>
                            <TextField label="Email" type='email' color="secondary" />
                            <TextField label="Password" type='password' color="secondary" />
                            <TextField label="Mobile Number" type='number' color="secondary" />
                            <TextField label="Address" color="secondary" />
                            <TextField label="Coutry" color="secondary" />
                            <TextField label="Website" color="secondary" fullWidth />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={4} >
                        <Stack spacing={2} alignItems={'start'}>
                            <TextField label="Company name" color="secondary" fullWidth />
                            <Box
                                component={'img'}
                                src='https://th.bing.com/th/id/OIP.y757S8hQiezX3CSo1AI5vgAAAA?rs=1&pid=ImgDetMain'
                                sx={{ width: '220px', height: '220px', padding: '10px', borderRadius: '10px', border: '3px solid #f2f2f2', objectFit: 'cover' }}
                            />
                            <Button
                                variant="contained"
                                component="label"
                            >
                                Add Company Icon
                                <input
                                    type="file"
                                    hidden
                                />
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </>
    )
}

export default AddSeller