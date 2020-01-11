import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import List from '@vkontakte/vkui/dist/components/List/List';
import { FormLayout, FormLayoutGroup, Input } from '@vkontakte/vkui';
import { HeaderButton } from '@vkontakte/vkui';
///Icons
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import Icon20EducationOutline from '@vkontakte/icons/dist/20/education_outline';
import Icon24UserOutgoing from '@vkontakte/icons/dist/24/user_outgoing';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon24UserAddOutline from '@vkontakte/icons/dist/24/user_add_outline';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

const Register = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton onClick={go} Data-to="Started"><Icon24BrowserBack/></HeaderButton>}>Регистрация</PanelHeader>
		<Group title="Регистрация">
	    <FormLayout>
		<Input type="first_name" top="Имя" placeholder="Имя"/>
        <Input type="last_name" top="Фамилия" placeholder="Фамилия"/>
		<Input type="middle_name" top="Отчество" placeholder="Отчество"/>
		<Input type="date of birth" top="Дата рождения" placeholder="Например: '14.08.1990'"/>
		<Select top="Пол" placeholder="Выберите пол">
        <option value="m">Мужской</option>
        <option value="f">Женский</option>
        </Select>
		<Select top="Страна" placeholder="Выберите страну">
		<option value="rus">Российская Федерация</option>
		</Select>
		<Select top="Город" placeholder="Выберите город">
        <option value="vol">Вологда</option>
		<option value="sok">Сокол</option>
		<option value="gryz">Грязовец</option>
		<option value="shere">Череповец</option>
		<option value="vl-ust">Великий Устюг</option>
		<option value="vut">Вытегра</option>
	    </Select>
		<Div></Div>
		<Input type="login" top="Логин" placeholder="Придумайте логин"/>
		<Input type="password" top="Пароль" placeholder="Придумайте пароль"/>
		<Input type="password" placeholder="Подтвердите пароль"/>
		<Div></Div>
		<Button size="xl" level="secondary" before={<Icon24UserAddOutline/>} onClick={go} Data-to="Auth">Зарегистрироваться</Button>
		</FormLayout>
   	  </Group>
    </Panel>
);

Register.propTypes = {
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

export default Register;
