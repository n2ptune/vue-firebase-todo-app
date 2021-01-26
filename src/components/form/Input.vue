<template>
  <div class="input-wrapper">
    <el-input v-model="text" type="textarea" placeholder="오늘의 할일" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'a'.repeat(500)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;

  /deep/ textarea {
    height: 300px;
    resize: none;
  }
}
</style>
