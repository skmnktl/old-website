<template>
  <div class="writing">
    <InterviewPrep />
  </div>
</template>

<script>
import InterviewPrep from "./posts/Interview.vue"
export default {
  name: 'MyWriting',
  components: {
    InterviewPrep,
  }
}
</script>

<style scoped>
.writing{
  font-family: 'Alegreya Sans';
}
</style>


