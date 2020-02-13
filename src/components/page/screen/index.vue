<template>
  <div class="hello">
    <el-button @click="sendObj">asdasd</el-button>
    <div :class="[classA,classB,classC]">{{this.$store.state.aaa}}</div>
    <div>{{this.$store.getters.getData}}</div>
    <!--筛选结果-->
    <result @select-data="selectLsitFun"></result>
    <!--筛选数据-->
   <screen :screen="item" v-for="item in calcLength(screenList)" :key="item.id" :aaa="aaa"></screen>
   <!--展开收起-->
    <div class="fold" v-if="screenList.length>2">
      <div @click="onPickUp" style="display: inline-block">
        <span>{{pickUpMsg}}</span>
        <Icon color="#2290E8;" :type="type" />
      </div>
    </div>
  </div>
</template>

<script>
import result from './screenResult.vue'
import screen from './screen.vue'
export default {
  components:{
    screen,
    result
  },
  data () {
    return {
      pickUpMsg: '展开',
      pickUp: true,     // 显示收起/展开
      limitLength:2,
      type:'ios-arrow-down',
      classA: '',
      classB:'',
      classC:'',
      a:1,
      b:2,
      c:3,
      screenList:[
        {
          id:1,
          name:"跟进时间",
          list:[
            {
              id:101,
              name:"0-7天"
            },
            {
              id:102,
              name:"8-15天"
              
            },
            {
              id:103,
              name:"自定义"
              
            }
          ]
        },{
          id:2,
          name:"跟进人",
          list:[
            {
              id:201,
              name:"张三"
            },{
              id:202,
              name:"李四"
              
            },{
              id:204,
              name:"赵武"
              
            },
            {
              id:205,
              name:"赵武"
              
            },
            {
              id:206,
              name:"赵武"
              
            },
            {
              id:207,
              name:"赵武"
              
            },
            {
              id:208,
              name:"赵武"
              
            },
            {
              id:209,
              name:"赵武"
              
            },
            {
              id:210,
              name:"赵武"
              
            },
            {
              id:211,
              name:"赵武"
              
            },
            {
              id:212,
              name:"赵武"
              
            },
            {
              id:213,
              name:"赵武"
              
            },
            {
              id:214,
              name:"123"
              
            }
          ]
        },
       {
          id:3,
          name:"跟进方式",
          list:[
            {
              id:301,
              name:"微信"
            },
            {
              id:302,
              name:"QQ"
              
            },
            {
              id:303,
              name:"拜访"
              
            }
          ]
        }
      ],
      aaa:{
        a: 1,
        b: 2
      }
    }
  },
  mounted () {
    this.classA = 'you'
    this.classB = 'me'
    this.classC = 'him'
  },
  methods:{
    sendObj(){
      this.aaa.a += 1;
      this.aaa.b += 1;
    },
    calcLength(list){
      if (list.length > this.limitLength && this.pickUp) {
        return list.slice(0, this.limitLength);
      } else {
        return list;
      }
    },
    onPickUp(){
      if(this.pickUp) {
        this.pickUp = false
        this.pickUpMsg = '收起'
        this.type = 'ios-arrow-up'
      }else {
        this.pickUp = true
        this.pickUpMsg = '展开'
        this.type = 'ios-arrow-down'
      }
    },
    //父组件接收选择的数据
    selectLsitFun(val){
      console.log(val,"父组件接收选择的数据")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fold span{
  font-size: 18px;
}
</style>
