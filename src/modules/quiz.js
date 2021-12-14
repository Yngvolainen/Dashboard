import image1 from "/images/blue.jpg"
import image2 from "/images/red.jpg"
import image3 from "/images/caesar.jpg"

export default {
    state() {
        return {
            quizName: "The big fat quiz about finance and stuff.",
            quizData: [ 
                {
                question: "How much money is the ocean worth?",
                image: image1,
                alt: "the ocean is heckin´ huge!",
                alternatives: [
                    "$100",
                    "$100.000",
                    "$100.000.000",
                    "Nobody knows..."
                    ],
                answer: 3,
                },

                {
                question: "The sun is also pretty big. How many nickles could you fit across it?",
                image: image2,
                alt: "the sun is ludicrously beeg!",
                alternatives: [
                    "A couple",
                    "A few",
                    "Some",
                    "A lot"
                    ],
                answer: 3,
                },

                {
                question: "Where are caesar-salads most expensive?",
                image: image3,
                alt: "caesar salads; the new currency?",
                alternatives: [
                    "In Rome",
                    "In Florence",
                    "In Oslo",
                    "In Monaco",
                    "In Tijuana"
                    ],
                answer: 2,
                },

                {
                question: "tralalala?",
                image: image3,
                alt: "lalala!",
                alternatives: [
                    "la",
                    "le",
                    "li",
                    "lo",
                    "lu"
                    ],
                answer: 0,
                }
            ],
        }
    },

    getters: {
        getQuizName(state) {
            return state.quizName
        },
        
        getQuizData(state) {
            return state.quizData
        }
    }
}
