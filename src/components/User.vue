<template>
    <div id="User">
       
        <img :src="user.avatar_url" alt="foto_usuario" width="300" height="300">
        <h2>{{user.name}}</h2>
        <p>{{user.login}}</p>
        <hr>

        <div class="d-flex flex-column">
            <span><i class="fas fa-building"></i>  {{ user.company == null? `Sem informação`: user.company}}</span>
            <span><i class="fas fa-map-marker-alt"></i>  {{ user.location == null? `Campo vazio`: user.location}}</span>
            <span><i class="fas fa-user-friends"></i>  {{ user.followers }}</span>
            <span><i class="fas fa-archive"></i>  {{ user.public_repos}}</span>
            <span v-if="elemento"><i class="fas fa-star"></i>  {{ star.data.length }}</span>
            
        </div>
    </div>
</template>

<script>
import api from '../services/api'
export default {
    props:['user', 'login', 'chaves'],
    data(){
        return{
            star: null,
            elemento: false
        }
    },
   async created(){
     const {client_id, client_secret} = this.chaves

    

      const favorites = await api.get(`${this.login}/starred?client_id${client_id}&client_secret${client_secret}`)  

      this.star = favorites

      

      this.elemento = true
    }
}
</script>

<style scoped>
 @import './geral.css';
  #User{
     height: 589px;
     width: 300px;
  }
  img{
    border-radius: 2px;
    filter: drop-shadow(0 0 0.73rem rgba(87, 86, 86, 0.801)); 
  }

</style>