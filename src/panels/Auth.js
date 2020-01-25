import React, {Component} from 'react';
import {render} from 'react-dom';
import Return from 'react-dom';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import List from '@vkontakte/vkui/dist/components/List/List';
import { FormLayout, FormLayoutGroup, Input, FormStatus, HorizontalScroll, Separator, Select, View, Tooltip} from '@vkontakte/vkui';
import { HeaderButton } from '@vkontakte/vkui';
///Icons
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon24Info from '@vkontakte/icons/dist/24/info';
import Icon20EducationOutline from '@vkontakte/icons/dist/20/education_outline';
import Icon24UserOutgoing from '@vkontakte/icons/dist/24/user_outgoing';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28Mention from '@vkontakte/icons/dist/28/mention';
import Icon28RecentOutline from '@vkontakte/icons/dist/28/recent_outline';
import Icon28Users from '@vkontakte/icons/dist/28/users';
/*
const users = [
    {id: 223646052, name: "Елена Калистратова"},
    {id: 7181764, name: "Татьяна Орлова"},
    {id: 59155411, name: "Наталья Зуева"},
    {id: 270919242, name: "Александр Горбунов"},
	{id: 3273910, name: "Борис Караваев"}
  ];

  const login = [
    {id: 223646052, login: "yelena.kalistratova"},
    {id: 7181764, login: "tatyana.orlova"},
    {id: 59155411, login: "natalyyaa"},
    {id: 270919242, login: "allexgorn"},
	{id: 3273910, login: "karavaevb"}
  ];

  const password = [
	{id: 223646052, password: "81456943"},
    {id: 7181764, password: "95793857"},
    {id: 59155411, password: "63858589"},
    {id: 270919242, password: "81457066"},
	{id: 3273910, password: "18593848"}
  ];
*/
const orangeBackground = {
	backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)'
  };
  
  const blueBackground = {
	backgroundColor: 'var(--accent)'
  };
  
  class Auth extends React.Component {
	constructor(props) {
	  super(props);
  
	  this.state = {
		login: '',
		password: '',
      }

	  this.state.Users = [
	  {name: 'yelkalistratova' , string: '814384'},
	  {name: 'boriskaravaev', string: '123123'},
	  {name: 'alexgorbunov', string: '537883'},
	  {name: 'tatyorlova', string: '312123'},
	  {name: 'natalzyeva', string: '312334'},
	  ];

	  this.onChange = this.onChange.bind(this);
	}
  
	onChange(e) {
	  const { name, value } = e.currentTarget;
	  this.setState({ [name]: value });
	}
  
	render() {
	const { login, password } = this.state;
    return(
	<Panel id={this.props.id}>
	<PanelHeader left={<HeaderButton><Icon24UserOutgoing/></HeaderButton>}>Вход в учетную запись</PanelHeader>
	<Group>
	<Div style={{textAlign: "center"}}><img width="85" height="75" src="https://sun9-18.userapi.com/c200628/v200628344/41609/ZxjRT37a5Qs.jpg"/>
	<h4 style={{textAlign: 'center'}}>Добро пожаловать в<br/>Личный кабинет</h4></Div>
	<Separator style={{margin: '5px 0'}}/>
	<Cell before={<Icon28ArticleOutline/>}>Получайте сведения о завтрашних<br/>
	уроках</Cell>
	<Cell before={<Icon28Mention/>}>Будьте в курсе всех событий,<br/>
	просходящих в Центре образования</Cell>
	<Cell before={<Icon28Users/>}>Делитесь c одноклассниками<br/>
	интересными событиями в беседе</Cell>
	<Separator style={{margin: '5px 0'}}/>
	<FormLayout>
	<FormLayoutGroup>
	<h4 style={{marginLeft: '20px'}}>Выберите, кем Вы являетесь:</h4>
	<Select>
	<option value="0">Учащийся</option>
	<option value="1">Родитель</option>
	<option value="2">Преподователь</option>
	</Select>
	<br></br>
	<h4 style={{marginLeft: '20px'}}>Введите данные для входа:</h4>
	{this.state.Users.reduce(({ name, string }) => (
	<Input type="login" name="login" value={name} key={name} onChange={this.onChange} status={login? 'valid' : 'error'} bottom={login? 'Ваш логин успешно инициализирован' : 'Ошибка: 0x52d270. Ваши данные не внесены в систему!'} placeholder="Введите логин" />
	))}
	{this.state.Users.reduce(({ name, string }) => (
	<Input type="password" name="password" value={string} key={string} onChange={this.onChange} status={password? 'valid' : 'error'} bottom={password? 'Ваш пароль успешно инициализорован!' : 'Ошибка: 0x74d270. Ваши данные не внесены в систему!'} placeholder="Введите пароль"/>
	))}
	{this.state.Users.reduce(({ name, string }) => (
	<Button size="xl" level="primary" onClick={this.props.go? 'name' : 'string'} onDoubleClick={this.props.go} Data-to="Home">Войти</Button>   
	))}
    </FormLayoutGroup>
      </FormLayout>
	</Group>
	</Panel>
	);
  }
}



 Auth.propTypes = {
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

export default Auth;
