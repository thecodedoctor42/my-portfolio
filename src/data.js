const data = {
    skills: ["HTML", "CSS", "JavaScript", "React", "Git", "Figma", "Research", "Graphic Design"],
    projects: [
        {
            name: "Movie Watchlist",
            description: "Don't wanna forget a must-watch recommended movie? Add it to your watchlist for later. This web-app allows its user to find a movie within the OMDb API and save it in their watchlist for when they next have the time to sit down in front of the television and stick their feet up. Using the 'fetch' method, it requests information from the API to be rendered to the DOM.",
            skills: ['react', 'api'],
            url: "https://movie-watchlist-antoni.netlify.app/",
            github: "https://github.com/thecodedoctor42/movie-watchlist",
            id: "1"
        },
        {
            name: "Shopping List",
            description: "A shopping list mobile-web-app I created for my parents. After adding their desired item to the shopping list, a document will be created in a Cloud Firestore collection; allowing them both to check and update the list in real-time on anyone device. Using toch event listeners, I was able to mimic smartphone functionality: pressing an item will 'tick' its checkbox, and long-pressing an item will delete it.",
            skills: ['react', 'firestore'],
            url: "https://shopping-list-4f8h2.netlify.app/",
            github: "https://github.com/thecodedoctor42/shopping-list",
            id: "2"
        },
        {
            name: "Quizzical",
            description: "Fancy a quick quiz? Quizzical is a fun web-app that creates a quiz from its users specification. It randomly retrieves questions with these specifications from the OpenDb Trivia API, and builds an interactive quiz for its user to complete. Once completed, the quiz will be marked, and its user will get a score. If full marks are achieved, a blast of confetti will rain on the screen." ,
            skills: ['react', 'api'],
            url: "https://quizzical-by-antoni.netlify.app/",
            github: "https://github.com/thecodedoctor42/quizzical",
            id: "3"
        }
    ]
}

export default data