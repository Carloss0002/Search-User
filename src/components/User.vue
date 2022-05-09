<template>
    <div id="User">
       
        <img :src="user.avatar_url" alt="foto_usuario" width="300" height="300">
        <h2>{{user.name}}</h2>
        <p>{{user.login}}</p>
        <hr>
        <div class="d-flex flex-column">
            <span>Compania: {{user.company}}</span>
            <span>Localização: {{user.location}}</span>
            <span>Seguidores: {{user.followers}}</span>
            <span>Repositórios: {{user.public_repos}}</span>
            
        </div>
    </div>
</template>

<script>
export default {
    props:['user']
}
</script>

<style scoped>
 @import './geral.css';
  #User{
     height: 589px;
     width: 300;
  }
  img{
    border-radius: 2px;
    filter: drop-shadow(0 0 0.75rem rgba(87, 86, 86, 0.801));
  }
</style>