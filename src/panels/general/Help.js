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
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton, Separator, UsersStack, Textarea, Checkbox, Link, ActionSheet, ActionSheetItem, Alert} from '@vkontakte/vkui';
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
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import user from '@vkontakte/icons/dist/24/user';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24RecentOutline from '@vkontakte/icons/dist/24/recent_outline';
import Icon24DoneOutline from '@vkontakte/icons/dist/24/done_outline';

class Help extends React.Component {
    constructor(props) {
      super(props);
	  this.state = {name: '',email: '', message: '', text: 'Отправить', level: 'primary', context_1: '', context_2: '', context_3: ''};

	  this.openWithoutContext_1 = this.openWithoutContext_1.bind(this);
	  this.closeWithoutContext_1 = this.closeWithoutContext_1.bind(this);
	  this.openWithoutContext_2 = this.openWithoutContext_2.bind(this);
	  this.closeWithoutContext_2 = this.closeWithoutContext_2.bind(this);
	  this.openWithoutContext_3 = this.openWithoutContext_3.bind(this);
	  this.closeWithoutContext_3 = this.closeWithoutContext_3.bind(this);
	  this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeMessage = this.onChangeMessage.bind(this);
	  this.onSubmit = this.onSubmit.bind(this);
    }
	 
	openWithoutContext_1(){
	this.setState({context_1: 'Здравствуйте! Чтобы посмотреть информацию о текущем расписании уроков, перейдите в блок "Расписание уроков" и выберите в нем класс своего ребенка.'});
	}
	closeWithoutContext_1(){
	this.setState({context_1: ''});
	}
	openWithoutContext_2(){
	this.setState({context_2: 'Наша команда разработчиков в данный момент занимается этим вопросом, но мы считаем, что в дальнейшем синхронизация с электронным дневником вполне возможна.'});
	}
	closeWithoutContext_2(){
    this.setState({context_2: ''});
	}
	openWithoutContext_3(){
	this.setState({context_3: 'Если у вашего ребенка пропали личные вещи, то обратитесь на вахту. Но мы хотим Вам напомнить, что за потерянные вещи Администрация школы ответственности не несет!'});
	}
	closeWithoutContext_3(){
	this.setState({context_3: ''});
	}

	onSubmit(event){
	this.setState({name: ''});
	this.setState({email: ''});
	this.setState({message: ''});
	this.setState({text: 'Отправлено'});
	this.setState({level: 'secondary'});
	connect.send("VKWebAppCallAPIMethod", {"method": "messages.send", "params": {"random_id": 423504+1, "peer_id": -187421428 ,"domain": 187421428, "messages": "{this.state.message}"}});
	console.log({name: this.state.name, email: this.state.email, message: this.state.message});
	}
	
	closePopout () {
	this.setState({ popout: null });
	}
	
	onChangeMessage(event){
      this.setState({message: event.target.value});
	}
	onChangeName(e){
	this.setState({name: e.target.value});
	}

    onChangeEmail(e) {
      this.setState({email: e.target.value});
	}

	render() {
    return (
	<Panel id={this.props.id}>
	<PanelHeader left={<HeaderButton onClick={this.props.go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>Помощь</PanelHeader>
	<Group>
   	<List>
    <CellButton onClick={this.openWithoutContext_1}>Что делать, если у моего ребенка неправильное расписание уроков?</CellButton>
	{this.state.context_1 && 
	<Div>{this.state.context_1}
	<Separator style={{margin: '10px 0'}}/>
	<Button level="primary" onClick={this.closeWithoutContext_1}>Это решает мою проблему</Button></Div>}
	<CellButton onClick={this.openWithoutContext_2}>Будет ли в дальнейшем синхронизация с электронным дневником?</CellButton>
	{this.state.context_2 &&
	<Div>{this.state.context_2}
	<Separator style={{margin: '10px 0'}}/>
	<Button level="primary" onClick={this.closeWithoutContext_2}>Это решает мою проблему</Button></Div>}
    <CellButton onClick={this.openWithoutContext_3}>Что делать, если у моего ребенка в школе пропали личные вещи?</CellButton>
	{this.state.context_3 &&
	<Div>{this.state.context_3}
	<Separator style={{margin: '10px 0'}}/>
	<Button level="primary" onClick={this.closeWithoutContext_3}>Это решает мою проблему</Button></Div>}
	</List>
	<Separator style={{margin: '5px 0'}}/>
	<Div>Не нашли ответ на свой вопрос, но хотите задать его Администрации школы? Укажите контактные данные и опишите свою проблему.</Div>
	<Div>
	<Input placeholder="Введите имя" type="text" value={this.state.name} onChange={this.onChangeName}/><br/>
	<Input placeholder="Введите E-mail" type="email" value={this.state.email} onChange={this.onChangeEmail}/><br/>
	<Textarea placeholder="Напишите что-нибудь" value={this.state.message} onChange={this.onChangeMessage}/><br/>
	<Checkbox>Я принимаю условия <Link component="a" href="https://vk.com/doc270919242_532132361">лицензионного соглашения</Link> и <Link component="a" href="https://vk.com/doc270919242_532132364">политики конфиденциальности</Link></Checkbox><br/>
	<Button size="xl" level={this.state.level} onClick={this.onSubmit}>{this.state.text}</Button></Div>
    </Group>
 </Panel>
);
}
}

Help.propTypes = {
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

export default Help;
