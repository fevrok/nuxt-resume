<template>
  <section>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">{{ basics.name || 'John Doe' }}</span>
        <span class="d-none d-lg-block">
          <img
            class="img-fluid img-profile rounded-circle mx-auto mb-2"
            :src="basics.picture"
            alt=""
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item" v-if="resume.hasOwnProperty('basics')">
            <a
              class="nav-link js-scroll-trigger"
              @click="jumpTo('#about')"
              href="#"
              >{{ $t('about') }}</a
            >
          </li>
          <template v-for="(data, index) in resume">
            <li class="nav-item" v-bind:key="index" v-if="index != 'basics' && data.length">
              <a
                class="nav-link js-scroll-trigger"
                @click="jumpTo('#' + index)"
                href="#"
                >{{ $t(index) }}</a
              >
            </li>
          </template>
          <li class="nav-item">
            <div style="position:fixed; bottom:10px; left:10px; z-index:1000;">
              <DarkModeBtn />
            </div>
          </li>
          <li class="nav-item">
            <div style="position:fixed; bottom:10px; right: 10px;z-index:1000;">
              <nuxt-link class="btn btn-light" :to="switchLocalePath('en')"
                >EN</nuxt-link
              >
              <nuxt-link class="btn btn-light" :to="switchLocalePath('ar')"
                >AR</nuxt-link
              >
              <nuxt-link class="btn btn-light" :to="switchLocalePath('fr')"
                >FR</nuxt-link
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>

    <div class="resume">
      <section id="page-top">
        <div class="container-fluid p-0">
          <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <Presentation />
          </section>

          <template v-for="(data, index) in resume">
            <section :key="index" v-if="index != 'basics' && data.length" class="resume-section p-3 p-lg-5 d-flex flex-column" :id="index">
              <component :is="capitalize(index)" />
            </section>
          </template>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import DarkModeBtn from "@/components/DarkModeBtn";
import jump from "jump.js";
import Skills from "../components/Sections/Skills";
import Awards from "../components/Sections/Awards";
import Education from "../components/Sections/Education";
import Volunteer from "../components/Sections/Volunteer";
import Work from "../components/Sections/Work";
import Presentation from "../components/Sections/Presentation";
import Publications from "../components/Sections/Publications";
import Projects from "../components/Sections/Projects";
import Interests from "../components/Sections/Interests";

export default {
  components: {
    DarkModeBtn,
    Skills,
    Awards,
    Education,
    Volunteer,
    Work,
    Presentation,
    Interests,
    Projects,
    Publications,
  },
  head() {
    return {
      title: this.basics?.name ?? 'John Doe'
    };
  },
  computed: {
    ... mapState({
      resume: state => state.resume ?? {},
      basics: state => state.resume?.basics ?? {},
    }),
  },
  methods: {
    jumpTo(element) {
      jump(element);
    },
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 3rem;
  line-height: 5.5rem;
}
@media (min-width: 992px) {
  .resume {
    padding-top: 0;
    padding-left: 17rem;
  }
}
</style>
