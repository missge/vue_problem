<template>
	<div class="hello">
		<div class="illustrate">
			<p>重点说明：</p>
			<ul>
				<li v-for="(item,index) in dataList" :index="index">
					{{index+1}}.{{item.title}}
				</li>
			</ul>
		</div>
		
		<div class="vueRouter illustrate">
			<p >vueRouter---导航式链接</p>
			<ul>
				<li @click='routerFn("push")' class="blue_click">
					调用地图router.push
				</li> 
				<li @click='routerFn("replace")'class="blue_click">
					router.replace
				</li>
				<li  @click='routerFn("go")'class="blue_click">
					router.go
				</li>
			</ul>
			<p class="blue_click">可点击：vueRouter---嵌套命名视图</p>
			<p class="blue_click">可点击：vueRouter---嵌套命名试图</p>
		</div> 
		<parentVuex> </parentVuex>
	</div>
  
</template>
<script>
import   './../assets/style.css'
import parentVuex from './parent_vuex.vue'
export default {
  name: 'home',
  components:{parentVuex},
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
  methods:{
 	routerFn(flag){
            if(flag=='push'){
				const userId=111
				/*
					var stateObj = { foo: "bar" };
					history.pushState(stateObj, "page 2", "bar.html");
					api: router.replace(location, onComplete?, onAbort?)
                // this.$router.push({name:'echarMap',params:{userId}})
                // this.$router.push({ name: 'echarMap', params: { userId: 123 }})*/
                this.$router.push({ path: 'echarMap', query: { userId: '123' }})
			}else if(flag=='replace'){
                this.$router.replace({path: 'child'})//---replace（替换）可以直接改变push得值，截取去child文件
            }else{
				this.$router.go(-1)// 类似window.history.go(n)。 整数前进后负数倒退

			}

        }
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
