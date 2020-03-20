import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import connect from '@vkontakte/vk-connect'; 
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';
import List from '@vkontakte/vkui/dist/components/List/List';
import Separator from '@vkontakte/vkui/dist/components/Separator/Separator'
import { FormLayout, FormLayoutGroup, Input, Tooltip, Counter, Link, Header, PromoBanner, FixedLayout, Search } from '@vkontakte/vkui';
import { Card, CardScroll, CardGrid, Gradient } from '@vkontakte/vkui';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
///Data
import News from './News';
import Settings from './Settings';
import Projects from './Projects';
import Broadcast from './Broadcast';
import Teaching from '../education/Teaching';
import Help from './Help';
import Project1 from '../projects/project1/Project1';
import Project2 from '../projects/project2/Project2';
import Timetable from '../education/Timetable';
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
import Icon24Notification from '@vkontakte/icons/dist/24/notification';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Cancel from '@vkontakte/icons/dist/24/cancel';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Recent from '@vkontakte/icons/dist/24/recent';
import Icon24Home from '@vkontakte/icons/dist/24/home';
import Icon24Reorder from '@vkontakte/icons/dist/24/reorder';
import "./WallPost.css";

const promoBannerProps = {
	title: 'РДШ | Вологодская область',
	domain: 'vk.com/skm_35',
	ctaText: 'Перейти',
	advertisingLabel: 'Реклама',
	iconLink: 'https://sun1-23.userapi.com/c845221/v845221586/1cda78/HpVqdx7fijk.jpg?ava=1',
	description: 'Ты активный гражданин РФ? Есть талант, но не знаешь кому показать? Тогда тебе к нам!',
	ageRestriction: 12
  };

  const thematics = [
    {id: 4233, data: News, name: "Новости"},
    {id: 4234, data: Teaching, name: "Педагогический состав"},
    {id: 4235, data: Timetable, name: "Расписание уроков"},
    {id: 4236, data: Projects, name: "Мероприятия"},
	{id: 4237, data: Project1, name: "Конкурс `Один в Один`"},
	{id: 4238, data: Project2, name: "Один год хорошо, а два лучше"},
	{id: 4239, data: Broadcast, name: "Прямая трансляция"},
	{id: 4240, data: Help, name: "Помощь"},
	{id: 4241, data: Settings, name: "Настройки"}
  ];

class Home extends React.Component {
constructor(props) {
super(props);
this.state = {tooltip: true, tooltip2: false, tooltip3: false, tooltip4: false, tooltip5: false, search: ''};
this.onChange = this.onChange.bind(this);
}
onChange (e) { this.setState({ search: e.target.value }); }

