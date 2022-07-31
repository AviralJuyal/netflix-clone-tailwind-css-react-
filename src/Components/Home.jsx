import React ,{useEffect , useState} from 'react'
import axios from 'axios'

const apiKey = '96480ec4353effada1e6ecfc9d25327c';
const url = 'https://api.themoviedb.org/3/movie';
const imgUrl = 'https://image.tmdb.org/t/p/w500';

const Card =({img})=>(
    <img className='text-white m-1.5 w-48 cursor-pointer hover:transition-transform hover:translate-y-2.5 hover:scale-105' src={img} alt="cover" />
)

const Row= ({title , arr = [{img:"https://www.themoviedb.org/t/p/w220_and_h330_face/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",}], })=>(
    // return (
     <div className='p-4 bg-black text-white'>
        <h2 className=" text-2xl font-bold">{title}</h2>
        <div className='flex overflow-x-auto'>

        {arr.map((item , i)=>(

            <Card key = {i} img = {`${imgUrl}/${item.poster_path}`}/>
        ))}
            
    
        </div>
     </div>
    // )
)

const Home = () => {

    const [popular, setPopular] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [rated, setRated] = useState([]);
    const [playing, setPlaying] = useState([]);
    // const [genre, setGenre] = useState([]);

    useEffect(() => {
       const popularShows = async()=>{
        const {data:{results}} = await axios.get(`${url}/popular?api_key=${apiKey}`);
        setPopular(results);
        // console.log(popular);
       };

       const upcomingMovies = async()=>{
        const {data:{results}} = await axios.get(`${url}/upcoming?api_key=${apiKey}`);
        setUpcoming(results);
        // console.log(popular);
       };
       const nowPlaying = async()=>{
        const {data:{results}} = await axios.get(`${url}/now_playing?api_key=${apiKey}`);
        setPlaying(results);
        // console.log(popular);
       };
       const topRated = async()=>{
        const {data:{results}} = await axios.get(`${url}/top_rated?api_key=${apiKey}`);
        setRated(results);
        // console.log(popular);
       };

    //    const getGenre = async()=>{
    //     const {data:{genres}} = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=96480ec4353effada1e6ecfc9d25327c');
    //     setGenre(genres);
    //     console.log(genre);
    //    };
       
       popularShows();
       upcomingMovies();
       nowPlaying();
       topRated();
    //    getGenre();

    }, [])


  return (
    <section className=" ">

        <div className='h-96  bg-black' >
            {/* <img src={`${imgUrl}/${popular[0].poster_path}`} alt="cover" /> */}
            

        </div>

        <Row title={'Popular on Netflix'} arr={popular}/>
        <Row title={'Top Rated'} arr={rated} />
        <Row title={'Upcoming Movies'} arr={upcoming}/>
        <Row title={'Now Playing'} arr={playing}/>
        
        {/* <Row title={'My List'}/> */}

    </section>
  )
}

export default Home;
