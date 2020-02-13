<template>
  <div class="screen">
      <span class="scr-l">{{screen.name}}:</span>
      <div class="scr-r">
        <span v-for="item in calcLength(screen.list)" :key="item.id" @click="choose(item,screen)" :class="{active:selectId && selectId==item.id}">{{item.name}}</span>
        <DatePicker v-if="dateBlock" :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end"  @on-change="dateChange" placeholder="Select date" style="width: 200px"></DatePicker>
        <!-- 更多选项 s -->
        <span
          @click="toggleMore"
          class="more"
          v-if="screen.list.length && screen.list.length > 10"
        >{{foldMsg}}</span>
        <!-- 更多选项 e -->
      </div>
      {{xxx.a}}
      {{xxx.b}}
  </div>
</template>

<script>
export default {
  props: {
    screen: {
      type: Object,
    },
    aaa: {
      type: Object,
    }
  },
  data () {
    return {
      selectId:'',
      selectData:[],
      limitLength: 10,    // 筛选项默认显示数量，超出显示 更多选项
      foldStatus: true,  // 显示更多选项/收起选项
      foldMsg: "+更多选项",
      value2:"",
      datePicker:"",
      datePickerData1:[],
      datePickerchild:[],
      dateBlock:false,
      xxx: {}
    }
  },
  watch: {
    aaa:{
      handler(v1,v2){
        if(v1){
          this.xxx = v1
        }
        
        console.log(v1,111)
        console.log(v2,222)
        this.xxx = v2
      },
      deep: true
    }
  },
  mounted(){
    $eventHub.$on("delete-filter",this.deleteFilter);
  },
  methods:{
    choose(item,screen){
      this.selectId = item.id
      if(item.name == "自定义"){
        // item.name = this.datePicker
        this.dateBlock=true
        this.datePickerData1 = screen
        this.datePickerchild =JSON.parse(JSON.stringify(item))
      }else{
        let obj = {
          id:screen.id,
          name:screen.name,
          list:[item]
        } 
        $eventHub.$emit("add-filter",obj)
      }
       
    },
    deleteFilter(val){
      if(val == this.selectId){
        this.selectId = null
      }
    },
    // 计算筛选项显示内容
    calcLength(list) {
      if (list.length > this.limitLength && this.foldStatus) {
        return list.slice(0, this.limitLength);
      } else {
        return list;
      }
    },
    // 切换 更多选项/收起选项
    toggleMore() {
      if (this.foldStatus) {
        this.foldStatus = false;
        this.foldMsg = "-收起选项";
      } else {
        this.foldStatus = true;
        this.foldMsg = "+更多选项";
      }
    },
    //获取日期
    dateChange(a,b){
      console.log(a,"格式的日期")
      // this.datePicker = a.join("-")
      this.datePickerchild.name = a.join("-")
      let obj = {
          id:this.datePickerData1.id,
          name:this.datePickerData1.name,
          list:[this.datePickerchild]
        }
      this.choose( this.datePickerchild,this.datePickerData1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen{
  display: flex;
  height: 40px;
  font-size:16px;
}
.scr-l{
    width: 100px;
    color: #333;
    font-weight: bold;
  }
  .scr-r{
    flex: 1;
    text-align: left;

  }
  .scr-r span{
    display: inline-block;
    margin-right: 25px;
    cursor: pointer;
  }
.scr-r span.active{
  color:#ff2c0a;
}
.more{
  color: #9c9c9c;
  font-size: 12px;
}
</style>
