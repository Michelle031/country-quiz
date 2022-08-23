import React, { useEffect } from 'react'
import { appSelector, setQuestion, setQuestions } from '../features/appSlice';
import { useSelector, useDispatch } from 'react-redux'
import { shuffle} from "lodash"

function SetOptions() {
    const { questionNo, capitalPlay, flagPlay, countryOptions, restart } = useSelector(appSelector);
    const dispatch = useDispatch();

    const countries = capitalPlay.map(data => {
        let options = shuffle([...new Set([...countryOptions])]);
        options = options.slice(0, 3);
        options.unshift(data.country);
        options = shuffle(options);
        return {
            data,
            answer: data.country,
            options,
        }

    })
    const flags = flagPlay.map(data => {
        let options = shuffle([...new Set([...countryOptions])]);
        options = options.slice(0, 3);
        options.unshift(data.country);
        options = shuffle(options);
        return {
            data,
            answer: data.country,
            options,
        }

    })
    const questionSet = shuffle(shuffle(countries.concat(flags)));
    
    useEffect(() => {
        dispatch(setQuestions(questionSet));
    }, [dispatch, restart]);

    
  return;
}

export default SetOptions;
