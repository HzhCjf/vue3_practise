import {defineStore} from 'pinia'

interface countStoreType {
    count:number
}
const useCountStore = defineStore('count',{
    state:():countStoreType=>{
        return{
            count:1
        }
    },
    actions:{
        addCount(){
            this.count++
        },
        addCountN(n:number){
            this.count += n
        },
        addCountAwait(n:number){
            setTimeout(() => {
                this.count += n
            }, 2000);
        }
    },
    getters:{
        doubalCount(state:countStoreType){
            return state.count * 2
        }
    }
})

export default useCountStore