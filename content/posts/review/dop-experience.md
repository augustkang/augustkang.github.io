---
title: "AWS Certified DevOps Engineer Professional 후기"
date: 2021-05-15T01:10:00+09:00
categories:
- review
tags:
- aws
- aws dop
- devops professional
- certification
- devops
- review
draft: false
---
{{< figure src="/images/dop.png" title="" >}}


{{< figure src="/images/dop2.png" title="" >}}

AWS Certified DevOps Engineer - Professional 자격증을 취득했습니다! 호우!

누군가에게 도움이 되길 바라며! ~~(사실 이 뽕맛을 잊지 않기 위해)~~ 준비한 경험을 정리 ~~(자랑)~~ 합니다.

## AWS Certified DevOps Engineer - Professional 시험 간략 소개

[AWS Certified DevOps Engineer - Professional](https://aws.amazon.com/certification/certified-devops-engineer-professional/) 시험 공식 소개에 의하면 아래와 같은 능력들을 검증한다고 합니다.

- AWS 상에서 CI/CD 구축하는 방법
- Security control, governance processes, and compliance validation 등을 구현하고 자동화 하는 방법
- 각종 지표, 로그를 AWS상에서 정의하고 모니터링 하는 방법
- Highly available, Scalable, and self-healing 되는 시스템을 AWS상에서 구현하는 방법
- 다양한 tool을 활용하여 운영 프로세스들을 자동화하는 방법

제가 느끼기로는 AWS 상에서 DevOps를 실현하기 위해 다양한 서비스들을 묶거나 연결하여 운영 자동화를 하는 방법들을 알고 있는지?를 시험하는 것 같았습니다.

[공식 시험 안내서](https://d1.awsstatic.com/ko_KR/training-and-certification/docs-devops-pro/AWS-Certified-DevOps-Engineer-Professional_Exam-Guide.pdf)에 출제되는 도메인과 비율이 자세히 나와 있습니다.

- 도메인 1: SDLC 자동화 - 22%
- 도메인 2: 구성 관리 및 Infrastructure as Code - 19%
- 도메인 3: 모니터링 및 로깅 - 15%
- 도메인 4: 정책 및 표준 자동화 - 10%
- 도메인 5: 인시던트 및 이벤트 대응 - 18%
- 도메인 6: 고가용성, 내결함성 및 재해 복구 - 16%
합계 100%

### 3시간 짜리 시험..

3시간 동안 75 문제를 풀어야 하는 시험입니다... 1000점 만점으로 750점 이상이 나와야 합격이구요.

문제가 많다 보니 시험 시간이 길더라구요. 계산해보면 1문제를 대충 3분 내에 풀어야 하는데요, 저는 영어 원어민이 아니면 제공해주는 30분 추가 시간을 추가하여 시험을 신청했습니다.

AWS 시험을 본 경험이 있다면 아시겠지만, 시험을 결제할 때 영어 원어민이 아니면 '시험 편의사항'으로 30분의 추가 시간을 요청할 수 있습니다.
30분 추가 시간을 요청하는 방법은 잘 정리해주신 분이 있어 [링크](https://tell-mia.tistory.com/25)로 대체하겠습니다!

기본 응시 비용은 300$ 입니다. 기존에 AWS 자격증을 취득하신적이 있다면 혜택으로 제공되는 다음 시험 50% 할인 코드를 사용하여 150$에 응시하실 수 있습니다.

시험 장소는 온라인 또는 오프라인 선택하여 응시하실 수 있는데요. 저는 온라인으로 PSI를 선택해서 응시했습니다.

## 준비 과정

저는 시험을 준비하기 전에 인터넷을 검색해보고 다른 분들은 어떻게 준비하시나 확인해보고 시작하는 편인데요.
DevOps Engineer Professional(DOP) 자격증은 한국에서 인기가 없는지 후기가 잘 안보이더라구요.

그래서 영어 후기들을 찾아보게 되었습니다. 영어권의 유명한 커뮤니티? 사이트인 Reddit의 AWS 자격증 관련 서브레딧
[r/awscertifications](https://www.reddit.com/r/AWSCertifications/) 에서 DOP 관련 후기들을 검색해보면 하나같이 추천해주시는 조합이 있었습니다.

강의 : Stephane Maarek 형님의 [AWS Certified DevOps Engineer Professional 2021 - Hands On!](https://www.udemy.com/course/aws-certified-devops-engineer-professional-hands-on/) 강의

연습문제 : Jon Bonso 형님의 [AWS Certified DevOps Engineer Professional Practice Exams](https://tutorialsdojo.com/courses/aws-certified-devops-engineer-professional-practice-exams/)

시험 Pass 후기를 보면 이 조합을 거의 국룰(?)처럼 추천해주시더라구요. 그래서 저도 위 조합을 택해서 준비했습니다.

### 강의, 연습문제 후기

[AWS Certified Solutions Architect - Associate](https://aws.amazon.com/certification/certified-solutions-architect-associate/) 시험을 준비하며
Stephane Maarek 형님께 푹 빠졌기 때문에(Linkedin follow도 함!) 스테판 형님의 강의는 믿고 들었습니다. 가격은 20$ 정도 였던 것 같네요.

시험 범위에 나오는 각 도메인 별로 개념을 설명해주고, 서비스들을 어떻게 연결, 자동화 할 수 있는지 알려줍니다. 해당 서비스들을 꼭 직접 사용해보는 실습 과정도 포함되어 있습니다.

강의를 전부 듣고나서는 Jon Bonso 형님의 연습문제를 풀었습니다. 가격은 14.99$ 입니다.

75문제를 시험처럼 풀로 보는 Practice exam을 총 5회 제공해주고, 영역별로 나눠서 볼 수 있는 문제도 제공해줍니다. 구성이 재밌습니다.

- 시간을 재며 볼 수 있는 Timed mode 2회
- 한 문제 한 문제 풀 때마다 바로 정답 여부를 알 수 있고 관련 개념들을 볼 수 있는 Review mode 2회
- 공식 문서 소개에 나온 시험 Domain 별로 나눠서 문제를 풀 수 있는 Section based 문제들
- 최종 시험 전에 각 잡고 연습해보라는 느낌의 Final test 1회

[tutorialsdojo.com](tutorialsdojo.com)을 이용해본게 처음이였는데 개인적으로 사용성? UX/UI?가 유려하진 않은 것 같아서 아쉬웠으나 연습문제들은 정말 좋았습니다.
사이트 자체에 AWS 개념들을 잘 정리해놓은 [AWS Cheat Sheets](https://tutorialsdojo.com/aws-cheat-sheets/)도 있어서 기억 안나는 개념이 있으면 보고 공부하기 좋습니다.


첫 연습문제는 63% 정도 나와서 좌절했는데 다음 회차로 갈수록 문제가 중복되기도 하고 이해도 늘고 해서 마지막 회차 쯤엔 800점 후반이였던 것 같아요. 연습문제 다 푼 다음 시험을 응시했습니다.

## 시험 진행 방식

PSI 온라인 시험은 PSI에서 만든 시험용 브라우저를 설치해야 하는데요, 이게 조금 불편합니다. 전체화면이 안됩니다..;
(설치는 시험 결제하면 PSI에서 보내주는 메일 안내를 통해 공식 사이트에 들어가서 진행할 수 있습니다.)

화면 크기에 맞춰지기는 하는데 완전한 전체화면이 아닌 느낌? 이라고 생각하시면 될 것 같아요.

맥북(13인치)으로 응시했는데 화면이 작아서 아쉬웠어요


시험 시작 10분 전부터 입장할 수 있습니다. 입장할 때 캠으로 본인 사진을 한번 찍습니다.

그리고 신원 확인이 되는 신분증도 사진을 찍어야 합니다. 저는 여권을 사용했어요. 여권 사진을 찍고 기다리면 감독관님이 신원 검증(?)을 한 다음 들어와서 채팅으로 인사해주십니다.

(시험 응시 장소를 확인하는 과정은 CKA 시험과 똑같았어서 CKA때 작성했던 내용을 복붙하고 조금 수정..!)

이후에는 웹캠으로 시험을 응시중인 공간에 대한 확인을 진행합니다. 책상위에서 360도로 노트북을 돌리며 방을 보여줘야 하고, 책상 아래도 보여줘야 합니다.

저는 집에서 응시했는데 시험 안내 링크에 보면 책상에 뭐가 있으면 안된다 그래서 그냥 책상 위에 모든 물건을 다른 곳으로 아예 치우고 정말 맥북만 올려놓고 응시했습니다.

확인 과정에서 시험 시작시간을 넘어갈 수 있는데 내게 허용된 시험 시간이 줄어드는건 아닌지 걱정 안하셔도 됩니다.

확인하느라 소요된 시간은 제외하고 실제로 시험을 시작하는 순간부터 3시간동안 시험을 보실 수 있습니다.

(예시: 오전 9시 시험 예약. 입장해서 확인하느라 9시 20분이 되서 시작 -> 9시 20분부터 12시 20분까지 시험 진행)



진짜 시험 내내 너무 지치고 힘들고 어려워서 심신이 너무 괴로웠어요.

다 풀고 제출 클릭하고 진짜 속으로 제발.... 제발...... 되뇌이면서 고개 숙이고 눈 감고 있다가 몇 초 뒤에 고개 들고 화면 다시 봤는데 Passed 떠있어서 의자에서 펄쩍 뛰고 난리를 쳤어요.

감독관님한테 채팅으로 "omg I made it!!!" 보내니까 감독관님도 "Congratulations Donghyun!!" 해주셔서 너무 행복했어요

(Can I take a picture of this result? 하니까 바로 칼같이 No 하시더라구요 ㅋㅋㅋㅋ)

점수도 잘 나와서 너무 뿌듯했습니다.

## 기억에 남는 시험에서 나오는 서비스들

기억나는 시험에 많이 나왔던 서비스들을 아래에 나열해보자면..

- Elastic Beanstalk
- CodeCommit, CodeBuild, CodeDeploy, CodePipeline 시리즈
- Elastic Container Service
- Lambda
- AWS Config

등이 기억에 남습니다. 개인차가 있겠지만 저는 SDLC 영역은 쉬웠고 High Availability 영역이 어려웠어요.

Multi-region 상황에서 고가용성을 보장하면서도 RTO, RPO 낮은 Fail over 가능한 그런 야무진 구조는 무엇일까요? 같은 문제들...

## 개인적인 감상

첫 Professional 도전이였는데 이뤄내서 기분이 너무 좋아요.~~(저는 이걸 뽕맛이라고 표현합니다)~~

성취감도 성취감인데 이 시험 준비하면서 활용도 높은 자동화 패턴, 방안들을 익힌게 너무 뿌듯합니다(CloudWatch Event + Lambda 만세!) 

제가 겪어본 AWS 자격증 시험 문제들은 주로 특정 시나리오를 주고 "이런 시나리오에서 ~를 하기 위해 어떻게 해야 할까요?" 같은 느낌인데 준비하면서 너무 많이 배웠습니다.

일하면서 어떤 풀어야 할 귀찮은 문제가 발생했을때 '어? 그거 ~~로 이렇게 저렇게 붙여서 하면 될 것 같은데!?' 하고 금방 떠올릴 수 있게 된다는게 정말 큰 장점인 것 같아요.

일하다 보면 어디부터 손대야 할지 모르겠는.. 내가 뭘 모르는지 모르는 그런 상황에 봉착할 때가 있는데,

뭔가 미래에 문제를 마주치게 되더라도 이번에 학습하면서 익힌 해결 방안들을 이리 저리 조합하면 뭐든 능히 풀 수 있을 것 같다! 하는 자신감도 많이 얻었습니다.

DOP보다 SAP가 어렵다던데.. 준비할때만 해도 DOP만 보면 더는 안해야지 생각했었는데..
왜 패스하고 나니까 SAP도 도전해보고 싶은걸까요.. 으!!

읽어주셔서 감사합니다!
