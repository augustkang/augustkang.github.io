---
title: "Ubuntu network 설정"
categories:
- linux
date: 2021-09-17T21:10:00+09:00
tags:
- linux
- ubuntu
draft: true
---

[IT 엔지니어를 위한 네트워크 입문](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791165213183&orderClick=LEa&Kc=)에 나온 Ubuntu 네트워크 설정

- 기본적으로 네트워크 설정은 별도 파일로 관리됨

## interface

- `/etc/network/interfaces` 경로에 interfaces 파일을 확인할 수 있다.
- Ubuntu는 interfaces 파일에 네트워크의 모든 인터페이스 설정이 들어감

### 네트워크 서비스 시작/정지/재시작

- `/etc/init.d/networking start`
- `/etc/init.d/networking stop`
- `/etc/init.d/networking reload`
- `/etc/init.d/networking restart`
- `/etc/init.d/networking force-reload`

### Routing 정보

`route add` 명령어로 추가한 라우팅 정보는 재부팅하면 초기화됨.

interfaces 파일 내에 Routing 정보를 영구적으로 추가할 수 있다.

파일 내에 입력해두면 재부팅때 interface up 되면서 interface 내에 있는 routing 정보 설정됨.
