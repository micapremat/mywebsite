<script setup lang="ts">
import { ref } from 'vue';
import BaseModal from './BaseModal.vue';
import BaseButton from './BaseButton.vue';
import { charRegex, emailRegex } from '@/types/RegexPatterns';
// @ts-ignore
import { Email } from '@/assets/smtp/smtp.js';

const emit = defineEmits(['close']);

const errorMsgs = ref<Array<object>>();
const formData = ref({
    name: '',
    lastname: '',
    email: '',
    message: ''
})

const findValueByKey = (array: Array<object>, key: string) => {
  for (const item of array) {
    if (key in item) {
      return item[key as keyof typeof item];
    }
  }
  return null;
};

const validateFields = () => {
  errorMsgs.value = []
  if (!formData.value.name) {
    errorMsgs.value.push(
      {'name': 'Name is mandatory'}
      )
  } else if (!charRegex.test(formData.value.name)) {
    errorMsgs.value.push(
      {'name': 'Name is not valid'}
      )
  }
  if(!formData.value.lastname) {
    errorMsgs.value.push(
      {'lastname': 'Lastname is mandatory'}
      )
  } else if (!charRegex.test(formData.value.lastname)) {
    errorMsgs.value.push(
      {'lastname': 'Lastname is not valid'}
      )
  }
  if (!formData.value.email) {
    errorMsgs.value.push(
      {'email': 'Email is mandatory'}
      )
  } else if (!emailRegex.test(formData.value.email)) {
    errorMsgs.value.push(
      {'email': 'Email is not valid'}
      )
  }
  if (!formData.value.message) {
    errorMsgs.value.push(
      {'message': 'Message is mandatory'}
      )
  }
  return errorMsgs.value.length === 0
}

const send = async () => {
    const valid = validateFields()
    console.log(valid)
    if (valid){
        Email.send({
          Host : "smtp.elasticemail.com",
          Username : "micapremat@gmail.com",
          Password : "E476798E039440FB5551E00EC1F82D21496C",
          To : 'micapremat@gmail.com',
          From : 'micapremat@gmail.com',
          Subject : formData.value.name + " " + formData.value.lastname + " - Contact form",
          Body : "Email: " + formData.value.email + "<br> Message: " + formData.value.message
        }).then(
            emit('close')
        );
    }
}

</script>

<template>
  <div>
    <BaseModal @close="$emit('close')" width=" w-[500px]">
        <template v-slot:header>
            <div>
                <!--End alert-->
                <h2 class="text-2xl font-bold text-left mt-6 ml-3 border-b-2 border-primary">Contact</h2>
            </div>
        </template>
        <template v-slot:body>
            <div class="  w-[300px] md:w-[350px]">
                <div class="mt-6 text-left">
                    <label class="text-black text-left font-bold text-lg block">Name*</label>
                    <input type="text" class="text-left text-black rounded-lg border border-primary border-3 py-2 mt-1 px-2 w-full" 
                        maxlength="30" v-model="formData.name" />
                    <span class="text-red-500 block absolute" v-if="errorMsgs">{{ findValueByKey(errorMsgs, "name") }}</span>
                </div>
                <div class="mt-6 text-left ">
                    <label class="text-black text-left font-bold text-lg block">Lastname*</label>
                    <input type="text" class="text-left text-black rounded-lg border border-primary border-3 py-2 mt-1 w-full px-2" 
                        maxlength="30" v-model="formData.lastname"/>
                    <span class="text-red-500 block absolute" v-if="errorMsgs">{{ findValueByKey(errorMsgs, "lastname") }}</span>
                </div>
                <div class="mt-6 text-left">
                    <label class="text-black text-left font-bold text-lg block">Email*</label>
                    <input type="text" class="text-left text-black rounded-lg border border-primary border-3 py-2 mt-1 w-full px-2" 
                        maxlength="30" v-model="formData.email"/>
                    <span class="text-red-500 block absolute" v-if="errorMsgs">{{ findValueByKey(errorMsgs, "email") }}</span>
                </div>
                <div class="mt-6 text-left">
                    <label class="text-black text-left font-bold text-lg block">Message*</label>
                    <textarea type="text" class="text-left text-black rounded-lg border border-primary border-3 py-2 mt-1 w-full h-[200px] px-2" v-model="formData.message">
                    </textarea>
                    <span class="text-red-500 block absolute" v-if="errorMsgs">{{ findValueByKey(errorMsgs, "message") }}</span>
                </div>
            </div>
            <div class="text-center mt-6">
                <BaseButton :text="'Cancel'" rounded class="bg-primary text-white mr-8" @click="$emit('close')"/>
                <BaseButton :text="'Send'" rounded class="bg-[#28888b] text-white" @click="send()"/>
            </div>
        </template>
    </BaseModal>
  </div>
</template>

<style scoped>

</style>
