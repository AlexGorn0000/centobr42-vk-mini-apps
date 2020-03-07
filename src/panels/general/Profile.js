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
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton, Separator, HorizontalScroll, Header, Counter, Link, Checkbox } from '@vkontakte/vkui';
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
import Icon20HomeOutline from '@vkontakte/icons/dist/20/home_outline';
import Icon20MessageOutline from '@vkontakte/icons/dist/20/message_outline';
import Icon20EducationOutline from '@vkontakte/icons/dist/20/education_outline';
import Icon20CalendarOutline from '@vkontakte/icons/dist/20/calendar_outline';
import Icon20ArticleOutline from '@vkontakte/icons/dist/20/article_outline';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import user from '@vkontakte/icons/dist/24/user';
import { Math } from 'core-js';

const itemStyle = {
    flexShrink: 0,
    width: 80,
    height: 110,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 12
  };

  
const Profile = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		 <PanelHeader left={<HeaderButton onClick={go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>Мой профиль</PanelHeader>
		 {fetchedUser &&
		<Group style={{background: "linear-gradient(90deg, rgba(246,6,136,1) 0%, rgba(0,212,255,1) 100%)"}}>
		<Div><center><Avatar width="148" height="148" src={fetchedUser.photo_200}/><br/>{`${fetchedUser.first_name}`} {`${fetchedUser.last_name}`}<br/>
		<Separator style={{margin: '5px 0'}}/>
		Будь лучшим - среди лучших!
		</center></Div>
	    </Group>}
		{fetchedUser &&
		<Group>
		<Cell before={<Icon24User/>}>Информация о пользователе</Cell>
		<Separator style={{margin: '5px 0'}}/>
		<Div>
		<Cell before={<Icon20MessageOutline/>}>Статус: {`${fetchedUser.status}`}</Cell>
		<Cell before={<Icon20ArticleOutline/>}>Имя: {`${fetchedUser.first_name}`}<br/>Фамилия: {`${fetchedUser.last_name}`}</Cell>
		<Cell before={<Icon20HomeOutline/>}>Город: {`${fetchedUser.city.title}`}</Cell>
		<Cell before={<Icon20CalendarOutline/>}>Дата рождения: {`${fetchedUser.bdate}`}</Cell>
		</Div>
		</Group>}
		<Group title="Достижения">
		<HorizontalScroll>
          <div style={{ display: 'flex' }}>
            <div style={{ ...itemStyle, paddingLeft: 4 }}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/2540/2540324.svg" /></Avatar>I am Bloger!</div>
		   <div style={itemStyle}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/2617/2617855.svg" /></Avatar>Отличная работа!</div>
		   <div style={itemStyle}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/2617/2617904.svg" /></Avatar>Король развлечений</div>
		   <div style={itemStyle}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/2617/2617891.svg" /></Avatar>Ученье - свет!</div>
		   <div style={itemStyle}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/2617/2617963.svg" /></Avatar>Методист</div>
		   <div style={itemStyle}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/2617/2617930.svg" /></Avatar>На высоте!</div>
           </div>
        </HorizontalScroll>
		<HorizontalScroll>
          <div style={{ display: 'flex' }}>
           <div style={{ ...itemStyle, paddingLeft: 4 }}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/2617/2617757.svg" /></Avatar>Лидер мнений</div>
		   <div style={itemStyle}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/2617/2617958.svg"/></Avatar>На лестнице успеха</div>
		   <div style={itemStyle}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/338/338090.svg"/></Avatar>Please, wait!</div>
		   <div style={itemStyle}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/1029/1029132.svg"/></Avatar>Комментатор</div>
		   <div style={itemStyle}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/401/401544.svg"/></Avatar>Диктатор</div>
		   <div style={itemStyle}><Avatar size={64} style={{ marginBottom: 8 }}><img width={64} height={64} src="https://image.flaticon.com/icons/svg/401/401559.svg" /></Avatar>Мудрец</div>
           </div>
        </HorizontalScroll>
		<Div><center>Хотите открыть больше достижений? Участвуйте в мероприятиях и получайте награды.<br/>
		<Separator style={{margin: '10px 0'}}/>
		<Button size="xl" level="commerce" onClick={go} Data-to="Projects">Перейти в блок "Мероприятия"</Button></center></Div>
		</Group>
		<Group>
		<Cell before={<Icon24LogoVk/>} component="a" href="https://vk.com/centobr42_press_center">Техническая поддержка</Cell>
		</Group>
 </Panel>
);

Profile.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
		title: PropTypes.string,
		schools: PropTypes.shape({
		name: PropTypes.string,
		year_from: PropTypes.string,	
		year_to: PropTypes.string,
		speciality: PropTypes.string,
	  }),
	}),
  }),
};

export default Profile;
