<template>
  <div class="main">
    <div class="header">
      <div class="headerBox">
        <button>综合地图</button>
        <button class="bt_left">综合地图</button>
      </div>
      <p class="title">武清安全生产开发区电子地图</p>
      <div>
        <button class="bt_right">综合地图</button>
        <button>综合地图</button>     
          <!-- <img src="../assets/img/scale.png" alt="" class="header_gb">
          <img src="../assets/img/clearBtn.png" alt="" class="header_gb"> -->
      </div>
    </div>
    <div class="navs">
      <el-row>
        <el-col :span="12">
          <el-dropdown trigger="click" :hide-on-click="false">
            <span class="el-dropdown-link">
              下拉菜单<img src="../assets/img/xiala.png" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-checkbox v-model="checked" text-color='red' fill='red'>备选项</el-checkbox>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
      <el-row class="navs_item">
        <el-col :span="12">
          <el-dropdown trigger="click" :hide-on-click="false">
            <span class="el-dropdown-link">
              下拉菜单<img src="../assets/img/xiala.png" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-checkbox v-model="checked" text-color='red' fill='red'>备选项</el-checkbox>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
      <el-row class="navs_item">
        <el-col :span="12">
          <el-dropdown trigger="click" :hide-on-click="false">
            <span class="el-dropdown-link">
              下拉菜单<img src="../assets/img/xiala.png" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-checkbox v-model="checked" text-color='red' fill='red'>备选项</el-checkbox>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>


  <div class="box">
    <div class="chart_box m-left">
      <div class="img_box">
        <div class="title_box"><p class="char_title">隐患等级</p></div>
        <img src="../assets/img/rightTop.png" class="imgxt">
        <img src="../assets/img/clearBtn.png" alt="" class="clearBtn">
      </div>
      <div class="chart_title">
        <div>
          <i class="title_yh"></i>
          <span>重大隐患(10个)</span>
        </div>
        <div>
          <i class="title_yh"></i>
          <span>一般隐患(20个)</span>
        </div>
      </div>
      <!-- 饼状图区域 -->
      <div id="chartBox">
        <div id="chart"></div>
        <div id="chart2"></div>
      </div>
    </div>

    <div class="chart_box m-right">
      <div class="img_box">
        <div class="title_box"><p class="char_title">隐患类别</p></div>
        <img src="../assets/img/rightTop.png" class="imgxt">
        <img src="../assets/img/clearBtn.png" alt="" class="clearBtn">
      </div>

      <div class="gaugeBox">
        <div id="gauge"></div>
      </div>
    </div>
  </div>

  <!-- 底部两个图表区域 -->
  <div class="box m_top">
    <div class="chart_box m-left">
      <div class="img_box">
        <div class="title_box"><p class="char_title">隐患状态</p></div>
        <img src="../assets/img/rightTop.png" class="imgxt">
        <img src="../assets/img/clearBtn.png" alt="" class="clearBtn">
      </div>
      <div class="clearBox"></div>
  <!-- 柱状图 -->
      <div class="histogram">
        <div id="main"></div>
        <div class="title_bottom">
          <div>
            <i class="histogram_span"></i>
            <span>待整改</span>
          </div>
          <div>
            <i class="histogram_span2"></i>
            <span>待整改</span>
          </div>
          <div>
            <i class="histogram_span3"></i>
            <span>待整改</span>
          </div>
        </div>
      </div>
    </div>

    <div class="chart_box m-right">
      <div class="img_box">
        <div class="title_box"><p class="char_title">隐患管控</p></div>
        <img src="../assets/img/rightTop.png" class="imgxt">
        <img src="../assets/img/clearBtn.png" alt="" class="clearBtn">
      </div>
      <div class="clearBox"></div>
    </div>
  </div>


  <!-- 根div底部 -->
  </div>
</template>

<script>
import * as echarts from 'echarts';
import ElementUI from 'element-ui';

