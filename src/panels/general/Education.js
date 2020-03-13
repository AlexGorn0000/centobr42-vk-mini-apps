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
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, classNames, Separator } from '@vkontakte/vkui';
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
import Icon24List from '@vkontakte/icons/dist/24/list';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import user from '@vkontakte/icons/dist/24/user';

class Education extends React.Component {
	constructor(props) {
   super(props);
   this.state = {notification: null, button_text: "Включить уведомления"};
   this.onAllowNotification = this.onAllowNotification.bind(this);
   }
   onAllowNotification(e){
   this.setState({button_text: "Выключить уведомления"});
   connect.send("VKWebAppAllowNotifications", {"request_id": 7266393})
   }
   render(){
   return(
	<Panel id={this.props.id}>
	<PanelHeader left={<HeaderButton onClick={this.props.go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>Образование</PanelHeader>
   <Group title="Образование">
   <List>
    <Cell expandable before={<Icon24Education fill="#00acff"/>} onClick={this.props.go} Data-to="Teaching">Педагогический состав</Cell>
    <Cell expandable before={<Icon24Newsfeed fill="#00acff"/>} onClick={this.props.go} Data-to="Timetable">Расписание уроков</Cell>
	<Separator style={{margin: "5px 0"}}/>
   <Cell before={<Icon24Note fill="#00acff"/>} description="В разработке">Электронный дневник</Cell>
   </List>
   </Group>
   <Div style={{textAlign: "center"}}><img src="https://vk.com/sticker/1-3375-128"/><br/>
   <h4>Вы еще не включили уведомления?! Чего же Вы ждете? Включите уведомления, чтобы не пропускать важные обновления.</h4><Separator style={{margin: "5px 0"}}/>
   <Button size="l" level="outline" onClick={this.onAllowNotification}>{this.state.button_text}</Button></Div>
   </Panel>
);
}
}

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
