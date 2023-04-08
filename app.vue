<template>
  <div>
    <NuxtPage  />
  </div>
</template>
<script>
export default {
  mounted() {
    document.documentElement.classList.add('dark')

  }
}
</script>
