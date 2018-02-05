<template lang='pug'>
  .loading-bar(:class="{ 'loading-bar--active': shown }")
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'loadingBarComponent',
    computed: {
      shown () { return this.$store.state.loading.shown }
    }
  }
</script>
