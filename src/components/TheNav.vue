<script setup lang="ts">
import { ref } from 'vue'

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);

</script>

<template>
  <div>
    <nav
      class="
        container
        px-6
        py-8
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-end">
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="
              text-black
              hover:text-gray-400
              focus:outline-none focus:text-gray-400
            "
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="
            absolute
            right-14
          flex-col
          mt-8
          space-y-4
          justify-end
          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
        "
      >
        <router-link to="/" class="text-gray-800 hover:text-indigo-400 text-right font-medium" active-class="active-btn">Home</router-link>
        <router-link to="/about" class="text-gray-800 hover:text-indigo-400 text-right font-medium" active-class="active-btn">About</router-link>
        <router-link to="/projects" class="text-gray-800 hover:text-indigo-400 text-righy font-medium" active-class="active-btn">Projects</router-link>
        <router-link to="/contact" class="text-gray-800 hover:text-indigo-400 text-right font-medium" active-class="active-btn">Contact</router-link>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
  .active-btn {
    text-decoration: underline #E5006C 2px;
    text-underline-offset: 6px;
  }

</style>
