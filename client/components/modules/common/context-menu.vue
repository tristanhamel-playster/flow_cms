<template lang='pug'>
  .context-menu(ref="contextMenu")
    button.btn.btn--inline.material-icons(@click.stop="toggle") more_horiz
    .context-menu__container(v-if="isOpen")
      slot(name="items")
</template>

<script>
  export default {
    name: 'contextMenu',
    data: () => ({
      isOpen: false
    }),
    methods: {
      toggle () { if (this.isOpen) { this.close() } else { this.open() } },
      open () {
        document.addEventListener('click', this.clickAway, true)
        this.isOpen = true
      },
      close () {
        document.removeEventListener('click', this.clickAway)
        this.isOpen = false
      },
      clickAway(ev) {
        if ((
          this.$refs.contextMenu &&
          !this.$refs.contextMenu.contains(ev.target)
          ) || (
          this.$refs.contextMenu &&
          this.$refs.contextMenu.contains(ev.target) &&
          ['BUTTON', 'A', 'INPUT'].indexOf(ev.target.nodeName) !== -1 &&
          !ev.target.disabled &&
          !ev.target.draggable
        )) {
          this.close()
        }
      }
    }
  }
</script>
