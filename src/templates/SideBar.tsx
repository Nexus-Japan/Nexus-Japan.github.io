import { Copyright } from './Copyright/Copyright';
import { Menu } from './Menu/Menu';
import { Recents } from './Recents/Recents';
import { Tags } from './Tags/Tags';
import type { PostItems } from '../types/Content';
import { AppConfig } from '../utils/AppConfig';
import './SideBar.css';

type SidebarProps = {
	recents: PostItems[];
	tags: string[];
};

const Sidebar = ({ recents, tags }: SidebarProps) => {
	const { copyright } = AppConfig;
	return (
		<div className="sidebar-container">
			<Menu menu={AppConfig.sidebar_links} />
			<Recents posts={recents} />
			<Tags tags={tags} />
			<Copyright copyright={copyright} />
		</div>
	);
};

export { Sidebar };
