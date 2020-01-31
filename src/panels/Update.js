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
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton, Separator, Gallery } from '@vkontakte/vkui';
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
import Icon24Report from '@vkontakte/icons/dist/24/report';

class Update extends React.Component {

    constructor (props) {

      super(props);

      this.state = {
        slideIndex: 0
      }
    }

    render () {
      return (
	<Panel id={this.props.id}>
		<PanelHeader>Обновление</PanelHeader>
 		<Group>
	     <Gallery slideWidth="100%" style={{ height: 200}} bullets="dark">
        <img src="https://sun9-48.userapi.com/c206816/v206816373/54835/SOTltUgURSY.jpg"/>
        <img src="https://sun9-24.userapi.com/c205720/v205720373/53367/jH1l3lY28kM.jpg"/>
        <img src="https://sun9-60.userapi.com/c856016/v856016373/1edf30/C2gQJYQGUVA.jpg"/>
        </Gallery>
        <Separator style={{margin: '5px 0'}}/>
        <Div>
        <Cell before={<Icon28ArticleOutline/>}>Добавлена функция "Поделиться"<br/>в Расписании уроков</Cell>
	    <Cell before={<Icon28Mention/>}>Будьте в курсе всех событий,<br/>проходящих в Центре образования</Cell>
	    <Cell before={<Icon28Users/>}>Делитесь c одноклассниками<br/>интересными событиями в беседе</Cell>
        </Div>
        <Separator style={{margin: '5px 0'}}/>
        <Div><center>
        <Button size="xl" onClick={this.props.go} Data-to="Home">Продолжить</Button></center>
        </Div>
		</Group>
		<Group>
		<Cell before={<Icon24Report/>} component="a" href="https://vk.com/centobr42_press_center">Техническая поддержка</Cell>
		</Group>
 </Panel>
);
}
}

Update.propTypes = {
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

export default Update;
