import { createBoard } from '@wixc3/react-board';
import StatBar from '../../../components/statbar';

export default createBoard({
    name: 'StatBar',
    Board: () => <StatBar />,
    isSnippet: true,
});
