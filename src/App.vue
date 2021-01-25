<template>
  <main class="root">
    <Header />
    <el-row justify="center" type="flex">
      <el-col :sm="24" :md="18" :lg="12" :xl="8" :style="columnWrapperStyle">
        <router-view />
      </el-col>
    </el-row>
  </main>
</template>

<script>
import Header from '@/components/common/Header.vue'

export default {
  components: {
    Header
  },

  data() {
    return {
      columnWrapperStyle: {
        margin: '1rem 0'
      }
    }
  }
}
</script>
