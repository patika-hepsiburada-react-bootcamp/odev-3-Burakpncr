import { useEffect, useState } from 'react'
import Question from './Question'
import { connectSocket, subscribeToNewVotes } from '../socketApi'
import Chart from './Chart'

function Container() {
  const [answers, setAnswers] = useState({ semanticUı: 0,materialUı: 0,reactBootstrap: 0,antDesign: 0,other: 0,}) //default response object

  useEffect(() => {
    connectSocket(); //Function that checks whether the user we get from socket api is connected or not

    subscribeToNewVotes((vote) => { //listening data from SocketApi
         setAnswers(vote) 
    });
  }, [setAnswers])

    return (
        <div>
          <Question Answers = {answers} />
          <Chart Answers = {answers} /> 
        </div>
    )
}

export default Container
