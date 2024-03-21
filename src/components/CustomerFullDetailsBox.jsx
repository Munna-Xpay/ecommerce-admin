import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Autocomplete, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import { countries } from '../countryDatas'

const CustomerFullDetailsBox = () => {

    const { id } = useParams()
    const customer = useSelector(state => state.userReducer.allUsers?.find(item => item._id == id))
    console.log(customer)

    return (
        <Paper>
            <Stack p={2} spacing={1}>
                <Typography variant='h6' sx={{ fontWeight: 'bold', opacity: '.9' }} >My Profile Details</Typography>
                <Grid container spacing={2} pr={3}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={4}>
                            <TextField value={customer && customer?.fullName} disabled InputLabelProps={{ shrink: true }} sx={{color:'black'}} InputProps={{ style: { borderRadius: '7px' } }} fullWidth label="Name"  />
                            <TextField value={customer && customer?.email} disabled InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Email" />
                            <TextField value={customer && customer?.phoneNum ? customer?.phoneNum : null} disabled type='number' InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Phone Number" />
                            <TextField value={customer && customer?.birthday ? customer?.birthday : null} disabled name='birthday' InputLabelProps={{ shrink: true }}
                                InputProps={{ disableUnderline: true, style: { borderRadius: '7px' }, min: '1900-01-01', max: '2100-12-31' }}
                                fullWidth label="Birthday" type='date'/>

                            <FormControl style={{ borderRadius: '7px' }} sx={{ backgroundColor: '#f2f4f5' }} fullWidth >
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    style={{ borderRadius: '7px' }}
                                    sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='gender'
                                    label="Gender"
                                    value={customer && customer?.gender ? customer?.gender : ""}
                                    readOnly
                                    variant='outlined'
                                >
                                    <MenuItem value={'Male'}>Male</MenuItem>
                                    <MenuItem value={'Female'}>Female</MenuItem>
                                    <MenuItem value={'Others'}>Others</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={4}>
                            <TextField
                                value={customer && customer?.address ? customer?.address : ""}
                                disabled
                                InputLabelProps={{ shrink: true }}
                                InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }}
                                fullWidth
                                label="Street Address"
                                type='text' />
                            <TextField value={customer && customer?.zipCode ? customer?.zipCode : null} disabled InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="Zip Code" />
                            <TextField value={customer && customer?.city ? customer?.city : null} disabled InputLabelProps={{ shrink: true }} InputProps={{ disableUnderline: true, style: { borderRadius: '7px' } }} fullWidth label="City" type='text' />
                            <Autocomplete
                                value={customer && customer?.country ? customer?.country : ""}
                                style={{ borderRadius: '7px' }}
                                readOnly
                                id="country-select-demo"
                                fullWidth
                                options={countries.map(country => country.label)}
                                autoHighlight
                                renderInput={(params) => (
                                    <TextField

                                        {...params}
                                        label="Country"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Paper >
    )
}

export default CustomerFullDetailsBox