export const TMDB_CONFIG={
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTliMjY0ODIyNDAwNzc4ODg1YTQ5Mzk5OTkzNzg5MSIsIm5iZiI6MTc0ODM1Nzg5MS4zOTUsInN1YiI6IjY4MzVkMzAzNzUyM2IzM2IxMmE4NzUyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4sBQPUWproTz8-3-N2tJSlFUyVyZmmpZawiPyx8Esvk`,
    }
}

export const fetchMovies = async ({query}: {query:string}) =>{
    const endpoint = query
        ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTliMjY0ODIyNDAwNzc4ODg1YTQ5Mzk5OTkzNzg5MSIsIm5iZiI6MTc0ODM1Nzg5MS4zOTUsInN1YiI6IjY4MzVkMzAzNzUyM2IzM2IxMmE4NzUyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4sBQPUWproTz8-3-N2tJSlFUyVyZmmpZawiPyx8Esvk'
        }
    };
    // const options = {
    //     method: 'GET',
    //     headers: TMDB_CONFIG.headers
    // };

    const response = await fetch(endpoint, options);
    console.log(JSON.stringify(options));
    console.log(JSON.stringify(response));
    if(!response.ok){
        console.log("오케이가 아니에요");
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();

    return data.results;
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTliMjY0ODIyNDAwNzc4ODg1YTQ5Mzk5OTkzNzg5MSIsIm5iZiI6MTc0ODM1Nzg5MS4zOTUsInN1YiI6IjY4MzVkMzAzNzUyM2IzM2IxMmE4NzUyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4sBQPUWproTz8-3-N2tJSlFUyVyZmmpZawiPyx8Esvk'
//     }
// };
//
// fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error(err));
