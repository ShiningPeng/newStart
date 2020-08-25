<template>
  <button
  @click="handleClick"
    class="el-button"
    :class="[
      type?'el-button'+type:'',
      {
        'is-round':round,
        'is-circle':circle
      }
    ]"
  >
    <!-- {{type}} - {{tit}} -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  props:{
    type:{
      type:String,
      default:'default' 
    },
    round:Boolean,
    circle:Boolean
  },
  data(){
    return {
      tit:'hello'
    }
  },
  methods: {
    handleClick(evt){
      this.$emit('handleClick',evt)
    }
  },
  created(){
    console.log(this.tit,this.type)
  }

}
</script>

<style lang="stylus">
  
</style>