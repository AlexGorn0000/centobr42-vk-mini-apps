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
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton, Separator, UsersStack, Textarea, Checkbox, Link, Snackbar} from '@vkontakte/vkui';
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

class Help extends React.Component {
    constructor(props) {
      super(props);
	  this.state = {name: '',email: '', message: '', snackbar: null, text: ''};
	  this.openWithAvatar = this.openWithAvatar.bind(this);
	  this.onChangeName = this.onChangeName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangeMessage = this.onChangeMessage.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
    event.preventDefault();
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

	openWithAvatar () {
		if (this.state.snackbar) return;
		this.setState({ snackbar:
		  <Snackbar
			layout="vertical"
			onClose={() => this.setState({ snackbar: null })}
			action="Отменить"
			onActionClick={() => this.setState({ text: `Сообщение получателю "${this.state.email}" было отменено.` })}
			after={<Avatar src="https://sun9-20.userapi.com/c846018/v846018136/164bc/XoLIN4P5Kb0.jpg?ava=1" size={32} />}
		  >
			Сообщение успешно отправлено получателю {`${this.state.email}`}. Ожидайте ответ в течении 2-х часов
		  </Snackbar>
		});
	  }
	
	render() {
    return (
	<Panel id={this.props.id}>
	<PanelHeader left={<HeaderButton onClick={this.props.go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>Помощь</PanelHeader>
 	<Group>
    <List>
    <CellButton asidecontent={<Icon24Dropdown/>}>Как можно просмотреть сведения о мероприятии?</CellButton>
    <CellButton>Что делать, если расписание уроков моего ребенка не совпадает c расписанием уроков в приложении?</CellButton>
    <CellButton>Будет ли синхронизация с электронным дневником, чтобы проследить за успеваемостью ребенка?</CellButton>
    <CellButton>Будет ли обновляться контент в приложении?</CellButton>
	</List>
	<Separator style={{margin: '5px 0'}}/>
	<Div>Не нашли ответ на свой вопрос, но хотите его задать Администрации школы?</Div>
	<Div>
	<Input placeholder="Введите имя" value={this.state.name} onChange={this.onChangeName}/><br/>
	<Input placeholder="Введите E-mail" value={this.state.email} onChange={this.onChangeEmail}/><br/>
	<Textarea placeholder="Напишите что-нибудь" value={this.state.message} onChange={this.onChangeMessage}/><br/>
	<Checkbox>Я принимаю условия <Link src="https://vk.com/doc270919242_530725932">лицензионного соглашения</Link></Checkbox>
	<Button size="xl" onChange={this.onSubmit} onClick={this.openWithAvatar}>Отправить</Button></Div>
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
