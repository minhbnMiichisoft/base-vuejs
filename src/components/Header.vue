<template>
  <header class="header">
    <div>
      <p class="title">{{ title }}</p>
      <p class="explain-title">{{ explain }}</p>
    </div>
    <div class="action">
      <div class="faq" title="FAQ"><i class="fas fa-question"></i></div>
      <div class="noti" title="notify"><i class="fas fa-bell"></i></div>
      <div class="avatar" title="avatar">
        <img src="@/assets/img/avater.jpg" />
      </div>
      <p class="logout" @click="$emit('logout')">
        <i class="fas fa-sign-out-alt" title="Logout"></i>
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  props: ["title", "explain"],
};
</script>
