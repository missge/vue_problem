import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
// 调用vuex得顺序  https://vuex.vuejs.org/zh/ 查看vuex得图。
//1.先写一个事件      this.$store.dispatch('Jsoncrement',{})  用dispatch调用事件
//2.调用action , commit 提交给 mutations  Jsoncrement = ({commit,item }) => {commit ('Jsoncrement',item)}
//3.mutations来写具体逻辑，如掉通接口，把值提交给 state    state.dataResult = res.data
//4、页面获取state里得值   （记得在state里添加变量值，如：dataResult） 在页面上使用getter获取数据，getter得值与state里得值保持一致


Vue.use(Vuex)


const state = {
    count:0,
    dataResult:''
}


const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
export default store
