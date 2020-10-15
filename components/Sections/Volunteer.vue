<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('volunteerExperience.title') }}</h2>

    <div
      v-for="(work, index) in volunteer"
      :key="index"
      class="resume-item d-flex flex-column flex-md-row mb-5"
    >
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ work.position }}</h3>
        <div class="subheading mb-3">{{ work.organization }}</div>
        <p>{{ work.summary }}</p>
        <p
          v-for="highlights in work.highlights"
          :key="highlights"
        >
          - {{ highlights }}
        </p>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ work.startDate }} - {{ work.endDate || 'present' }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ... mapState({
      volunteer: state => state.resume.volunteer
    }),
  }
};
</script>
