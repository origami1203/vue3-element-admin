import Setting from "@/setting";

const title = Setting.title || '后台管理系统'

export function getPageTitle(pageTitle: string): string {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return title;
}