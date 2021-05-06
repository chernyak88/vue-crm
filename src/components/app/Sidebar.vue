<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      :key="link.url"
      custom
      v-slot="{ href, navigate, isActive }"
      :to="link.url"
      :exact="link.exact"
    >
      <li :class="[isActive && 'active']">
        <a :href="href" @click="navigate" class="waves-effect waves-orange pointer">{{ link.title }}</a>
      </li>
    </router-link>
  </ul>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'
export default {
  props: {
    value: {
      type: Boolean,
      required: false
    }
  },
  data: () => ({
    links: [
      {title: localizeFilter('Menu_Bill'), url: '/', exact: true},
      {title: localizeFilter('Menu_History'), url: '/history'},
      {title: localizeFilter('Menu_Planning'), url: '/planning'},
      {title: localizeFilter('Menu_NewRecord'), url: '/record'},
      {title: localizeFilter('Menu_Categories'), url: '/categories'}
    ]
  })
}
</script>
