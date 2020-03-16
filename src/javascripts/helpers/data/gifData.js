import axios from 'axios';

const getGifs = (searchText) => axios.get(`https://api.giphy.com/v1/gifs/search?api_key=fdjSFSqeorr3MmIUhxe2f8gayRrGEQ87&q=${searchText}&limit=25&offset=0&rating=G&lang=en`);

export default { getGifs };