export default {
    name:'Echarts',
    data(){
      return {
        checked:true
      }
    },
    mounted(){
      // 调用柱状图渲染
      this.histogram()
      this.chart()
      this.chart2()
      this.gauge()
    },
    methods:{

      // 饼状图
      chart(){
        let myChart = echarts.init(document.getElementById('chart'));
        // 基于准备好的dom，初始化echarts实例
        
        // 绘制图表配置
        myChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              name: '重大隐患',
              type: 'pie',
              radius: ['30%', '60%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                    show: true,
                    fontSize: '20',
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                {
                  name:'10/个',
                  value:10,
                  itemStyle:{
                    color:'#FF2323'
                  }
                },
                {
                  name:'40/个',
                  value:40,
                  itemStyle:{
                    color:'#052C77'
                  }
                },
              ]
            }
          ]
        })
      },
      // 一般隐患柱状图
      chart2(){
        let myChart = echarts.init(document.getElementById('chart2'));
        // 基于准备好的dom，初始化echarts实例
        
        // 绘制图表配置
        myChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              name: '一般隐患',
              type: 'pie',
              radius: ['30%', '60%'],
              avoidLabelOverlap: false,
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                    show: true,
                    fontSize: '20',
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                {
                  name:'20/个',
                  value:20,
                  itemStyle:{
                    color:'#FFF100'
                  }
                },
                {
                  name:'',
                  value:40,
                  itemStyle:{
                    color:'#052C77'
                  }
                },
              ]
            }
          ]
        })
      },
      // 黄色仪表盘
      gauge(){
        let myChart = echarts.init(document.getElementById('gauge'));
        // 基于准备好的dom，初始化echarts实例
        
        // 绘制图表配置
        myChart.setOption({
          series: [{
              type: 'gauge',
              startAngle: 180,
              endAngle: 0,
              min: 0,
              max: 100,
              splitNumber: 12,
              itemStyle: {
                  color: '#EFEF14',
              },
              progress: {
                  show: true,
                  roundCap: true,
                  width: 18
              },
              pointer: {
                  show:false
              },
              axisLine: {
                  roundCap: true,
                  lineStyle: {
                      width: 18
                  }
              },
              axisTick: {
                  lineStyle: {
                      width: 4,
                      color: '#999'
                  }
              },
              splitLine: {
                  length: 12,
                  lineStyle: {
                      width: 0,
                      color: '#999'
                  }
              },
              axisLabel: {
                  show:false,
              },
              title: {
                  show: false
              },
              detail: {
                  width: '60%',
                  lineHeight: 20,
                  height: 40,
                  offsetCenter: [0, '-5%'],
                  valueAnimation: true,
                  formatter: function (value) {
                      return '{value|' + value.toFixed(0) + '}{unit|%}';
                  },
                  rich: {
                      value: {
                          fontSize: 50,
                          fontWeight: 'bolder',
                          color: '#EFEF14'
                      },
                      unit: {
                          fontSize: 50,
                          color: '#EFEF14',
                          padding: [0, 0, -5, 10]
                      }
                  }
              },
              data: [{
                  value: 50
              }]
          }]
        })
      },
      // 柱状图
      histogram(){
        let myChart = echarts.init(document.getElementById('main'));
        // 基于准备好的dom，初始化echarts实例
        
        // 绘制图表配置
        myChart.setOption({
          // 图表标题
          title: {
              text: '隐患状态'
          },
          tooltip: {},
          xAxis: {
            min:0,
            // X轴最大值
            max:20,
            // 每次增加几个刻度
            interval:10,
            data: ['', '', ''],
            axisTick:{
              show:false
            },
            axisLine:{
                show:true,
                lineStyle:{
                  color:'#0D9EDA'
                }
            },
            splitLine:{
              show:true
            },
            splitLine:{
              show:true,
              lineStyle:{
                color:'#0D9EDA',
                type:'dashed'
              }
            },
            axisLabel: {
              interval: 0  //设置间隔为0
            }
          },
          yAxis: [
            {
              // Y轴最小值
              min:0,
              // Y轴最大值
              max:30,
              splitNumber:5,
              // 每次增加几个刻度
              interval:5,
              // 设置Y轴线显示
              axisLine:{
                show:true,
                lineStyle:{
                  color:'#0D9EDA'
                }
              },
              // 设置Y轴刻度线
              axisTick:{
                show:true
              },
              // 分割线颜色
              splitLine:{
                show:true,
                lineStyle:{
                  color:'#0D9EDA',
                  type:'dashed'
                }
              },
            },
          ],
          grid: {  
            left: '8%',  
            right: '0',  
            bottom: '1%',  
            containLabel: true  
          },
          legend: {
          	  // 此处控制上方图例，因为改图的图例定的比较死，所以我没用动态数据，直接在此写入
              data: ["待整改","已整改","整改中"],
          },
          series: [{
            //柱子宽度
              barWidth: '30px',
              // 柱子的形状，柱状形还是其它形态
              type: 'bar',
              barCategoryGap:'50%',
              data: [ 
                {},
              {
                name:'待整改',
                value:25,
                itemStyle:{
                  color:'#9130FF'
                }
              }, 
              {},
              {
                name:'已整改',
                value:13,
                itemStyle:{
                  color:'#1AFF00'
                }
              }, 
              {},
              {
                name:'整改中',
                value:20,
                itemStyle:{
                  color:'#FF9C07'
                }
              }]

          }],

        });
      }
    }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.main{background: #0E1B30;}
#main{width: 60vh;height: 30vh;}
#chart{
  width: 30vh;
  height: 50vh;
}
#chart2{
  width: 30vh;
  height: 50vh;
}
#gauge{
  width: 50vh;
  height: 80vh;
  margin:-15vh 0;
}
#chartBox{
  display: flex;
  justify-content: space-around;
  width: 90vh;
  height: 30vh;
  align-items: flex-start;
  margin: -100px -40px;
}
.header{
  width: 100%;
  height:83px;
  background-image: url('../assets/img/top.png');
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content:space-around;
}

