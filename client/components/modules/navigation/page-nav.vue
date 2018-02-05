<template lang='pug'>
  section.page-nav(v-if="!empty")
    h3.page-nav__heading {{title}}
    .page-nav__description(v-if="description")
      p {{description}}
    ul.page-nav__navigation(v-if="navigation")
      li.page-nav__navigation-item(v-for="item in navigation")
        router-link(:to="item.href") {{item.label}}
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'pageNavComponent',
    data: () => ({}),
    computed: mapState('pageNav', ['empty', 'title', 'description', 'navigation']),
    data() {
      return {}
    },
  }
</script>
