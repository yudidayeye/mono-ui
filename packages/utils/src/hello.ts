/*
 * @Description:hello
 * @Author: lijin
 * @Date: 2023-08-10 15:30:27
 * @LastEditTime: 2023-12-04 17:10:16
 * @LastEditors: yudidayeye 908737208@qq.com
 */
export function hello(to: string = 'World') {
  const txt = `Hello ${to} -- jinjin`;
  alert(txt);
  return txt;
}
