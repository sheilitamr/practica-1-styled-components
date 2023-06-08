import { useState } from 'react';
import { Square } from './styles';

const SquareColors = () => {
	const [active, setActive] = useState(true);
	return (
		<>
			<Square active={active} />
			<button onClick={() => setActive(!active)}>Change Color</button>
		</>
	);
};

export default SquareColors;
