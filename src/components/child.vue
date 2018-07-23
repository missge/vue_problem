<template>
    <div>
        <h4>
            子： {{childCom}}
        </h4>
        <h3 @click='open' class="blue_click">
            点击我 我要给fen红豹传个值
        </h3>
    </div>
</template>
<script>
    export default{
        name:'child',
        //总共三种方式---1
        props:['childCom'],
        // props:{
            //2
            // childCom: String,
            //3
            // childCom: {
            //     type: String,
            //     default: '111' 
            // }
        // },
      
        data(){
            return {
                setmsg:1
            }
        },
        methods:{
            open() {
                this.$emit('showBox',this.setmsg)
                //触发showbox方法，'setmsg'为向父组件传递的数据
            }
        }
    }
</script>