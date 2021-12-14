<template>
     <div class="side-bar">
            <ul class="side-bar__list">
                <li class="side-bar__list-logo">
                    <img src="../assets/svg/logo.svg" alt="RaspBank Logo">
                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'dashboard' }">
                        <img src="../assets/svg/dashboard.svg" alt="dashboard-logo">
                        <h2>Dashboard</h2>  
                    </RouterLink>
                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'todolist'}">
                        <img src="../assets/svg/todo.svg" alt="to-do-logo">
                        <h3>To Do List</h3>  
                    </RouterLink>

                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'loans'}">
                        <img src="../assets/svg/features.svg" alt="features-logo">
                        <h3>Loans</h3>  
                    </RouterLink>
                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'quiz' }">
                        <img src="../assets/svg/quiz.svg" alt="quiz-logo">
                        <h3>Take a test</h3>  
                    </RouterLink>
                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'transaction' }">
                        <img src="../assets/svg/table.svg" alt="sort-table-logo">
                        <h3>Overview</h3>  
                    </RouterLink>
                </li>
                
                <li class="side-bar__list-links">
                    <RouterLink :to="{ name: 'contact' }">
                        <img src="../assets/svg/contact.svg" alt="contact-logo">
                        <h3>Contact</h3>  
                    </RouterLink>
                </li>
            </ul>
        </div>
</template>

<script>

</script>

<style>
    .side-bar {
        position: fixed;
        /* width: 100%; */
        height: 100%;
        padding: 1rem;
        margin-right: 2rem;
        /* font-size: 1.5rem; */
        border-right: 1px solid var(--bordercolor);
        overflow-y: scroll;
    }

    .side-bar__list li {
        list-style: none;
        border-bottom: 1px solid var(--bordercolor);
    }

    /* .side-bar__list > li > img {
        width: 100%;
    } */

    .side-bar__list-links {
        padding: 20px 0;
    }
    
    .side-bar__list-links a {
        color: #000;
        display: flex;
        flex-direction: row;
        gap: 1vh;  
    }
    /* .side-bar__list-links > a > img {
        padding: 0 10px;
      
    } */
    .router-link-active h2,
    .router-link-active h3 {
        color: #fff;
        }

    .router-link-active {
        background: #6429D5;
        padding: 10px;
        border-radius: 10px;
    }

</style>