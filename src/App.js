import './App.css';
import React, { useState } from 'react';
import Review from './components/Review';
import datos from './data/data.json'

function App() {
  const [text_1] = useState("freeCodeCamp cambió mi vida.")
  const [text_2] = useState("freeCodeCamp fue la puerta de entrada a mi carrera")
  const [text_3] = useState("freeCodeCamp me dio las habilidades")
  return (
    <div className="App">
      <div className='main-div'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Review 
          name={datos.reviewOne.name}
          country='Singapur'
          photo='1'
          alt='photoShawn'
          work={datos.reviewOne.profession}
          company='Amazon'
          review={['Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. ', <strong>{text_1}</strong> ]}/>
          <Review 
          name='Sarah Chima'
          country='Nigeria'
          photo='2'
          alt='photoSarah'
          work='Ingeniera de Software'
          company='ChatDesk'
          review={[<strong>{text_2}</strong>,' como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.']}/>
          <Review 
          name='Emma Bostian'
          country='Suecia'
          photo='3'
          alt='photoEmma'
          work='Ingeniera de Software'
          company='Spotify'
          review={['Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en ', <strong>{text_3}</strong> , 'y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.']}/>
      </div>
    </div>
  );
}

export default App;
