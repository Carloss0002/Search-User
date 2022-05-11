<template>
    <div class="erro text-center">
       <p> Desculpe Usuário não encontrado, Verifique se o nome de usuário: <span class="text-warning">{{name}}</span> está correto.</p>

       <p>Caso o erro persista entre em contato com o nosso suporte: <a href="mail:carlosseduardo003@hotmail.com" target="_blank">email</a></p>

       <p class="text-danger"> erro: {{erro[1]}}</p>
    </div>
</template>

<script>
export default{
   props:['erro', 'name']
}
</script>
<style scoped>

</style>
