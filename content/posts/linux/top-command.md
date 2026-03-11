---
title: "top command"
date: 2021-01-17T01:05:00+09:00
categories:
- linux
draft: false
---

top command에 대해 "DevOps와 SE를 위한 리눅스 커널 이야기" 책에서 배운 내용, "리얼 리눅스 SW 기본반"에서 배운 내용을 정리하였습니다.

### top 명령어 실행 결과

```bash
root@August-PC:~# top -b -n 1
top - 01:57:36 up 58 min,  0 users,  load average: 0.52, 0.58, 0.59
Tasks:   8 total,   1 running,   7 sleeping,   0 stopped,   0 zombie   
%Cpu(s):  9.0 us, 23.3 sy,  0.0 ni, 67.4 id,  0.0 wa,  0.3 hi,  0.0 si, 0.0 st
KiB Mem :  8240388 total,  2032052 free,  5978984 used,   229352 buff/cache
KiB Swap: 25165824 total, 24837212 free,   328612 used.  2127672 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+    
    1 root      20   0    8916    328    284 S   0.0  0.0   0:00.07    
  880 root      20   0    8916    228    176 S   0.0  0.0   0:00.01    
  881 august    20   0   18356   3764   3448 S   0.0  0.0   0:00.38    
 1074 root      20   0    8916    232    180 S   0.0  0.0   0:00.00    
 1075 august    20   0   18224   3492   3364 S   0.0  0.0   0:00.09    
 1087 root      20   0   16260   2116   2088 S   0.0  0.0   0:00.01    
 1088 root      20   0   18088   3392   3304 S   0.0  0.0   0:00.06    
 1104 root      20   0   18780   1888   1420 R   0.0  0.0   0:00.01
```
* line 1: 현재 시스템의 시간과 uptime, 그리고 load average가 나온다

`top - 01:57:36 up 58 min,  0 users,  load average: 0.52, 0.58, 0.59`

> Load average란?
>
> 시스템 부하 정도를 나타내는 지표이다. 보이는 숫자 3개는 각각 1분, 5분, 15분 간의 시스템 부하 평균값이다.
>
> 코어가 4개인 서버에서 맨 앞의 load가 4.0이라면 그 서버는 지난 1분 평균으로 CPU를 100% 쓰고있다는 뜻이다.
>
> 100%는 부하가 높긴 하지만 처리가 밀리지는 않은 상태이다.
>
> 또 다른 예로 코어가 4개일 때, 맨 앞의 load가 2.0이라면 그 서버는 지난 1분 평균으로 cpu를 50% 쓰고 있다는 뜻이다.

* line 2: 현재 실행중인 process들

`Tasks:   8 total,   1 running,   7 sleeping,   0 stopped,   0 zombie`

    total : 전체 프로세스 수 이다.
    running : 실행중인 프로세스의 수이다.
    sleeping : I/O 나 event를 기다리는 프로세스의 수를 나타낸다
    stopped : ctrl + z 와 같은 STOP 시그널을 받은 프로세스의 수이다. `top` 실행하고 ctrl+z 누른다음 다시 `top` 보면 늘어난 것 볼 수 있음.
    zombie : 프로세스가 종료 되었지만 OS 내부 자원(자료구조)의 메모리 해제가 안된 프로세스

* line 3: 프로세스 타입? 별로 CPU를 차지했던 시간의 비율(%)

`%Cpu(s):  9.0 us, 23.3 sy,  0.0 ni, 67.4 id,  0.0 wa,  0.3 hi,  0.0 si, 0.0 st`

    us : 실행 우선 순위가 높은 프로세스(user mode, 높은 우선순위 process)가 CPU를 차지한 시간의 비율
    sy : 시스템 프로세스(kernel mode)가 CPU를 차지한 시간의 비율
    ni : nice한 프로세스(user mode, 우선순위가 낮은)가 CPU를 차지한 시간의 비율
    id : CPU가 idle했던 시간의 비율 (시스템이 얼마나 여유로운지 나타낸다)
    wa : CPU가 I/O wait 상태였던(디스크 I/O를 기다렸던) 시간의 비율
    hi : hardware interrupt 처리에 CPU가 사용된 시간의 비율
    (hard irq. irq는 Interrupt ReQuest를 나타낸다. hard irq는 키보드 입력 같은, 전기 신호에 의해 발생하는 하드웨어 인터럽트를 뜻함)
    si : software interrupt 처리에 CPU가 사용된 시간의 비율
    (soft irq. soft irq는 소프트웨어 인터럽트를 뜻함)
    st : CPU가 처리할 일이 있는데 VM한테 CPU를 뺐겨서 일을 못한 시간의 비율
    (st는 steal을 뜻한다고 한다. VM이 CPU를 훔쳐가서 일을 못한 시간의 비율이라는 듯)

