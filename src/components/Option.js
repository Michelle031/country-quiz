import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline"
import { appSelector, setAnswerSelected, setScore, setSelectedAnswer } from '../features/appSlice';

function Option({option, id}) {

    const string = "ABCD";
    const { score, answer,answerSelected, selectedAnswer } = useSelector(appSelector);
    const dispatch = useDispatch();

   
    const handleClick = (option) => {
        dispatch(setAnswerSelected(true));
        dispatch(setSelectedAnswer(option));
        if (option === answer ) {
          dispatch(setScore(score + 1));
        }       
    }
    
    const getClass = (option) => {
      if (answerSelected) {
        if (option === answer) {
          return "correct";

        }
        if (option !== answer) {
          if (option === selectedAnswer) {
            return "incorrect"
          };
        }
      }
    }

    const getTick = (option) => {
      if (answerSelected) {
        if (option === answer) {
          return "right";

        }
        if (option !== answer) {
          if (option === selectedAnswer) {
            return "wrong"
          };
        }
      }
    }



  return ( 
    <div className={`${getClass(option)} flex justify-between text-sm items-center bg-white  border-2 border-[#6066D0B2] rounded-xl text-[#6066D0CC] px-4 py-3 ${!answerSelected &&"hover:bg-[#F9A826] hover:text-white"} transition duration-150 ease-in-out cursor-pointer`} onClick={() => handleClick(option)}>
        <p>{string[id]}</p>
        <p className="flex-[0.75] ml-3">{option}</p>
        <div className='min-w-[6px]'>
          <CheckCircleIcon className={`self-end opacity-0 ${getTick(option)}  h-5`}/> 
          <XCircleIcon className={`self-end hidden ${getTick(option)} h-5`}/>
        </div>
    </div>
  )
}

export default Option