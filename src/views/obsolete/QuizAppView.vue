<template>
    <div class="quiz-view">
        <!-- Insert this unless quiz has no more questions -->
        <div v-if="quizId < quizData.length">
            <div class="quiz-view__name">
                <h1>{{ quizName }}</h1>

                <p>Question {{quizId + 1}}</p>
            </div>

            <div class="quiz-view__header">
                <h2> {{ quizData[quizId].question }} </h2>
            </div>
            <div class="quiz-view__image">
                <img :src="quizData[quizId].image" :alt="quizData[quizId].alt">

                <p class="quiz__image--text">{{ quizData[quizId].alt }}</p>
            </div>

            <div class="quiz-view__alternatives"
                v-for="(items, index) in quizData[quizId].alternatives"
                :key="quizData[quizId].alternatives[index]">
                <!-- How the heck do i bind classes to only one button at a time!? -->
                <!-- edit: I MADE IT! if index === selected!!!-->
                <button class="quiz-view__buttons"
                :class=" index === selected ? 'quiz-view__buttons--selected' : '' "
                @click="selectAlternative(index)"
                >{{items}}</button>
            </div>
            <div>
                <button class="quiz-view__buttons--answer" @click="nextQuestion">Next question!</button>
            </div>

            <div>
                <!-- this should definitely not be a button 😬 -->
                <button class="quiz-view__score"> Points so far: {{ score }}</button>
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
                <button class="quiz-view__buttons-reset" @click="resetGame">Try again</button>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
    data() {
        return {
            quizId: 0,
            selected: null,
            score: 0
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
    },
}
</script>

<style>
    .quiz-view {
        margin-top: 5vh;
        padding: 3%;
        margin-right: auto;
        margin-left: auto;
        background: #fff;
        font-size: 1.25rem;
        text-align: center;
        max-width: calc(486px + 14%);
        max-width: calc(786px + 14%);
        border-radius: 0.5em;
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, .1);
    }

    .quiz-view__header {
        margin: 1rem;
    }

    .quiz-view__image > img {
        width: 60%;
    }

    .quiz-view__image--text {
        font-size: 0.75rem;
        color: gray;
    }

    .quiz-view__buttons,
    .quiz-view__buttons--answer {
        text-align: center;
        width: 75%;
        min-width: fit-content;
        font-size: 1rem;
        padding: 0.3em;
        margin: 0.5em 0;
        background: white;
        border: 1px solid black;
        border-radius: 2rem;
    }

    .quiz-view__buttons--selected {
        background: lightblue;
    }

    .quiz-view__buttons:hover {
        transform: scale(1.05);
        border-color: transparent;
        outline: blue solid 3px;
    }

    .quiz-view__buttons--answer:hover {
        outline: black solid 1px;
    }

    .quiz-view__score {
        background: none;
        font-size: 1rem;
    }

    .quiz-view__score,
    .quiz-view__score:hover {
        border-style: none;
        outline: none;
        cursor: default;
    }



   @media screen and (min-width: 786px) {
    .quiz-view__header {
        /* color:green; */
    }
}
</style>