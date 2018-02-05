<template lang='pug'>
  .page.single-membership-block
    header.page__header
      div.ipt-wrap.page__heading
        input.ipt.ipt--invisible(
          id="title-input"
          type="text",
          placeholder="Give a name to your block"
          :value="currentBlock.title"
          @change="updateTitle"
        )
        label.material-icons(for="title-input") mode_edit
      small.page__id id:
        strong {{currentBlock.id}}
    .page__content
      .block
        .block__section
          h3.block__section-heading Memberships
          draggable.block__memberships(
            v-if="currentBlock && currentBlock.memberships",
            v-model="currentBlock.memberships"
            @end="draggend"
          )
            .block__membership(v-for="id in currentBlock.memberships")
              button.btn.block__membership-delete-btn(@click="removeMembership(id)")
              .block__membership-id {{id}}
              .block__membership-name {{getMembershipById(id) && getMembershipById(id).name}}
          button.btn.btn--add(@click="openMembershipModal") Add a membership
          h3.block__section-heading Options
          label Disabled:
          input(type="checkbox", v-model="status")
      footer
          button.btn.btn--primary(
            v-if="!currentBlock.saved",
            :disabled="!currentBlock.modified && !currentBlock.segmentModified"
            @click="save"
          ) Save Membership Block
          button.btn.btn--primary(
            v-if="currentBlock.saved"
            :disabled="!currentBlock.modified && !currentBlock.segmentModified"
            @click="update"
          ) Update Membership Block

    modal(v-if="isMembershipModalOpen", @close="closeMembershipModal")
      h3(slot="header") Insert a membership
      div(slot="body")
        multiselect(
          v-model="membershipSearch.selected",
          :options="membershipSearch.options",
          :multiple="true",
          :close-on-select="false",
          :clear-on-select="false",
          :preserve-search="true",
          placeholder="Pick memberships"
          label="label"
          trackBy="label"
        )
      button.btn.btn--primary(slot="footer", @click="insertSelectedMemberships(); closeMembershipModal();") Insert Membership
</template>

<script>
  import managementComponent from './management.vue'
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'singleMembershipBlockComponent',
    extends: managementComponent,
    data: () => ({
      isMembershipModalOpen: false,
      membershipSearch: {
        selected: [],
        options: []
      }
    }),
    computed: {
      ...mapGetters('membershipBlocks', ['currentBlock']),
      ...mapGetters('memberships', ['memberships']),
      status: {
        get () { return this.currentBlock.status === 1 },
        set (value) { this.$store.commit('membershipBlocks/updateStatus', { status: !value ? 0 : 1, blockId: this.currentBlock.id }) }
      }
    },
    methods: {
      init () {
        this.id = this.$route.params.id

        this.$store.dispatch('memberships/pull', { params: { } })
          .then(() => this.insertOptionMemberships())

        if (this.id === 'new') {
          return this.$store.dispatch('membershipBlocks/create', { blockId: this.id })
            .then(({ block }) => {
              this.id = block.id
              const newPath = this.$route.fullPath.replace('new', this.id)
              this.$root.$router.push(newPath)
            })
            .then(() => this.$store.dispatch('membershipBlocks/use', { blockId: this.id }))
        }

        return this.$store.dispatch('membershipBlocks/load', { blockId: this.id })
      },

      save () {
        this.$store.dispatch('membershipBlocks/store', { blockId: this.currentBlock.id })
          .then(({ data: block }) => {
            const oldId = this.$route.params.id
            const newPath = this.$route.fullPath.replace(oldId, block.id)

            this.$store.dispatch('membershipBlocks/delete', { blockId: oldId })
            this.$store.dispatch('membershipBlocks/use', { blockId: block.id })

            this.id = block.id
            this.$root.$router.push(newPath)

            return this.init()
          })
          .then()
      },

      update() {
        this.$store.dispatch('membershipBlocks/update', { blockId: this.id })
      },

      getMembershipById (id) {
        const index = this._.findIndex(this.memberships, m => m.id === id)
        return this.memberships[index]
      },

      draggend () {
        this.$store.commit('membershipBlocks/reorderMemberships', { memberships: this.currentBlock.memberships, blockId: this.currentBlock.id })
      },

      updateTitle (event) {
        const title = event.target.value
        this.$store.commit('membershipBlocks/updateTitle', { title, blockId: this.currentBlock.id })
      },
      openMembershipModal () { this.isMembershipModalOpen = true },
      closeMembershipModal () { this.isMembershipModalOpen = false },
      addMembership (membershipId) { this.$store.commit('membershipBlocks/insertMembership', { membershipId, blockId: this.currentBlock.id }) },
      removeMembership(membershipId) { this.$store.commit('membershipBlocks/removeMembership', { membershipId, blockId: this.currentBlock.id }) },
      insertSelectedMemberships () {
        this._.map(this.membershipSearch.selected, n => this.addMembership(n.id))
        this.membershipSearch.selected = []
      },
      insertOptionMemberships () {
        this.membershipSearch.options = []
        this._.map(this.memberships, m => {
          const index = this._.findIndex(this.membershipSearch.options, o => o.id === m.id)

          if (index === -1) {
            this.membershipSearch.options.push({
              id: m.id,
              name: m.name,
              label: `${m.id} - ${m.name}`
            })
          }
        })
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
