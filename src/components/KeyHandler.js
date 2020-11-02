import KeyboardEventHandler from 'react-keyboard-event-handler';

const KeyHandler = ({ handleKeyPressed }) => (
  <KeyboardEventHandler
    handleKeys={['enter']}
    onKeyEvent={() => handleKeyPressed()} />
);

export default KeyHandler;