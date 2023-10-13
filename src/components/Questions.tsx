import { Question } from "../types"
import Anses from "./Anses";
import Questions_module from './Questions.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
}

function QuestionComp(props: Props) {
    return (
        <div>
            <h3 className={Questions_module.question}>{props.question.question}</h3>
            <Anses
                question={props.question}
                onSubmit={props.onSubmit}
            />
        </div>
    );
}

export default QuestionComp