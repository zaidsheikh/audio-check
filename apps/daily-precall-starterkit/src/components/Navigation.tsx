import { NavLink } from 'react-router-dom';

export const Navigation = () => {
	return (
		<nav>
			<NavLink
				to={`mic-check`}
				className={({ isActive }) => (isActive ? 'active' : 'nav')}>
				<h3>Microphone check</h3>
			</NavLink>
			<NavLink
				to={`speaker-check`}
				className={({ isActive }) => (isActive ? 'active' : 'nav')}>
				<h3>Speaker check</h3>
			</NavLink>
			{/* <NavLink
				to={`network-check`}
				className={({ isActive }) => (isActive ? 'active' : 'nav')}>
				Network check
			</NavLink>
			<NavLink
				to={`connection-check`}
				className={({ isActive }) => (isActive ? 'active' : 'nav')}>
				Connection check
			</NavLink>
			<NavLink
				to={`websockets-check`}
				className={({ isActive }) => (isActive ? 'active' : 'nav')}>
				Websocket check
			</NavLink>
			<a href="/" className="nav">
				Restart
			</a> */}
		</nav>
	);
};
