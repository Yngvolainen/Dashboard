<template>
    <section class="dashboard">
        <div class="dashboard__component dashboard__todolist">
            <Todolist />    
        </div>

        <div class="dashboard__component dashboard__slideshow">
            <SlideShow />
        </div>

        <div class="dashboard__component dashboard__sort-table">
            <SortTableContent />        
        </div>

        <div class="dashboard__component dashboard__quiz-app">
            <QuizApp />    
        </div>

        <div class="dashboard__component dashboard__contact-form">
            <ContactForm />    
        </div>
    </section>
    
    <section class="mobile">
        <div class="mobile__component">
            <Todolist />    
        </div>

        <div class="mobile__component">
            <SlideShow />
        </div>

        <div class="mobile__component">
            <SortTableContent />        
        </div>

        <div class="mobile__component">
            <QuizApp />    
        </div>

        <div class="mobile__component">
            <ContactForm />    
        </div>
    </section>

</template>
<script>
    import Todolist from '../components/Todolist.vue';
    import SortTableContent from '../components/SortTableContent.vue';
    import SlideShow from '../components/SlideShow.vue';
    import QuizApp from '../components/QuizApp.vue';
    import ContactForm from '../components/ContactForm.vue';

    export default {
        components: {
            Todolist,
            SortTableContent,
            SlideShow,
            QuizApp, 
            ContactForm
        },
    }
</script>
<style>
    .dashboard {
        background: lightsteelblue ;
        box-shadow: 2px lightgray;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        padding: 1rem 2rem; 
    }

    .dashboard__component {
        background: white;
        min-height: fit-content;
        border: 1px solid var(--bordercolor);
        border-radius: 15px; 
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    }

    .dashboard__todolist {
        grid-row: 1 / 3;
    } 

    .mobile {
        display: none;
    }

    @media screen and (max-width: 1400px)  {
        .dashboard {
            grid-template-columns: repeat(2, 1fr);
        }

        .dashboard__todolist {
            grid-column: 1 / 3;
        }
    }

    @media screen and (max-width: 1050px)  {
        .dashboard {
            display: none;
        }

        .mobile {
            padding: 1rem;
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 10px; 
        }

        .mobile__component {
            margin: 1rem; 
        }
    }
</style>