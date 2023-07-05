import { defineStore } from "pinia";
import axios from "axios";

interface moiveItemType{
    tvId:string,
    albumName:string
}

type moiveListType = moiveItemType[]

interface moiveStoreType{
    moiveList:moiveListType
}

const useMoiveStore = defineStore('moive',{
    state:():moiveStoreType=>{
        return{
            moiveList:[]
        }
    },

    actions:{
        async getMoiveList(){
            const result = await axios.get(`https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=2&ret_num=48&session=b9fd987164f6aa47fad266f57dffaa6a`)
            console.log(result);
            const mapResult = result.data.data.list.map((item:any) =>{
                return {tvId:item.tvId,albumName:item.albumName}
            })

            this.moiveList = mapResult
        }
    },
    getters:{
        
    }
})

export default useMoiveStore