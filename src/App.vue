<template>
  <main class="root">
    <Header />
    <Container>
      <router-view />
    </Container>
  </main>
</template>

<script>
import Header from '@/components/common/Header.vue'
import Container from '@/components/common/Container.vue'

export default {
  components: {
    Header,
    Container
  }
}
</script>
