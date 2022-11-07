# base-vuejs

## Setup environment
```
docker-compose up -d
```

# Đăng ký Gitlab Runner
Trong Gitlab, các Runner thực thi các jobs được định nghĩa trong file .gitlab-ci.yml.

Một Runner có thể là `một máy ảo` (VM), một `VPS`, một `bare-metal`, một `docker container` hay thậm chí là một `cluster container`. Gitlab và Runners giao tiếp với nhau thông qua API, vì vậy yêu cầu duy nhất là máy chạy Runner có quyền truy cập Gitlab server.

Phần tiếp theo hướng dẫn moị người đăng ký Gitlab runner thông qua docker :
Trong file `docker-compose.yaml`, chúng tôi đã đăng ký 1 service `gitlab-runner`
Dể đăng ký 1 gitlab runner, ta làm như sau

[How to install gitlab-runner using docker-compose](https://techoverflow.net/2021/01/12/how-to-install-gitlab-runner-using-docker-compose/)
```
docker exec -it app_gitlab_runner gitlab-runner register
```


- Enter the GitLab instance URL (for example, https://gitlab.com/):
  + Nhập : https://git.miichisoft.net/

- Enter the registration token:
    + Trong Gitlab, truy cập Settings => CI/CD => Runners => Lấy token ở đây

- Enter a description for the runner: 
  + Nhập tên bất kỳ (VD : base-vue-runner)

- Enter tags for the runner (comma-separated):
  + Bỏ qua

- Enter an executor: custom, docker-ssh, shell, virtualbox, docker-ssh+machine, docker, parallels, ssh, docker+machine, kubernetes:
  + Nhập : docker

- Enter the default Docker image (for example, ruby:2.7):
  + Nhập : node:16-alpine3.14

# Thiết lập các biến CICD (CICD variables)
Sử dụng Gitlab CI/CD Variables để lưu khóa SSH riêng tư mà Gitlab sẽ sử dụng để xác thực với máy chủ.
- Vào Settings > CI/CD
- Chọn Variable

Thêm các biến sau :
- PATH_TO_PROJECT : là đường dẫn đến thư mục được lưu trên server test (VD : base-express)
- SSH_SERVER_IP : ip server test (vd : 10.0.0.50)
- SSH_SERVER_USER : user truy cập server test
- SSH_PRIVATE_KEY : giá trị này được mô tả ở phần dưới đây

# Tạo cặp khóa SSH
[Use SSH keys to communicate with GitLab](https://docs.gitlab.com/ee/ssh/index.html#generate-an-ssh-key-pair)
- SSH vào server test (VD : ssh user@10.0.0.50)
- Tạo cặp khóa bằng cách sau :
  1. Chạy : `ssh-keygen -t ed25519 -C "email_address"`
    + VD : ssh-keygen -t ed25519 -C "test@miichisoft.net"
  2. Nhập tên file
    + VD : Enter file in which to save the key (/home/user/.ssh/id_ed25519): test
  3. Nhập mật khẩu (để trống)
    + Enter passphrase (empty for no passphrase):
  4. 2 file `test` (file lưu khóa riêng tư) và `test.pub` (file lưu khóa công khai) được tạo trong thư mục `~/.ssh`
  5. Lưu nội dung file `test` (cat ~/.ssh/test) vào trong biến `SSH_PRIVATE_KEY` (CICD Varibles)

- Thêm khóa công khai Gitlab SSH vào máy chủ : 
  + [Add Gitlab SSH public key to your server](https://dev.to/atdigitals/deploy-node-js-using-gitlab-ci-pipeline-2jod)
  1. Lưu giá trị public key trong file test.pub : 
    ```
    cat test.pub
    ```
  2. Thêm SSH public key vào `authorized_keys`
    ```
    nano ~/.ssh/authorized_keys
    ```
  3. Dán public key (giá trị ở bước 1)
  4. Lưu file


