export type ButtonType = {
    name: string;
    type: 'button' | 'submit';
    classes?: string;
    onClick?: () => void;
}