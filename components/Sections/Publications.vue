<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('publications') }}</h2>

    <div
      v-for="(publication, index) in publications"
      :key="index"
      class="resume-item d-flex flex-column flex-md-row mb-5"
    >
      <div class="resume-content mr-auto">
        <h3 class="mb-0">{{ publication.name }}</h3>
        <div class="subheading mb-3">{{ publication.publisher }}</div>
        <p>{{ publication.summary }}</p>
      </div>
      <div class="resume-date text-md-right">
        <span class="text-primary">{{ publication.releaseDate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ... mapState({
      publications: state => state.resume.publications
    }),
  }
};
</script>
