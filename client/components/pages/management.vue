<template lang='pug'>

</template>

<script>
  export default {
    name: 'managementComponent',
    data: () => ({
    }),
    mounted () {
      this.$store.commit('pageNav/reset')
      this.$store.commit('pageNav/updateTitle', 'Management')
      this.$store.commit('pageNav/updateNavigation', [
        { label: 'Membership Blocks', href: '/admin/management/membership-blocks' },
        { label: 'Membership Plans', href: '/admin/management/membership-plans' }
      ])
    },
  }
</script>
