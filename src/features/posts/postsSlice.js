import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const postToServer = createAsyncThunk(
  'posts/',
  async (postData, thunkAPI) => {

    const response = await fetch('http://localhost:5000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();
    // Return the response data
    console.log(data);
    return data;
  }

);

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

// Create a posts slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

    createPost(state, action) {
      state.posts.push(action.payload);
    },
  },

  extraReducers: {
    
    [postToServer.pending]: (state) => {
      state.status = 'loading';
    },

    [postToServer.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      // Add the newly created post to the state
      state.posts.push(action.payload);
    },

    [postToServer.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

// Export the action creators
export const { createPost } = postsSlice.actions;

// Export the posts reducer
export default postsSlice.reducer;
