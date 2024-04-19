<script setup lang="ts">
import { ref } from 'vue'
import ContactModal from './ContactModal.vue'
// @ts-ignore
import { useSwitchFun } from '../stores/switchFun'

const store = useSwitchFun();

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
const openContactModal = ref(false);
const checked = ref(false);

const changeFun = () => {
  checked.value = !checked.value;
  store.setIsFun(checked.value);
}

</script>

<template>
  <div class="flex justify-end md:flex-row md:space-between">
    <!--Make it fun switch-->
    <!--
    <div class="w-10/12 mt-5">
      <label class=" cursor-pointer flex items-center" @toggle="checked = !checked">
        <input
          v-bind="$attrs"
          class="input"
          type="checkbox"
          :checked="checked"
          @change="changeFun()"
        />
        <span class="switch"></span>
        <span class="ml-3 text-[##1a202c]">Make it fun</span>
      </label>
    </div>
    -->
    <div>
      <nav
        class="
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
            bg-[#fefefe]
            p-5
            rounded
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 md:p-0
          "
        >
          <router-link to="/" class="text-gray-800 hover:text-indigo-400 text-right font-medium" active-class="active-btn" @click="showMenu = !showMenu">
            Home
          </router-link>
          <router-link to="/about" class="text-gray-800 hover:text-indigo-400 text-right font-medium" active-class="active-btn" @click="showMenu = !showMenu">
            About
          </router-link>
          <router-link to="/projects" class="text-gray-800 hover:text-indigo-400 text-righy font-medium" active-class="active-btn" @click="showMenu = !showMenu">
            Projects
          </router-link>
          <button class="text-gray-800 hover:text-indigo-400 text-right font-medium"  @click="openContactModal = true, showMenu = !showMenu">
            Contact
          </button>
        </ul>
      </nav>
    </div>
    <ContactModal v-if="openContactModal" @close="openContactModal = false"/>
  </div>
</template>

<style scoped>
  .active-btn {
    text-decoration: underline #E5006C 2px;
    text-underline-offset: 6px;
  }
  .input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

  .switch {
  --switch-container-width: 50px;
  --switch-size: calc(var(--switch-container-width) / 2);
  --light-gray: #e2e8f0;
  --gray: #cbd5e0;
  --dark-gray: #a0aec0;
  --teal: #4fd1c5;
  --dark-teal: var(--primary);
  /* Vertically center the inner circle */
  display: flex;
  align-items: center;
  position: relative;
  height: var(--switch-size);
  flex-basis: var(--switch-container-width);
  /* Make the container element rounded */
  border-radius: var(--switch-size);
  background-color: var(--light-gray);
  /* In case the label gets really long, the toggle shouldn't shrink. */
  flex-shrink: 0;
  transition: background-color 0.25s ease-in-out;
}
.switch::before {
  content: "";
  position: absolute;
  /* Move a little bit the inner circle to the right */
  left: 1px;
  height: calc(var(--switch-size) - 4px);
  width: calc(var(--switch-size) - 4px);
  /* Make the inner circle fully rounded */
  border-radius: 9999px;
  background-color: white;
  border: 2px solid var(--light-gray);
  transition: transform 0.375s ease-in-out;
}
.input:checked + .switch {
  background-color: var(--primary);
}
.input:checked + .switch::before {
  border-color: var(--primary);
  /* Move the inner circle to the right */
  transform: translateX(
    calc(var(--switch-container-width) - var(--switch-size))
  );
}
.input:focus + .switch::before {
  border-color: var(--gray);
}
.input:focus:checked + .switch::before {
  border-color: var(--primary);
}
.input:disabled + .switch {
  background-color: var(--gray);
}
.input:disabled + .switch::before {
  background-color: var(--dark-gray);
  border-color: var(--dark-gray);
}

</style>
