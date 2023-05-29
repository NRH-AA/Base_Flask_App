import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import { changeTheme } from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }){
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const sessionTheme = useSelector(state => state.session.theme);
	
	// if (!sessionUser) return null;
	
	const getNextTheme = () => sessionTheme === 'dark' ? 'light' : 'dark';
	
	// Set data-theme on our body. 
	const bodyNode = document.body;
	bodyNode.setAttribute('data-theme', sessionTheme);
	
	return (
		<div id="navigation-container">
			<button
				onClick={() => dispatch(changeTheme(getNextTheme()))}
			>Change Theme</button>
						
		<div>
			{isLoaded && <ProfileButton user={sessionUser} />}
		</div>
					
		</div>
	);
};

export default Navigation;
