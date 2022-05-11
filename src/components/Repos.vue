<template>
    <div class="d-flex flex-column">

    

      <div class="repositorios mb-2">
        <div class="p-3">
          <h2>{{repo.name}}</h2> 
          <p> {{repo.description===null? `repositório sem descrição : )`: repo.description}}</p>
          <a :href="repo.html_url">Link repositório</a><br>
          <div class="mt-3">
           <button class="btn" @click="salvar"> <i class="far fa-star fa-2x"></i></button> <span>{{repo.stargazers_count}}</span>
          </div>
        </div>  
      </div>  
    </div>

</template>
<script>
 export default{
    props:['repo'],
    methods:{
      salvar(){
         const minhaLista= localStorage.getItem('myList')

         let salvos = JSON.parse(minhaLista) || []

         const hasList = salvos.some( (repo) => repo.id === this.repo.id);

         if(hasList){
           alert('Já foi salvo');
           return;
           
         }

         salvos.push(this.repo)
         localStorage.setItem('myList', JSON.stringify(salvos))
      }
    }
 }
</script>

<style scoped>
 .repositorios{
   border: 1px solid black; 
 }
</style>
