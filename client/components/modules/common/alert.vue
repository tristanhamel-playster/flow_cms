<template lang="pug">
  transition(name='alert', enter-active-class="animated slideInUp", leave-active-class="animated fadeOutDown")
    .alert(v-if='shown', v-bind:class='style')
      .alert-icon: i.animated.flash.material-icons {{ icon }}
      .alert-msg(v-html="msg")
</template>

<script>
  const makeUl = function (arr) {
    let l = ''
    for (let i = 0; i < arr.length; i++) { l += `<li>${arr[i]}</li>` }
    return `<ul>${l}</ul>`
  }

  export default {
    name: 'alert',
    data () {
      return {}
    },
    computed: {
      shown() { return this.$store.state.alert.shown },
      style() { return 'is-' + this.$store.state.alert.style },
      icon() { return this.$store.state.alert.icon },
      msg() {
        const msg = this.$store.state.alert.msg
        if (this._.isArray(msg)) { return makeUl(msg) }
        return msg
      },
    }
  }
</script>
