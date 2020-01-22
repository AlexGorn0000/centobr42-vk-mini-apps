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
import List from '@vkontakte/vkui/dist/components/List/List';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator'
import { FormLayout, FormLayoutGroup, Input } from '@vkontakte/vkui';
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
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton onClick={go} Data-to="Auth"><Icon24Cancel/></HeaderButton>}>Личный кабинет</PanelHeader>
	<Group>
	<List>
	 <Cell expandable before={<Icon24User />} onClick={go} Data-to="Profile">Мой профиль</Cell>
	 <Separator style={{ margin: '10px 0' }} />
	 <Cell expandable before={<Icon24Newsfeed />} onClick={go} Data-to="Activity">Доска почета</Cell>
	 <Cell expandable before={<Icon24Education />} onClick={go} Data-to="Education">Образование</Cell>
	 <Cell expandable before={<Icon24Services />} onClick={go} Data-to="Projects">Мероприятия</Cell>
	 <Cell expandable before={<Icon24Live/>} onClick={go} Data-to="Broadcast">Прямая трансляция</Cell>
	 <Cell expandable before={<Icon24Help/>} onClick={go} Data-to="Help">Помощь</Cell>
	 <Separator style={{ margin: '10px 0' }} />
	 <Cell expandable before={<Icon24Settings />} onClick={go} Data-to="Settings">Настройки</Cell>
	 </List>
	 </Group>
	 <Group>
	 <Cell before={<Icon24Info/>}>Информация</Cell>
		    <Gallery
                slideWidth="100%"
                align="center"
                style={{ height: 220 }}
              >
				<iframe src="https://vk.com/video_ext.php?oid=-187421428&id=456239049&hash=de4c61aa47a2c3a9" frameborder="0" controls/>
                <img src="https://sun9-64.userapi.com/c206528/v206528826/1c48f/NNFKtP0-bC8.jpg"/>
				<img src="https://sun9-58.userapi.com/c204616/v204616763/16b18/mbg8fvOzBHE.jpg"/>
				<img src="https://sun9-3.userapi.com/c855416/v855416853/1a4f0c/YB36punuuwQ.jpg"/>
            </Gallery>
			  <Separator style={{ margin: '10px 0'}}/>
		<FormLayoutGroup>
		<FormLayout>
			  <Button size="xl" level="outline"component="a" href="https://vk.com/centobr42_press_center">Подробнее</Button>
		</FormLayout>
		</FormLayoutGroup>
         </Group>
    <Group>
	<List>
	 <Cell expandable before={<Icon24LogoVk />} href="https://vk.com/public168892763">Наша группа</Cell>
	</List>
	</Group>
 </Panel>
);

Home.propTypes = {
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

export default Home;
