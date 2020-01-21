import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Group, Switch, Cell, CellButton, Separator, List, Div, Avatar, Snackbar } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Repeat from '@vkontakte/icons/dist/24/repeat';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon16Cancel from '@vkontakte/icons/dist/16/cancel';
import settings from '@vkontakte/icons/dist/24/settings';

const orangeBackground = {
	backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)'
  };
  
  const blueBackground = {
	backgroundColor: 'var(--accent)'
  };
  
  class Settings extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		text: '',
		snackbar: null
	  };
  
	  this.openBase = this.openBase.bind(this);
	  this.openBaseWithAction = this.openBaseWithAction.bind(this);
  
	  this.openLongText = this.openLongText.bind(this);
	  this.openWithAvatar = this.openWithAvatar.bind(this);
	}
  
	componentDidMount() {
	  this.openBase()
	}
  
	openBase () {
	  if (this.state.snackbar) return;
	  this.setState({ snackbar:
		<Snackbar
		  layout="vertical"
		  onClose={() => this.setState({ snackbar: null })}
		  action="Отменить"
		  onActionClick={() => this.setState({ text: 'Push-уведомления отключены' })}
		  before={<Avatar size={24} style={blueBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
		>Push-уведомления включены</Snackbar>
	  });
	}

	updateService () {
	if (this.state.snackbar) return;
	this.setState({ snackbar:
	<Snackbar>
	layout="vertical"
	onClose={() => this.setState({ snackbar: null})}
	action="Отменить"
	onActionClick={() => this.setState({ text: 'Автообновление сервиса отключено' })}
	before={<Avatar size={24} style={blueBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}> 
	Автообновление приложения включено</Snackbar> 
	});
	}

	openBaseWithAction () {
	  if (this.state.snackbar) return;
	  this.setState({ snackbar:
		<Snackbar
		  onClose={() => this.setState({ snackbar: null })}
		  action="Добавить метку"
		  onActionClick={() => this.setState({ text: 'Добавляем метку.' })}
		  before={<Avatar size={24} style={orangeBackground}><Icon24Favorite fill="#fff" width={14} height={14} /></Avatar>}
		>
		  Ссылка сохранена в закладки
		</Snackbar>
	  });
	}
  
	openLongText () {
	  if (this.state.snackbar) return;
	  this.setState({ snackbar:
		<Snackbar
		  layout="vertical"
		  onClose={() => this.setState({ snackbar: null })}
		  action="Подробнее"
		  onActionClick={() => this.setState({ text: 'Открыта подробная информация.' })}
		  before={<Avatar size={24} style={orangeBackground}><Icon24Favorite fill="#fff" width={14} height={14} /></Avatar>}
		>
		  Ссылка сохранена в закладки. Все отметки «Нравится» переместились в новости
		  под вкладкой «Понравилось».
		</Snackbar>
	  });
	}
  
	openWithAvatar () {
	  if (this.state.snackbar) return;
	  this.setState({ snackbar:
		<Snackbar
		  layout="vertical"
		  onClose={() => this.setState({ snackbar: null })}
		  action="Отменить"
		  onActionClick={() => this.setState({ text: 'Сообщение Ивану было отменено.' })}
		  after={<Avatar src="https://sun9-20.userapi.com/c846018/v846018136/164bc/XoLIN4P5Kb0.jpg?ava=1" size={32} />}
		>Отправлено Ивану Барышеву
		</Snackbar>
	  });
	}

render() {
return(
<Panel id={this.props.id}>
	<PanelHeader left={<HeaderButton onClick={this.props.go} Data-to="Home"><Icon24Cancel/></HeaderButton>}>Настройки</PanelHeader>
	<Group title="Основные">
	<List>
	<Cell before={<Icon24Notification/>} asideContent={<Switch defaultChecked />} onChange={this.openBase}>Получать Push-уведомления</Cell>
    <Cell before={<Icon24Repeat/>} asideContent={<Switch defaultChecked />} onChange={this.updateService}>Автообновление сервиса</Cell>
	<Separator style={{ margin: '8px 0'}}/>
	<CellButton before={<Icon24Document/>} component="a" href="https://vk.com/doc270919242_530725932">Лицензионное соглашение ПО</CellButton>
	<CellButton before={<Icon24Document/>} component="a" href="https://vk.com/doc270919242_530725961">Политика конфиденциальности</CellButton>
    </List>
    </Group>
	 </Panel>
    )
  }
}

Settings.propTypes = {
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

export default Settings;