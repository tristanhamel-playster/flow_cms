<template lang='pug'>
  section.main-nav
    nav.main-nav__navigation
      router-link.main-nav__button(
        to="/admin/management"
        :class="{ 'main-nav__button--active': firstLevelRoute === 'management'}"
      )
        i.material-icons dvr
</template>

<script>
  export default {
    name: 'mainNavComponent',
    data() {
      return {
        firstLevelRoute: ''
      }
    },
    watch: {
      '$route': 'getFirstLevelRoute'
    },
    methods: {
      getFirstLevelRoute () {
        this.firstLevelRoute = this.$router.currentRoute.path.split('/')[2] || ''
      }
    },
    mounted () {
      this.getFirstLevelRoute()
    }
  }
</script>
