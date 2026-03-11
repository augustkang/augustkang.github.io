---
title: "[AWS] CloudFront Certificate Region"
date: 2021-04-21T14:02:00+09:00
categories:
- aws
tags:
- aws
- cloudfront acm certificate
- cloudfront
- acm certificate
draft: false
---

CloudFront distribution 생성할 때 tls termination 이용할 경우 사용할 certificate는 US east region (N. Virginia)의 certificate만 이용할 수 있다.[1]

SO(StackOverflow) 답변에 의하면 이유는 CloudFront 서비스용 certificate의 경우 해당 리전에서 다른 Edge locations로 배포하기 때문이라고 한다.[2]

또한, 한 Region의 ACM 에서 만들은 Certificate는 다른 리전으로 직접적인? migration 불가능하다.

생성했던 Region과 다른 Region에서 사용하려면 새 Region에서 기존 Region의 Certificate를 Import(안해봐서 정확히 Import와 새로 만드는 것의 차이가 뭔지 모르겠다)하거나 해당 Region에서 새로 Certificate를 만들어야 한다.[3]

다른 Region꺼를 바로 가져다 쓰는게 안되는 이유는 ACM Certificate의 private key를 encrypt하는데 사용하는 default KMS customer master key(CMK)가 각 AWS account, region 별로 고유하기 때문이라고 한다.[4]

참고 :

* [1] CloudFront를 위한 Certificate 리전 - <https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html>
* [2] N.Virgninia 인증서만 가능한 이유..? - <https://stackoverflow.com/a/56419436/11584183>
* [3] ACM Certificate 리전 간 마이그레이션 불가 - <https://aws.amazon.com/ko/premiumsupport/knowledge-center/migrate-ssl-cert-us-east/>
* [4] ACM Certificate 다른 Region, 계정으로 옮기기 불가 - <https://aws.amazon.com/premiumsupport/knowledge-center/acm-export-certificate/>
