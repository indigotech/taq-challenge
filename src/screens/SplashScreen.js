import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
//component
import Loading from '../components/Header/Loading/Loading';
//coordinator
import { goToHome } from '../routes/coordinator';


export default function SplashScreen() {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      goToHome(history)
    }, 4000)
  }, [history])

  
  return (
    <Loading/>
  );
}