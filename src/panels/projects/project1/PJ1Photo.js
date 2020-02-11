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
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow';
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import List from '@vkontakte/vkui/dist/components/List/List';
import { FormLayout, FormLayoutGroup, Input, FormStatus, Search, CellButton, Separator } from '@vkontakte/vkui';
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
import Icon24Help from '@vkontakte/icons/dist/24/help';
import Icon24Followers from '@vkontakte/icons/dist/24/followers';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24Services from '@vkontakte/icons/dist/24/services';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon24Video from '@vkontakte/icons/dist/24/video';
import Icon24Gallery from '@vkontakte/icons/dist/24/gallery';
import Icon24Live from '@vkontakte/icons/dist/24/live';
import Icon24Gift from '@vkontakte/icons/dist/24/gift';
import Icon24PlayNext from '@vkontakte/icons/dist/24/play_next';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Bug from '@vkontakte/icons/dist/24/bug';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Poll from '@vkontakte/icons/dist/24/poll';
import user from '@vkontakte/icons/dist/24/user';


const PJ1Photo = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton onClick={go} Data-to="Project1"><Icon24BrowserBack/></HeaderButton>}>Фотографии</PanelHeader>
    <Group title="Первый этап">
    <Gallery
    slideWidth="100%"
    align="center"
    style={{ height: 200 }}>
			    <img src="https://sun9-49.userapi.com/c857628/v857628784/108b1d/y1koS5DRPl8.jpg"/>
                <img src="https://sun9-17.userapi.com/c857628/v857628784/108b38/m8n0wzvR5HQ.jpg"/>
                <img src="https://sun9-57.userapi.com/c857628/v857628784/108b41/dRyzUtnezLk.jpg"/>
                <img src="https://sun9-11.userapi.com/c857628/v857628784/108b4a/CmlhDUAxkbE.jpg"/>
                <img src="https://sun9-68.userapi.com/c857628/v857628784/108b53/4DHYvUI-zu4.jpg"/>
                <img src="https://sun9-43.userapi.com/c857628/v857628784/108b5c/gqS_g7Q-LZA.jpg"/>
                <img src="https://sun9-44.userapi.com/c857628/v857628784/108b65/1qeQTPXu5YA.jpg"/>
                <img src="https://sun9-42.userapi.com/c857628/v857628784/108b77/G7tTyCaVbNM.jpg"/>
                <img src="https://sun9-57.userapi.com/c857628/v857628784/108b80/40Thp-LTUoQ.jpg"/>
                <img src="https://sun9-22.userapi.com/c857628/v857628784/108bd2/6JZUjJg_tXY.jpg"/>
                <img src="https://sun9-61.userapi.com/c857628/v857628784/108c23/n5M7h98sRlU.jpg"/>    
                <img src="https://sun9-19.userapi.com/c857628/v857628784/108c3e/EVRsGhX_F1Y.jpg"/>  
                <img src="https://sun9-28.userapi.com/c857628/v857628784/108c50/lX1yY-OOq6U.jpg"/>  
                <img src="https://sun9-57.userapi.com/c857628/v857628784/108c6b/QvX5hxdxauQ.jpg"/>                          
                <img src="https://sun9-32.userapi.com/c857628/v857628784/108caa/rNMnQ9gf-Z0.jpg"/>  
                <img src="https://sun9-18.userapi.com/c857628/v857628784/108cb3/4Fv8AFtOq7k.jpg"/>  
                <img src="https://sun9-4.userapi.com/c857628/v857628784/108cbc/vH5JeR0HJAQ.jpg"/>  
                <img src="https://sun9-54.userapi.com/c857628/v857628784/108cd7/ShCksvhm1XQ.jpg"/>  
                <img src="https://sun9-26.userapi.com/c857628/v857628784/108cf2/kS4jSM0NP2M.jpg"/>  
                <img src="https://sun9-39.userapi.com/c857628/v857628784/108d1f/nwDiD0cUxT4.jpg"/>  
                <img src="https://sun9-18.userapi.com/c857628/v857628784/108d28/03_jlS6JRf4.jpg"/>  
                <img src="https://sun9-14.userapi.com/c857628/v857628784/108d31/M_oBmRiHPLQ.jpg"/>  
                <img src="https://sun9-27.userapi.com/c857628/v857628784/108d3a/c3TGFtqAAS4.jpg"/> 
    </Gallery>
    </Group>
    <Group title="Второй этап">
    <Gallery
    slideWidth="100%"
    align="center"
    style={{ height: 200 }}>
			    <img src="https://sun9-38.userapi.com/c204616/v204616763/16a40/p6iTx-SF-VY.jpg"/>  
                <img src="https://sun9-52.userapi.com/c204616/v204616763/16a09/V3AdX7LY4HI.jpg"/> 
                <img src="https://sun9-21.userapi.com/c204616/v204616763/169ee/EAx85Md0KiY.jpg"/>  
                <img src="https://sun9-32.userapi.com/c204616/v204616763/16a5b/QXGt8DwB240.jpg"/>  
                <img src="https://sun9-66.userapi.com/c204616/v204616763/16aa3/eOWS2UE03M0.jpg"/>  
                <img src="https://sun9-25.userapi.com/c204616/v204616763/16ac7/aOEhtTmFBv8.jpg"/> 
                <img src="https://sun9-41.userapi.com/c204616/v204616763/16ae2/f2LLX776jy4.jpg"/>  
                <img src="https://sun9-30.userapi.com/c204616/v204616763/16b21/yqpq4EBkM-w.jpg"/>  
                <img src="https://sun9-58.userapi.com/c204616/v204616763/16b18/mbg8fvOzBHE.jpg"/>  
                <img src="https://sun9-71.userapi.com/c204616/v204616763/16b8d/UzgB3Zv8EJM.jpg"/>  
                <img src="https://sun9-28.userapi.com/c204616/v204616763/16bb1/qeRW7sb4bxI.jpg"/> 
                <img src="https://sun9-47.userapi.com/c204616/v204616763/16cf5/XZ7pewuCgw0.jpg"/>  
                <img src="https://sun9-15.userapi.com/c204616/v204616763/16d85/S2a4fiOLdtc.jpg"/>  
                <img src="https://sun9-32.userapi.com/c204616/v204616763/16ba8/7BHvHwLdJYM.jpg"/>   
    </Gallery>
    </Group>
    <Group>
  	<List>
	  <Cell expandable before={<Icon24LogoVk />} href="https://vk.com/centobr42_press_center">Наша группа</Cell>
	 </List>
	 </Group>
 </Panel>
);

PJ1Photo.propTypes = {
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

export default PJ1Photo;
