<template lang='pug'>
  .tab-builder
    .tab-builder__tabs
      .tab-builder__tab(v-for="tRef in getSegmentById(segmentId).tabs")
        header.tab-builder__tab-header
          div.ipt-wrap
            input.ipt.ipt--invisible(
              :id="'tab-title-' + tRef.tabId"
              :name="'tab-title-' + tRef.tabId"
              data-vv-as="Tab title"
              v-validate="'required'"
              :value="getTabById(tRef.tabId).title"
              type="text"
              placeholder="Give a name to your tab"
              @change="updateTabTitle({ tabId: tRef.tabId, title: $event.target.value })"
            )
            label.material-icons(:for="'tab-title-' + tRef.tabId") mode_edit
          button.btn.btn--rm(
            @click="removeTab({ segmentId, tabId: tRef.tabId })"
          ) Remove tab
        draggable.tab-builder__tab-body(
          v-model="getTabById(tRef.tabId).blocks",
          :move="checkMove",
          @start="drag=true",
          @end="drag=false"
        )
          .tab-builder__block(v-for="bRef in getTabById(tRef.tabId).blocks")
            header.tab-builder__block-header(v-if="bRef")
              h3.tab-builder__block-heading {{ getBlockById(bRef.blockId).title }}
              button.btn.btn--close.btn--light(
                @click="removeBlock({ tabId: tRef.tabId, blockId: bRef.blockId })"
              )
          button.btn.btn--zone.tab-builder__add-block(
            @click="useTab(getTabById(tRef.tabId).id); openBlockModal()",
            slot="footer"
          ) Add a new block
      button.btn.btn--zone(
        @click="createTab({ segmentId })"
      ) Add a new tab

    modal(v-if="isBlockModalOpen", @close="closeBlockModal")
      h3(slot="header") Insert a block
      div(slot="body")
        multiselect(
          v-model="blockSearch.selected",
          :options="blockSearch.options",
          :multiple="true",
          :close-on-select="false",
          :clear-on-select="false",
          :preserve-search="true",
          placeholder="Pick block"
          label="name"
          trackBy="name"
        )
      button.btn.btn--primary(slot="footer", @click="insertSelectedBlocks(); closeBlockModal();") Insert block
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'

  export default {
    name: 'tabBuilderComponent',
    props: [ 'segmentId' ],

    data () {
      return {
        currentTab: 0,
        blockSearch: {
          selected: [],
          options: []
        },
        isBlockModalOpen: false,
        currentTabId: null,
      }
    },

    computed: {
      ...mapGetters('membershipBlocks', ['blocks']),
      ...mapGetters('membershipPlanSegments', ['segments']),
      ...mapGetters('membershipPlanTabs', ['tabs']),
      segmentIndex () { return this._.findIndex(this.segments, s => s.id === this.segmentId) },
      segment () { return this.segments[this.segmentIndex] || {} }
    },

    methods: {
      ...mapActions('membershipPlanTabs', {
        removeBlock: 'removeBlock'
      }),
      ...mapMutations('membershipPlanTabs', {
        updateTabTitle: 'updateTitle'
      }),
      ...mapActions('membershipPlanSegments', {
        createTab: 'createTab',
        removeTab: 'removeTab'
      }),
      useTab (tabId) { this.currentTabId = tabId },
      getTabById (id) {
        const index = this._.findIndex(this.tabs, t => t.id === id)
        return this.tabs[index]
      },
      getSegmentById (id) {
        const index = this._.findIndex(this.segments, s => s.id === id)
        return this.segments[index]
      },
      getBlockById (id) {
        const index = this._.findIndex(this.blocks, b => b.id === id)
        return this.blocks[index]
      },
      addBlockToCurrentTab (block) {
        this.$store.commit('membershipPlanTabs/insertBlock', {
          tabId: this.currentTabId,
          blockId: block.id
        })
      },
      insertSelectedBlocks () {
        this._.map(this.blockSearch.selected, n => this.addBlockToCurrentTab(n))
        this.blockSearch.selected = []
      },
      insertOptionBlocks () {
        this.blockSearch.options = []
        this._.map(this.blocks, m => this.blockSearch.options.push({
          id: m.id,
          name: m.title,
          label: `${m.id} - ${m.title}`
        }))
      },
      checkMove (event) {
        if (event.dragged.nodeName === 'BUTTON') { return false }
        if (event.draggedContext.element) {}
      },
      openBlockModal () { this.isBlockModalOpen = true },
      closeBlockModal () { this.isBlockModalOpen = false }
    },

    mounted () {
      // Fetch all blocks
      // Need a more efficient way to fetch
      this.$store.dispatch('membershipBlocks/pull')
        .then(() => this.insertOptionBlocks())

      if (this.segment.tabs.length <= 0) {
        this.$store.dispatch('membershipPlanSegments/createTab', { segmentId: this.segmentId })
      }
    }
  }
</script>
