<template>
  <div class="my-auto">
    <h1 class="mb-0">
      {{ basics.name.split(' ', 2)[0] }}
      <span class="text-primary">{{ basics.name.split(' ', 2)[1] }}</span>
    </h1>

    <h3 class="mb-4">
      <vue-typer
        :text="basics.label || 'Your Current Role'"
        :repeat="Infinity"
        :shuffle="true"
        initial-action="typing"
        :pre-type-delay="100"
        :type-delay="82"
        :pre-erase-delay="2000"
        :erase-delay="30"
        erase-style="backspace"
        :erase-on-complete="false"
        caret-animation="blink"
      ></vue-typer>
    </h3>

    <div class="subheading mb-5">
      {{ basics.location ? basics.location.address + ' · ' : '' }}
      {{ basics.phone ? basics.phone + ' . ' : '' }}
      <a :href="'mailto:' + basics.email">{{ basics.email }}</a>
    </div>
    <p class="mb-5">
      {{ basics.summary }}
    </p>
    <ul class="list-inline list-social-icons mb-0">
      <!-- <li class="list-inline-item">
        <a href="#">
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li> -->

      <li class="list-inline-item">
        <a target="blank" :href="$t('personalInfo.linkedin')">
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li>
      <li class="list-inline-item">
        <a target="blank" :href="$t('personalInfo.github')">
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fab fa-github-alt fa-stack-1x fa-inverse"></i>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ... mapState({
      basics: state => state.resume.basics
    }),
  },
};
</script>
