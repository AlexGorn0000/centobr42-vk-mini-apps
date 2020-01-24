import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Auth from './panels/Auth';
import Home from './panels/general/Home';
import Profile from './panels/general/Profile';
import Activity from './panels/general/Activity'
import Education from './panels/general/Education';
import Settings from './panels/general/Settings';
import Projects from './panels/general/Projects';
import Teaching from './panels/education/Teaching';
import Timetable from './panels/education/Timetable';
import To5a from './panels/education/classes/5/To5a';
import To5b from './panels/education/classes/5/To5b';
import To5v from './panels/education/classes/5/To5v';
import To5g from './panels/education/classes/5/To5g';
import To5d from './panels/education/classes/5/To5d';
import To5e from './panels/education/classes/5/To5e';
import To5h from './panels/education/classes/5/To5h';
import To6a from './panels/education/classes/6/To6a';
import To6b from './panels/education/classes/6/To6b';
import Project1 from './panels/projects/Project1';


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
			<Profile id='Profile' fetchedUser={fetchedUser} go={go} />
			<Activity id='Activity' fetchedUser={fetchedUser} go={go} />
			<Education id='Education' fetchedUser={fetchedUser} go={go}/>
			<Projects id='Projects' go={go}/>
			<Settings id='Settings' fetchedUser={fetchedUser} go={go} />
			<Teaching id='Teaching' fetchedUser={fetchedUser} go={go} />
			<Timetable id='Timetable' fetchedUser={fetchedUser} go={go}/>
			<To5a id="To5a" go={go}/>
			<To5b id="To5b" go={go}/>
			<To5v id="To5v" go={go}/>
			<To5g id="To5g" go={go}/>
			<To5d id="To5d" go={go}/>
			<To5e id="To5e" go={go}/>
			<To5h id="To5h" go={go}/>
			<To5h id="To6a" go={go}/>
			<To5h id="To6b" go={go}/>
			<Project1 id='Project1' go={go} />
		</View>
	);
}

export default App;

