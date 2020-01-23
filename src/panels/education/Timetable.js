import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import connect from '@vkontakte/vk-connect'; 
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import List from '@vkontakte/vkui/dist/components/List/List';
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, Separator } from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
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
import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Users from '@vkontakte/icons/dist/24/users';
import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import user from '@vkontakte/icons/dist/24/user';

const Timetable = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
	<PanelHeader left={<HeaderButton onClick={go} Data-to="Education"><Icon24BrowserBack/></HeaderButton>}>Расписание уроков</PanelHeader>
  <Group title="5-е классы">
  <List>
  <Cell expandable before={<Avatar src="https://sun9-38.userapi.com/c205224/v205224888/48339/USuKdro0P1w.jpg"/>} onClick={go} Data-to="To5a">5 «А» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-5.userapi.com/c205224/v205224888/48340/_enT_btY0FI.jpg"/>} onClick={go} Data-to="To5b">5 «Б» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-69.userapi.com/c205224/v205224888/48347/JoIgYBMlBmk.jpg"/>} onClick={go} Data-to="To5v">5 «В» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-37.userapi.com/c205224/v205224888/4834e/EQ2zaY5bsvw.jpg"/>} onClick={go} Data-to="To5g">5 «Г» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-21.userapi.com/c205224/v205224888/48355/RzLo8WV_wQ0.jpg"/>} onClick={go} Data-to="To5d">5 «Д» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-4.userapi.com/c205224/v205224888/4835c/M6K_An_TFMQ.jpg"/>} onClick={go} Data-to="To5e">5 «Е» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-3.userapi.com/c205224/v205224888/48363/tM558wpmH2E.jpg"/>} onClick={go} Data-to="To5h">5 «Ж» класс</Cell>
  </List>
  </Group>
  <Group title="6-е классы">
  <List>
  <Cell expandable before={<Icon24Users/>}>6 «А» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>6 «Б» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>6 «В» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>6 «Г» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>6 «Д» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>6 «Е» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>6 «Ж» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>6 «З» класс</Cell>
  </List>
  </Group>
  <Group title="7-е классы">
  <List>
  <Cell expandable before={<Icon24Users/>}>7 «А» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>7 «Б» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>7 «В» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>7 «Г» класс</Cell>
  </List>
  </Group>
  <Group title="8-е классы">
  <List>
  <Cell expandable before={<Icon24Users/>}>8 «A» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>8 «Б» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>8 «В» класс</Cell>
  </List>
  </Group>
  <Group title="9-е классы">
  <List>
  <Cell expandable before={<Icon24Users/>}>9 «А» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>9 «Б» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>9 «В» класс</Cell>
  </List>
  </Group>
  <Group title="10-е классы">
  <List>
  <Cell expandable before={<Icon24Users/>}>10 «А» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>10 «Б» класс</Cell>
  </List>
  </Group>
  <Group title="11-е классы">
  <List>
  <Cell expandable before={<Icon24Users/>}>11 «А» класс</Cell>
  <Cell expandable before={<Icon24Users/>}>11 «Б» класс</Cell>
  </List>
  </Group>
 </Panel>
);

Timetable.propTypes = {
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

export default Timetable;
