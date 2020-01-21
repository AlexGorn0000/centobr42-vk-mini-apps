import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Auth from './panels/Auth';
import Home from './panels/Home';
import Profile from './panels/Profile';
import Activity from './panels/Activity'
import Education from './panels/Education';
import Settings from './panels/Settings';
import Teaching from './panels/Teaching';
import Projects from './panels/Projects';
import Project1 from './panels/Project1';

const App = () => {
	const [activePanel, setActivePanel] = useState('Auth');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	
	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
				}
		});

		
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			connect.sendPromise("VKWebAppGetAuthToken", {"app_id": 7266393,"scope": 'notify,friends,photos'}); 
			connect.sendPromise("VKWebAppJoinGroup", {"group_id": 168892763});
			setUser(user);
			setPopout(null);
			}
		fetchData();
	}, []);
	
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Auth id='Auth' fetchedUser={fetchedUser} go={go} />
			<Home id='Home' fetchedUser={fetchedUser} go={go} />
			<Activity id='Activity' fetchedUser={fetchedUser} go={go} />
			<Education id='Education' fetchedUser={fetchedUser} go={go}/>
			<Teaching id='Teaching' fetchedUser={fetchedUser} go={go} />
			<Settings id='Settings' fetchedUser={fetchedUser} go={go} />
			<Profile id='Profile' fetchedUser={fetchedUser} go={go} />
			<Projects id='Projects' go={go}/>
			<Project1 id='Project1' go={go} />
		</View>
	);
}

export default App;

