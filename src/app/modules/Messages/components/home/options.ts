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
        title: "Cuenta",
        icon: "account_circle",
        route: './account'
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
        title: "Configuración",
        icon: "settings",
        route: './settings'
    }];