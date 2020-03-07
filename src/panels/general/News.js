import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import connect from '@vkontakte/vk-connect'; 
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import List from '@vkontakte/vkui/dist/components/List/List';
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton, Separator, HorizontalScroll } from '@vkontakte/vkui';
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
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Followers from '@vkontakte/icons/dist/24/followers';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Video from '@vkontakte/icons/dist/24/video';
import Icon24Gallery from '@vkontakte/icons/dist/24/gallery';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Poll from '@vkontakte/icons/dist/24/poll';
import user from '@vkontakte/icons/dist/24/user';
import Icon12OnlineVkmobile from '@vkontakte/icons/dist/12/online_vkmobile';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24RecentOutline from '@vkontakte/icons/dist/24/recent_outline';
import Icon24Privacy from '@vkontakte/icons/dist/24/privacy';
import Icon24View from '@vkontakte/icons/dist/24/view';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import './WallPost.css';
import fire_verified from '@vkontakte/icons/dist/16/fire_verified';

const News = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
	<PanelHeader left={<HeaderButton onClick={go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>Новости</PanelHeader>
	<img width="100%" height="100%" src="https://sun1-88.userapi.com/fNvWzS6B5yrfWo3mg_fOShqgEqfiqcgKBQXWfQ/CUF8R_9ijwI.jpg"/>
	<Group>
	<Separator style={{margin: "5px 0"}}/>
	<Div>Почему стоит смотреть наши новости?!<br/>
	<Cell before={<Icon24Privacy fill="#ff0049"/>}>Публикуем только из достоверных<br/>источников!</Cell>
	<Cell before={<Icon24View fill="#6c00ff"/>}>Более 8,500 просмотров за месяц.</Cell>
	<Cell before={<Icon24RecentOutline fill="#00acff"/>}>Вовремя публикуемая информация.</Cell>
	<Cell before={<Icon24FavoriteOutline fill="#ffb800"/>}>Невероятная популяризация<br/>среди молодежи!</Cell>
	</Div>
	<Separator style={{margin: "5px 0"}}/>
	<Cell style={{borderRadius: "5px"}} before={<Icon24Favorite fill="#ffc400"/>}>Популярное за месяц</Cell>
    <Div className="WallPost" id="bg_1" style={{fontSize: 20}}>Открытие приложения "Личный кабинет"<br/><Div className="descr">Вот и настал тот самый момент, которого все долго ждали. Как Вы уже знаете...</Div><Button before={<Icon12OnlineVkmobile/>} level="primary" size="l" component="a" href="https://vk.com/centobr42_press_center?w=wall-187421428_221"> Читать</Button><Div className="date_create">29.02.2020 г.</Div></Div><br/>
	<Div className="WallPost" id="bg_2" style={{fontSize: 18, marginTop: 230}}>Президентская академия народного хозяйства и госслужбы<br/><Div className="descr">20 февраля обучающиеся 10 и 11 классов прослушали лекцию в стенах...</Div><Button before={<Icon12OnlineVkmobile/>} level="primary" size="l" component="a" href="https://vk.com/centobr42_press_center?w=wall-187421428_220"> Читать</Button><Div className="date_create">25.02.2020 г.</Div></Div><br/>
	<Div className="WallPost" id="bg_3" style={{fontSize: 20, marginTop: 450}}>Проектно-технологическая игра "Хакатон"<br/><Div className="descr">5 февраля ученики 11А класса приняли участие в проектно-технологической...</Div><Button before={<Icon12OnlineVkmobile/>} level="primary" size="l" component="a" href="https://vk.com/centobr42_press_center?w=wall-187421428_216"> Читать</Button><Div className="date_create">13.02.2020 г.</Div></Div><br/>	
	<Div className="WallPost" id="bg_4" style={{fontSize: 18, marginTop: 670}}>"Открытые уроки - 2020" для учеников начальной школы<br/><Div className="descr">11 февраля прошли открытые уроки, где учителя начальной школы делились....</Div><Button before={<Icon12OnlineVkmobile/>} level="primary" size="l" component="a" href="https://vk.com/centobr42_press_center?w=wall-187421428_215"> Читать</Button><Div className="date_create">12.02.2020 г.</Div></Div><br/>	
	<Div className="WallPost" id="bg_5" style={{fontSize: 18, marginTop: 890}}>Внеклассное мероприятие "Менделеевская гостинная"<br/><Div className="descr">7 февраля состоялось открытое внеклассное мероприятие "Менделеевская гостинная"...</Div><Button before={<Icon12OnlineVkmobile/>} level="primary" size="l" component="a" href="https://vk.com/centobr42_press_center?w=wall-187421428_212"> Читать</Button><Div className="date_create">08.02.2020 г.</Div></Div><br/>
	<Div className="WallPost" id="bg_6" style={{fontSize: 18, marginTop: 1110}}>#КиноклубПобеды42<br/><Div className="descr">Уже второй раз в нашем Кинозале - Актовом зале прошел #КиноклубПобеды42...</Div><Button before={<Icon12OnlineVkmobile/>} level="primary" size="l" component="a" href="https://vk.com/centobr42_press_center?w=wall-187421428_211"> Читать</Button><Div className="date_create">06.02.2020 г.</Div></Div><br/>
	<Div className="WallPost" id="bg_7" style={{fontSize: 18, marginTop: 1330}}>Один год хорошо, а два лучше!<br/><Div className="descr">31 января состоялся праздничный концерт, посвященный дню рождения Центра образования №42...</Div><Button before={<Icon12OnlineVkmobile/>} level="primary" size="l" component="a" href="https://vk.com/centobr42_press_center?w=wall-187421428_209"> Читать</Button><Div className="date_create">04.02.2020 г.</Div></Div><br/>
	</Group>
	</Panel>
);

News.propTypes = {
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

export default News;
