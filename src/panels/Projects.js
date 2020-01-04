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
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton } from '@vkontakte/vkui';
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
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import Icon24Market from '@vkontakte/icons/dist/24/market';
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk';
import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
import Icon56FireOutline from '@vkontakte/icons/dist/56/fire_outline';
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import user from '@vkontakte/icons/dist/24/user';


const Profile = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton onClick={go} Data-to="Home"><Icon24BrowserBack/></HeaderButton>}>???????</PanelHeader>
 	<Group title="??????????? ???????">
    <Cell expandable before={<Icon24User/>}>???????? ?????</Cell>
    <Cell expandable before={<Avatar src="https://sun9-8.userapi.com/c855332/v855332850/12dbfb/21ssy9iYcGs.jpg"/>}>???????? ???????????</Cell>
     </Group>
     <Group title="????????? ???????">
     <Cell expandable before={<Avatar src="https://sun9-3.userapi.com/c855416/v855416853/1a4f0c/YB36punuuwQ.jpg"/>}>??????? "???? ? ????"</Cell>
     <Cell expandable before={<Avatar src="https://sun9-18.userapi.com/c845521/v845521060/185e69/-Poj5OWvw0I.jpg"/>}>?????? ?? ???????????</Cell>
     <Cell expandable before={<Avatar src="https://sun9-56.userapi.com/c853524/v853524614/180a74/EmbF7mDRjCM.jpg"/>}>??????? "? ?? ??? ????? ????? ??????!"</Cell>
     <Cell expandable before={<Avatar src="https://sun9-49.userapi.com/c858224/v858224433/ecc30/KFgggeOEr9w.jpg"/>}>???????? ?????-?????? ??? ?.???????</Cell>
     <Placeholder icon={<Icon56FireOutline/>} title="?????? ?????? ?????????" action={<Button size="l" href="https://vk.com/centobr42_press_center">?????????</Button>}>???????? ? ?????? ?????-?????? ? ????? ?? ????? ?????? ? ????? ????????!</Placeholder>
    </Group>
 </Panel>
);

Profile.propTypes = {
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

export default Profile;
