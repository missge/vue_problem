import axios from 'axios'
import qs from 'qs'
export const increment = state => {
    state.count = state.count+5
}
export const decrement = state => {
    state.count = state.count-3
    console.log(state.count)
}
export const Jsoncrement = (state,item) => {
    // state.dataResult = 
    axios.get('/api/index/getYpzs',qs.stringify(item),{emulateJSON:true}).then(
        function(res){
            // console.log( state.dataResult)
            state.dataResult = res.data
            
        }
    )

}