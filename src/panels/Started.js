import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import connect from '@vkontakte/vk-connect'; 
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import List from '@vkontakte/vkui/dist/components/List/List';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator'
import { FormLayout, FormLayoutGroup, Input } from '@vkontakte/vkui';
import { HeaderButton } from '@vkontakte/vkui';
///Icons
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import Icon24Education from '@vkontakte/icons/dist/24/education';
import Icon24UserOutgoing from '@vkontakte/icons/dist/24/user_outgoing';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24Settings from '@vkontakte/icons/dist/24/settings';
import Icon24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24UserAdd from '@vkontakte/icons/dist/24/user_add';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Report from '@vkontakte/icons/dist/24/report';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';


const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton><Icon24User/></HeaderButton>}>Личный кабинет</PanelHeader>
	<Group>
    <Div>Добро пожаловать! Вы находитесь в блоке выбора действий. Пожалуйста выполните действие для продолжения.</Div>    
    </Group>
    <Group>
    <List>
    <Cell expandable before={<Icon24UserOutgoing/>} onClick={go} Data-to="Auth">Вход</Cell>
	<Cell expandable before={<Icon24UserAdd />} onClick={go} Data-to="Register">Регистрация</Cell>
	 </List>
	 </Group>
	 <Group>
	<List>
	 <Cell expandable before={<Icon24Report />} href="https://vk.com/centobr42_press_center">Техническая поддержка</Cell>
	</List>
	</Group>
 </Panel>
);

Home.propTypes = {
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

export default Home;
