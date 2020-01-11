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
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/1-1-200x300.jpg"/>} description="Учитель немецкого языка">Глебова Тамара Николаевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/3-233x300.jpg"/>} description="Учитель английского языка">Орлова Татьяна Андреевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/3-1-201x300.jpg"/>} description="Учитель английского языка">Хорошавина Елена Николаевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/4-1-201x300.jpg"/>} description="Учитель английского языка">Свирелкина Ирина Ивановна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/5-1-201x300.jpg"/>} description="Учитель английского языка">Могилевская Арина Юрьевна</Cell>
   <Separator style={{ margin: '5px 0' }} />
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/6-1-201x300.jpg"/>} description="Учитель английского языка">Гостевская Анна Николаевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/09/Елгаева-С.А.-252x300.jpg"/>} description="Учитель английского языка">Елгаева Свтелана Анатольевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/7-1-201x300.jpg"/>} description="Учитель английского языка">Бабкина Надежда Викторовна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/8-201x300.png"/>} description="Учитель английского языка">Александрова Виктория Валерьевна</Cell>
   </List>
   </Group>
   <Group title="Методическое объединение учителей начальной школы">
   <List>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/09/белозерова-Г.Н-300x291.jpg"/>} description="Учитель, классный руководитель: 2 «З»">Белозерова Галина Николаевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/2-2-202x300.jpg"/>} description="Классный руководитель: 3 «Д»">Сидельникова Татьяна Леонидовна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/09/Скамьина-О.Г.-212x300.jpg"/>} description="Учитель, классный руководитель: 1 «Е»">Скамьина Ольга Геннадьевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/5-2-210x300.jpg"/>} description="Учитель, классный руководитель: 4 «А»">Акиндинова Светлана Владимировна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/6-2-201x300.jpg"/>} description="Классный руководитель: 3 «В»">Аристархова Елена Сергеевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/7-2-200x300.jpg"/>} description="Учитель, классный руководитель: 1 «А»">Бегова Валентина Николаевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/8-1-219x300.jpg"/>} description="Учитель, классный руководитель: 1 «Л»">Белозерова Валентина Николаевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/9-1-201x300.jpg"/>} description="Классный руководитель: 3 «Г»">Наволоцкая Татьяна Владимировна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/10-1-201x300.jpg"/>} description="Классный руководитель: 2 «К»">Вискова Яна Валериевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/11-1-201x300.jpg"/>} description="Классный руководитель: 2 «Е»">Воеводина Наталья Вениаминовна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/12-201x300.jpg"/>} description="Классный руководитель: 3 «Ж»">Галасова Александра Глебовна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/13-231x300.jpg"/>} description="Классный руководитель: 3 «А»">Житкова Нина Анатольевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/14-201x300.jpg"/>} description="Учитель, классный руководитель: 1 «Д»">Ипшман Елена Валериевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/16-200x300.jpg"/>} description="Учитель, классный руководитель: 1 «В»">Колина Маргарита Николаевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/17-201x300.jpg"/>} description="Учитель, классный руководитель: 3 «Б»">Корельская Светлана Леонидовна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/18-200x300.jpg"/>} description="Учитель, классный руководитель: 2 «А»">Крупенникова Елена Владимировна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/19-200x300.jpg"/>} description="Учитель, классный руководитель: 1 «И»">Латышева Анна Михайловна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/20-200x300.jpg"/>} description="Учитель, классный руководитель: 1 «К»">Лунева Светлана Васильевна</Cell>
   <Cell before={<Avatar src="https://sun1-91.userapi.com/c200320/v200320873/14839/dARNGnKASrs.jpg"/>} description="Учитель, классный руководитель: 1 «Б»">Коноплева Дарья Алексеевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/22-201x300.jpg"/>} description="Учитель, классный руководитель: 2 «И»">Мартюгова Елена Ивановна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/23-201x300.jpg"/>} description="Учитель, классный руководитель: 4 «Б»">Межакова Светлана Викторовна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/25-201x300.jpg"/>} description="Учитель, классный руководитель: 3 «Е»">Михайлова Инна Сергеевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/26-201x300.jpg"/>} description="Учитель, классный руководитель: 1 «Г»">Осипова Татьяна Владимировна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/09/Ромашова-АВ-201x300.jpg"/>} description="Учитель, классный руководитель: 4 «Д»">Ромашова Алла Викторовна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/28-201x300.jpg"/>} description="Учитель, классный руководитель: 1 «Ж»">Смыслова Светлана Викторовна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/29-201x300.jpg"/>} description="Учитель, классный руководитель: 4 «Е»">Шарова Елена Владимировна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/30-201x300.jpg"/>} description="Учитель, классный руководитель: 2 «Г»">Шарова Марина Николаевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/31-201x300.jpg"/>} description="Учитель, классный руководитель: 4 «В»">Стафеева Алена Александровна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/32-201x300.jpg"/>} description="Учитель, классный руководитель: 2 «Б»">Чекмарева Ольга Юрьевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/33-201x300.jpg"/>} description="Учитель музыки с 1-3 класс">Огорелышева Светлана Леонидовна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/34-201x300.jpg"/>} description="Логопед с 1-4 класс">Михальцевич Ирина Константиновна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/35-201x300.jpg"/>} description="Тьютор: 1 класс">Манько Галина Сергеевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/36-201x300.jpg"/>} description="Тьютор: 2 Д класс">Кузнецова Марина Николаевна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/37-201x300.jpg"/>} description="Педагог-библиотекарь">Перова Елена Владимировна</Cell>
   <Cell before={<Avatar src="http://centobr42.ru/wp-content/uploads/2019/02/38-201x300.jpg"/>} description="Учитель-логопед">Шарова Екатерина Николаевна</Cell>
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
