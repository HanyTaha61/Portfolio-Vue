<template>
  <div id="projects">
    <div class="container main">
      <div class="row">
        <div class="col-md-12 project rounded" v-for="(project,index) in projects" :key="index">
          <h2 class="text-center my-3 mb-5 py-3 rounded text-light">
            <a :href= project.url>{{(index)+1}}. {{project.name}}</a>
          </h2>
          <ol class="list d-block px-2 display-4 mr-1 py-3 rounded mb-5"><p>Technologies Used:</p>
            <li class="tech mb-2 pb-2" v-for="(tech, i) in project.technology" :key="i">
              {{tech}}
            </li>
          </ol>
          <a :href= project.url target="_blank" class="mb-4">
            <img class="img-fluid" :src="require(`../assets/projects/${project.src}`)" :alt= project.name> 
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            projects:[
              {
                name: 'Syrian Chicken House',
                src: "Syrian Chicken House.png",
                url: 'https://hany-taha.000webhostapp.com/',
                technology: ['Vue.js', 'Vue-Router', 'Bootstrap-vue']
              },
              {
                name: 'Cartoon Time',
                src: "cartoon-time.jpg",
                url: 'http://www.cartoontime.rf.gd',
                technology:['Vue.js', 'Vuex', 'Vue-Router', 'Bootstrap-vue']
                },
              {
                name: 'Dallas Business School',
                src: "dbs.jpg",
                url: 'http://www.thepoint.epizy.com',
                technology: ['Bootstrap 4', 'jQuery']
              }
              
            ]
        }
    }
}
</script>

<style lang='scss'>
  #projects{
    background-color: #e2e2e2;
    

    .main{
      margin-top: 100px;
        
      .project{
        box-shadow: -50px 30px 50px #111;
        margin-bottom: 100px;
        background-color: #fff;

        h2{
          font-family: 'Abril Fatface';
          background-color: var(--primary-color);
          text-shadow: 7px 7px 10px #333;
          font-size: 5em;

          @media(max-width: 991px){
            font-size: 3.5em;
          }

          @media(max-width: 767px){
            font-size: 2.4em;
          }
          

          &:hover a{
            transform: scale(1.1);
            color: #fff;
          }
        }
        a{
          color: #fff;
          overflow: hidden;
          display: block;
          transition: 0.5s;
          text-decoration: none !important;
          
          &:hover img{
            transform: scale(1.2);
          }
          img{
            transition: 0.5s;
            display: block;
          }
        }
        .list{
          font-weight: bold;
          background-color: var(--secondary-color);

          @media(max-width: 767px){
            font-size: 2.5em;
          }

          p{
            width: fit-content;
            padding-bottom: 5px;
            border-bottom: 5px solid #000;
          }

              .tech{
                margin-left: 75px;
                text-decoration: none !important;
                font-weight: normal;
                color: #f9f9f9;
                text-shadow: 3px 3px 3px #000;

          }
        }
      }
    }
  }
</style>