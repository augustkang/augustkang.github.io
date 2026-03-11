---
title: "K8s Multiple Nginx Ingress Controller"
date: 2020-09-16T16:18:08+09:00
description: How to deploy multiple(2 or more) nginx ingress controller on Kubernetes cluster
categories:
- kubernetes
tags:
- kubernetes
- ingress controller
draft: true
---
### 2개 이상의 Nginx ingress controller를 구동하는 법

회사에서 서비스 목적으로 쿠버네티스 클러스터를 구축하게 되었다. 외부 오픈을 위해 Ingress Controller가 필요하여 nginx ingress controller를 구동하고 있다.

Ingress controller는 종류가 다양하지만 우리는 그 중 nginx ingress controller를 이용하고 있다.

최근에 특정 목적으로 Ingress controller가 2개 이상 필요하여 여러개의 nginx ingress controller를 구동하는 법을 알아봤다.

nginx ingress controller를 2개 이상 설치 및 구동하는 법과 Ingress 리소스에 어떤 Ingress controller를 사용할지 어떻게 명세하는지 정리해본다.


