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
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import user from '@vkontakte/icons/dist/24/user';
import Icon24Up from '@vkontakte/icons/dist/24/up';


const Activity = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton onClick={go} Data-to="Home"><Icon24Newsfeed/></HeaderButton>}>Доска почета</PanelHeader>
   
		<img width="380" src="https://avatars.mds.yandex.net/get-pdb/2828228/f15db48c-0e29-4099-b7de-2c3c5d152bba/s1200"></img>
		{fetchedUser &&
		<Group>
		<Div><center>Учавсвуй в жизни класса и школы, и зарабатывай баллы</center></Div>
		<Div><center>"Будь лучшим - среди лучших!" - Александр Горбунов</center></Div>
		</Group>}
		{fetchedUser &&
		<Group title="Мой рейтинг">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} description={fetchedUser.score}/> : null}
				>{`${fetchedUser.first_name} ${fetchedUser.last_name}`}</Cell>
		</Group>}	
   <Group title="Лучшие">
    <List>
   <Cell before={<Avatar src="https://sun9-21.userapi.com/c637919/v637919052/614c8/8QpNZCT3eMQ.jpg"/>} description="Баллы: 0">Елена Калистатова</Cell>   
   <Cell before={<Avatar src="https://sun1-93.userapi.com/c850636/v850636928/4e1a2/pvAHDW3aIcg.jpg"/>} description="Баллы: 0">Борис Караваев</Cell> 
   <Cell before={<Avatar src="https://sun1-88.userapi.com/c849224/v849224269/1e5641/ocAcUpxj54Q.jpg"/>} description="Баллы: 0">Максим Миронов</Cell> 
   <Cell before={<Avatar src="https://sun9-42.userapi.com/c855432/v855432805/1b5d22/u-uUY_k_GCg.jpg"/>} description="Баллы: 0">Даниил Аксенов</Cell> 
   <Cell before={<Avatar src="https://sun9-54.userapi.com/c855320/v855320779/e8adf/6-zwcZuCkqU.jpg"/>} description="Баллы: 0">Александр Горбунов</Cell> 
   </List>
   </Group>
</Panel>
);

Activity.propTypes = {
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

export default Activity;
