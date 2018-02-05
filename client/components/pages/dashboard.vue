<template lang='pug'>
</template>

<script>
  export default {
    name: 'dashboardComponent',
    data: () => ({
    }),
    methods: {},
    mounted () {
      this.$store.commit('pageNav/reset')
      this.$store.commit('pageNav/updateTitle', 'Dashboard')
      this.$store.commit('pageNav/updateDescription', 'This is a dashboard')
    },
  }
</script>
