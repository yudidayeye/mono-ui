# Docker image for vitepress
# VERSION 1.0.0
# Author: yudidayeye

# 基础镜像，使用nginx镜像
FROM nginx

# 设置工作目录
WORKDIR /home

# 安装 node 环境，安装后可使用 npm 命令安装依赖与项目构建
RUN apt-get update && apt-get install -y wget
RUN wget https://registry.npmmirror.com/-/binary/node/v16.16.0/node-v16.16.0-linux-x64.tar.gz
RUN tar -xf node-v16.16.0-linux-x64.tar.gz
RUN ln -s /home/node-v16.16.0-linux-x64/bin/node /usr/local/bin/node
RUN ln -s /home/node-v16.16.0-linux-x64/bin/npm /usr/local/bin/npm
RUN node -v
RUN npm -v

# 设置工作目录
WORKDIR /home/mono-ui

# 将整个应用复制到容器中
COPY . .

# 设置工作目录
WORKDIR /home/mono-ui/docs

# 安装依赖项
RUN pnpm install && pnpm run build

#拷贝nginx.conf文件到镜像下，替换掉原有的nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

#应用构建成功后的文件被复制到镜像内
RUN mv .vitepress/dist /usr/share/nginx/html/mono-ui/

# 暴露端口
EXPOSE 8081

#启动容器时的进程
ENTRYPOINT nginx -g "daemon off;"
