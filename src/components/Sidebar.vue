<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="@/assets/img/logo.png" />
      <span>Vue Basic</span>
    </div>
    <ul class="menu">
      <li
        v-for="(item, key) in menu"
        :key="key"
        :class="{ active: $route.name == item.name }"
        @click="$route.name != item.name && $router.push({ name: item.name })"
      >
        <i :class="item.icon"></i><span>{{ item.title }}</span>
      </li>
    </ul>
    <p class="copy-right">Copyright © 2022 Miichi</p>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",

  props: ["menu"],
};
</script>
