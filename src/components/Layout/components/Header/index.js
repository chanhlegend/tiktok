import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import MenuItem from '~/components/Popper/Menu/MenuItem';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'languege',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'languege',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shotcuts' },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (nenuItem) => {
        switch (MenuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/feedback' },
        { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coin' },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/setting' },
        ...MENU_ITEMS,
        { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                <Search/>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                src="https://nld.mediacdn.vn/2020/9/7/anh-1-15994611977581569666831.gif"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
