# Docker image for vitepress
# VERSION 1.0.0
# Author: yudidayeye

# 基础镜像，使用nginx镜像
FROM nginx

# 设置工作目录
WORKDIR /home

# 将整个应用复制到容器中
COPY . .

#拷贝nginx.conf文件到镜像下，替换掉原有的nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

COPY .vitepress/dist /usr/share/nginx/html/

#应用构建成功后的文件被复制到镜像内,use to volume
COPY .vitepress/dist /usr/share/nginx/html/mono-ui/

#just a declare,will create a directory /var/lib/docker/volumes to bind anonymous volumes,use -v dic:dic is neccessary
#VOLUME /usr/share/nginx/html/mono-ui

# 暴露端口
EXPOSE 8081

#启动容器时的进程
ENTRYPOINT nginx -g "daemon off;"
