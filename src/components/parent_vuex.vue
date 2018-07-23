<template>
    <div>
        <div class="parentBox">
            <h2>哈喽大家好，我是hun红豹</h2>
            <h3>我是父组件组件</h3>
            <h2>父:这是小粉给的：{{msg}}</h2>
            <childCom :child-com='child'  @showBox='toShow' ></childCom>
        </div>
        <div class="Vuex">
            <h2>vuex</h2>
            Count is {{ count }}
            <button @click="increment "  class="blue_click">+5</button>
            <button @click="decrement"  class="blue_click">-3</button>
            <button @click="JsoncrementFn " class="blue_click">点击调用接口</button>
            <ul>
                <li v-for="items in dataResult.UpdateList">
                    {{items.description}}
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
import   './../assets/style.css'
import { mapActions,mapGetters,mapState  } from 'vuex'
import childCom from './child.vue'
export default {
    name:"parent_vuex",
    components:{childCom},
    computed:{
    ...mapGetters([
	  'count',
	  'dataResult'
	]),
	// 跟getter同样得方法
    // ...mapState({
    //   count: state => state.count
    // })
  },
    data () {
    return {	
        child:'我给子组件一个gou子',
        msg:2,
        dataList:[
            {"title":"使用小米rem，字体变换：请查看main.js"},
            {"title":"解决点击事件延迟300ms：请查看main.js"},
            {"title":"解决ie白页面：请查看main.js"},
            {"title":"vuex调用有参数和无参数案例：请查看 src/vuex/index.vue"},
            {"title":"跨域问题：请查看 config/index.vue"},
            {"title":"父子传值：请查看 components/parent.vue"},
            {"title":"echartMap地图：请查看 components/echarMap.vue"}

        ]
        }
    },
    watch:{
        
    },
    methods:{
        ...mapActions([
        'increment',
        'decrement',
        'Jsoncrement'
        ]),
        toShow(val){
        this.msg+=val
        },

        JsoncrementFn(){
        this.$store.dispatch('Jsoncrement',{})
        },
      
    },
    mounted(){
        // 初始化调用事件
        // this.$store.dispatch('increment')
    }
}
</script>