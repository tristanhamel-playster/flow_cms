<template lang='pug'>
  .page.membership-blocks
    .page__scrollable
      header.page__header
        h2.page__heading Membership Blocks
        router-link(to="/admin/management/membership-blocks/new").btn.btn--add
          | Add a membership block
      .page__content
        table.tbl
          tr
            th id
            th(colspan="2") Title
          tr(v-for="block in blocks")
            td: router-link(:to="{ path: `/admin/management/membership-blocks/${block.id}` }") {{block.id}}
            td: router-link(:to="{ path: `/admin/management/membership-blocks/${block.id}` }") {{block.title || 'No Title'}}
            td.tbl-text-right
              context-menu
                button(slot="items", @click="deleteBlock(block.id)")
                  | Delete
                  i.material-icons delete
                router-link(
                  :to="{ path: `/admin/management/membership-blocks/${block.id}` }",
                  slot="items"
                )
                  | Edit
                  i.material-icons edit
</template>

<script>
  import managementComponent from './management.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'membershipBlocksComponent',
    extends: managementComponent,
    data: () => ({}),
    methods: {
      deleteBlock (blockId) { this.$store.dispatch('membershipBlocks/delete', { blockId }) }
    },
    computed: {
      ...mapState('membershipBlocks', ['blocks'])
    },
    mounted () {
      this.$store.dispatch('membershipBlocks/pull')
    },
  }
</script>
