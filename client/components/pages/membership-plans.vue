<template lang='pug'>
  .page.membership-plans
    .page__scrollable
      header.page__header
        h2.page__heading Membership Plans
        router-link(to="/admin/management/membership-plans/new").btn.btn--add
          | Add a membership plan
      .page__content
        table.tbl
          tr
            th id
            th(colspan="2") Title
          tr(v-for="plan in plans")
            td: router-link(:to="{ path: `/admin/management/membership-plans/${plan.id}` }") {{plan.id}}
            td: router-link(:to="{ path: `/admin/management/membership-plans/${plan.id}` }") {{plan.title || 'No Title'}}
            td.tbl-text-right
              context-menu
                button(slot="items", @click="deletePlan(plan.id)")
                  | Delete
                  i.material-icons delete
                router-link(
                  :to="{ path: `/admin/management/membership-plans/${plan.id}` }",
                  slot="items"
                )
                  | Edit
                  i.material-icons edit

</template>

<script>
  import managementComponent from './management.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'membershipPlansComponent',
    extends: managementComponent,
    data: () => ({}),
    computed: {
      ...mapState('membershipPlans', ['plans'])
    },
    methods: {
      deletePlan (planId) { this.$store.dispatch('membershipPlans/delete', { planId }) }
    },
    mounted () {
      this.$store.dispatch('membershipPlans/pull')
    },
  }
</script>
