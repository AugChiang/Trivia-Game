import QuestionComp from "./components/Questions";
import StatBar from "./components/statbar";
import questions from "./questions.json"
import { Questions } from './types';
import { useState } from 'react';
import App_module from './App.module.scss';
import Reset from "./components/reset";
import Ans_module from './components/Ans.module.scss';
import Classnames from 'classnames';

function App() {
    const allQeusttions = questions as Questions
    const [CurrQuestionIdx, setCurrQuestionsIdx] = useState(0);
    const [CorrAns, setCorrAns] = useState(0);
    const [IncorrAns, setIncorrAns] = useState(0);
    const [WaitAdvance, setWaitAdvance] = useState(false);

    const onSubmit = (correct: boolean) => {
        if (correct) setCorrAns(CorrAns + 1);
        else setIncorrAns(IncorrAns + 1);
        setWaitAdvance(true);
    };

    const advance = () => {
        setWaitAdvance(false);
        setCurrQuestionsIdx(CurrQuestionIdx + 1);
    };

    // reset game (reset states)
    const reset = () => {
        setCurrQuestionsIdx(0);
        setCorrAns(0);
        setIncorrAns(0);
        setWaitAdvance(false);
    };

    if (CurrQuestionIdx >= allQeusttions.questions.length)
        return (
            <Reset
                totalQuestions={allQeusttions.questions.length}
                corrQuestions={CorrAns}
                onPress={reset}
            />
        )


    return <div className={App_module.bg}>
        <StatBar
            currQuestion={CurrQuestionIdx + 1}
            totalQuestion={allQeusttions.questions.length}
            corr={CorrAns}
            incorr={IncorrAns}
        />
        < QuestionComp
            question={allQeusttions.questions[CurrQuestionIdx]}
            onSubmit={onSubmit}
        />
        {WaitAdvance && (
            <button
                onClick={advance}
                className={Classnames(Ans_module.ansbutton, App_module.next_button)}
            >Next Question ...</button>
        )}
    </div>
}

export default App;
