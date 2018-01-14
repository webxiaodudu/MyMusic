import axios from 'axios'
const GetTrackList='GetTrackList';

const init={
    data:[],

}
export function PlayReducer(state=init,action){

    if(action.type===GetTrackList){
        return {...state,...action.payload}
    }
    
    return state;
}


export function GetTracks(id,autoPlayFlag){
  const autoPlay=autoPlayFlag ? {autoPlay:true} : {autoPlay:false}
    return dispatch=>{
         axios.get(`/playlist/detail?id=${id}`)//使用歌单详情接
        .then((res)=>{
            const tracksInfo=res.data.playlist
           const tracks=res.data.playlist.tracks;
           const tracksIds=tracks.map((item)=>{
                return item.id
           })
           
           axios.get(`/music/url?id=${tracksIds.toString()}`)
           .then((res)=>{
              
               dispatch({type:GetTrackList,payload:{...res.data,...tracksInfo,...autoPlay}})
           })
    
        })
    }
}
