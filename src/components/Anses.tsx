import { useState, useEffect } from "react";
import { Question } from "../types";
import Ans from "./Ans";
import Anses_module from './Anses.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
}

function Anses(props: Props) {
    const [showAns, setShowAns] = useState(false);
    // every time inside the '[]' changes, trigger the previous function
    // useEffect(return thing => {function}, [var])
    useEffect(() => {
      setShowAns(false);
    }, [props.question]);
    const onPress = (idx: number) => {
        setShowAns(true);
        props.onSubmit(props.question.ansidx === idx)
    };
    return <div className={Anses_module.choices}>
        {props.question.choices.map((choice, idx) => {
            let color = '';
            if (showAns && props.question.ansidx === idx) color = '#90EE90';
            else if (showAns) color = 'red';

            return <Ans text={choice}
                onPress={() => onPress(idx)}
                color={color}
                disabled={showAns}
                key={idx}
            />;
        })}
    </div>

}

export default Anses