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
  <Cell expandable before={<Avatar src="https://sun9-4.userapi.com/c858132/v858132671/143a7c/bmXlfIBjQcg.jpg"/>} description="Директор школы">Калистратова Елена Ивановна</Cell>
  <Cell before={<Avatar src="https://sun1-93.userapi.com/c848524/v848524153/1a65c1/4vIW-y1aE0k.jpg"/>} description="Заместитель директора по ВР">Орлова Татьяна Андреевна</Cell>
  <Cell before={<Avatar src="https://sun9-67.userapi.com/c849520/v849520489/5ce9a/kmSvoPoHndE.jpg"/>}>Бральнина Ольга Геннадьевна</Cell>
  <Cell before={<Avatar src="https://sun9-50.userapi.com/c850128/v850128827/32cfc/_63WxP1TFag.jpg"/>} description="Заместитель директора по АХЧ">Орехова Наталья Борисовна</Cell>
  <Cell before={<Avatar src="https://sun1-98.userapi.com/c831409/v831409983/2713e/h41mxG64TLE.jpg"/>} description="Заместитель директора начальной школы">Люлина Елена Николаевна</Cell>
  </List>
  </Group>
   <Group title="Методическое объединение учителей иностранного языка">
   <List>
   <Cell before={<Avatar src="https://sun1-21.userapi.com/c858320/v858320671/14d4ff/uzpnhyg3zK8.jpg"/>} description="Учитель немецкого языка">Глебова Тамара Николаевна</Cell>
   <Cell before={<Avatar src="https://sun9-43.userapi.com/c858320/v858320671/14d506/wevOZIX31Ls.jpg"/>} description="Учитель английского языка">Орлова Татьяна Андреевна</Cell>
   <Cell before={<Avatar src="https://sun9-47.userapi.com/c858320/v858320671/14d50e/AVvNEwmFG90.jpg"/>} description="Учитель английского языка">Хорошавина Елена Николаевна</Cell>
   <Cell before={<Avatar src="https://sun1-88.userapi.com/c858320/v858320671/14d516/BoJnaK9_sQw.jpg"/>} description="Учитель английского языка">Свирелкина Ирина Ивановна</Cell>
   <Cell before={<Avatar src="https://sun9-37.userapi.com/c858320/v858320671/14d51d/mRG5hVErV5M.jpg"/>} description="Учитель английского языка">Могилевская Арина Юрьевна</Cell>
   <Separator style={{ margin: '5px 0' }} />
   <Cell before={<Avatar src="https://sun9-127.userapi.com/c858320/v858320671/14d524/9wKlUGL4vaI.jpg"/>} description="Учитель английского языка">Гостевская Анна Николаевна</Cell>
   <Cell before={<Avatar src="https://sun9-37.userapi.com/c858320/v858320671/14d52b/d3WQoTnyDmY.jpg"/>} description="Учитель английского языка">Елгаева Свтелана Анатольевна</Cell>
   <Cell before={<Avatar src="https://sun9-49.userapi.com/c858320/v858320671/14d532/RvlZ0efFTsY.jpg"/>} description="Учитель английского языка">Бабкина Надежда Викторовна</Cell>
   <Cell before={<Avatar src="https://sun9-19.userapi.com/c858320/v858320671/14d539/_98WgmU8jds.jpg"/>} description="Учитель английского языка">Александрова Виктория Валерьевна</Cell>
   </List>
   </Group>
   <Group title="Методическое объединение учителей начальной школы">
   <List>
   <Cell before={<Avatar src="https://sun9-59.userapi.com/c858320/v858320671/14d645/MfXonSJOxIU.jpg"/>} description="Учитель, классный руководитель: 2 «З»">Белозерова Галина Николаевна</Cell>
   <Cell before={<Avatar src="https://sun9-69.userapi.com/c858320/v858320671/14d547/bTDAFUMkk1w.jpg"/>} description="Классный руководитель: 3 «Д»">Сидельникова Татьяна Леонидовна</Cell>
   <Cell before={<Avatar src="https://sun9-56.userapi.com/c858320/v858320671/14d54e/xu56Zs8DjoA.jpg"/>} description="Учитель, классный руководитель: 1 «Е»">Скамьина Ольга Геннадьевна</Cell>
   <Cell before={<Avatar src="https://sun9-54.userapi.com/c858320/v858320671/14d555/ZLKDHG81rwA.jpg"/>} description="Учитель, классный руководитель: 4 «А»">Акиндинова Светлана Владимировна</Cell>
   <Cell before={<Avatar src="https://sun9-47.userapi.com/c858320/v858320671/14d55c/SGemfaTfHcY.jpg"/>} description="Классный руководитель: 3 «В»">Аристархова Елена Сергеевна</Cell>
   <Cell before={<Avatar src="https://sun9-31.userapi.com/c858320/v858320671/14d563/W0S6sFTpy8M.jpg"/>} description="Учитель, классный руководитель: 1 «А»">Бегова Валентина Николаевна</Cell>
   <Cell before={<Avatar src="https://sun9-44.userapi.com/c858320/v858320671/14d56a/B-hNx2FkzHA.jpg"/>} description="Учитель, классный руководитель: 1 «Л»">Белозерова Валентина Николаевна</Cell>
   <Cell before={<Avatar src="https://sun9-58.userapi.com/c858320/v858320671/14d571/Huee_m1tcBU.jpg"/>} description="Классный руководитель: 3 «Г»">Наволоцкая Татьяна Владимировна</Cell>
   <Cell before={<Avatar src="https://sun9-23.userapi.com/c858320/v858320671/14d578/ueF3qng_55A.jpg"/>} description="Классный руководитель: 2 «К»">Вискова Яна Валериевна</Cell>
   <Cell before={<Avatar src="https://sun9-56.userapi.com/c858320/v858320671/14d57f/mEHgKsJXR1Y.jpg"/>} description="Классный руководитель: 2 «Е»">Воеводина Наталья Вениаминовна</Cell>
   <Cell before={<Avatar src="https://sun9-14.userapi.com/c858320/v858320671/14d586/bc8tPF1wzMM.jpg"/>} description="Классный руководитель: 3 «Ж»">Галасова Александра Глебовна</Cell>
   <Cell before={<Avatar src="https://sun9-43.userapi.com/c858320/v858320671/14d58d/9kFml80CQIw.jpg"/>} description="Классный руководитель: 3 «А»">Житкова Нина Анатольевна</Cell>
   <Cell before={<Avatar src="https://sun9-58.userapi.com/c858320/v858320671/14d594/TSgXhawEFtI.jpg"/>} description="Учитель, классный руководитель: 1 «Д»">Ипшман Елена Валериевна</Cell>
   <Cell before={<Avatar src="https://sun9-31.userapi.com/c858320/v858320671/14d59b/4Jh2kV1CsKA.jpg"/>} description="Учитель, классный руководитель: 1 «В»">Колина Маргарита Николаевна</Cell>
   <Cell before={<Avatar src="https://sun9-67.userapi.com/c858320/v858320671/14d5a2/rFKB255VSxA.jpg"/>} description="Учитель, классный руководитель: 3 «Б»">Корельская Светлана Леонидовна</Cell>
   <Cell before={<Avatar src="https://sun9-37.userapi.com/c858320/v858320671/14d5a9/mbGWXVVaZac.jpg"/>} description="Учитель, классный руководитель: 2 «А»">Крупенникова Елена Владимировна</Cell>
   <Cell before={<Avatar src="https://sun9-28.userapi.com/c858320/v858320671/14d5b0/AZJAT_vS3VY.jpg"/>} description="Учитель, классный руководитель: 1 «И»">Латышева Анна Михайловна</Cell>
   <Cell before={<Avatar src="https://sun9-2.userapi.com/c858320/v858320671/14d5b7/YbylHXmlPN0.jpg"/>} description="Учитель, классный руководитель: 1 «К»">Лунева Светлана Васильевна</Cell>
   <Cell before={<Avatar src="https://sun9-59.userapi.com/c858320/v858320671/14d5c0/r1DzFvUxxtA.jpg"/>} description="Учитель, классный руководитель: 1 «Б»">Коноплева Дарья Алексеевна</Cell>
   <Cell before={<Avatar src="https://sun9-14.userapi.com/c858320/v858320671/14d5c7/HH3UneKyKCQ.jpg"/>} description="Учитель, классный руководитель: 2 «И»">Мартюгова Елена Ивановна</Cell>
   <Cell before={<Avatar src="https://sun9-49.userapi.com/c858320/v858320671/14d5ce/fnh8Im3kjy0.jpg"/>} description="Учитель, классный руководитель: 4 «Б»">Межакова Светлана Викторовна</Cell>
   <Cell before={<Avatar src="https://sun9-27.userapi.com/c858320/v858320671/14d5d5/NDFF06evZ9Q.jpg"/>} description="Учитель, классный руководитель: 3 «Е»">Михайлова Инна Сергеевна</Cell>
   <Cell before={<Avatar src="https://sun9-56.userapi.com/c858320/v858320671/14d5dc/5UQtS0sjZSA.jpg"/>} description="Учитель, классный руководитель: 1 «Г»">Осипова Татьяна Владимировна</Cell>
   <Cell before={<Avatar src="https://sun9-17.userapi.com/c858320/v858320671/14d5e3/AnbEQhoiulU.jpg"/>} description="Учитель, классный руководитель: 4 «Д»">Ромашова Алла Викторовна</Cell>
   <Cell before={<Avatar src="https://sun9-16.userapi.com/c858320/v858320671/14d5ea/GzRmNAgEmBs.jpg"/>} description="Учитель, классный руководитель: 1 «Ж»">Смыслова Светлана Викторовна</Cell>
   <Cell before={<Avatar src="https://sun9-23.userapi.com/c858320/v858320671/14d5f1/zKdgQHYYYtY.jpg"/>} description="Учитель, классный руководитель: 4 «Е»">Шарова Елена Владимировна</Cell>
   <Cell before={<Avatar src="https://sun9-8.userapi.com/c858320/v858320671/14d5f8/T3J5sDylM6U.jpg"/>} description="Учитель, классный руководитель: 2 «Г»">Шарова Марина Николаевна</Cell>
   <Cell before={<Avatar src="https://sun9-31.userapi.com/c858320/v858320671/14d5ff/7H146PRubAM.jpg"/>} description="Учитель, классный руководитель: 4 «В»">Стафеева Алена Александровна</Cell>
   <Cell before={<Avatar src="https://sun9-14.userapi.com/c858320/v858320671/14d606/pKcIatJRUJs.jpg"/>} description="Учитель, классный руководитель: 2 «Б»">Чекмарева Ольга Юрьевна</Cell>
   <Separator style={{ margin: '5px 0' }} />
   <Cell before={<Avatar src="https://sun9-69.userapi.com/c858320/v858320671/14d60d/b3UxefDV18k.jpg"/>} description="Учитель музыки с 1-3 класс">Огорелышева Светлана Леонидовна</Cell>
   <Cell before={<Avatar src="https://sun9-17.userapi.com/c858320/v858320671/14d614/AzpOPVzvBLE.jpg"/>} description="Логопед с 1-4 класс">Михальцевич Ирина Константиновна</Cell>
   <Cell before={<Avatar src="https://sun9-40.userapi.com/c858320/v858320671/14d61b/p4PIq7sqtKQ.jpg"/>} description="Тьютор: 1 класс">Манько Галина Сергеевна</Cell>
   <Cell before={<Avatar src="https://sun9-12.userapi.com/c858320/v858320671/14d622/PJdkgM8m7Dk.jpg"/>} description="Тьютор: 2 Д класс">Кузнецова Марина Николаевна</Cell>
   <Cell before={<Avatar src="https://sun9-7.userapi.com/c858320/v858320671/14d629/C5dn9bXPNLw.jpg"/>} description="Педагог-библиотекарь">Перова Елена Владимировна</Cell>
   <Cell before={<Avatar src="https://sun9-69.userapi.com/c858320/v858320671/14d630/t81wwJF97JA.jpg"/>} description="Учитель-логопед">Шарова Екатерина Николаевна</Cell>
   </List>
   </Group>
   <Group title="Методическое объединение гуманитарно-эстетического цикла">
   <List>
   <Cell before={<Avatar src="https://sun9-40.userapi.com/c857632/v857632671/14ed7e/pYwgp3I93Gw.jpg"/>} description="Учитель русского языка и литературы">Сахарусова Анна Вячеславовна</Cell>
   <Cell before={<Avatar src="https://sun9-62.userapi.com/c857632/v857632671/14ed85/KvDBjVwG0bU.jpg"/>} description="Учитель русского языка и литературы">Еркова Марина Михайловна</Cell>
   <Cell before={<Icon24User/>} description="Учитель русского языка и литературы">Соколова Елена Владимировна</Cell>
   <Cell before={<Avatar src="https://sun9-62.userapi.com/c857632/v857632671/14ed8c/d5DZMvkp4j0.jpg"/>} description="Учитель русского языка и литературы">Сычева Вера Анатольевна</Cell>
   <Cell before={<Avatar src="https://sun9-4.userapi.com/c857632/v857632671/14ed93/jzp9z_dV7HU.jpg"/>} description="Учитель русского языка и литературы">Чулкова Евгения Валерьевна</Cell>
   <Cell before={<Avatar src="https://sun9-18.userapi.com/c857632/v857632671/14ed9a/SgROan9nHnA.jpg"/>} description="Учитель русского языка и литературы">Поляков Максим Михайлович</Cell>
   <Cell before={<Icon24User/>} description="Учитель истории и обществознания">Коноплева Олеся Владимировна</Cell>
   <Cell before={<Icon24User/>} description="Учитель истории и обществознания">Морозова Анастасия Владимировна</Cell>
   <Cell before={<Avatar src="https://sun9-2.userapi.com/c857632/v857632671/14eda1/TkLfXBX1Myk.jpg"/>} description="Учитель изобразительного искусства">Румянцева Ирина Анатольевна</Cell>
   <Cell before={<Avatar src="https://sun9-6.userapi.com/c857632/v857632671/14eda8/5lmTNl-8R3Q.jpg"/>} description="Учитель музыки с 4-8 класс">Смирнова Елена Сергеевна</Cell>
   <Cell before={<Avatar src="https://sun9-31.userapi.com/c857632/v857632671/14edaf/qR0lLByWUkI.jpg"/>} description="Учитель истории">Березин Сергей Георгиевич</Cell>
   </List>
   </Group>
   <Group title="Методическое объединение естественно-математического цикла">
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
