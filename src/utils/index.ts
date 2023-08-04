// 将驼峰命名转换为段横杠命名
export const toLine = (value: string) => {
    return value.replace(/([A-Z])/g, '-$1').toLocaleLowerCase()
}