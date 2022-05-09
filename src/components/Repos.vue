<template>
    <div class="d-flex flex-column" id="Repo">
      <div>
       <span>{{repo.name}}</span> 
       <span>star: {{repo.stargazers_count}}</span>
       <span>watch: {{repo.watchers_count}}</span>
       <span>forks: {{repo.forks_count}}</span>
      </div>  
    </div>

</template>
<script>
 export default{
    props:['repo']
 }
</script>

<style scoped>
 #Repo{
     max-width: 1028px;
     max-height: 711px;
     border: 1px solid red;
 }
</style>
