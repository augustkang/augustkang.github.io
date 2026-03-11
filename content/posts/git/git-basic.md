---
title: "Git basic concepts"
date: 2021-09-17T18:23:00+09:00
description: Basic concepts of git
categories:
- git
tags:
- git
draft: true
---

## Pro Git 2/E 기초들을 나열(?)

기존 VCS들은 각 파일의 변화를 시간순으로 관리하며 파일들의 집합으로 관리했다고 함.

Git은 이전 버전에서 특정 파일 내용이 바뀐게 없으면 굳이 새로 저장하지 않음

*Git은 스냅샷의 스트림으로 저장소를 관리. 바뀐 내용이 있는 파일이 있으면, 그 바뀐 파일은 다음 버전에 통째로 저장.
안바뀐 파일은 새 버전에 추가로 저장하지 않음.*

Git은 데이터를 저장하기 전에 항상 Checksum을 구하고 그 Checksum으로 데이터를 관리.

Git은 파일을 이름으로 저장하지 않고 해당 파일의 해시로 저장한다.

### Git은 key-value store이다.

Git은 Content addressable filesystem. Git의 핵심은 단순 Key-Value store 라는 것.

어떤 형식의 데이터라도 집어넣을 수 있고, 해당 Key로 다시 가져올 수 있다.

Glob pattern : 정규표현식을 단순하게 만든 것. Shell에서 많이 사용.

## Git의 개체

### 데이터 저장할때 사용하는 개체

- Tree : UNIX에서의 Directory에 대응

- Blob : 개별 파일 또는 Inode에 대응

### Commit 개체

- Snapshot에 대한 정보(스냅샷을 누가 언제 왜 저장했는지에 대한 정보)를 Commit 개체에 저장

### 개체 저장소

Git이 어떻게 파일을 저장할까?

1. 개체의 타입을 시작으로 헤더를 만듦. 그 다음 공백문자 하나, 내용의 크기, 마지막에 null 문자를 추가.
2. 헤더와 원래 내용을 합쳐 SHA-1 Checksum을 계산.
3. zlib으로 내용을 압축.
4. 압축한 내용을 개체로 저장.

### Git refs

`git log 1a410e`를 실행하면 커밋 히스토리를 볼 수 있지만 commit 해쉬값을 기억하기가 어려움.

외우기 쉬운 이름으로 된 파일에 SHA-1 값을 저장하여 관리.

이런 것을 Reference라고 한다.

`.git/refs` 경로에서 확인할 수 있다. (커밋 찾는것을 돕는 용도)

참고로 branch는 어떤 작업중 마지막 작업을 가리키는 포인터 또는 Refs 이다.

### HEAD

`Git branch (branchname)` 명령어를 실행하면 Git이 어떻게 마지막 commit의 SHA-1값을 알아낼까?

- HEAD 파일은 현재 브랜치를 가리키는 간접(Symbolic) refs다.
- 간접이기 때문에 HEAD에는 SHA-1 값 따로 없다.

### Packfile

Git이 처음 개체를 저장하는 형식은 "Loose" 개체 포맷이라고 부른다. 나중에 이 개체를 파일 하나로 압축(Pack)할 수 있다.

Git은 1. Loose 개체가 너무 많을 때, 2. `git gc` 명령을 실행했을 때, 3. 리모트 서버로 Push 할 때 압축을 진행한다.
참고 : `git gc`에서의 gc는 garbage collection의 축약어이다.

### 압축이 작동하는 방식

- 이름이나 크기가 비슷한 파일을 찾아 두 파일을 비교.
- 한 파일은 두 파일의 다른 부분(차이)만 저장한다.

Reference : [프로 Git 2판](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788966261789&orderClick=LAG&Kc=)
