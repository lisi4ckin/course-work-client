import * as GiIcons from 'react-icons/gi';

export const sidebarData = [
    {
        title: 'Рыболовы',
        path: '/fishermen',
        icon: <GiIcons.GiLuckyFisherman />,
        cName: 'nav-text'
    },
    {
        title: 'Озера',
        path: '/lakes',
        icon: <GiIcons.GiRiver />,
        cName: 'nav-text'
    },
    {
        title: 'Рыбы',
        path: '/fishes',
        icon: <GiIcons.GiSchoolOfFish />,
        cName: 'nav-text'
    },
    {
        title: 'Наживки',
        path: '/baits',
        icon: <GiIcons.GiFishingLure />,
        cName: 'nav-text'
    }
]