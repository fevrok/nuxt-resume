<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('awards.title') }}</h2>

    <div
      v-for="(award, index) in awards"
      :key="index"
      class="resume-item d-flex flex-column flex-md-row mb-5"
    >
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ award.title }}</h3>
        <div class="subheading mb-3">{{ award.awarder }}</div>
        <p>{{ award.summary }}</p>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ award.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ... mapState({
      awards: state => state.resume.awards
    }),
  }
};
</script>
