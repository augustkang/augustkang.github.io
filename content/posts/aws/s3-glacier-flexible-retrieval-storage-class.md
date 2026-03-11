---
title: "[AWS] S3 Glacier Flexible Retrieval storage class의 개념과 사용법"
date: 2021-06-17T12:10:00+09:00
categories:
- aws
tags:
- aws
- s3
- glacier
draft: false
---

> 2021년 11월 30일 [Amazon S3 Glacier Instant Retrieval storage class](https://aws.amazon.com/about-aws/whats-new/2021/11/amazon-s3-glacier-instant-retrieval-storage-class/)가 공개됨에 따라 기존 S3 Glacier storage class의 이름이 Amazon S3 Glacier Flexible Retrieval storage class로 변경되었습니다.
>
> 이에 기존에 작성했던 포스트를 업데이트하였습니다. 참고 부탁 드립니다!
> (참고 : 이 포스트는 S3 Glacier Instant Retrieval storage class, S3 Glacier Deep Archive storage class에 대해서는 다루지 않습니다..!)

---

S3의 Glacier Flexible Retrieval storage class를 적용할 일이 있어 공부하였습니다. 공부한 내용을 정리해보았습니다!

## **Amazon S3 Glacier란?**

Amazon S3 Glacier는 오랜 세월동안 안전하게 보관이 필요한 데이터, 한번 저장해두면 자주 접근하지 않을 보존용 데이터 등을 저장하는데 좋은 스토리지 서비스 입니다. (정식 명칭은 Amazon S3 Glacier 이지만 편의상 지금부터는 S3 Glacier라고 표현하겠습니다.)

S3 Glacier에서는 S3와 (비슷한 개념이라고 생각하지만) 다른 용어를 사용합니다.

- 데이터를 저장하기 위한 개별 저장소는 Vault라고 부릅니다(S3의 Bucket에 대응).
- Vault에 저장되는 개별 데이터는 Archive 라고 부릅니다(S3의 Object에 대응)

간단히 이야기하자면 S3 Glacier는 Vault(≈Bucket)에 Archive(≈Object)를 저장하는 식으로 이용하는 서비스라고 할 수 있습니다.

## **Amazon S3 Glacier의 특징**

S3 Glacier는 S3보다 저렴한 가격으로 더 많은 양의 데이터를 저장할 수 있으나, 자주 접근하지 않을 데이터 저장에 적합한 서비스 입니다.

일반적인 S3에서는 사용자가 원하면 특정 오브젝트를 바로 다운로드(GetObject)받을 수 있지만, S3 Glacier는 그렇지가 않습니다.

**S3 Glacier에서 사용하는 용어로 데이터를 다운로드할 수 있게 요청, 준비하는 과정을 Retrieval(반출, 검색, 탐색) 이라고 합니다.**

처음에 공부할 때 어느 분 블로그에서 '반출' 이라는 표현을 봤었는데, 그때 아! 이거다! 하는 생각이 들었었습니다. 반출 이라는 표현이 제일 와닿았습니다.
S3 Glacier 서비스 자체가 지하 깊숙한 저장고에 보관해놨다가 필요할때 꺼내 쓰는 느낌..!

저장된 데이터를 다운로드 받기 위한 기본적인 사용 흐름은 아래와 같습니다.
(아마 뒷단의 스토리지에서 사용자가 다운로드 가능한 앞단까지 가져다놓는 작업을 수행하지 않을까 추측됩니다.)

1. 사용자가 저장된 데이터의 반출(Retrieval)을 요청

2. 요청이 완료되면 해당 데이터를 일정 시간동안만 내려받을 수 있게됨.

**저장된 데이터의 Retrieval(반출)에 소요되는 시간과 비용은 반출을 요청하는 타입에 따라 아래와 같이 달라집니다.**

사용자가 해당 데이터가 급히 필요한지, 또는 데이터가 조금 늦게 준비되어도 되는지 여부에 따라 아래 3개 등급 중 선택해서 요청할 수 있습니다.

- Expedited(긴급) - 요청시 1~5분 이내에 이용(다운로드) 가능 → 가장 비쌉니다.
- Standard(표준) - 요청시 3~5시간 이내에 이용(다운로드) 가능 → 중간 가격입니다.
- Bulk(대량) - 요청시 5~12시간 이내에 이용(다운로드) 가능 → 가장 저렴합니다.

반출 요청을 한다고 바로 다운로드 가능한게 아닙니다. 반출 요청 이후 일정 시간 기다려야 다운로드가 가능해집니다.

표준으로 요청하면 3 ~ 5시간 뒤에야 비로소 다운로드 버튼을 클릭할 수 있게 된다고 생각하시면 이해에 도움이 될 것 같습니다.

**(상황 예시)**

**1GB의 데이터 다운로드**에 1시간이 걸린다고 해봅시다.(1GB/hour). 1GB를 표준(3~5시간) 유형으로 반출 요청한다고 가정해보겠습니다.
여기서는 **반출 요청 처리**에 5시간이 걸린다고 해보겠습니다.

위와 같은 상황에 S3 Glacier 사용자 입장에서 다운로드에 총 소요되는 시간은 다음과 같습니다.

**5시간(반출 요청 처리) + 1시간(1GB의 데이터 다운로드) = 6시간**

## **Glacier를 사용하는 방법**

### **S3의 Storage Class로써 Glacier 사용 vs Amazon S3 Glacier 서비스 사용**

AWS에서 Glacier를 사용하는 방법에는 2가지가 있습니다. (저도 처음에 이게 무슨말인가 싶었습니다.)

아래와 같은 유래가 있다고 하네요.([https://stackoverflow.com/a/65929235/11584183](https://stackoverflow.com/a/65929235/11584183))

- 초기에 AWS의 스토리지 서비스로 S3가 있었다.
- S3와 별개의, 백업용 데이터를 저장하기 위한 컨셉으로 Amazon Glacier라는 스토리지 서비스도 있었다.
- S3 사용자 중 Glacier와 같은 스토리지 사용도 원하는 수요가 있었다.
- Amazon Glacier는 사용자 입장에서 직접 사용하기 불편하다. (불편함의 예시 : 데이터 업로드 하고 업로드한 데이터가 잘 들어갔는지 '목록'을 확인할 수 있으려면 24시간을 기다려야 함)
- **S3의 Storage Class로써 S3 Glacier를 사용할 수 있게 제공 시작됨!**

즉, Amazon S3 Glacier는 다른 AWS 서비스들처럼(ex. SNS, SQS, ...) 원래 별도의 서비스 입니다. 콘솔에서 Glacier로 검색하면 나오는 S3 Glacier 라고 나오는 그 서비스인데요.

이 서비스 - Glacier API를 직접 이용하는 방식이 Amazon S3 Glacier 방식이고,

**S3 api를 통해서 S3 Glacier 서비스를 이용하게 해주는 방식이 S3의 Glacier Flexible Retrieval storage class를 이용하는 방식입니다.**

각 방법은 이런 특징이 있습니다.

**1. S3 Glacier Flexible Retrieval storage class**

- 편리한 S3 콘솔, 인터페이스, api 등을 그대로 이용하여 Glacier를 사용할 수 있습니다.
- S3 버킷에서 버킷 내 오브젝트에 대해 Storage Class를 Glacier Flexible Retrieval로 설정하는 방식입니다.
- Download 해야 할 경우 위에 이야기 한 Retrieval type(검색 유형)을 설정하고 요청을 먼저 해야 합니다.
- (몇일간 다운로드가 필요할지 명시해서) 요청을 하면 요청한 유형에 따라 다운로드를 할 수 있게 됩니다. (예: Expedited로 요청했으면 1~5분 내에 다운로드 가능. Standard로 요청했으면 최소 3시간~5시간 후에 요청한 데이터 다운로드 가능)
- 반출을 요청하면 내부적으로는 Glacier Flexible Retrieval storage slass에서 S3 Standard-IA storage class로 객체를 요청한 기간 만큼만 복제해줍니다. 이후 사용자는 S3 Standard-IA storage class에 복제되어 있는 객체에 접근하는 식으로 다운로드 할 수 있게 됩니다.(아래 링크에서 작동에 대한 설명 확인 가능)
- [Reference : S3 FAQs - How can I retrieve my objects that are archived in S3 Glacier Flexible Retrieval and will I be notified when the object is restored?](https://aws.amazon.com/s3/faqs/#Storage_Classes)

(이전에 포스트 작성할 때 Reduced Redundancy storage class로 복제한다고 봤었는데, Glacier Instant Retrieval storage class 출시 이후 다시 찾아보니 S3 Standard-IA storage class라고 되어있네요...)

이 방식의 장점은 기존 S3 콘솔(s3 api)을 이용하여 Glacier로 객체를 보내고 꺼내고 할 수 있다는 점 입니다. S3를 통해 Glacier를 이용하기 때문에 큰 불편함이 없습니다.

참고로, S3 Glacier 서비스에서 직접 vault를 만들고 archive를 올리고 하는 식으로 이용할 경우, 객체를 업로드하면 객체 목록(버킷 내 파일 목록)에 반영되는데
약24시간이 소요됩니다. (업로드를 하면 업로드한게 목록에 바로 뜨지가 않습니다.)

**2. Amazon S3 Glacier(AWS 콘솔에서 Glacier 검색하면 나오는 서비스)**

- 별도로 나왔던 서비스인 Glacier를 직접 이용하는 방법입니다. S3와 다른 별도의 콘솔로 서비스를 제공합니다.
- 독립적인 glacier api를 사용하고, S3를 통해서 사용하면 이용할 수 없는 Vault Lock과 같은 Glacier 고유의 기능 등을 이용할 수 있습니다.
- Vault에 저장된 archive의 목록은 inventory라고 합니다.
- 지금 저장된 archive 목록을 보고 싶으면 inventory를 요청해야 합니다.(glacier api 이용)
- inventory를 요청하면 수시간 내에 vault 내에 저장된 archive의 목록을 확인할 수 있게 됩니다.
- **즉!! 현재 저장되어 있는 목록만 보는데도 몇 시간이 걸립니다.. (사용하기 불편..)**

**고유 기능 - Vault Lock**

- 이 기능은 policy를 정의해서 붙이면 해당 정책을 삭제하지 않는 이상 수정이 불가한 기능이라고 합니다.(bucket policy와 역할은 비슷한데 수정이 불가한 특성)
- 한번 정의한 정책은 제거하고 다시 만들지 않는 이상 수정이 불가!

강력한 보안 요구사항이 있는 조직에서 유용하게 사용할 수 있다고 합니다.

## **예시**

아래는 CloudFormation으로 작성한 S3 Glacier Flexible Retrieval storage class를 사용하는 템플릿 예시 입니다.

Glacier Flexible Retrieval storage class에 저장해둔 오브젝트의 반출에는 시간이 오래 걸리므로, 반출 완료될 시 알림을 받게 설정할 수 있습니다.

아래 예시에서는 MS Teams의 webhook을 이용해 noti를 받게 하였습니다.

MS Teams가 아닌 Slack이나 다른 메신저 서비스의 경우에도 Webhook을 사용할 수 있다면 request를 날리도록 Lambda를  작성한 뒤,
S3 NotificationConfiguration의 대상을 Lambda로 지정 후 해당 Lambda에서 webhook url에 request를 날리도록 하는 식으로 할 수 있습니다.

```yaml
AWSTemplateFormatVersion: "2010-09-09"

# CloudFormation Parameter for MS Teams webhook URL
Parameters:
  WebhookUrl:
    Type: String
    AllowedPattern: ".+" # Set as mandatory

Resources:
  S3Bucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-glacier-bucket
      LifecycleConfiguration:
        Rules:
        - Id: DefaultAsGlacier
          Status: Enabled
          Transitions:
          - TransitionInDays: 0
            StorageClass: GLACIER # Objects will be stored as GLACIER Storage Class
      NotificationConfiguration:
        LambdaConfigurations:
        - Event: s3:ObjectRestore:Completed
          Function: !GetAtt LambdaFunction.Arn
    DependsOn: LambdaPermission

  S3BucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      Bucket: !Ref S3Bucket
      PolicyDocument:
        Statement:
          # put bucket policies as per your requirements

  LambdaPermission:
    Type: AWS::Lambda::Permission
    Properties:
      Action: lambda:InvokeFunction
      Principal: s3.amazonaws.com
      SourceArn: arn:aws:s3:::my-glacier-bucket
      FunctionName: !Ref LambdaFunction

  LambdaRole:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
        - Effect: Allow
          Principal:
            Service:
            - lambda.amazonaws.com
          Action:
          - sts:AssumeRole
      ManagedPolicyArns:
      - arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole
      Path: "/"
      Description: LambdaRole
      RoleName: my-lambda-role

  LambdaFunction:
    Type: AWS::Lambda::Function
    Properties:
      Code:
        ZipFile: |
          import json
          import os
          import logging
          import boto3
          from urllib.request import Request, urlopen
          from urllib.error import URLError, HTTPError

          def lambda_handler(event, context):
              webhook_url = os.environ.get('Webhook')
              bucket = event['Records'][0]['s3']['bucket']['name']
              archive = event['Records'][0]['s3']['object']['key']
              size = event['Records'][0]['s3']['object']['size']

              teams_message = {
                  "@context": "https://schema.org/extensions",
                  "@type": "MessageCard",
                  "themeColor": "64a837",
                  "title": "Glacier 객체 복원 완료",
                  "text": f"복원된 객체 정보는 아래와 같습니다.",
                  "sections": [
                      {
                          "facts": [
                              {
                                  "name": "Bucket",
                                  "value": f"{bucket}"
                              },
                              {
                                  "name": "Archive name : ",
                                  "value": f"{archive}"
                              },
                              {
                                  "name": "Size: ",
                                  "value": f"{size}"
                              }
                          ]
                      }
                  ]
              }
              request = Request(webhook_url, json.dumps(teams_message).encode('utf-8'))
              try:
                  response = urlopen(request)
                  response.read()
                  print("Success")
              except HTTPError as err:
                  print("Fail")
              except URLError as err:
                  print("Fail")
      FunctionName: LambdaWebhook
      Handler: index.lambda_handler
      Role: !GetAtt LambdaRole.Arn
      Runtime: python3.8
      Environment:
        Variables:
          Webhook: !Ref WebhookUrl

```

## **Glacier storage class를 AWS CLI로 이용하는 방법**


### 버킷에 아카이브 올리는 명령어 예시
```bash
[august@dummy-pc ~]$ aws s3 cp FILENAME s3://my-glacier-bucket/ --storage-class GLACIER
# --storage-class GLACIER 옵션을 줘야 합니다.
```

### s3api로 Glacier에 있는 데이터를 Retrieval(반출) 요청하는 명령어 예시
`--restore-request` 옵션을 줘야 합니다. 해당 옵션에는 반출한 오브젝트가 몇 일간 필요한지를 명시하는 `Days` 와, Retrieval 옵션을 명시해줘야 합니다.

retrieval option은 `GlacierJobParameters={"Tier"="Standard"}` 형태로 명시해주면 됩니다.

```bash
[august@dummy-pc ~]$ aws s3api restore-object --bucket BUCKETNAME --key FILENAME --restore-request Days=1,GlacierJobParameters={"Tier"="Standard"}
# Tier를 원하는 Type으로 설정. 여기서는 Standard로 해보았습니다.
# aws s3api restore-object --bucket BUCKETNAME --key FILENAME --restore-request Days=1,GlacierJobParameters={"Tier"="Expedited"}
# aws s3api restore-object --bucket BUCKETNAME --key FILENAME --restore-request Days=1,GlacierJobParameters={"Tier"="Bulk"}

```

- Days=1로 하면 Retrieval 처리 완료되고 하루 동안 해당 Archive를 다운 받을 수 있게됩니다. 7로 하면 일주일동안 받을 수 있게 됩니다.
- Tier가 위에서 설명한 Retrieval 옵션을 뜻합니다.
- - Expedited : 1~5분 내에 반출 가능해짐
- - Standard : 3~5시간 내에 반출 가능해짐
- - Bulk : 5~12시간 내에 반출 가능해짐
- 참고 사항으로, 위 템플릿 예시에서는 Notification을 설정해서 Retrieval이 완료되면 teams로 알림을 받습니다.


### 실제 Retrieval 요청 실행
```bash
[august@dummy-pc ~]$ aws s3api restore-object --bucket BUCKETNAME --key FILENAME --restore-request Days=1,GlacierJobParameters={"Tier"="Standard"}
```

### Retrieval이 진행중인지 확인하는 명령어
- Progress는 보여주지 않고 진행중인지 완료되었는지 여부만 보여줍니다.
- 이런 기약없는? 불편함으로 인해 사용할 경우 Notification이 있으면 좋다고 생각합니다.
```bash
[august@dummy-pc ~]$ aws s3api head-object --bucket BUCKETNAME --key FIELNAME
{
    "AcceptRanges": "bytes",
    "Restore": "ongoing-request=\"true\"", # 현재 Retrieval이 진행중이라는걸 보여줌(ongoing-request=true)
    "LastModified": "2021-03-24T02:13:16+00:00",
    "ContentLength": 3,
    "ETag": "\"abcdefghijklmnopqrstuzwxyz1234567890\"",
    "ContentType": "text/plain",
    "Metadata": {},
    "StorageClass": "GLACIER"
}
```

### Retrieva이 완료되었을 때 head-object 결과
```
[august@dummy-pc ~]$ aws s3api head-object --bucket BUCKETNAME --key FIELNAME
{
    "AcceptRanges": "bytes",
    # ongoing-request = false(완료됨) Expiry Date가 위에 restore-object 명령어에서 명시한 Days의 결과입니다.
    "Restore": "ongoing-request=\"false\", expiry-date=\"Fri, 26 Mar 2021 00:00:00 GMT\"",
    "LastModified": "2021-03-24T02:13:16+00:00",
    "ContentLength": 3,
    "ETag": "\"abcdefghijklmnopqrstuzwxyz1234567890\"",
    "ContentType": "text/plain",
    "Metadata": {},
    "StorageClass": "GLACIER"
}
```

## 그래서 S3 Glacier Flexible Retrieval storage class 사용하면 좋은가요?

비용을 대폭 아낄 수 있습니다.

저의 경우 대략 [비용 계산](https://calculator.aws/) 해봤을때, 동일한 양의 데이터를 S3 standard storage class에 저장할 때보다
80% 정도 저렴하게 이용하고 있다고 계산이 나왔었습니다.

계속 보관되어야 하지만 한번 저장되면 거의 데이터를 찾을 일이 없다! 라는 요구사항이 확실하다면 고려해보시면 좋을 것 같습니다.

읽어주셔서 감사합니다!
