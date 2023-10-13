
import Statbar_module from './statbar.module.scss';// Status Bar
type Props = {
    currQuestion: number;
    totalQuestion: number;
    corr: number;
    incorr: number;
}

function StatBar(props: Props) {
    return <div className={Statbar_module['stat-container']}>
        <p>
            Questions: {props.currQuestion} / {props.totalQuestion}
        </p>
        <p>Correct: {props.corr}</p>
        <p>Incorrect: {props.incorr}</p>
    </div>
}

// set 'StatBar' availble outside this individual ts file
export default StatBar