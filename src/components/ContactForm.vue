<template>
    <div class="form__container">
        <form>
            <fieldset class="form">
             <h1 class="form__header">Contact Form</h1>
                <div class="form__element">
                    <div>
                        <label for="firstname">FIRST NAME</label> 
                        <br>
                        <input name="firstname" v-model="firstName" type="text" placeholder="Enter your First Name">
                    </div>
                    
                    <div>
                        <label for="firstname">LAST NAME</label> 
                        <br>
                        <input name="lastname" type="text" v-model="lastName" placeholder="Enter Your Last Name">
                    </div>
                </div>

                <div class="form__element">
                    <label for="email">EMAIL</label> 
                    <input type="email" name="email" size="35">
                </div>

                <div class="form__element">
                    <div>
                    <label for="gender">GENDER (illegal question)</label> 
                        <br>
                        <div>
                            <input type="radio" name="gender" value="male">
                            <label for="">Male</label>
                            
                            <input type="radio" name="gender" value="female">
                            <label for="">Female</label>

                            <input type="radio" name="gender" value="other">
                            <label for="">Other</label>
                        </div>
                    </div>
                    <div>
                        <AvailableServices />
                    </div>

                </div>

                <div class="form__element form__element--message">
                    <div>
                        <label for="message">Message</label> 
                        <br>
                        <textarea id="" name="message" rows="4" cols="25">
                        </textarea>
                    </div>
                </div>

                <div class="form__element form__element--conditions">
                    <div>
                        <input type="checkbox" name="terms" v-model="terms">
                        <label for="terms">I HAVE READ THE <span><a href="">TERMS AND CONDITIONS</a></span> </label>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import AvailableServices from './AvailableServices.vue'

export default {
    components: {
        AvailableServices
    },
    data() {
        return {
        firstName:'',
        lastName: '',
        email:'',
        gender: '',
        message: '',
        terms: false
        }
    },
}
</script>

<style>
    .form__container {
        margin: 0 auto;
        padding: 1rem;
        max-width: 700px;
    }
    .form {
        border: none;
        padding: .5em;
    }

    .form__element {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1rem;
    }

    .form__element {
        padding: 10px;
    }

    /* .form__element input,
    .form__element label {
        font-size: 1em;
    } */

    .form__element--condtitions {
        display: block;
    }
    .form__element--categories {
        border: 1px solid black;
    }

    .form__element textarea {
        font-size: 1.5em;
        text-align: left;
        width: 90%;
    }
    .form__element label{
        font-size: 0.75em;
        color: gray;
      
    }
    .form__element input,
    .form__element select {
        padding: 0.5em;
        border-radius: 5px;
        background: #F7F7F8;
        border: none;
    }
</style>
