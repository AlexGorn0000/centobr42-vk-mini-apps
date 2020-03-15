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
import { FormLayout, FormLayoutGroup, Input, Tooltip, Counter, Link, Header } from '@vkontakte/vkui';
import Card from '@vkontakte/vkui/dist/components/Card/Card';
import Gradient from '@vkontakte/vkui/dist/components/Gradient/Gradient';
import CardScroll from '@vkontakte/vkui/dist/components/CardScroll/CardScroll';
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

class Home extends React.Component {
 constructor(props) {
super(props);
this.state = {tooltip: true, tooltip2: false, tooltip3: false, tooltip4: false, tooltip5: false};
}
render(){
return(
	<Panel id={this.props.id}>
	<PanelHeader>Личный кабинет</PanelHeader> 
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
	 <Cell expandable before={<Icon24Services fill="#00acff"/>} onClick={this.props.go} Data-to="Projects" indicator={<Counter mode="prominent">1</Counter>}>Мероприятия</Cell></Tooltip>
	 <Cell expandable before={<Icon24Live fill="#00acff"/>} description="В разработке до 15 марта">Прямая трансляция</Cell>
	 <Tooltip text="Хотите задать вопрос, но не знаете куда обратиться? Техническая поддержка Вам в помощь!" isShown={this.state.tooltip3} onClose={() => this.setState({ tooltip3: false, tooltip4: true })} offsetX={10}>
	 <Cell expandable before={<Icon24Help fill="#00acff"/>} onClick={this.props.go} Data-to="Help">Помощь</Cell></Tooltip>
	 <Separator style={{ margin: '10px 0' }} />
	 <Tooltip text="Управлять функционалом приложения легко! Для этого перейдите в блок «Настройки»" isShown={this.state.tooltip5} onClose={() => this.setState({ tooltip5: false })} offsetX={10} >
	 <Cell expandable before={<Icon24Settings fill="#00acff"/>} onClick={this.props.go} Data-to="Settings">Настройки</Cell></Tooltip>
	 </List>
	 </Group>
	 <Gradient>
      <Group header={
        <Header
          aside={<Link>Показать все</Link>}
          subtitle="С быстрым входом"
        >
          Другие сервисы VK
        </Header>
      }>
        <CardScroll style={{ paddingBottom: 20 }}>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
        </CardScroll>
      </Group>
    </Gradient>
	 <Group>
	 <Cell before={<Icon24Info fill="#00acff"/>}>Информация</Cell>
	 <Gallery
                slideWidth="100%"
                align="center"
                style={{ height: 220 }}
              >
				<img src="https://sun1-27.userapi.com/BbxhADmLTC-VUKwrzblMu_R2zgNQZE1Nu46V2A/ksS1_CXcL78.jpg"/>
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
