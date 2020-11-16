<template>
  <div class="my-auto">
    <h2 class="mb-5">{{ $t('projects') }}</h2>

    <CardProject :projectInfo="project" v-for="project in []" :key="project.name" class="mb-5"/>
  </div>
</template>

<script>
import CardProject from "@/components/Sections/CardProject";

export default {
  components: { CardProject },
  data() {
    return { };
  }
};
</script>
