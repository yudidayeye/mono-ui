/*
 * @Description:hello
 * @Author: lijin
 * @Date: 2023-08-10 15:30:27
 * @LastEditTime: 2023-08-11 15:56:00
 * @LastEditors:
 */
export function hello(to: string = 'World') {
  const txt = `Hello ${to} -- jinjin`;
  alert(txt);
  return txt;
}
