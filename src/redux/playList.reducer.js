import axios from 'axios'
const GetTrackList='GetTrackList';
const Play="Play";
const Stop="Stop";
const GetLyric="GetLyric"

const init={
    data:[],
    isPlay:false,
    lrc:{}
}
export function PlayReducer(state=init,action){

    if(action.type===GetTrackList){
        return {...state,...action.payload}
    }
    if(action.type===Play){
        return{...state,isPlay:true}
    }
    if(action.type===Stop){
        return {...state,isPlay:false}
    }
    if(action.type===GetLyric){
        return {...state,...action.payload}
    }
    return state;
}


export function GetTracks(id,autoPlayFlag){
  const autoPlay=autoPlayFlag ? {autoPlay:true} : {autoPlay:false}
    return dispatch=>{
         axios.get(`/playlist/detail?id=${id}`)//使用歌单详情接186016
        .then((res)=>{
            const tracksInfo=res.data.playlist
           const tracks=res.data.playlist.tracks;
           const tracksIds=tracks.map((item)=>{
                return item.id
           })
           
           axios.get(`/music/url?id=${tracksIds.toString()}`)
           .then((res)=>{
           /* 调整请求回来的歌曲地址顺序 */
              let arr=[];
              for(let i=0;i<tracksIds.length;i++){
               const music= res.data.data.filter((item)=>{
                       return item.id===tracksIds[i]
                })
                arr.push(...music)
              }
             
              res.data.data=arr;
               dispatch({type:GetTrackList,payload:{...res.data,...tracksInfo,...autoPlay,tracksIds}})
           })
    
        })
    }
}


export function MusicLyric(id){
   
    return dispatch=>{
        axios.get(`/lyric?id=${id}`).then((res)=>{
            dispatch({type:GetLyric,payload:{lrc:res.data.lrc}});
        })
       
    }
}

export function  PlayStart(){
    return dispatch=>{
        dispatch({type:Play});
    }
}
export function  StopMusic(){
    return dispatch=>{
        dispatch({type:Stop});
    }
}