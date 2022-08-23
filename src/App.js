import { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Display';
import { setCapital, setCountryOption, setFlag } from './features/appSlice';
import { useDispatch} from 'react-redux'
import SetOptions from './components/SetOptions';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState();


  useEffect(() => {
    const fetchCountries = async() => {
      setLoading(true);
      const res = await fetch("https://restcountries.com/v3.1/all").then(res => res.json()).catch(err => console.log(err));
      setLoading(false);
      const countries_capitals = [...new Set(res.sort(() => 0.5 - Math.random()))].slice(0, 10).map(country =>  {
        return {
          country: country.name.common,
          capital: country.capital?.[0],
          img: false,
        }
      });
      const countries_flags = [...new Set(res.sort(() => 0.5 - Math.random()))].slice(0, 10).map(country =>  {
        return {
          country: country.name.common,
          flag: country.flags?.png,
          img: true,
        }
      });
      const countries = res.sort(() => 0.5 - Math.random()).slice(40, 80).map(country => country.name.common);
      dispatch(setFlag(countries_flags));
      dispatch(setCapital(countries_capitals));
      dispatch(setCountryOption(countries));
    }
    fetchCountries();
  }, [dispatch]);


  return (
    <div className="app flex flex-col justify-center items-center bg-gradient-to-r  from-[#6066D0] via-[#5256A1] to-[#5C62C2] w-full h-screen">
      {loading ? (<p className='text-2xl text-white'>Loading ...</p>) : 
      ( <>
        <h1 className="text-3xl text-[#F2F2F2] font-bold mr-[8rem] mb-2">COUNTRY QUIZ</h1>
        <Display />      
        <SetOptions />
        </>
      )}
    </div>
  );
}

export default App;
