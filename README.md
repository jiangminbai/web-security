## web-security

#### 注意
cookie不区分协议、端口号，即相同域下，cookie在同域下是共享的，不区分协议和端口号。本示例如想正常运行，需要将server-normal项目运行在127.0.0.1上；而server-hacker运行在localhost上

### CRSF 

1. cookie 设置samesite=lax 跨站链接会携带cookie
2. cookie 设置samesite=strict，跨站链接不会携带cookie
3. 服务端生成crsf token，传给客户端，客户端做请求时需要携带token





