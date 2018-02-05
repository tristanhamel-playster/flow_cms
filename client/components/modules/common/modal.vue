<template lang='pug'>
  .modal
    .modal__overlay(@click="$emit('close')")
    .modal__container
      header.modal__header
        slot(name="header")
      .modal__body
        slot(name="body")
      footer.modal__footer
        slot(name="footer")
</template>

<script>
  export default {
    name: 'modalComponent',
    methods: {}
  }
</script>
