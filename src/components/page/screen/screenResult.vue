<template>
  <div class="result">
     <span class="t">筛选条件：</span>
     <div class="c">
       <span v-for="item in resultData" :key = "item.id">
          {{item.name}}：<span v-for="tag in item.list" :key="tag.id">{{tag.name}}<Icon type="ios-close" @click="delOption(item.id,tag.id)"/></span>
       </span>
     </div>
  </div>
</template>

<script>
export default {
  props: {
   
  },
  data () {
    return {
      resultData:[]
    }
  },
  created() {
    $eventHub.$on("add-filter",this.addFilter);
  },
  mounted(){
    
  },
  methods:{
    addFilter(val){   
      let index = this.resultData.findIndex(opt => {
        return opt.id == val.id
      })
      if(index !=-1){   //存在，移除后再添加
        this.resultData.splice(index, 1,val)
        // this.resultData.push(val)
      }else{ // 不存在，直接添加       
        this.resultData.push(val)
      }     
      // console.log(this.resultData,"接收screen组件传过来的参数")
      this.$emit("select-data",this.resultData)
    },
    //删除tag
    delOption(itemId,listId){
      this.resultData.splice(this.resultData.findIndex(item => item.id == itemId),1);
      $eventHub.$emit("delete-filter",listId) 
    }
  },
  //销毁
  beforeDestroy(){
    $eventHub.$off("add-filter",this.addFilter);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result{
  font-size: 16px;
  display: flex;
  margin-bottom: 20px;
}
.t{
  width: 100px;
  color: #333;
  font-weight: bold;
}
.c{
  flex: 1;
  text-align: left;
}
.c span{
  background: #5ecbf5;
  display: inline-block;
  padding:0 5px;
  color:#fff;
  margin-right: 10px;
}
.c span .ivu-icon{
  font-size: 28px;
  cursor: pointer;
}
</style>
