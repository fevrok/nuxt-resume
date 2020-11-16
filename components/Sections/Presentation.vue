<template>
  <div class="my-auto">
    <h1 class="mb-0">
      {{ basics.firstName || 'John' }}
      <span class="text-primary">{{ basics.lastName || 'Doe' }}</span>
    </h1>

    <h3 class="mb-4">
      <client-only>
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
      </client-only>
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
      <li class="list-inline-item" v-for="(profile, index) in basics.profiles" :key='index'>
        <a :href="profile.url">
          <span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i :class="`fab ${profile.icon} fa-stack-1x fa-inverse`"></i>
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
      basics: state => state.resume?.basics ?? {}
    })
  },
};
</script>
