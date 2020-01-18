import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import List from '@vkontakte/vkui/dist/components/List/List';
import { FormLayout, FormLayoutGroup, Input, FormStatus, HorizontalScroll, Separator, Select, colors} from '@vkontakte/vkui';
import { HeaderButton } from '@vkontakte/vkui';
///Icons
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import Icon20EducationOutline from '@vkontakte/icons/dist/20/education_outline';
import Icon24UserOutgoing from '@vkontakte/icons/dist/24/user_outgoing';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28Mention from '@vkontakte/icons/dist/28/mention';
import Icon28RecentOutline from '@vkontakte/icons/dist/28/recent_outline';
import Icon56EventOutline from '@vkontakte/icons/dist/56/event_outline';
import '../css/style.css';
/*
const users = [
    {id: 223646052, name: "Елена Калистратова"},
    {id: 7181764, name: "Татьяна Орлова"},
    {id: 59155411, name: "Наталья Зуева"},
    {id: 270919242, name: "Александр Горбунов"},
	{id: 3273910, name: "Борис Караваев"}
  ];

  const login = [
    {id: 223646052, login: "yelena.kalistratova"},
    {id: 7181764, login: "tatyana.orlova"},
    {id: 59155411, login: "natalyyaa"},
    {id: 270919242, login: "allexgorn"},
	{id: 3273910, login: "karavaevb"}
  ];

  const password = [
	{id: 223646052, password: "81456943"},
    {id: 7181764, password: "95793857"},
    {id: 59155411, password: "63858589"},
    {id: 270919242, password: "81457066"},
	{id: 3273910, password: "18593848"}
  ];
*/
const Auth = ({ id, go, fetchedUser }) => (
	<Panel id={id} theme="client_dark">
		<div className="background_auth">
		<PanelHeader left={<HeaderButton><Icon24UserOutgoing/></HeaderButton>}>Вход в учетную запись</PanelHeader>
		<Group>
		<img style={{ marginLeft: '155px'}} width="80" height="75" src="https://sun9-18.userapi.com/c200628/v200628344/41609/ZxjRT37a5Qs.jpg"/>
		<h4 style={{textAlign: 'center'}}>Добро пожаловать в<br/>Личный кабинет</h4>
		<Separator style={{margin: '5px 0'}}/>
		<Cell before={<Icon28RecentOutline/>}>Будьте всегда в центре событий!</Cell>
		<Cell before={<Icon28ArticleOutline/>}>Будьте в курсе завтрашних уроков!</Cell>
		<Cell before={<Icon28Mention/>}>Получайте сведения о мероприятиях!</Cell>
		<Separator style={{margin: '5px 0'}}/>
		<FormLayout>
		<FormLayoutGroup>
		<h4 style={{marginLeft: '20px'}}>Выберите платформу</h4>
		<Select>
		<option value="gosuslugi">ГосУслуги</option>
		<option value="ВКонтакте">ВКонтакте</option>
		</Select>
		<br></br>
		<h4 style={{marginLeft: '20px'}}>Введите данные для входа</h4>
        <Input type="login" placeholder="Введите логин" />
		<Input type="password" placeholder="Введите пароль"/>
		<Button size="xl" level="primary" onClick={go} Data-to="Home">Войти</Button>
        </FormLayoutGroup>
        </FormLayout>
		</Group>
		</div>
	</Panel>	
);

Auth.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
		title: PropTypes.string,
		}),
	}),
};

export default Auth;
