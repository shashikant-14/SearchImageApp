import axios from "axios";

export const searchImages = async(query,page=1) =>{
    try{
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            headers:{
                Authorization: 'Client-ID 7nOXGA_517reMd_qZNq-fFF9KNR6MwpzkiYVlzxR2p8'
            },
            params:{
                query,
                page
            }
        });
        return response.data.results;
    } catch(e){
        console.log(e.message);
    }
}