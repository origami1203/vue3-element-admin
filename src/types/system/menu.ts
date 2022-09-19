export interface Menu {
    path: string;
    component: string;
    redirect?: string;
    children?: Menu[],
    meta: object
}
