# Aspecte-pragmatice-pentru-ingineria-serviciilor-cloud-arhitecturi-procese-si-practici

Use Git Bash

Laboratory link: https://aws.qwiklabs.com/classrooms/23351

To connect to the AWS Connect to machine by using this command
```bash
  ssh -i "qwikLABS-L1064-1909186.pem" ec2-user@34.245.239.44
```

S3 machine link: https://eu-west-1.console.aws.amazon.com/ec2/v2/home?region=eu-west-1#Instances:sort=ipv6Ips

Usefull commands:

To copy a file in a bucket:

```bash
aws s3 cp cloudshape-test.txt s3://cloudshape-2019-03-03-buzdugan --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers full=emailaddress=buzduganalex1@gmail.com
```

To enable versioning
```bash
aws s3api put-bucket-versioning --bucket s3://cloudshape-2019-03-03-buzdugan --versioning-configuration Status=Enabled
```
