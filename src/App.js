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
import Help from './panels/general/Help';
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
import To6v from './panels/education/classes/6/To6v';
import To6g from './panels/education/classes/6/To6g';
import To6d from './panels/education/classes/6/To6d';
import To6e from './panels/education/classes/6/To6e';
import To6h from './panels/education/classes/6/To6h';
import To6z from './panels/education/classes/6/To6z';
import To7a from './panels/education/classes/7/To7a';
import To7b from './panels/education/classes/7/To7b';
import To7v from './panels/education/classes/7/To7v';
import To7g from './panels/education/classes/7/To7g';
import To8a from './panels/education/classes/8/To8a';
import To8b from './panels/education/classes/8/To8b';
import To8v from './panels/education/classes/8/To8v';
import To9a from './panels/education/classes/9/To9a';
import To9b from './panels/education/classes/9/To9b';
import To9v from './panels/education/classes/9/To9v';
import To10a from './panels/education/classes/10/To10a';
import To10b from './panels/education/classes/10/To10b';
import To11a from './panels/education/classes/11/To11a';
import To11b from './panels/education/classes/11/To11b';
import To11v from './panels/education/classes/11/To11v';
import Project1 from './panels/projects/project1/Project1';
import Project2 from './panels/projects/project2/Project2';

const App = () => {
	const [activePanel, setActivePanel] = useState('Profile');
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
			connect.sendPromise("VKWebAppGetAuthToken", {"app_id": 7266393,"scope": 'notify,friends,photos,poll'}); 
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
			<Help id ='Help' fetchedUser={fetchedUser} go={go}/>
			<To5a id="To5a" go={go}/>
			<To5b id="To5b" go={go}/>
			<To5v id="To5v" go={go}/>
			<To5g id="To5g" go={go}/>
			<To5d id="To5d" go={go}/>
			<To5e id="To5e" go={go}/>
			<To5h id="To5h" go={go}/>
			<To6a id="To6a" go={go}/>
			<To6b id="To6b" go={go}/>
			<To6v id="To6v" go={go}/>
			<To6g id="To6g" go={go}/>
			<To6d id="To6d" go={go}/>
			<To6e id="To6e" go={go}/>
			<To6h id="To6h" go={go}/>
			<To6z id="To6z" go={go}/>
			<To7a id="To7a" go={go}/>
			<To7b id="To7b" go={go}/>
			<To7v id="To7v" go={go}/>
			<To7g id="To7g" go={go}/>
			<To8a id="To8a" go={go}/>
			<To8b id="To8b" go={go}/>
			<To8v id="To8v" go={go}/>
			<To9a id="To9a" go={go}/>
			<To9b id="To9b" go={go}/>
			<To9v id="To9v" go={go}/>
			<To10a id="To10a" go={go}/>
			<To10b id="To10b" go={go}/>
			<To11a id="To11a" go={go}/>
			<To11b id="To11b" go={go}/>
			<To11v id="To11v" go={go}/>
			<Project1 id='Project1' go={go} />
			<Project2 id='Project2' go={go} />
		</View>
	);
}

export default App;

