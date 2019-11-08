<template>
    <div id="contact" class="contact">
        <div class="layer">
            <div class="container form_frame">
                <div class="contact_form mt-5">
                    <h1 class="mb-5 pt-3 display-4">Contact Me</h1>
                    <div class="form-group data">
                        <div class="col-lg-6 my-5 cont_name">
                            <label class="mr-1">Your Name</label>
                            <input type="text" v-model="name" class="name text-light" >
                        </div>
                        <div class="col-lg-6 my-5 cont_subject">
                            <label class="mr-5">Subject</label>
                            <input type="text" v-model="subject" class="subject text-light" >
                        </div>
                    </div>
                    <div class="col-lg-12 w-100 cont_message">
                        <label>Please leave your message</label>
                        <textarea
                                class="px-3 pt-3 pb-0 mb-0 message"
                                v-model="message"
                                rows="5"
                                :maxlength="maxLength"
                                @input="countChars"
                        >
                            
                        </textarea>
                        <span class="d-block text-right mb-4">
                            remaining chars:
                            <p
                                class="d-inline font-weight-bold"
                                :class="{'zero': reachZero}"
                            >
                                {{remainingChars}}
                            </p>
                        </span>
                    </div>
                    <input
                        @click="send_mail"
                        type="submit"
                        value="Send mail"
                        class="w-50 send btn"
                    >

                   <span class="ml-3 d-block mt-5 mb-2 social_links">Or you can contact me on
                       <a href="https://www.linkedin.com" target="_blank">
                            <i class="fab fa-linkedin fa-2x linkedin"></i>
                       </a>
                       or
                       <a href="https://github.com/HanyTaha61" target="_blank">
                            <i class="fab fa-github fa-2x github"></i>
                       </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name: '',
            subject: '',
            message: '',
            maxLength: 200,
            remainingChars: 200,
            reachZero: false
        }
    },
    methods:{
        send_mail(){
            if(this.name != '' && this.subject != '' && this.message != '')
            {
                window.open("mailto: hanygrand1980@gmail.com?subject=" + this.subject + "&body=" + this.message)
                this.name = ''
                this.subject = ''
                this.message = ''
                this.remainingChars = 200
            }
        },
        countChars(){
            this.remainingChars = this.maxLength - this.message.length
            this.reachZero = this.remainingChars === 0
        }
    }
}
</script>

<style lang='scss' scoped>
.contact{
    background: url('../assets/contact.jpg')no-repeat center center;
    background-size: cover;
    background-size: cover;
    position: absolute;
    width: 100%;

    .layer{
        padding-top: 50px;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgba(33, 109, 144, 0.3);

        .form_frame{
            margin-top: 100px;
            padding-bottom: 30px;
            .contact_form{
                box-shadow: 20px 20px 40px #000;
                border-radius: 10px;
                font-size: 25px !important;
                padding-bottom: 10px;
                background-color: rgba(var(--secondary-hexa),0.2);
                

                ::placeholder{
                    color: #888;
                    font-size: 1.5em;
                }

                h1{
                    border-bottom: 5px solid #000;
                    color: var(--secondary-color);
                    width: fit-content;
                    margin: auto;
                    font-family: 'Abril Fatface';
                    text-shadow: 2px 2px 2px #000;
                }

                .data{            
                    .name, .subject{
                        padding: 5px 10px;
                        border-radius: 5px;
                        box-shadow: 5px 5px 10px #444;
                        background-color: transparent;
                        font-size: 20px;
                        font-family: 'Quicksand';
                        font-weight: bold;
                    }
                }

                .cont_message{
                    
                    .message{
                        background-color: transparent;
                        width: 85%;
                        margin: 10px 35px 25px 20px;
                        border-radius: 5px;
                        box-shadow: 5px 5px 10px #444;
                        background-color: transparent;
                        color: #fff;
                        font-size: 24px;
                        font-family: 'Quicksand'

                    }
                    span{
                        margin-right: 250px;
                        font-size: 16px;
                        width: 85%;

                        .zero{
                            color: var(--primary-color);
                        }
                    }
                }

                .send{
                    background-color: var(--secondary-color);
                    color: #fff;
                    display: block;
                    font-family: 'Abril Fatface';
                    margin: auto;
                    font-size: 1.5em;
                    border-radius: 10px;
                    
                    &:hover{
                        background-color: var(--primary-color);
                    }
                }

                .social_links{
                    i.linkedin{
                        color: #0077b5;
                    }
                    i.github{
                        color: #24292e;
                    }
                }
            }
        }
    }
}
</style>