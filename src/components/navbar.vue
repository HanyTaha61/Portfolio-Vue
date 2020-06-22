<template>
    <div class="container-fluid" id="categories">
        <div class="container-fluid cats">
            <b-navbar toggleable="md" type="dark" id="navbar" class="navbar" fixed="top">
                <div class="col-md-1 mb-1 text-right">
                    <router-link to="/">
                        <img src="../assets/logo.jpg" width="50px"/>
                    </router-link>
                </div>
                <div class="col-md-9 mb-1 text-right">
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="links mx-auto w-100 d-flex  justify-content-md-around">
                            <b-nav-item>
                                <router-link class="text-center" exact to="/"><i class="fas fa-home ml-2"></i>الرئيسية</router-link>
                            </b-nav-item>
                            <b-nav-item>
                                <router-link class="text-center" to="/weight"><i class="fas fa-weight ml-2"></i>اعرف وزنك المثالي</router-link>
                            </b-nav-item>
                            <b-nav-item>
                                <router-link class="text-center" to="/water"><i class="fas fa-tint ml-2"></i>اعرف كمية الماء التي يحتاجها جسمك</router-link>
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </div>
                <div class="col-md-2 d-flex justify-content-center social">
                    <a target="_blank" href="https://www.facebook.com/Five4Health/">
                        <img src="../assets/social/facebook.png" width="30"/>
                    </a>
                    <router-link to="/">
                        <img src="../assets/social/youtube.png" width="30"/>
                    </router-link>
                    <router-link to="/">
                        <img src="../assets/social/twitter.png" width="30"/>
                    </router-link>
                    <router-link to="/">
                        <img src="../assets/social/instgram.png" width="30"/>
                    </router-link>
                </div>
            </b-navbar>
        </div>
    </div>
</template>

<style scoped lang='scss'>

.navbar{
    background-color: rgba(44, 214, 191, 0.5) !important;
    

    .social{

        a{
            transition: 0.25s;

            &:hover{
                transform: scale(1.25)
            }
        }

        @media (max-width: 767px) {
            position: absolute;
            left: -70px;
            top: 10px;
        }
    }
}



.navbar .navbar-nav{
    // background: rgba(4, 114, 240, 0.5) !important;
    border: 3px dotted yellowgreen !important;
}

.navbar-dark .navbar-toggler{
    background-color: #111;
}
.cats .navbar{
    z-index: 1111;
    background-color: rgba(var(--secondary-hexa), 0.75);
    direction: rtl;
    transition: 0.3s;

    @media (max-width: 991px) {
        background-color: rgba(1,1,1, 0.9);        
    }

}
.cats .links .router-link-active{
    background-color:  var(--primary-color);
    color: #fff;
    border-radius: 5px;
    padding: 5px;
}
.cats a {
    font-family: 'Katibeh';
    font-size: 1.25em;
    text-decoration: none;
    border-radius: 5px;
    color: #111;
    text-align: right;
    padding: 5px;
    transition: 0.3s;
    color: #fff;
}



@media (max-width: 1100px) {
    .cats a, .cats .router-link-active{
        font-size: 0.95em;
    }
}

.navbar .links a:hover{
    background-color: var(--primary-color);
    transform: scale(1.05)
}
</style>
