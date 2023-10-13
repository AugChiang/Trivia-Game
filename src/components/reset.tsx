
import Ans_module from './Ans.module.scss';
import App_module from '../App.module.scss';
import Classnames from 'classnames';
import Reset_module from './reset.module.scss'; type Props = {
    totalQuestions: number;
    corrQuestions: number;
    onPress: () => void;
}

function Reset(props: Props) {
    return (
        <div>
            <h1 className={Reset_module.reset_text}>Your Score: {(props.corrQuestions / props.totalQuestions) * 100}%</h1>
            <button 
              onClick={props.onPress}
              className={Classnames(Ans_module.ansbutton, App_module.next_button, Reset_module.reset_button)}
            >Press to Try Again!</button>
        </div>
    );
}

export default Reset