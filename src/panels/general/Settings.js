import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Group, Switch, Cell, CellButton, Separator, List, Div, Avatar, Snackbar, Header, View} from '@vkontakte/vkui';
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
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24Locate from '@vkontakte/icons/dist/24/locate';
import Icon24LogoGoogle from '@vkontakte/icons/dist/24/logo_google';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon24Education from '@vkontakte/icons/dist/24/education';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Live from '@vkontakte/icons/dist/24/live';

const Settings = ({ id, go, fetchedUser}) => (
<Panel id={id}>
	<PanelHeader left={<HeaderButton onClick={go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>Настройки</PanelHeader>
	{fetchedUser &&
	<Group>
	<Cell before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null} description="Пользователь">{`${fetchedUser.first_name} ${fetchedUser.last_name}`}</Cell>
	</Group>}
	<Group title="Блоки">
	<List>
	<Cell expandable before={<Icon24Home fill="#00acff"/>} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Включен">Мой профиль</Cell>
	<Cell expandable before={<Icon24Newsfeed fill="#00acff"/>} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Включена">Доска почета</Cell>
	<Cell expandable before={<Icon24Education fill="#00acff"/>} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Включено">Образование</Cell>
	<Cell expandable before={<Icon24Services fill="#00acff"/>} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Включены">Мероприятия</Cell>
	<Cell expandable before={<Icon24Live fill="#00acff"/>} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Включена">Прямая трансляция</Cell>
	<Cell expandable before={<Icon24Help fill="#00acff"/>} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Включена">Помощь</Cell>
	</List>
	</Group>
	<Group title="Дополнительно">
	<List>
	<Cell expandable before={<Icon24Notification fill="#ffd700"/>} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Включены">Оповещение об обновлениях</Cell>
	<Cell expandable before={<Icon24Locate fill="#0f82f9"/>} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="При использовании">Геолокация</Cell>
	</List>
	</Group>
	<Group title="Социальные сети">
	<List>
	<CellButton before={<Icon24LogoGoogle fill="#e83b2a"/>} component="a" href="https://youtube.com/channel/UCdfKCDI-yCD3QPyZETkF1Xw">YouTube</CellButton>
	<CellButton before={<Icon24LogoVk fill="#0f82f9"/>} component="a" href="https://vk.com/centobr42_press_center">ВКонтакте</CellButton>
    </List>
    </Group>
	</Panel>
);

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