<template>
   <div>
      <header class="mb-5"> 
         <div :class="{'formulario':elementos==false&&error[0] === 0, '':error[0]===1}">
            <div :class="{'d-flex align-items-center justify-content-around':elementos||error[0]===1}">
               <h1>Github <span>Search</span></h1>

               <div class="ml-5 d-flex align-items-center">
                     <input @keypress.enter="searchUser" class="form" id="user" type="text" v-model="userName" :placeholder="campoVazio">
                     <button class="btn btnSearch btn-dark"  @click="searchUser" >Buscar</button>
               </div>  

               <router-link class="btn" :class="{'d-none':elementos==false}" to="/salvos" >
                  Ver Favoritos
               </router-link>
            </div>
         </div>        
      </header>


    <div v-if="elementos">
       <div class="d-flex flex-md-row justify-content-around" id="elemento">
            <div class="col-md-3">
             <User :user="user" :login="userName" :chaves="gitApi"/>
            </div>
          
            <article class="flex-grow-1">
             <Repos v-for="repo in repos" :key="repo.id" :repo="repo"/>
            </article>           

            <div class="col-md-3">
               Clique na estrela para favoritar um repositório 
            </div>
           
       </div> 
    </div>
        <article v-if="error[0] === 1">
            <div class="d-flex flex-column">
               <Error v-if="error[0] === 1" :erro="error" :name="userName" />
            </div>  
         </article>  
      
      
   </div>
</template>

<script>
import User from './User.vue'
import api from '../services/api'
import Repos from './Repos.vue'
import Error from './Error.vue'


export default{
  components: { User, Repos, Error},
    data(){
        return{
            userName: '',
            campoVazio: 'User name',
            elementos: false,
            error: [0, ],
             gitApi:{  
               client_id: 'ec71f1aff043abc474b7',
               client_secret: 'b40998cf8bbffa04038b31b543bfd8c661c0d744',
               count: 4,
               sort: 'created: asc'
            },
            user: [],
            repos: [] 
        }
    },
    methods:{
       searchUser(){
             if(this.userName === ''){
               return this.campoVazio =  'Campo obrigatório'
             } else{
                this.error[0] = 0

                const { client_id, client_secret, count, sort} = this.gitApi;
                 
                api.get(
                  `${this.userName}?client_id${client_id}&client_secret${client_secret}`
                )
               .then(({data})=>this.user=data, this.elementos= true)
               
               
               api.get(`${this.userName}/repos?per_page=${count}&sort=${sort}{&client_id=${client_id}&client_secret=${client_secret}}`)
               .then(({data})=> this.repos=data)
              
               
               .catch((error)=>{
                  this.elementos = false
                  this.error[0] = 1
                  this.error.push(error)
                  // alert( `<div><p>Usuario não encontrado, por favor, verifique o nome do usuario <span class="nome_usuario">${this.userName}</span> está correto e tente novamente.</p>  <p>${error}</p></div>`)
                  
               });
             }
            
          
           
        },
       
    }
}
</script>

<style scoped>
  @import'geral.css';
  .nome_usuario{
    font-size: 30px;
    font-style: italic; 
  }
  .formulario{
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     justify-items: center;
     text-align: center;

       position: absolute;
       top: 50%; 
       margin-top: -25px; 
       left: 20%;
  }
  

</style>
