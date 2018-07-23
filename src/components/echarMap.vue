<template>
    <div>
        <div>
            <h2>用的到得资源</h2>
            <ul>
                <li>
                    生成json：http://geojson.io/#map=4/30.56/107.45
                </li>
                <li>
                        https://www.w3cschool.cn/echarts_tutorial/echarts_tutorial-7o3u28yh.html
                </li>
            </ul>
        </div>
        <div id="map" ></div>
        <div id="111" v-if="show" >
        sadf
        </div>
    </div>
</template>
<script>
import   './../assets/style.css'
import china from '../../static/china.js'
export default{
    name:'page2',
    data(){
        return {
            show:1
        }
    },
    methods: {
        initEchart(){
            var that =this
            var myChartMap = this.$echarts.init(document.getElementById('map'));
            myChartMap.setOption({
            // backgroundColor: '#e6e2e4',
            // aria: {
            //     show: true//被更多残障人士访问
            // },
            title : {
                text: '订单量',
                subtext: '纯属虚构',
                x:'center',
                show: false,//控制标题显示
            },
            geo: {
    	        map: '福建百旺',
    	        label: {
    	            emphasis: {
    	                show: true
    	            }
    	        } ,
    	        roam:true,
    	        itemStyle: {
    	            normal: {
    	                areaColor: '#45c8ff',
                        borderColor: '#fff',
    	            },
    	            emphasis: {
    	                areaColor: '#00aeee'
    	            }
    	        } 
    	    },
            tooltip : {
                trigger: 'item',
                show:false,//---值为false，则取消弹框
            },
            legend: {//图列
                // selectedMode:false,---值为false，则取消弹框
                orient: 'vertical',
                x:'left',
                data:['订单量'],
                show: false,
            },
            visualMap: {//可视地图
                show: false,//控制数据显示
                type: 'piecewise',
                pieces: [
                // {min: 1500},
                // {min: 900, max: 1500},
                {min: 0, max: 2000,color: '#D1CDC8'},
                // {min: 200, max: 300},
                // {min: 10, max: 200, label: '10 到 200（自定义label）'},
                // {value: 123, label: '123（自定义特殊颜色）', color: 'grey'},
                // {min: 5, max: 5, label: '5（自定义特殊颜色）', color: 'black'},
                // {max: 5}
                ],
                color: ['#D1CDC8']
            },
            // 工具盒，可以保存图片
            toolbox: {
                show: false,
                orient : 'vertical',
                x: 'right',
                y: 'center',
                feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
                }
            },
            roamController: {
                x: 'right',
                mapTypeControl: {
                    'china': true
                }
            },
            series : [{
                // clickable:false,取消图表上的点击事件
                name: '公司名称',
                type: 'map',
                mapType: 'china',
                coordinateSystem: 'geo',
                selectedMode : 'single',
                roam:true,
                itemStyle:{
                    normal:{
                        label:{
                            position: 'right',
                            show:true,
                            textStyle: {
                                color: "#484846",
                             
                            }
                        },
                        areaColor: '#E0DDD9',//地图区域的颜色
                        // borderColor: '#000'//图形的描边颜色
                    },
                    emphasis:{
                        label:{
                            show:false
                        }
                    }
                },
                data:[
                    {name: '北京百旺',value: 5},
                    {name: '天津百望',value: Math.round(Math.random()*2000)},
                    {name: '杭州百旺',value: Math.round(Math.random()*2000)},
                    {name: '云南百望',value: 123},
                    {name: '山西百旺',value: Math.round(Math.random()*2000)},
                    {name: '内蒙古百旺',value:''},
                    {name: '吉林百旺',value: Math.round(Math.random()*2000)},
                    {name: '北京百旺西藏分公司',value: Math.round(Math.random()*2000)},
                    {name: '宁夏百旺',value: Math.round(Math.random()*2000)},
                    {name: '江西百旺',value: Math.round(Math.random()*2000)},
                    {name: '福建百旺',value: Math.round(Math.random()*2000)},
                    {name: '厦门百旺',value: Math.round(Math.random()*2000)},
                    {name: '海口百旺',value: Math.round(Math.random()*2000)},
                    {name: '内蒙古百旺',value: Math.round(Math.random()*2000)},
                    {name: '宁波百旺',value: Math.round(Math.random()*2000)},
                ]
            }]
            });
            myChartMap.on('mouseover', function (params) {
                // window.open('https://www.bai du.com/s?wd=' + encodeURIComponent(params.name));
                that.show=0
                console.log(params.name)
            });
        },
        // mapFn(params) {
        //     // 控制台打印数据的名称
        //     console.log(params.name);
        // }
    },
    mounted(){
      this.initEchart()
    }
}
</script>
<style>
    #map{
        width: 100%;
        height: 500px;
    }
</style>