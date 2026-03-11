---
title: "SOLID 원칙"
date: 2021-07-18T18:06:40+09:00
description: 객체 지향 설계 원칙 SOLID
categories:
- programming
tags:
- programming
- oop
draft: true
---

## 객체지향 설계 5가지 원칙

- 단일 책임 원칙(single responsibility principle, SRP)
- 개방-폐쇄 원칙(open-closed principle, OCP)
- 리스코프 치환 원칙(liskov substitution principle, LSP)
- 인터페이스 분리 원칙(interface segregation principle, ISP)
- 의존 관계 역전 원칙(dependency inversion prinsiple, ISP)

### 단일 책임 원칙

모든 객체는 책임을 하나만 져야 한다

### 개방-폐쇄 원칙

확장에는 열려 있고, 변경에는 닫혀 있다.

### 리스코프 치환 원칙

q(x)를 타입 T의 객체 x에 대해 증명할 수 있는 속성이라 하자. 그렇다면 S가 T의 하위 타입이라면 q(y)는 타입 S의 객체 y에 대해 증명할 수 있어야 한다.

### 인터페이스 분리 원칙

클라이언트는 자신이 이용하지 않는 메서드에 의존하지 않아야 한다.

### 의존 관계 역전 원칙

상위 계층이 하위 계층에 의존하는 전통적인 의존 관계를 반전(역전)시킴으로써 상위 계층이 하위 계층의 구현으로부터 독립되게 할 수 있다.

- 원칙 1 : 상위 모듈은 하위 모듈에 의존해서는 안 된다. 둘 다 추상 모듈에 의존해야 한다.
- 원칙 2 : 추상 모듈은 구체화된 모듈에 의존해서는 안 된다. 구체화된 모듈은 추상 모듈에 의존해야 한다.
