import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS, Group, Switch, Cell, CellButton, Separator, List } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Repeat from '@vkontakte/icons/dist/24/repeat';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import settings from '@vkontakte/icons/dist/24/settings';

const Settings = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton onClick={go} Data-to="Home"><Icon24Cancel/></HeaderButton>}>Настройки</PanelHeader>
	<Group title="Основные">
	<List>
	<Cell before={<Icon24Notification/>} asideContent={<Switch/>} onClick={this.setState.Switch}>Получать Push-уведомления</Cell>
    <Cell before={<Icon24Repeat/>} asideContent={<Switch defaultChecked />} onClick={this.setState.Switch}>Автообновление сервиса</Cell>
	<Separator style={{ margin: '5px 0'}}/>
	<CellButton before={<Icon24Document/>}>Лицензионное соглашение ПО</CellButton>
	<Div><center>или</center></Div>
	<CellButton before={<Icon24Document/>}>Политика конфиденциальности</CellButton>
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