    get thematics () {
      const search = this.state.search.toLowerCase();
      return thematics.filter(({name}) => name.toLowerCase().indexOf(search) > -1);
    }
render(){
return(
	<Panel id={this.props.id}>
	<PanelHeader>Личный кабинет</PanelHeader> 
	<Search value={this.state.search} onChange={this.onChange} after={null} onClick={this.thematics.length &&
		 <List>
         {this.thematics.map(thematic => <Cell key={thematic.id} onclick={this.props.go} Data-to={thematic.data}>{thematic.name}</Cell>)}
            </List>
          }/>
	<img width="100%" height="100%" src="https://sun9-12.userapi.com/c205824/v205824455/82fec/nOnsoMv-mC0.jpg"></img>
	<Group>
	<List>
	 <Tooltip text="Здесь Вы можете посмотреть данные о своем профиле." isShown={this.state.tooltip} onClose={() => this.setState({ tooltip: false, tooltip2: true })} offsetX={10} offsetY={30}>
	 <Cell expandable before={<Icon24Home fill="#00acff"/>} onClick={this.props.go} Data-to="Profile">Мой профиль</Cell></Tooltip>
	 <Separator style={{ margin: '5px 0' }} />
     <Cell before={<Icon24Newsfeed fill="#00acff"/>} onClick={this.props.go} Data-to="News">Новости</Cell>
	 <Tooltip text="Следите за успеваемостью ребенка уже сегодня! Для этого перейдите в блок «Образование»." isShown={this.state.tooltip4} onClose={() => this.setState({ tooltip4: false, tooltip5: true })} offsetX={10}>
	 <Cell expandable before={<Icon24Education fill="#00acff"/>} onClick={this.props.go} Data-to="Education">Образование</Cell></Tooltip>
	 <Tooltip isShown={this.state.tooltip2} onClose={() => this.setState({tooltip2: false, tooltip3: true})} offsetX={10} text="У Вас есть талант, но не знаете кому показать? Тогда Вам сюда!">
	 <Cell expandable before={<Icon24Services fill="#00acff"/>} onClick={this.props.go} Data-to="Projects">Мероприятия</Cell></Tooltip>
	 <Cell expandable before={<Icon24Live fill="#00acff"/>} description="В разработке">Прямая трансляция</Cell>
	 <Tooltip text="Хотите задать вопрос, но не знаете куда обратиться? Техническая поддержка Вам в помощь!" isShown={this.state.tooltip3} onClose={() => this.setState({ tooltip3: false, tooltip4: true })} offsetX={10}>
	 <Cell expandable before={<Icon24Help fill="#00acff"/>} onClick={this.props.go} Data-to="Help">Помощь</Cell></Tooltip>
	 <Separator style={{ margin: '10px 0' }} />
	 <Tooltip text="Управлять функционалом приложения легко! Для этого перейдите в блок «Настройки»" isShown={this.state.tooltip5} onClose={() => this.setState({ tooltip5: false })} offsetX={10} >
	 <Cell expandable before={<Icon24Settings fill="#00acff"/>} onClick={this.props.go} Data-to="Settings">Настройки</Cell></Tooltip>
	 </List>
	 </Group>
	 <Gradient>
      <Group header={<Header aside={<Link>Показать все</Link>}subtitle="#РДШ #ГорКом35 #School42">Советуем подписаться!</Header>}>
		  <CardScroll style={{ paddingBottom: 20 }}>
          <Card mode="black" size="m">
          <img style={{ width: 180, height: 110, borderRadius: '10px'}} component="a" href="https://vk.com/skm_35" src="https://sun1-16.userapi.com/jk437moaBhHdikFaiUzoYr1KEkK0Anu-ZQe9Cw/t4O1oIYblSw.jpg" />
          </Card>
          <Card mode="black" size="m">
		  <img style={{ width: 180, height: 110, borderRadius: '10px'}} component="a" href="https://vk.com/gorcom35" src="https://sun1-91.userapi.com/eajSNaj-fTtFku7n2EDPMmzxcILpMNppeyrPvw/-LNANBkG3z8.jpg" />
          </Card>
          <Card mode="black" size="m">
		  <img style={{ width: 180, height: 110, borderRadius: '10px'}} component="a" href="https://vk.com/public168892763" src="https://sun1-98.userapi.com/Yyi_E_kPRy8GFbjIEH-oEhFJu3dW-Fegd1NaXA/zjmkPkYva1o.jpg" />
          </Card>
        </CardScroll>
      </Group>
    </Gradient>
	 <Group>
	 <Cell before={<Icon24Info fill="#00acff"/>}>Информация</Cell>
	 <Gallery
                slideWidth="100%"
                align="center"
                style={{ height: 230 }}
              >
				<img src="https://sun1-21.userapi.com/awpySnwZeW10QOwryH53jEPvVELac6NO3_Oopw/4WzxeIK2oJs.jpg"/>
				<img src="https://sun9-7.userapi.com/c205720/v205720542/8544e/Xbn4aY4Zdp0.jpg"/>
				<img src="https://sun9-27.userapi.com/c206520/v206520353/658d9/8v_Bg-7JsIE.jpg"/>
				<img src="https://sun9-9.userapi.com/c855732/v855732618/1f829b/MTdYyUi3dEg.jpg"/>
              </Gallery>
			  <Separator style={{ margin: '10px 0'}}/>
		<FormLayoutGroup>
		<FormLayout>
			  <Button size="xl" level="outline" onClick={this.props.go} Data-to="News">Подробнее</Button>
		</FormLayout>
		</FormLayoutGroup>
         </Group>
    <Group>
	<List>
	 <Cell expandable before={<Icon24LogoVk fill="#00acff" />} href="https://vk.com/public168892763">Наша группа</Cell>
	</List>
	</Group>
	<FixedLayout vertical="bottom">
	<PromoBanner bannerData={promoBannerProps} />
	</FixedLayout>;
 </Panel>
);
}
}


Home.propTypes = {
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

export default Home;
