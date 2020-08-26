<template>
  <button
    @click="handleClick"
    class="el-button"
    :disabled="loading"
    :type="nativeType"
    :autofocus="autofocus"
    :class="[
      type?'el-button'+type:'',
      buttonSize?'el-button--'+buttonSize:'',
      {
        'is-round':round,
        'is-circle':circle,
        'is-loading':loadinig,
        'is-disabled':buttonDisabled,
        'is-plain':plain
      },
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon"></i>
    <!-- {{type}} - {{tit}} -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name:'ElButton',
  props: {
    type: {
      type: String,
      default: "default"
    },
    nativeType: {
      type: String,
      default: "button"
    },
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean
  },
  data() {
    return {
      tit: "hello"
    };
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    },
    buttonSize() {
      return this.size;
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("handleClick", evt);
    }
  },
  created() {
    console.log(this.tit, this.type);
  }
};
</script>

<style lang="stylus"></style>