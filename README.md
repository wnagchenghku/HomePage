### What is the address of my web site?
The URL of a user's homepage is http://www.cs.hku.hk/~username. Suppose your user name is tmchan, you may then access your homepage from the Internet via the URL:

http://www.cs.hku.hk/~tmchan/index.html

### How do I upload files to my web site?
You may upload your files to your homepage directory by SFTP to i.cs.hku.hk, after login CSVPN.

### What permission do I need to set so that a user can view my web site?
In order to let other people have the rights to see your homepage, the access permission of your HTML files should be world readable. Please use the following UNIX command to do so:
```
chmod 644 index.html
```

If you place your files under a sub-directory, e.g. /homepage/$HOME/public_html/dir_name/index.html, please use the following command to make the sub-directory world executable:
```
chmod 711 dir_name
```
### sftp
linux下直接在终端中输入：sftp username@remote ip(or remote host name)。出现验证时，只需填入正确的密码即可实现远程链接。登入成功后终端呈现出:sftp>....

在sftp的环境下的操作就和一般ftp的操作类似了，ls,rm,mkdir,dir,pwd,等指令都是对远端进行操作，如果要对本地操作，只需在上述的指令上加‘l’变为：lls,lcd, lpwd等。当然既然是ftp，当然得说它的上传和下载咯！

上传：put /path/filename(本地主机) /path/filename(远端主机)；

下载：get /path/filename(远端主机) /path/filename(本地主机)。
