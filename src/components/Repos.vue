<template>
    <div class="d-flex flex-column">

    

      <div class="repositorios mb-2">
        <div class="p-3">
          <h2>{{repo.name}}</h2> 
          <p> {{repo.description===null? `repositório sem descrição : )`: repo.description}}</p>
          <a :href="repo.html_url">Link repositório</a><br>
          <div class="mt-3">
           <button class="btn" :class="{ 'star':favorites == false, 'starred': favorites == true}" @click="salvar(repo.id)"></button><span>{{favorites == false? repo.stargazers_count:repo.stargazers_count+1 }}</span>
          </div>
        </div>  
      </div>  
    </div>

</template>
<script>
 export default{
    props:['repo'],
    data(){
      return{
        favorites: false,
        
      }
    },
    methods:{
      salvar(id){
        
           const minhaLista= localStorage.getItem('myList')
  
           let salvos = JSON.parse(minhaLista) || []
  
           const hasList = salvos.some( (repo) => repo.id === this.repo.id);
           
           
           if(hasList){
             this.favorites = false
             let fav = localStorage.getItem('myList')
             var arr = []

             arr.push(fav)
             arr.filter(()=>{
              return(arr.id !== id)
             })
             localStorage.removeItem(arr)
             
             localStorage.setItem('myList', JSON.stringify(arr))
            //  alert('Já foi salvo');
             return;
           }  
           this.favorites = true
           salvos.push(this.repo)
           
           localStorage.setItem('myList', JSON.stringify(salvos))
      }
    },
    created(){
       const meusFavoritos = localStorage.getItem('myList')

       let favoritos = JSON.parse(meusFavoritos) || []

       const star = favoritos.some( (repo) => repo.id === this.repo.id);

       if(star){
        return this.favorites = true   
       }
    },
 }
</script>

<style scoped>
 .repositorios{
   border: 1px solid black; 
 }
 .star{
   background: url(./stars/star.svg) no-repeat center;
 }
 .starred{
   background: url(./stars/star-fill.svg) no-repeat center;
 }
</style>
