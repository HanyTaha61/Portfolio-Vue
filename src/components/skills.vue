<template>
    <div id="skills">
        <div class="layer">
            <div class="container">
                <h1 class="text-light display-1 text-center mx-auto mt-4 px-5 rounded">Skills</h1>
                <div v-for="skill in skills" :key="skill.name">
                    <img :src="require(`../assets/skills/${skill.image}`)" class="mb-1 rounded"/>
                    <h2 class="d-inline-block ml-2">{{skill.name}}</h2>
                    <b-progress
                        height="50px"
                        :value=skill.percent
                        :max="max"
                        show-progress
                        variant="main"
                    ></b-progress>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value: 95,
            max: 100,
            skills:[
                {name: 'HTML', percent: 95,image: 'html5.png'},
                {name: 'CSS', percent: 95,image: 'css3.png'},
                {name: 'Responsiveness', percent: 98,image: 'responsiveness.jpeg'},
                {name: 'JavaScript', percent: 90,image: 'javascript.png'},
                {name: 'Vue.JS', percent: 90,image: 'vue.png'},
                {name: 'AJAX', percent: 90,image: 'ajax.jpeg'},
                {name: 'jQuery', percent: 85,image: 'jquery.png'},
                {name: 'BootStrap', percent: 95,image: 'bootstrap.png'},
                {name: 'Pug.js', percent: 90,image: 'pug.png'},
                {name: 'SASS', percent: 95,image: 'sass.png'},
                {name: 'Gulp.js', percent: 85,image: 'gulp.png'},
                {name: 'PhotoShop', percent: 80,image: 'Photoshop.png'},
            ]

        }
    },
    components:{

    }

}
</script>

<style lang='scss' scoped>
    #skills{
        background: url('../assets/164624.jpg') no-repeat center center;
        background-size: cover;
        position: absolute;

        .layer{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            background-color: rgba(91, 0, 156,0.1);
            height: 100%;

            h1{
              color: var(--secondary-color) !important;
              font-size: 5em;
              font-family: 'Lobster';
              background-color: rgba(91, 0, 156, 0.3);
              width: fit-content;
              border: 1px solid #ccc;
            }

                h2{
                    color: var(--primary-color);
                    background: var(--secondary-color);
                    padding: 5px 10px;
                    border-radius: 3px;
                }

                .progress{
                    background: var(--secondary-color)!important;
                    margin-bottom: 50px;
                    .progress-bar{
                        margin-bottom: 20px !important;
                        font-size: 60px;
                    }
                }

            // img{

            // }
        }
    }
</style>