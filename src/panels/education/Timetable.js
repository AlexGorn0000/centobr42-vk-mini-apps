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
  <FixedLayout>
  <img width="100%" height="50%" src="https://sun9-5.userapi.com/c204628/v204628810/50fca/0P_UVJPR_qY.jpg"/>
  </FixedLayout>
  <Group title="5-е классы">
  <List>
  <Cell expandable before={<Avatar src="https://sun9-69.userapi.com/c204628/v204628887/4904e/eFOm_3bHQIk.jpg"/>} onClick={go} Data-to="To5a">5 «А» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-4.userapi.com/c204628/v204628887/49055/W8Hxcp2lK4k.jpg"/>} onClick={go} Data-to="To5b">5 «Б» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-52.userapi.com/c204628/v204628887/4905c/Amc6hen3ckQ.jpg"/>} onClick={go} Data-to="To5v">5 «В» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-47.userapi.com/c204628/v204628887/49063/bk5nezqsB1Q.jpg"/>} onClick={go} Data-to="To5g">5 «Г» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-6.userapi.com/c204628/v204628887/4906a/jXtIZgGCePQ.jpg"/>} onClick={go} Data-to="To5d">5 «Д» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-20.userapi.com/c204628/v204628887/49071/EUpNYPHOyr0.jpg"/>} onClick={go} Data-to="To5e">5 «Е» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-70.userapi.com/c204628/v204628887/49078/H6IS63Gks7M.jpg"/>} onClick={go} Data-to="To5h">5 «Ж» класс</Cell>
  </List>
  </Group>
  <Group title="6-е классы">
  <List>
  <Cell expandable before={<Avatar src="https://sun9-16.userapi.com/c204628/v204628887/4907f/JL5Ein_D2YA.jpg"/>} onClick={go} Data-to="To6a">6 «А» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-49.userapi.com/c204628/v204628887/49086/kITrF-B_L9g.jpg"/>} onClick={go} Data-to="To6b">6 «Б» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-63.userapi.com/c204628/v204628887/4908d/PvM7KFIoqvc.jpg"/>} onClick={go} Data-to="To6v">6 «В» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-68.userapi.com/c204628/v204628887/49094/t2W3ZRY4XHw.jpg"/>} onClick={go} Data-to="To6g">6 «Г» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-44.userapi.com/c204628/v204628887/4909b/jdjG3WUyWmk.jpg"/>} onClick={go} Data-to="To6d">6 «Д» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-61.userapi.com/c204628/v204628887/490a2/EAuuXu717xM.jpg"/>} onClick={go} Data-to="To6e">6 «Е» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-18.userapi.com/c204628/v204628887/490a9/SmxeWu46-RM.jpg"/>} onClick={go} Data-to="To6h">6 «Ж» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-50.userapi.com/c204628/v204628887/490b0/BUaRBp57Pi4.jpg"/>} onClick={go} Data-to="To6z">6 «З» класс</Cell>
  </List>
  </Group>
  <Group title="7-е классы">
  <List>
  <Cell expandable before={<Avatar src="https://sun9-45.userapi.com/c204628/v204628887/490b7/l7m7icyWbiQ.jpg"/>} onClick={go} Data-to="To7a">7 «А» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-11.userapi.com/c204628/v204628887/490be/sQqWGz2pPrs.jpg"/>} onClick={go} Data-to="To7b">7 «Б» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-5.userapi.com/c204628/v204628887/490c5/PtXpBtMpqJA.jpg"/>} onClick={go} Data-to="To7v">7 «В» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-39.userapi.com/c204628/v204628887/490cc/fz6ESNDQuDc.jpg"/>} onClick={go} Data-to="To7g">7 «Г» класс</Cell>
  </List>
  </Group>
  <Group title="8-е классы">
  <List>
  <Cell expandable before={<Avatar src="https://sun9-22.userapi.com/c204628/v204628887/490d3/qmiRntWiYJg.jpg"/>} onClick={go} Data-to="To8a">8 «A» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-15.userapi.com/c204628/v204628887/490da/xXAut-jzmH0.jpg"/>} onClick={go} Data-to="To8b">8 «Б» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-30.userapi.com/c204628/v204628887/490e1/SaxAqxFDD-A.jpg"/>} onClick={go} Data-to="To8v">8 «В» класс</Cell>
  </List>
  </Group>
  <Group title="9-е классы">
  <List>
  <Cell expandable before={<Avatar src="https://sun9-19.userapi.com/c204628/v204628887/490e8/8cqIvHry0zk.jpg"/>} onClick={go} Data-to="To9a">9 «А» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-38.userapi.com/c204628/v204628887/490ef/ObpCEV833ZQ.jpg"/>} onClick={go} Data-to="To9b">9 «Б» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-42.userapi.com/c204628/v204628887/490f6/f1cgs77rWPg.jpg"/>} onClick={go} Data-to="To9v">9 «В» класс</Cell>
  </List>
  </Group>
  <Group title="10-е классы">
  <List>
  <Cell expandable before={<Avatar src="https://sun9-6.userapi.com/c204628/v204628887/490fd/MkdOiH-s6kM.jpg"/>} onClick={go} Data-to="To10a">10 «А» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-11.userapi.com/c204628/v204628887/49104/Awol5kwCMic.jpg"/>} onClick={go} Data-to="To10b">10 «Б» класс</Cell>
  </List>
  </Group>
  <Group title="11-е классы">
  <List>
  <Cell expandable before={<Avatar src="https://sun9-16.userapi.com/c204628/v204628887/4910b/fI9CcMvUBqw.jpg"/>} onClick={go} Data-to="To11a">11 «А» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-35.userapi.com/c204628/v204628887/49112/ymx0bbUKjcY.jpg"/>} onClick={go} Data-to="To11b">11 «Б» класс</Cell>
  <Cell expandable before={<Avatar src="https://sun9-3.userapi.com/c858228/v858228394/1575f1/M4omkVu1Fec.jpg"/>} onClick={go} Data-to="To11v">11 «В» класс</Cell>
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
