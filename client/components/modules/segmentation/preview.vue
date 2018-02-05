<template lang='pug'>
  .preview(:class="{ 'preview--open': isOpen }")
    .preview__head(@click="togglePreview")
      h3 Preview
      i.material-icons {{(isOpen) ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
    .preview__content


</template>

<script>
  export default {
    name: 'previewComponent',
    data: () => ({
      'isOpen': false
    }),
    methods: {
      togglePreview () { this.$emit(!this.isOpen ? 'open' : 'close'); this.isOpen = !this.isOpen },
    }
  }
</script>
