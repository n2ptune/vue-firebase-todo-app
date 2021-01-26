<template>
  <el-row justify="center" type="flex">
    <el-col :sm="24" :md="18" :lg="12" :xl="8" :style="columnWrapperStyle">
      <slot />
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      columnWrapperStyle: {
        margin: '1rem'
      }
    }
  }
}
</script>
