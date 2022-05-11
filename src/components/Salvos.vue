<template>
   <div id="Salvos">
      <header>
         <div class="d-flex justify-content-between align-itens-center">
          <h1>Repositórios Favoritos</h1>
          <router-link to="/">Voltar para Home</router-link>
         </div> 
      </header> 
      <h2>Salvos</h2>
      <hr/>

     <div v-if="salvos.length <= 0">
      <span>
          Você não possui repositórios salvos
      </span> 
     </div> 

     <div v-else>
       <div class="favoritos ml-5">
         <div class="repositorios mb-2 mt-5" v-for="favorito in salvos" :key="favorito.id">
            <h2>{{favorito.name}}</h2> 
            <h3 class="float-right mx-0">{{favorito.owner.login}}</h3>
            <p> {{favorito.description===null? `repositório sem descrição : )`: favorito.description}}</p>
            <a :href="favorito.html_url">Link repositório</a><br>
            <div>
             <button class="btn" @click="deletar(favorito.id)"> <i class="fas fa-star fa-2x"></i></button><span>{{favorito.stargazers_count}}</span>
            </div>
         </div>
       </div>
      
     </div> 
   </div>
</template>

<script>
export default {
   data(){
       return{
           salvos: []
       }
   },
     methods:{
         deletar(id){
              let filtroFavoritos = this.salvos.filter((favorito) => {
                  return(favorito.id !== id);
                });
  
                return this.salvos = filtroFavoritos;
         }
     },
   created(){
     const minhaLista = localStorage.getItem('myList')
     this.salvos = JSON.parse(minhaLista) || []
   },
   watch:{
     salvos(){
       localStorage.setItem('myList', JSON.stringify(this.salvos))
     }
   }
}
</script>

<style scoped>
 .repositorios{
   border: 1px solid black; 
   max-width: 900px;
   margin: 0 auto;
 }
 .favoritos{
    margin: 0 auto;
 }
</style>