---
title: "OS가 무엇일까"
categories:
- linux
date: 2021-01-31T13:40:00+09:00
draft: false
---

[리얼 리눅스 - 리눅스 SW 기본 강의](https://reallinux.co.kr/sw.html)를 듣고 정리하는 OS의 역할

## OS가 하는 역할의 정수

2가지 역할을 한다.

1. 어플리케이션 관리
2. 하드웨어 자원 관리 

1. Core 부분
- PM(Process Management)
- MM(Memory Management)
- IRQ(Interrupt ReQuest) / exception 처리 / locking 등

**Interrupt**란?

HW의 전기적인 신호이다.(예. USB, SSD, Network, ...) 이러한 인터럽트가 왔을때 인터럽트 처리를 해주는 함수들이
IRQ에 들어있다.

**Exception**이란?

프로그램 자체가 잘못 만들어진 정말로 극히 만나기 힘든 예외적인 케이스들을 Exception이라고 표현한다.

시스템콜, 페이지 폴트 등이 이러한 Exception에 해당한다.

**Page Fault**란?
물리적으로 메모리를 Page라는 단위로 관리하는데, 물리 메모리가 부재되어있다 라고 해서 page fault 라는
exception이 발생할 수 있다.

메모리를 management할때 가상메모리 메커니즘으로 관리하는데, 가상메모리를 썼는데 그 가상메모리가
물리메모리에 연결이 되어있지 않으면 Page fault가 발생한다.

Segmentation fault는 Page fault의 하위 항목이다.

**Locking** 이란?

CPU가 여러개일때, 공유 변수가 있을때 lock을 걸어놓고 쓰고 lock을 풀어놓고 함으로써 여러 CPU들이 공유된 자원을 점유하려 하면서 발생할 수 있는 문제를 막기 위한 함수들이 모여있는 부분이다.

예시 : mm_struct → 부모 프로세스가 fork를 해서 자식 프로세스가 생겼을때 메모리 관리를 위해 mm_struct 라는 자료구조를 공유해서 사용한다

### 2. I/O 처리

- 네트워크 스택(L4: TCP, L3: IP, L2: Device Driver, 벤더별로 NIC 카드 드라이버 제작)
- 스토리지 스택(VFS/FS/Block layer)
    - VFS = Virtual File System
      
      거의 Core파트라고 볼 수 있음. 리눅스는 모든걸 파일로 보고 read,write,open을 통해 제어하게 되는데
      이런걸 가능하게 하기 위해 Virtual File System이 존재한다.
    - FS = File System
      
      논리적으로 파일들을 어떻게 관리할건지, 디스크 안에 어떻게 물리적으로 어떻게 블록들을 관리할건지 등의
      전략이 File System layer에 있다.
    - Block Layer
      
      SSD, HDD를 실질적으로 block 단위로 read,write 할 수 있게 처리해주는 layer
    - Device Driver
    
      Block device, GPU, 등 다양한 것들이 device driver로 구현되어 들어있음. 결국은 하드웨어를 제어하기 위한 부분.
      하드웨어 벤더들은 리눅스 커널 메인라인에 디바이스 드라이버 코드가 들어가는게 되게 중요함.
      내가 만든 디바이스 드라이버 코드를 넣어야하는데 진입이 빡셈

### 3. 기타 - security(보안), tools(성능분석, 함수 추적), sounds(소리 처리)
