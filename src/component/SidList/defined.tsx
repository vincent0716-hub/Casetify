
type FilterType = {
    titleGroup: TitleGroup[],
    color: Color[],
}
export type TitleGroup = {
    titleName: string,
    titleChild: TitleChild[],
}
type TitleChild = {
    childName: string
}
export type Color = {
    name: string,
    color: string
}
export const mockFilter: FilterType = {
    titleGroup: [
        {
            titleName: "印花圖案",
            titleChild: [
                {
                    childName: "動物"
                },
                {
                    childName: "名言佳句"
                },
                {
                    childName: "小貓"
                },
                {
                    childName: "貼紙"
                },
                {
                    childName: "花卉"
                },
                {
                    childName: "愛"
                },
                {
                    childName: "小狗"
                },
            ]
        },
        {
            titleName: "印花風格",
            titleChild: [
                {
                    childName: "聖誕"
                },
                {
                    childName: "卡通"
                },
                {
                    childName: "優美"
                },
                {
                    childName: "動漫"
                },
                {
                    childName: "黑白"
                },
                {
                    childName: "藝術"
                },
                {
                    childName: "美術"
                },
            ]
        },
        {
            titleName: "聯名系列",
            titleChild: [
                {
                    childName: "多拉a夢"
                },
                {
                    childName: "Beyond the Vines"
                },
                {
                    childName: "NBA"
                },
                {
                    childName: "Marvel"
                },
                {
                    childName: "Disney"
                },
                {
                    childName: "Eva"
                },
                {
                    childName: "Mario"
                },
            ]
        },
    ],
    color: [
        { name: "Black", color: "black" },
        { name: "Yellow", color: "#FAF615" },
        { name: "Red", color: "#FF665F" },
        { name: "Blue", color: "#5FE2FF" },
        { name: "Pink", color: "#FF5FB1" },
        { name: "Green", color: "#A5FF5F" },
        { name: "Purple", color: "#F28BF7" },
        { name: "Transparent", color: "#F7F7F7" }
    ]

}
export enum ColorType {
    "Black" = "黑色",
    "Yellow" = "黃色",
    "Red" = "紅色",
    "Blue" = "藍色",
    "Pink" = "粉色",
    "Green" = "綠色",
    "Purple" = "紫色",
    "Transparent" = "透明",
}