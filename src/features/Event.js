import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const events_url='http://localhost:3000/Events'

export const eventSlice = createSlice({
    name : "events",
    initialState:{ 
        loading: 'idle',
        events:{},
        error: null
    },
        
    reducers:{
  eventsLoading:(state ,action)=>{
        if(state.loading === 'idle') {
            state.loading = 'pending'
        }
        
    },
    eventsReceived:(state ,action)=>{
        if(state.loading === 'pending') {
            state.loading = 'idle'
            state.events = action.payload
        }
        
    },
    addEvent:(state , action)=>{
        
    }
    }
})
const {eventsLoading, eventsReceived, addEvents  } = eventSlice.actions;

export const fetchEvents = () => async dispatch => {
    dispatch( eventsLoading());
    const response = await axios.get(events_url)
    dispatch(eventsReceived(response.data));
    console.log("response.data",response.data)

}

/* export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const response = await axios.get(events_url)
        return [...response.data];
    } catch (err) {
        return err.message;
    }
    const response = await axios.get(events_url)
    return response.data
})
 */