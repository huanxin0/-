- name: Setting context for Kubernetes cluster of Alibaba Cloud Kubernetes Service (ACK)
  uses: aliyun/ack-set-context@v1

- name: Setup .NET Core SDK
  uses: actions/setup-dotnet@v1.9.0

- name: Cache
  uses: actions/cache@v2.1.7
