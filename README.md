## Movie App

In general summary, **En Minutos** is a personal project that revolves around recommending movies and providing their summaries extracted from YouTube. Considering the high consumption of movie summaries, I thought it was a great idea to create a project that not only recommends but also allows users to view the summary if they don't have time to watch the entire film.

### Main features:

- Displays a list of all available movies, along with their respective posters, titles, release years, ratings, and editors.
- Allows users to search for a movie; if not found, a message will be displayed indicating that it is not available.
- Implements pagination, showing a maximum of 12 movies per page; this may vary for computers and phones with different screen sizes.
- Clicking on a selected movie will open a screen with all its details, including: **Title, release year, poster, rating, trailer, review, main cast, director, writer, and YouTube editor.**
- For the trailer, users need to click on "watch trailer," and a popup will open with the trailer video.
- As users scroll, a video player will appear with a movie summary extracted from YouTube, corresponding to the previously mentioned editor.
- It is worth noting that the app is fully responsive across most devices.

### Setup

1. Clone the repository to your local machine using:

```sh
git clone https://github.com/geo-mena/movie-app.git
```

2. Navigate to the project directory with the following command:

```sh
cd movie-app
```

3. Install the project dependencies with:

```sh
npm install
```

### Running the Project

To start the development server, use the command:

```sh
npm run dev
```

To build the project for production, use the command:

```sh
npm run build
```

To start the production server, use the command:

```sh
npm run start
```

### Resources

- API: It was developed in Python using Django and later deployed on **RENDER.** [See API](https://api-movies-exam.onrender.com/movies)
- DB: It was implemented in PostgreSQL and similarly deployed on **RENDER.**
- The project is built with **React.**
- React Router is used for navigation within the application.
- The project includes various React components, such as MovieDetail, MovieList, Loading, Footer, and Header.
- React Player is utilized for playing the trailers and summaries of the movies.
- The application's styles are written in separate CSS files for each component.
- ESLint is used for static code analysis and to identify coding issues.
- **VERCEL** is used for deploying the application: https://en-minutos.vercel.app/
- Also, it's worth mentioning that **POSTMAN** was used for querying and updating movies.

#### If you've made it this far, thank you very much.

> Geovanni Aberto Mena

<div align="center"><img src="https://github.com/darsaveli/Mariam/blob/main/1479814528_webarebears.gif" width="385px" align="center"></div>
