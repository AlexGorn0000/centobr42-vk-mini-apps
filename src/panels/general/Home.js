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
import { FormLayout, FormLayoutGroup, Input, Tooltip, Counter } from '@vkontakte/vkui';
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
import Icon24Recent from '@vkontakte/icons/dist/24/recent';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Reorder from '@vkontakte/icons/dist/24/reorder';
import InfoBlock from './info_block.css';

class Home extends React.Component {
 constructor(props) {
super(props);
this.state = {tooltip1: true, tooltip2: false, tooltip3: false};
}
render(){
return(
	<Panel id={this.props.id}>
	<PanelHeader>Личный кабинет</PanelHeader> 
	<img width="100%" height="100%" src="https://sun9-12.userapi.com/c205824/v205824455/82fec/nOnsoMv-mC0.jpg"></img>
	<Group>
	<List>
	 <Cell expandable before={<Icon24Home fill="#00acff"/>} onClick={this.props.go} Data-to="Profile">Мой профиль</Cell>
	 <Separator style={{ margin: '5px 0' }} />
	 <Cell before={<Icon24Newsfeed fill="#00acff"/>} description="В разработке до 28 февраля">Новости</Cell>
	 <Cell expandable before={<Icon24Education fill="#00acff"/>} onClick={this.props.go} Data-to="Education">Образование</Cell>
	 <Cell expandable before={<Icon24Services fill="#00acff"/>} onClick={this.props.go} Data-to="Projects" indicator={<Counter mode="prominent">1</Counter>}>Мероприятия</Cell>
	 <Cell expandable before={<Icon24Live fill="#00acff"/>} description="В разработке до 28 февраля">Прямая трансляция</Cell>
	 <Cell expandable before={<Icon24Help fill="#00acff"/>} onClick={this.props.go} Data-to="Help">Помощь</Cell>
	 <Separator style={{ margin: '10px 0' }} />
	 <Cell expandable before={<Icon24Settings fill="#00acff"/>} onClick={this.props.go} Data-to="Settings">Настройки</Cell>
	 </List>
	 </Group>
	 <Group>
	 <Cell before={<Icon24Info fill="#00acff"/>}>Информация</Cell>
	 <Gallery
                slideWidth="100%"
                align="center"
                style={{ height: 220 }}
              >
				<iframe src="https://vk.com/video_ext.php?oid=-187421428&id=456239049&hash=de4c61aa47a2c3a9" frameborder="0" controls/>
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
	 <Cell expandable before={<Icon24LogoVk fill="#00acff" />} href="https://vk.com/public168892763">Наша группа</Cell>
	</List>
	</Group>
 </Panel>
);
}
}

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
