<template>
    <div class="quiz">
        <!-- Insert this unless quiz has no more questions -->
        <div v-if="quizId < quizData.length">
            <div class="quiz__name">
                <h1>{{ quizName }}</h1>

                <p>Question {{quizId + 1}}</p>
            </div>

            <div class="quiz__header">
                <!-- quizObject defined as quizData[quizId] in computed: -->
                <h2> {{ quizObject.question }} </h2>
            </div>

            <div class="quiz__image">
                <img :src="quizObject.image" :alt="quizObject.alt">

                <p class="quiz__image--text">{{ quizObject.alt }}</p>
            </div>

            <div class="quiz__alternatives"
                v-for="(question, index) in quizObject.alternatives"
                :key="quizObject.alternatives[index]">
                <!-- How the heck do i bind classes to only one button at a time!? -->
                <!-- edit: I MADE IT! if index === selected!!!-->
                <button class="quiz__buttons"
                :class=" index === selected ? 'quiz__buttons--selected' : '' "
                @click="selectAlternative(index)">{{question}}</button>
            </div>

            <div>
                <button class="quiz__buttons quiz__buttons--answer" @click="nextQuestion">Next question!</button>
            </div>

            <div>
                <!-- this should definitely not be a button... -->
                <button class="quiz__buttons quiz__score"> Points so far: {{ score }}</button>
            </div>
        </div>

        <!-- if quiz is at end, display this -->
        <div v-else>
            <div v-if="score > quizData.length / 2">
                <h3>Gratulerer!</h3>

                <p>Du fikk {{ score }} av {{ quizData.length }} poeng!</p>

                <p>🥳</p>
            </div>

            <div v-else>
                <h3>Bedre lykke neste gang!</h3>

                <p>Du fikk {{ score }} av {{ quizData.length }} poeng!</p>

                <p>🙃</p>
            </div>

            <div>
                <button class="quiz__buttons" @click="resetGame">Try again</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quizId: 0,
            score: 0,
            selected: null
        }
    },

    methods: {
        nextQuestion() {
            if (this.selected === null) {
                alert('You have not selected an option. Please do so.')
                return
            }
            if (this.selected === this.quizData[this.quizId].answer) {
                this.score++;
            }
            this.quizId++;
            this.selected = null;
        },
        
        selectAlternative(index) {
            this.selected = index;
        },

        resetGame() {
            this.quizId = 0,
            this.score = 0
        }
    },

    computed: {
        quizName() {
            return this.$store.getters.getQuizName
        },

        quizData() {
            return this.$store.getters.getQuizData
        },

        quizObject() {
            return this.quizData[this.quizId]
        }
    },
}
</script>

<style>
    .quiz {
        margin: 0 auto;
        padding: 2rem 1rem;
        max-width: 900px;
        /* padding-top: 2vh;  */
        /* font-size: .75rem; */
        /* padding-bottom: 40px; */
        display: flex;
        justify-content: center;
        /* align-items: center; */
        text-align: center;
    }

    .quiz__header {
        
        margin: 1rem 0;
    }

    .quiz__image img {
        width: 100%;
    }

    .quiz__image--text {
        font-size: 0.75rem;
        color: gray;
    }

    .quiz__buttons,
    .quiz__buttons--answer {
        text-align: center;
        width: 350px;
        min-width: fit-content;
        font-size: 1rem;
        padding: 0.2em;
        margin: 0.5em 0;
        background: white;
        border: 1px solid black;
        border-radius: 2rem;
    }

    .quiz__buttons--selected {
        background: lightblue;
    }

    .quiz__buttons:hover {
        transform: scale(1.05);
        border-color: transparent;
        outline: blue solid 3px;
    }

    .quiz__buttons--answer:hover {
        outline: black solid 1px;
    }

    .quiz__score,
    .quiz__score:hover {
        border-style: none;
        outline: none;
        cursor: default;
    }

   @media screen and (min-width: 786px) {
       .quiz__image > img {
        /* max-width: 10rem; */
    }

    /* .quiz__header {
        color:green;
    } */
}
</style>