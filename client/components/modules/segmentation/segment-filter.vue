<template lang='pug'>
  section.segment-filter
    .segment-filter__and(v-for="andFilter in filter.and")
      .segment-filter__or(v-for="orFilter in andFilter.or")
        .segment-filter__field-wrap
          select(@change="updateFilterInclusion(andFilter.id, orFilter.id, ($event.target.value === 'true'))")
            option(
              v-for="inclusion in inclusions"
              :value="inclusion.value",
              :selected="orFilter.include === inclusion.value"
            ) {{ inclusion.label }}
        .segment-filter__field-wrap
          select(@change="updateFilterKey(andFilter.id, orFilter.id, $event.target.value)")
            option(
              v-for="key in keys"
              :value="key.value",
              :selected="orFilter.key === key.value"
            ) {{ key.label }}
        .segment-filter__field-wrap
          select(@change="updateFilterOperation(andFilter.id, orFilter.id, $event.target.value)")
            option(
              v-for="operation in operations"
              :value="operation.value",
              :selected="orFilter.operation === operation.value"
            ) {{ operation.label }}
        .segment-filter__field-wrap
          input(
            :value="orFilter.value"
            @change="updateFilterValue(andFilter.id, orFilter.id, $event.target.value)"
          )
        button.btn.segment-filter__rm-btn(
          :disabled="!andFilter || andFilter.or.length <= 1"
          @click="removeOrFilter(andFilter.id, orFilter.id)"
        )
      .segment-filter__or-btn-wrap
        button.btn.segment-filter__btn(@click="addOrFilter(andFilter.id, $event)") Add "OR" statement
    .segment-filter__and-btn-wrap
      button.btn.segment-filter__btn(@click="addAndFilter") Add "AND" statement
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'segmentFilterComponent',
    props: [ 'segmentId', 'filterId' ],
    data () {
      return {}
    },
    computed: {
      ...mapGetters('segmentFilters', ['filters']),
      ...mapState('segmentFilters', ['operations', 'inclusions', 'keys']),
      ...mapGetters('membershipPlanSegments', ['segments']),
      filterIndex () { return this._.findIndex(this.filters, f => f.id === this.filterId) },
      filter () { return this.filters[this.filterIndex] || {} },
      segmentIndex () { return this._.findIndex(this.segments, s => s.id === this.segmentId) },
      segment () { return this.segments[this.segmentIndex] || {} }
    },
    methods: {
      addOrFilter (andFilterId) {
        return this.$store.dispatch('segmentFilters/createOr', { filterId: this.filterId, andFilterId })
      },

      removeOrFilter (andFilterId, orFilterId) {
        return this.$store.dispatch('segmentFilters/deleteOr', { andFilterId, orFilterId })
      },

      addAndFilter () {
        return this.$store.dispatch('segmentFilters/createAnd', { filterId: this.filterId })
      },

      removeAndFilter (andFilterId) {
        return this.$store.dispatch('segmentFilters/removeAnd', { andFilterId })
      },

      updateFilterKey (andFilterId, orFilterId, key) {
        this.$store.commit('segmentFilters/updateFilterKey', {
          filterId: this.filterId,
          andFilterId,
          orFilterId,
          key
        })
      },

      updateFilterValue (andFilterId, orFilterId, value) {
        this.$store.commit('segmentFilters/updateFilterValue', {
          filterId: this.filterId,
          andFilterId,
          orFilterId,
          value
        })
      },

      updateFilterOperation (andFilterId, orFilterId, operation) {
        this.$store.commit('segmentFilters/updateFilterOperation', {
          filterId: this.filterId,
          andFilterId,
          orFilterId,
          operation
        })
      },

      updateFilterInclusion (andFilterId, orFilterId, include) {
        this.$store.commit('segmentFilters/updateFilterInclusion', {
          filterId: this.filterId,
          andFilterId,
          orFilterId,
          include
        })
      }
    },
    mounted () {
      if (this.filter.and.length <= 0) {
        this.$store.dispatch('segmentFilters/createAnd', { filterId: this.filter.id })
          .then(({ andFilter }) => this.$store.dispatch('segmentFilters/createOr', {
            filterId: this.filter.id,
            andFilterId: andFilter.id
          }))
      }
    }
  }
</script>
