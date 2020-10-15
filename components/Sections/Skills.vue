<template>
  <div class="my-auto">
    <h2 class="mb-2">{{ $t('skills.title') }}</h2>

    <ul class="fa-ul mb-0">
      <li v-for="(skill, index) in skills" :key="index">
        <i class="fa-li fa fa-check"></i>
        {{skill.name}} - {{ skill.level }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ... mapState({
      skills: state => state.resume.skills
    }),
  }
};
</script>
