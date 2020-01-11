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
  <Cell expandable before={<Avatar src="https://sun9-26.userapi.com/c637919/v637919052/614ca/F6yDV9py2u0.jpg"/>} description="Директор школы">Калистратова Елена Ивановна</Cell>
  <Cell before={<Avatar src="https://sun1-93.userapi.com/c848524/v848524153/1a65c1/4vIW-y1aE0k.jpg"/>} description="Заместитель директора по ВР">Орлова Татьяна Андреевна</Cell>
  <Cell before={<Avatar src="https://sun9-67.userapi.com/c849520/v849520489/5ce9a/kmSvoPoHndE.jpg"/>}>Бральнина Ольга Геннадьевна</Cell>
  <Cell before={<Avatar src="https://sun9-50.userapi.com/c850128/v850128827/32cfc/_63WxP1TFag.jpg"/>} description="Заместитель директора по АХЧ">Орехова Наталья Борисовна</Cell>
  <Cell before={<Avatar src="https://sun1-98.userapi.com/c831409/v831409983/2713e/h41mxG64TLE.jpg"/>} description="Заместитель директора начальной школы">Люлина Елена Николаевна</Cell>
  </List>
  </Group>
   <Group title="Методическое объединение учителей иностранного языка">
   <List>
   <Cell before={<Avatar src="https://ibb.co/5sWnGps"/>} description="Учитель немецкого языка">Глебова Тамара Николаевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/7Jrfzpk"/>} description="Учитель английского языка">Орлова Татьяна Андреевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/k1sL515"/>} description="Учитель английского языка">Хорошавина Елена Николаевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/J3fzD5W"/>} description="Учитель английского языка">Свирелкина Ирина Ивановна</Cell>
   <Cell before={<Avatar src="https://ibb.co/wWbgLQM"/>} description="Учитель английского языка">Могилевская Арина Юрьевна</Cell>
   <Separator style={{ margin: '5px 0' }} />
   <Cell before={<Avatar src="https://ibb.co/fQhrDtq"/>} description="Учитель английского языка">Елгаева Свтелана Анатольевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/bv6FmXG"/>} description="Учитель английского языка">Бабкина Надежда Викторовна</Cell>
   <Cell before={<Avatar src="https://ibb.co/gWBb7Z0"/>} description="Учитель английского языка">Александрова Виктория Валерьевна</Cell>
   </List>
   </Group>
   <Group title="Методическое объединение учителей начальной школы">
   <List>
   <Cell before={<Avatar src="https://ibb.co/ZMK7gqC"/>} description="Учитель, классный руководитель: 2«З»">Белозерова Галина Николаевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/3vFK3QT"/>} description="Классный руководитель: 3«Д»">Сидельникова Татьяна Леонидовна</Cell>
   <Cell before={<Avatar src="https://ibb.co/KDtyRjP"/>} description="Учитель, классный руководитель: 1«Е»">Скамьина Ольга Геннадьевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/SNRg8KC"/>} description="Учитель, классный руководитель: 4«А»">Акиндинова Светлана Владимировна</Cell>
   <Cell before={<Avatar src="https://ibb.co/MPnhDy7"/>} description="Классный руководитель: 3«В»">Аристархова Елена Сергеевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/wccDXHB"/>} description="Учитель, классный руководитель: 1«А»">Бегова Валентина Николаевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/V24hz6d"/>} description="Учитель, классный руководитель: 1«Л»">Белозерова Валентина Николаевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/HYGTSHL"/>} description="Классный руководитель: 3«Г»">Наволоцкая Татьяна Владимировна</Cell>
   <Cell before={<Avatar src="https://ibb.co/FkvFPMM"/>} description="Классный руководитель: 2«К»">Вискова Яна Валериевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/rkb634w"/>} description="Классный руководитель: 2«Е»">Воеводина Наталья Вениаминовна</Cell>
   <Cell before={<Avatar src="https://ibb.co/FwpXyBD"/>} description="Классный руководитель: 3«Ж»">Галасова Александра Глебовна</Cell>
   <Cell before={<Avatar src="https://ibb.co/QcPnsWd"/>} description="Классный руководитель: 3«А»">Житкова Нина Анатольевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/m0kktdh"/>} description="Учитель, классный руководитель: 1«Д»">Ипшман Елена Валериевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/FWP6CBb"/>} description="Учитель, классный руководитель: 1«В»">Колина Маргарита Николаевна</Cell>
   <Cell before={<Avatar src="https://ibb.co/cFCxRsJ"/>} description="Учитель, классный руководитель: 3«Б»">Корельская Светлана Леонидовна</Cell>
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
