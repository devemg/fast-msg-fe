export interface MenuOption {
    title: string; 
    icon: string; 
    route: string;
}
export const options: MenuOption[] = [
    {
        title:'Comunidad',
        icon:'public',
        route: './community'
    },
    {
        title: "Contactos",
        icon: "contacts",
        route: './contacts'
    },
    {
        title: "Chats",
        icon: "chat",
        route: './chat'
    },
    {
        title: "Cuenta",
        icon: "settings",
        route: './account'
    }];