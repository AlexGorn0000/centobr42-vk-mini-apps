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

const Teaching = ({ id, go, fetchedUser}) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton onClick={go} Data-to="Education"><Icon24BrowserBack/></HeaderButton>}>?????????????? ??????</PanelHeader>
  <Group title="5-? ??????">
  <List>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>} onClick={go} Data-to="5a">5 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>5 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>5 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>5 "?" ?????</Cell>
  </List>
  </Group>
  <Group title="6-? ??????">
  <List>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>6 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>6 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>6 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>6 "?" ?????</Cell>
  </List>
  </Group>
  <Group title="7-? ??????">
  <List>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>7 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>7 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>7 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>7 "?" ?????</Cell>
  </List>
  </Group>
  <Group title="8-? ??????">
  <List>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>8 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>8 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>8 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>8 "?" ?????</Cell>
  </List>
  </Group>
  <Group title="9-? ??????">
  <List>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>9 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>9 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>9 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>9 "?" ?????</Cell>
  </List>
  </Group>
  <Group title="10-? ??????">
  <List>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>10 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>10 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>10 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>10 "?" ?????</Cell>
  </List>
  </Group>
  <Group title="11-? ??????">
  <List>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>11 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>11 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>11 "?" ?????</Cell>
  <Cell before={<Icon24Users/>} asideContent={<Icon24ShareOutline/>}>11 "?" ?????</Cell>
  </List>
  </Group>
 </Panel>
);

Teaching.propTypes = {
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

export default Teaching;
