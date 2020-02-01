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

const Settings = ({ id, go, fetchedUser}) => (
<Panel id={id}>
	<PanelHeader left={<HeaderButton onClick={go} Data-to="Home"><Icon24Cancel/></HeaderButton>}>Настройки</PanelHeader>
	<Group title="Основные">
	<List>
	<Cell before={<Icon24Notification/>} asideContent={<Switch defaultChecked />}>Получать Push-уведомления</Cell>
    <Cell before={<Icon24Repeat/>} asideContent={<Switch defaultChecked />}>Автообновление сервиса</Cell>
	<Separator style={{ margin: '8px 0'}}/>
	<CellButton before={<Icon24Document/>} component="a" href="https://vk.com/doc270919242_532132361">Лицензионное соглашение</CellButton>
	<CellButton before={<Icon24Document/>} component="a" href="https://vk.com/doc270919242_532132364">Политика конфиденциальности</CellButton>
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