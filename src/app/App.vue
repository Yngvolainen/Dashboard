<template>
    <section class="dashboard-section">
        <aside>
            <Sidebar />
        </aside> 
        <main class="dashboard-section__main"> 
            <RouterView />
        </main> 
    </section> 
</template>

<script>
    import Sidebar from "../components/Sidebar.vue";
    export default {
       components: {
            Sidebar,
        },
   }
</script>

<style>
    @import '../css/reset.css';
	@import '../css/variables.css';
	@import '../css/style.css';
	@import '../css/fonts.css';


    .dashboard-section {
        margin: 0 auto;
        display: grid;
        grid-template-columns: 250px 1fr;
        max-width: calc(1400px + 15%);
    }

    .dashboard-section__main {

    }

</style>


