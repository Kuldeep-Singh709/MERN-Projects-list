



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    list: [],
    singlePatient: null,
    status: 'idle',
    error: null,
};

// Fetch all patients
export const fetchPatients = createAsyncThunk('patients/fetchPatients', async () => {
    const response = await axios.get('/api/patients');
    return response.data.patient;  
});

// Add a new patient
export const addPatient = createAsyncThunk('patients/addPatient', async (newPatient) => {
    const response = await axios.post('/api/patients/patientregister', newPatient);
    return response.data;
});

// Delete a patient by ID
export const deletePatient = createAsyncThunk('patients/deletePatient', async (id) => {
    await axios.delete(`/api/patients/deletepatient/${id}`);
    return id;
});

// Get a single patient by ID
export const getSinglePatient = createAsyncThunk('patients/getSinglePatient', async (id) => {
    const response = await axios.get(`/api/patients/getsinglepatient/${id}`);
    return response.data.Patient;
});

// Update a patient by ID
export const updatePatient = createAsyncThunk('patients/updatePatient', async ({ id, updatedData }) => {
    const response = await axios.patch(`/api/patients/updatepatient/${id}`, updatedData);
    return { id, updatedData: response.data };
});

const patientSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPatients.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPatients.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            })
            .addCase(fetchPatients.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addPatient.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(deletePatient.fulfilled, (state, action) => {
                state.list = state.list.filter(patient => patient._id !== action.payload);
            })
            .addCase(getSinglePatient.fulfilled, (state, action) => {
                state.singlePatient = action.payload;
            })
            .addCase(updatePatient.fulfilled, (state, action) => {
                const { id, updatedData } = action.payload;
                const index = state.list.findIndex(patient => patient._id === id);
                if (index !== -1) {
                    state.list[index] = { ...state.list[index], ...updatedData };
                }
            });
    },
});

export default patientSlice.reducer;



































