<template>
  <div class="post">
   <div v-html="markdownToHtml"></div>
  </div>
</template>
<script>
import {marked} from 'marked';
//const reader = new FileReader();
//reader.readAsText("../../assets/writing/interviewing.txt");
//reader.onload = interviewPrep => console.log(interviewPrep.target.result);

export default {
  name: "InterviewPrep",
  data() {
    return {
      interview: "# hello world",
    };
  },
 computed: {
   markdownToHtml(){
     return marked(this.markdown);
   }
 }
};
</script>
<style scoped>
.post{
    
}
</style>