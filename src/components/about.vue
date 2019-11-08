<template>
  <div class="about">
    <div class="layer">
      <div class="container">
        <h1 class="col-lg-12 text-center text-light rounded">About Me</h1>
        <div class="row mt-5">
          <div class="media w-100 text-light">
            <img src="../assets/hany.png" width="400" class="align-self-top mr-3 w-25" alt="hany">
            <div class="media-body px-3 py-2 rounded">
              The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance a website as your company grows.
              In my experience as a freelancer and working for agencies I have also obtained an eye for details and appreciation for design, as well as knowing how to efficiently project manage and work with clients and colleagues successfully.<br><br>
              Rather than create websites on a page-by-page basis, I instead consider each element of your screen-based designs as separate components that can exist elsewhere on a website; outside of the context of your design compositions. With these components I produce a style guide that acts as a document for a reusable and maintainable code base. All involved in a project can rely on a style guide to understand a project’s language and produce a more consistent user experience.<br><br>
              My front-end build process involves the use of tools such as Vue, npm, webpack, Sass, Pug and Gulp  to speed up development.
              I can quickly and efficiently join your team using continuous-integration with methods and tools such as GitHub and Heroku.<br><br>
              If you liked how I work and my process of working with clients, please visit the <router-link class="link" to="/contact">Contact page</router-link> and give a little information about the project you have in mind. We can then set up a call to discuss how I can be of most value to your project.
            </div>
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
            
        }
    }
}
</script>

<style lang='scss' scoped>
  .about{
    background: url('../assets/about.jpeg') no-repeat center center;
    background-size: cover;
    position: relative;
    height: 1050px;

    @media (min-width: 1200px) {
      height: 1200px;
    }    

    @media (max-width: 1199px) {
      height: 1300px;
    }

    @media (max-width: 767px) {
      height: 1500px;
    }    
    

    .layer{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100%;
      background-color: rgba(0,0,0, 0.5);
    
    h1{
      font-family: 'Abril Fatface';
      position: relative;
      font-size: 7em;
      margin-top: 100px;

      @media (max-width: 1199px) {
        font-size: 5em;

      } 

      @media (max-width: 991px) {
        font-size: 3em;

      }
      

      &::after{
        content: '';
        position: absolute;
        background-color: #f8f9fa;
        bottom: 0;
        left: 300px;
        width: 45%;
        height: 10px;

        @media (max-width: 1199px) {
          width: 44%;
          left: 260px;
        }

        @media (max-width: 991px) {
          width: 35%;
          left: 220px; 
          height: 5px;
        }

        @media (max-width: 767px) {
          height: 0;
        }        
      }

    }
    .media{
      
      img{
        background-color: rgba(var(--secondary-hexa), 0.25);
        border-radius: 10px;

        @media (max-width: 767px) {
          display: none;
        }  
      }
      .media-body{
        font-family: 'Quicksand';
        font-size: 25px;
        background-color: rgba(34, 167, 179, 0.4);
        box-shadow: -5px 5px 15px #000;

        @media (max-width: 767px) {
          font-size: 1.4em;
          margin-right: 0 !important;
          margin-left: 0 !important;
        }

        @media (min-width: 768px) {
          font-size: 1.3em;
        }  
        @media (min-width: 992px) {
          font-size: 1.5em;
        }
        
        a{
          color: #000000;
          font-weight: bold;
          background-color: var(--fourth-color);
          padding: 5px 10px;
          transition: 0.3s;

          &:hover{
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }
  }
}

//   .about{
  //     background: url('../assets/wp2465958.jpg') no-repeat center center;
//     background-size: cover;
//     position: absolute;
//     min-height: 100%;
    
//     .layer
//     {


//     h2
//     {

//         @media(max-width: 574px){
//           margin-top: 70px;
//           font-size: 3rem !important;
//           margin-left: 50px !important;
//         }

//         @media(max-width: 575px){
//           margin-top: 70px;
//           font-size: 4rem !important;
//           margin-left: 75px !important;
//         }  
        
//         @media(min-width: 576px) and (max-width: 991px){
//           margin-top: 70px;
//           font-size: 4rem !important;
//           margin-left: 75px !important;
//         }               
//     }

//     .media
//     {
        
//         padding-bottom: 50px;
//         .hany
//         {
//             margin-top: 228px;

//         }
//         .body
//         {
//             h2
//             {
//               color: var(--secondary-color) !important;
//               font-size: 5em;
//               font-family: 'Lobster';
//               background-color: rgba(91, 0, 156, 0.3);
//               width: fit-content;
//               border: 1px solid #ccc;

//               @media(max-width: 991px){
//                 z-index: 2;
//               }

//               @media(max-width: 767px){
//                 margin-bottom: 50px;
//                 text-align: center;
//               }              
                
//             }

//             img
//             {
//                 width: 100%;
//                 background-color: rgb(34, 166, 179, 0.5);
//                 margin-top: -35px !important;
//                 min-height: 100%;
                
//                 @media (max-width: 991px) {
//                   display: block;
//                   width: 75%;
//                   margin-right: auto;
//                   margin-left: auto;
//                   margin-top: 50px;
//                 }
//             }
            
//             .info
//             {
//               background-color: var(--secondary-color);
//               padding: 20px;
//               height: auto;
//               margin-bottom: 20px;

//                 .content
//                 {
//                   color: var(--primary-color);
//                   font-size: 1.8em;
//                   line-height: 1.5;
//                   font-family: 'Quicksand';

//                   .link{
//                     font-weight: bold;
//                     transition: 0.4s;
//                     color: #000;
//                     display: inline-block;

//                     &:hover{
//                       text-decoration: underline;
//                       color: #fff;
//                     }
//                   }
//                 }
//             }
//         }
//     }
//   }
// }
</style>