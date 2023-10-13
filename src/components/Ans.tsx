
import Ans_module from './Ans.module.scss';
// define when pressed to change txt color or else
type Props = {
    onPress: () => void;
    text: string;
    color?: string; // '?' means optional
    disabled?: boolean;
}

function Ans(props: Props) {
    // tenary statement
    // if color is provided then it will apply to the button,
    // otherwise, not change anything
    const changestyle = props.color ? { color: props.color } : {};
    return <button onClick={props.onPress}
        disabled={props.disabled}
        className={Ans_module.ansbutton}>
        <span style={changestyle}>{props.text}</span>
    </button>
}

export default Ans