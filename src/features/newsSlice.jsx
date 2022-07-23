import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  newsList: [],
  loading: true,
};
const API_KEY = 'xxyxx'
export const getNews = createAsyncThunk(
	'news/getNews', 
	async () => {
	const url = `xxxxx${API_KEY}`;
	const {data} = await axios(url);
	return data.articles;
	// console.log(error);
})
 //toolkit kullanmasaydım bu işlem için daha fazla uğraşırdım

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    clearNewsList: (state) => {
		state.newsList = [];

	}
  },
  extraReducers: {

  }
});

export default newsSlice.reducer;
