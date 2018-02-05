<template lang='pug'>
  main.layout
    main-header-component
    .layout__wrap
      .layout__main
        router-view
      aside.layout__aside
        main-nav-component
        page-nav-component
    alert-component
</template>

<script>
  export default { name: 'layoutComponent' }
</script>
