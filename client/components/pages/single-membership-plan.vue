<template lang='pug'>
  .page.page--inner-scroll.single-membership-plan
    .page__scrollable(:class="{ 'page__scrollable--folded': isPreviewOpen }")
      header.page__header
        div.ipt-wrap.page__heading
          input.ipt.ipt--invisible(
            id="plan-title-input"
            name="plan-title-input"
            data-vv-as="Plan title"
            v-validate="'required'"
            :value="currentPlan.title"
            placeholder="Give a name to your plan"
            type="text"
            @change="updatePlanTitle({ title: $event.target.value, planId: currentPlan.id })"
          )
          label.material-icons(for="plan-title-input") mode_edit
        small.page__id id:
          strong {{currentPlan.id}}

      .page__nav
        button.btn.btn--add(
          @click="createSegment"
        ) Add a segment

      .page__content
        .panels
          .panels__tabs
            .panels__tab(
              v-for="(ref, index) in currentPlan.segments",
              :class="{ 'panels__tab--active': segmentTabVisibleIndex === index }"
            )
              button.panels__tab-btn(v-if="index <= 0", @click="changeTabVisibleIndex(index)") Main segment
              button.panels__tab-btn(v-else, @click="changeTabVisibleIndex(index)") Segment {{index + 1}}
          .panel(
            v-for="(sRef, index) in currentPlan.segments",
            v-show="segmentTabVisibleIndex === index"
          )
            .panel__header
              h3.panel__heading(v-if="index <= 0") Main segment
              h3.panel__heading(v-else) Segment {{index + 1}}
              button.btn.btn--rm(
                @click="removeSegment({ planId: currentPlan.id, segmentId: sRef.segmentId })",
                :disabled="currentPlanSegmentCount <= 1"
              ) Remove segment
            .panel__content
              tab-builder-component(:segmentId="sRef.segmentId")
              segment-filter-component(
                v-if="index > 0",
                :segmentId="sRef.segmentId",
                :filterId="getSegmentById(sRef.segmentId).filters[0].filterId"
              )

        footer
          button.btn.btn--primary(
            v-if="!currentPlan.saved",
            :disabled="!currentPlan.modified"
            @click="save"
          ) Save Membership Plan
          button.btn.btn--primary(
            v-if="currentPlan.saved"
            :disabled="!currentPlan.modified"
            @click="update"
          ) Update Membership Plan

    .page__fixed(:class="{ 'page__fixed--expended': isPreviewOpen }")
      preview-component(@open="openPreview", @close="closePreview")
</template>

<script>
  import ValidationError from '../../errors/validationError.js'
  import managementComponent from './management.vue'
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import Promise from 'bluebird'

  export default {
    name: 'singleMembershipPlanComponent',
    extends: managementComponent,
    data: () => ({
      id: null,
      segmentTabVisibleIndex: 0
    }),

    computed: {
      ...mapGetters('membershipPlans', ['currentPlan', 'currentPlanSegmentCount', 'isPreviewOpen']),
      ...mapGetters('membershipPlanSegments', ['segments'])
    },

    methods: {
      ...mapActions('membershipPlans', {
        createSegment: 'createSegment',
        removeSegment: 'removeSegment'
      }),
      ...mapMutations('membershipPlans', {
        updatePlanTitle: 'updateTitle',
        openPreview: 'openPreview',
        closePreview: 'closePreview'
      }),
      loadSavedPlan (plan) {
        const oldId = this.$route.params.id
        const newPath = this.$route.fullPath.replace(oldId, plan.id)
        return this.$store.dispatch('membershipPlans/delete', { planId: oldId })
          .then(() => this.$store.dispatch('membershipPlans/use', { planId: plan.id }))
          .then(() => {
            this.id = plan.id
            this.$root.$router.push(newPath)
          })
      },
      init () {
        this.id = this.$route.params.id

        // If id is = new create tmp id
        if (this.id === 'new') {
          return this.$store.dispatch('membershipPlans/create', { planId: this.id })
            .then(({ plan }) => {
              this.id = plan.id
              const newPath = this.$route.fullPath.replace('new', this.id)
              this.$root.$router.push(newPath)
            })
            .then(() => this.$store.dispatch('membershipPlans/use', { planId: this.id }))
            .then(() => this.$store.dispatch('membershipPlanSegments/create'))
            .then(({ segment }) => this.$store.dispatch('membershipPlans/insertSegment', { segmentId: segment.id }))
        }

        return this.$store.dispatch('membershipPlans/load', { planId: this.id })
          .catch(error => {
            this.errorHandler(error)
            this.$router.push('/admin/management/membership-plans/')
          })
      },
      validate () {
        const errors = []
        return this.$validator.validateAll()
          .then(() => this.errors.items.forEach(i => errors.push(i)))
          .then(() => Promise.map(this.$children, child => child.$validator.validateAll()
            .then(result => child.errors.items.forEach(i => errors.push(i))))
          )
          .then(() => {
            if (errors.length > 0) { throw new ValidationError('Validation error', { errors }) }
          })
      },
      save () {
        return this.validate()
          .then(() => this.$store.dispatch('showLoadingBar'))
          .then(() => this.$store.dispatch('membershipPlans/store', { planId: this.currentPlan.id }))
          .then(({ plan }) => this.loadSavedPlan(plan))
          .then(() => this.init())
          .then(() => this.$store.dispatch('alert', {
            msg: 'Plan successfully saved.'
          }))
          .catch(error => this.errorHandler(error))
          .then(() => this.$store.dispatch('hideLoadingBar'))
      },
      update () {
        this.validate()
          .then(() => this.$store.dispatch('showLoadingBar'))
          .then(() => this.$store.dispatch('membershipPlans/update', { planId: this.currentPlan.id }))
          .then(() => this.$store.dispatch('alert', {
            msg: 'Plan successfully updated.'
          }))
          .catch(error => this.errorHandler(error))
          .then(() => this.$store.dispatch('hideLoadingBar'))
      },
      getSegmentById (id) {
        const index = this._.findIndex(this.segments, s => s.id === id)
        return this.segments[index]
      },
      changeTabVisibleIndex (index) { this.segmentTabVisibleIndex = index; },
      errorHandler (error) {
        console.warn('Warning: Error caught!', error)
        return this.$store.dispatch('alert', {
          style: 'red',
          icon: 'error',
          msg: (error.errors && error.errors.length) ? error.errors.map(e => e.msg) : error.message
        })
      }
    },

    mounted () {
      this.init()
    }
  }
</script>
