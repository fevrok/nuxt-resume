<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t("educationDegrees.title") }}</h2>

    <div
      v-for="(edu, index) in education"
      :key="index"
      class="resume-item d-flex flex-column flex-md-row mb-5"
    >
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ edu.institution }}</h3>
        <div class="subheading mb-3">{{ edu.gpa }}</div>
        <div v-for="course in edu.courses" :key="course">{{ course }}</div>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ edu.startDate }} - {{ edu.endDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ... mapState({
      education: state => state.resume.education
    }),
  }
};
</script>