.bt_left{margin-left: 80px;}
.bt_right{margin-right: 80px;}
.header_gb{
  height: 20px;
  width: 19px;
}
.title{
  width: 464px;
  height: 34px;
  background: linear-gradient(115deg,#0072FF 0%, #00EAFF 49%, #01AAFF 100%);
  background-clip:text;
  font-size: 28px;
  text-align: center;
  color: transparent;
}
.header button{
  margin-top: 25px;
  width: 106px;
  height: 50px;
  background: rgba(0, 1, 39, 0.82);
  border: 1px solid rgba(16, 247, 255, 0.6);
  box-shadow: 2px 2px 6px rgba(16, 247, 255, 0.16);
  opacity: 1;
  border-radius: 5px;
  color: #FFFFFF;
}

.histogram{
  color:white;
  font-family: SourceHanSansCN-Regular;
  font-size: 12px;
  width: 600px;
}
.histogram i{
  display: inline-block;
  width: 14px;
  height: 14px;
}
.histogram_span{background: #9130FF;}
.histogram_span2{background: #1AFF00;}
.histogram_span3{background: #FF9C07;}
.title_bottom{
  display: flex;
  justify-content:center;
}
.title_bottom div{
  margin-right: 20px;
}
.el-dropdown-link{
  width: 124px;
  height: 43px;
  display: inline-block;
  background: rgba(0, 1, 39, 0.82);
  border: 1px solid #10F7FF;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-family: SourceHanSansCN-Regular;
  line-height: 43px;
  color: #FFFFFF;
  text-align: center;
}
.el-dropdown-link img{
  width: 14px;
  height: 8px;
  margin: 4px;
}
.el-dropdown-menu{
  background: #000127;
}
.navs{
  display: flex;
  justify-content:center;
  height: 70px;
  align-items:center;
  width: 439px;
  margin-left: 40%;
  background: #02072C;
  border-radius: 5px;
}
.navs_item{
  margin-left: 20px;
}

.box{
  display: flex;
  justify-content:space-between;
}
.chart_box{
  border: 1px solid #1D84E8;
  width: 510px;
  height: 332px;
}
.m-right{margin-right: 20px;}
.m-left{margin-left: 20px;}
.m_top{margin-top: 50px;}

.clearBtn{
  height: 20px;
  width: 19px;
  position: absolute;
  right: 6%;
  bottom: 17%;
}
.img_box{
  position: relative;
  height: 80px;
  background: url('../assets/img/bigJx.png')no-repeat;
}
.title_box{
  position: absolute;
  border-left: 4px solid white;
  left: 8%;
  top:25%;
  height: 28px;
  z-index: 9;
}
.char_title{
  width: 90px;
  height: 35px;
  padding-left: 5px;
  background: linear-gradient(103deg, #0072FF 0%, #00EAFF 49%, #01AAFF 100%);
  background-clip:text;
  color: transparent;
  font-size: 21px;
}
.imgxt{
  position: absolute;
  right: 0;
  top:0;
  width: 73px;
  height: 29px;
}
.imgjx{
  position: absolute;
  width: 434px;
  height: 72px;
  z-index: 8;
}
.chart_title{
  display: flex;
  justify-content: space-around;
  font-family: SourceHanSansCN-Regular;
  font-size: 1rem;
  color:#FFFFFF;
  margin-top: 5%;
}
.title_yh{
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background: #FFF100;
}
.title_yh{background: #FF2323;}
</style>