* PID: process id, PR : Priority, NI : Nice value

> Nice value가 뭘까?
>
> Process의 우선순위를 나타내는 값이다.
>
> Nice 하다는 것은 이타적이라는, CPU 양보를 잘한다는 의미로 보면 될 것 같다.
>
> 어떤 Process의 Nice값이 높다는 것은 곧 그 process는 CPU 양보를 잘하는 프로세스라는, 실행 우선순위가 낮은 프로세스라는 뜻이다.
>
> 반대로 Nice값이 낮다는 것은 CPU 양보를 안할려고 하는, 실행 우선순위가 높은 프로세스 라는 뜻이다.

* VIRT : VIRTual memory, 해당 프로세스에게 할당된 가상메모리 전체의 크기
* RES: RESident memory, 해당 프로세스가 실제로 사용중인 물리메모리의 양
* S : Process Status

### Memory Commit 의 개념

커널은 프로세스가 메모리를 요청할 때 그에 맞는 크기를 가상으로 할당해준다. 실제로 요청받은 크기 전체만큼 물리메모리에 assign해주지는 않음.
그렇게 있다가 실제로 사용이 필요할 때마다 물리메모리를 조금씩 더 할당을 해줌(늘려줌). 이를 memory commit 이라고 한다.

* vm.overcommit_memory는 커널의 Memory commit 동작 방식을 변경할 수 있게 해주는 커널 파라미터.
* 0=최댓값 바탕으로 Memory commit, 1=무조건 overcommit, 2=vm.overcommit_ratio에 설정된 비율을 바탕으로 제한적으로 memory commit

#### 커널 파라미터 보는법? sysctl

```bash
root@August-PC:~# sysctl -a
fs.binfmt_misc.status = enabled
fs.binfmt_misc.WSLInterop = enabled
fs.binfmt_misc.WSLInterop = interpreter /init
...
...
vm.min_free_kbytes = 45056
vm.overcommit_memory = 0
vm.swappiness = 60
```
* `sysctl -a | grep pid_max` 하면 현재 시스템의 생성 가능한 최대 pid 확인 가능

### 프로세스 상태

* Process Status 종류 : D, R, S, T, Z
* D = Uninterruptible sleep - 디스크, 네트워크 디바이스에 작업 요청 후 대기중인 상태(Run queue가 아닌 wait queue에 넣어놓음)
* R = Running - 현재 CPU에서 실행되고 있는 상태
* S = Sleep - 그냥 자고있는 애들. D와의 차이는 요청한 리소스를 즉시 사용할 수 있는지 여부이다.
* T = traced or stopped. strace 등으로 프로세스가 추적되고 있는 상태
* Z = zombie 상태. parent process가 죽은 child process를 의미

### 프로세스 우선 순위

* 기본 PR값은 20이다.
* PR값에서 NI값을 뺀 값이 최종 우선순위가 된다. 숫자 0에 가까울수록 우선순위 높은것이다.
* nice 값이 낮다는 것은 프로세스가 나이스하지 않다는 뜻이다(무슨소리세요..?)
* 위에 설명했듯, 프로세스가 nice하지 않은 녀석이라 다른 프로세스들에게 CPU 양보를 안하려고 함 -> 프로세스 우선순위가 높다.
* 반대로 nice 값이 높다는 것은 프로세스가 nice해서 CPU 양보를 잘해준다 -> 우선 순위가 낮다

* `nice -n N command` 명령으로 해당 프로세스 nice 값을 부여해줄 수 있음.(N은 원하는 숫자)

* RT는 RealTime의 약자로써, RT 스케줄러에 의해 실시간으로 커널에 의해 처리되는 프로세스들임. CFQ(Completely Fair Queueing) 스케줄러보다 먼저 실행된다.

출처

* [DevOps와 SE를 위한 리눅스 커널 이야기](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788966264049&orderClick=LEA&Kc=)
* [리얼 리눅스 SW 기본반](https://reallinux.co.kr/sw.html)
