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
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search } from '@vkontakte/vkui';
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
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import user from '@vkontakte/icons/dist/24/user';


const Education = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton onClick={go} Data-to="Education"><Icon24BrowserBack/></HeaderButton>}>Педагогический состав</PanelHeader>
   
  <Group title="Администрация школы">
  <List>
  <Cell expandable before={<Avatar src="https://sun9-26.userapi.com/c637919/v637919052/614ca/F6yDV9py2u0.jpg"/>} description="Директор школы">Елена Калистратова</Cell>
  <Cell before={<Avatar src="https://sun1-93.userapi.com/c848524/v848524153/1a65c1/4vIW-y1aE0k.jpg"/>} description="Заместитель директора по ВР">Татьяна Орлова</Cell>
  <Cell before={<Avatar src="https://sun9-67.userapi.com/c849520/v849520489/5ce9a/kmSvoPoHndE.jpg"/>}>Ольга Бральнина</Cell>
  <Cell before={<Avatar src="https://sun9-50.userapi.com/c850128/v850128827/32cfc/_63WxP1TFag.jpg"/>} description="Заместитель директора по АХЧ">Наталья Орехова</Cell>
  <Cell before={<Avatar src="https://sun1-98.userapi.com/c831409/v831409983/2713e/h41mxG64TLE.jpg"/>} description="Заместитель директора начальной школы">Елена Люлина</Cell>
  </List>
  </Group>
   <Group title="Технологический факультет">
   <List>
   <Cell before={<Avatar src="https://sun9-45.userapi.com/c850636/v850636928/4e1a2/pvAHDW3aIcg.jpg"/>} description="IT-специалист">Борис Караваев</Cell>
   <Cell before={<Avatar src="https://sun1-30.userapi.com/c855320/v855320779/e8ae7/9e9inKCSaeY.jpg"/>} description="IT-специалист">Александр Горбунов</Cell>
   <Cell before={<Avatar src="https://sun9-20.userapi.com/c846524/v846524892/19be51/z8CEHzb5PEY.jpg"/>} description="Учитель технологии">Иван Невзоров</Cell>
   <Cell before={<Avatar src="https://sun1-88.userapi.com/c200824/v200824396/27ad0/wnwQ3e2i-Tw.jpg"/>} description="Учитель технологии">Елена Ролич</Cell>
   </List>
   </Group>
   <Group title="Историко-филологический факультет">
   <List>
   <Cell before={<Avatar src="https://sun9-16.userapi.com/c850128/v850128470/1c2f33/ZvkjHi6JXOE.jpg"/>} description="Учитель русского языка и литературы">Вера Сычева</Cell>
   <Cell before={<Avatar src="https://sun9-7.userapi.com/c857016/v857016323/59729/-AnouOSzMoQ.jpg"/>} description="Учитель русского языка и литературы">Анна Сахарусова</Cell>
   </List>
   </Group>
   <Group title="Физико-математический факультет">
   <List>
   <Cell before={<Avatar src="https://sun1-14.userapi.com/c853524/v853524717/121c1e/EEbomI-Br7M.jpg"/>} description="Учитель физики и математики">Наталья Зуева</Cell>
   <Cell before={<Avatar src="https://sun9-62.userapi.com/c858120/v858120788/c526f/jbW3KG-3kdU.jpg"/>} description="Учитель математики">Анна Дурягина</Cell>
   </List>
   </Group>
   <Group title="Учителя начальных классов">
   <List>
   </List>
   </Group>
   
 </Panel>
);

Education.propTypes = {
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

export default Education;
