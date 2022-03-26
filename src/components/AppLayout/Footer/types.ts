export interface MenuGroup {
    label: string;
    showLabel: boolean;
    subMenus: MenuItem[]
}

export interface MenuItem {
    label: string;
    link: string
}