<template>
  <section id="page-top">
    <div class="container-fluid p-0">
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <Presentation />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <Education />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <Experience />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <Skills />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="volunteer">
        <Volunteer />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="publications">
        <Publications />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <Awards />
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
        <Projects />
      </section>
    </div>
  </section>
</template>

<script>
import jump from "jump.js";
import { mapState } from 'vuex'
// import Logo from "../components/Logo.vue";
import Presentation from "../components/Sections/Presentation";
import Education from "../components/Sections/Education";
import Experience from "../components/Sections/Experience";
import Skills from "../components/Sections/Skills";
import Publications from "../components/Sections/Publications";
import Projects from "../components/Sections/Projects";
import Volunteer from "../components/Sections/Volunteer";
import Awards from "../components/Sections/Awards";

export default {
  components: {
    // Logo,
    Presentation,
    Experience,
    Education,
    Skills,
    Publications,
    Projects,
    Volunteer,
    Awards,
  },
  computed: {
    ... mapState({
      resume: state => state.resume
    }),
  }
};
</script>

<style>
</style>
