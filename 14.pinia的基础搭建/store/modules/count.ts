// 在pinia里面引入创建Store的函数
import {defineStore} from 'pinia'


// 为state里面的数据设置类型
interface countStoreType{
    count:number
}
// 将创建的store的返回值接收,是一个自定义hooks,函数
const useCountStore = defineStore('count',{
    // state最好使用箭头函数,方便设置类型,且不能使用对象,只能使用函数,跟data比较相似
    state:():countStoreType=>{
        return{
            count:1
        }
    },
    actions:{

    },
    getters:{

    }
})


// 暴露自定义hooks
export default useCountStore
