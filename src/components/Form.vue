<template>
   <div>
    <input  id="user" type="text" v-model="userName">
    <button @click="searchUser">Buscar</button>

    <div v-if="el">
       <div class="d-flex flex-md-row justify-content-around">
            <div>
             <User :user="user"/>
            </div>
          
            <div>
             <Repos v-for="repo in repos" :key="repo.id" :repo="repo"/>
            </div>           
           
       </div> 
    </div>
   </div>
</template>

<script>
import User from './User.vue'
import api from '../services/api'
import Repos from './Repos.vue'

export default{
  components: { User, Repos },
    data(){
        return{
            userName: '',
            el: false,
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
            const { client_id, client_secret, count, sort} = this.gitApi;
             api.get(
               `${this.userName}?client_id${client_id}&client_secret${client_secret}`
            ).then(({data})=>this.user=data, this.el= true);

            api.get(`${this.userName}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`).then(({data})=> this.repos=data)
           
        }
    }
}
</script>
