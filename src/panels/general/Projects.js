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
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton, Separator, UsersStack} from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
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
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import user from '@vkontakte/icons/dist/24/user';
/*<Cell before={<Avatar style={{ background: 'var(--destructive)' }} size={24}><Icon24Info fill="var(--white)" /></Avatar>}>В данный момент нет активных<br/>мероприятий! Попробуйте вернуться<br/>позднее.</Cell>*/
/*<Cell before={<Avatar src="https://sun9-46.userapi.com/c204628/v204628455/8498f/iC5_xq5xMhM.jpg"/>}>Концерт, посвященный для женщин<br/><Button level="commerce" onClick={this.openCard}>Подать заявку</Button> <Button level="secondary">Скрыть</Button></Cell>*/
/*	const modal = (
		<ModalRoot activeModal={this.state.activeModal}>
			<ModalPage
			  id={MODAL_PAGE_FILTERS}
			  onClose={this.modalBack}
			  header={
				<ModalPageHeader
				  left={<PanelHeaderButton onClick={this.modalBack}><Icon24Cancel /></PanelHeaderButton>}
				  right={<PanelHeaderButton onClick={this.modalBack}>{<Icon24Done />}</PanelHeaderButton>}
				>
				  Фильтры
				</ModalPageHeader>
			  }
			>
			  <FormLayout>
				<FormLayoutGroup>
				<Input type="first_name" placeholder="Введите имя"></Input>
				<Input type="last_name" placeholder="Введите фамилию"></Input>
				</FormLayoutGroup>
				<FormLayoutGroup>
				<Button mode="secondary" onClick={() => this.setActiveModal(MODAL_PAGE_COUNTRIES)} size="xl">Выбор страны</Button>
				</FormLayoutGroup>
				<SelectMimicry top="Страна" placeholder="Выбрать страну" onClick={() => this.setActiveModal(MODAL_PAGE_COUNTRIES)} />
				<SelectMimicry top="Город" placeholder="Выбрать город" disabled />
				<FormLayoutGroup top="Пол">
				  <Radio name="sex" value={0} defaultChecked>Любой</Radio>
				  <Radio name="sex" value={1}>Мужской</Radio>
				  <Radio name="sex" value={2}>Женский</Radio>
				</FormLayoutGroup>
				<SelectMimicry top="Школа" placeholder="Выбрать школу" disabled />
				<FormLayoutGroup top="Дата рождения">
				  <SelectMimicry placeholder="День рождения" disabled />
				  <SelectMimicry placeholder="Месяц рождения" disabled />
				  <SelectMimicry placeholder="Год рождения" disabled />
				</FormLayoutGroup>
				<FormLayoutGroup top="Исполняемый номер">
				<Checkbox>Вокал</Checkbox>
				<Checkbox>Танец</Checkbox>
				<Checkbox>Флешмоб</Checkbox>
				<Checkbox>Сценическое выступление</Checkbox>  
				</FormLayoutGroup>
              
	 		  </FormLayout>
			</ModalPage></ModalRoot>
			);*/

const MODAL_PAGE_FILTERS = 'filters';
const MODAL_PAGE_COUNTRIES = 'countries';
const MODAL_PAGE_STORY_FEEDBACK = 'story-feedback';
const MODAL_PAGE_USER_INFO = 'user-info';

const MODAL_CARD_MONEY_SEND = 'money-send';
const MODAL_CARD_APP_TO_MENU = 'app-to-menu';
const MODAL_CARD_ABOUT = 'say-about';
const MODAL_CARD_NOTIFICATIONS = 'notifications';
const MODAL_CARD_CHAT_INVITE = 'chat-invite';

class Projects extends React.Component {
	constructor(props) {
	  super(props);
  	  this.state = {
		activeModal: null,
		modalHistory: []
	  };
  	  this.modalBack = () => {
	  this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
	  };
	}
  	setActiveModal(activeModal) {
	  activeModal = activeModal || null;
	  let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];
  	  if (activeModal === null) {
		modalHistory = [];
	  } else if (modalHistory.indexOf(activeModal) !== -1) {
		modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
	  } else {
		modalHistory.push(activeModal);
	  }
  	  this.setState({
		activeModal,
		modalHistory
	  });
	};
render(){
return(
<Panel id={this.props.id}>
	<PanelHeader left={<HeaderButton onClick={this.props.go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>Мероприятия</PanelHeader>
 	<img width="100%" height="100%" src="https://sun9-31.userapi.com/c857720/v857720147/167b49/hsg4j6NzW5Y.jpg"/>
	<Group title="Действующие мероприятия">
	<FormLayout>
	<FormStatus title="Мероприятия недоступны" mode="error">В данный момент нет активных мероприятий! Попробуйте вернуться позднее.</FormStatus>
    </FormLayout>
	<Separator style={{margin: '5px 0'}}/>
	</Group>
     <Group title="Прошедшие мероприятия">
     <List>
	 <Cell expandable before={<Avatar src="https://sun9-63.userapi.com/c205628/v205628009/4712e/Ec_INcSjse0.jpg"/>} onClick={this.props.go} Data-to="Project2" description="День рождения школы. Скоро 2 года!">Один год хорошо, а два лучше!</Cell>
     <Cell expandable before={<Avatar src="https://sun9-3.userapi.com/c855416/v855416853/1a4f0c/YB36punuuwQ.jpg"/>} onClick={this.props.go} Data-to="Project1" description="Конкурс пародий. Повтори, если сможешь!">Конкурс "Один в один"</Cell>
    </List>
    </Group>
 </Panel>
);
}
}

Projects.propTypes = {
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

export default Projects;
