# Laborator 4 

## Commands

```
$ ssh -i "qwikLABS-L1090-1943779.pem" ec2-user@34.254.201.143
```

```
aws s3 ls
$ aws dynamodb list-tables
```

```
aws dynamodb create-table --cli-input-json file://create-table.json
```

```
aws dynamodb put-item --cli-input-json file://put-item.json
```

```
aws dynamodb query \ --table-name cloudshape-catpics-alexandru \ --key-condition-expre
ssion "CatId Between 1 AND 5"
```