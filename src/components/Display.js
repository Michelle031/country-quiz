import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { appSelector, setAnswer, setAnswerSelected, setQuestion, setQuestionNo, setRestart, setScore } from '../features/appSlice'
import CapitalQuestion from './CapitalQuestion'
import Flagquestion from './Flagquestion'
import Option from './Option'

function Display() {

    const { answerSelected, questionSet, questionNo, question, score} = useSelector(appSelector);
    const [img, setImg] = useState(false);
    const [flag, setFlag] = useState("");
    const [options, setOptions] = useState([]);
    const [title, setTitle] = useState(false);
    const dispatch = useDispatch();
    const restart = () => {
        dispatch(setScore(0));
        dispatch(setQuestionNo(0));
        dispatch(setRestart(true));
    }

    const next = () => {
        if (answerSelected) {
            dispatch(setQuestionNo(questionNo + 1));
            dispatch(setAnswerSelected(null));
        }
    }

    useEffect(() => {
        dispatch(setQuestion(questionSet[questionNo]));
        if(question?.data?.img === true) {
            setImg(true);
            setFlag(question.data?.flag);
            dispatch(setAnswer(question?.answer));
            setOptions(question?.options);
        } else {
            setImg(false);
            setTitle(question?.data?.capital);
            dispatch(setAnswer(question?.answer));
            setOptions(question?.options);
        }
    },[dispatch, question, questionNo]);

  return (
    <div className='relative max-w-[370px] min-w-[370px] p-6 bg-white rounded-3xl flex flex-col '>
        {questionNo < 9 ? (
            <>
            <img src="/images/quiz.png" alt="" className='absolute h-[80px] -top-8 right-4'/>
            {img ? <Flagquestion flag={flag} /> : <CapitalQuestion title={title} />}
            <div className="flex flex-col space-y-4">
                {options?.map((option, i) => (
                    <Option key={i} id={i} option={option} />
                ))}
            </div>
        {questionNo < 9 && (<button className="bg-[#F9A826] py-4 px-7 text-xs text-white rounded-2xl self-end mt-4 hover:bg-[#f97a26] transition duration-150 ease-in-out" onClick={next}>
                 Next
            </button>
            )}
            </>
        ) : (
            <>
            <div className="text-[#1D355D] flex flex-col items-center justify-center space-y-6">
        <img src="/images/trophy.png" alt="" className='h-[140px]'/>
        <h1 className='font-bold text-4xl'>Results</h1>
        <p>You got <span className='text-[#6FCF97] text-2xl font-extrabold'>{score}</span> correct answers</p>
        <button className='border-[#1D355D] border-2 rounded-xl px-14 py-4 hover:text-white hover:bg-[#1D355D] transition duration-150 ease-in-out' onClick={restart}>Try again</button>
    </div>
    </>
        )}
    </div>
  )
}

export default Display