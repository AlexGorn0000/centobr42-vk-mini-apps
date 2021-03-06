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
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton, Header, HorizontalScroll } from '@vkontakte/vkui';
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
import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import user from '@vkontakte/icons/dist/24/user';
import Icon12Verified from '@vkontakte/icons/dist/12/verified';

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


const APanel = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton onClick={go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>Администрационная панель</PanelHeader>
 		{fetchedUser &&
		<Group>
		<Cell before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null} after={<Icon12Verified/>} description="Статус: преподаватель">{`${fetchedUser.first_name} ${fetchedUser.last_name}`}</Cell>
        </Group>}
 </Panel>
);

APanel.propTypes = {
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

export default APanel;
