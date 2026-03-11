---
title: "[shell script]파일에 특정 라인이 없을때 '만' append하는 방법"
date: 2021-08-03T15:00:00+09:00
categories:
- linux
tags:
- linux
- shell script
- bash
draft: false
---

Systems manager - document를 작성하다가 찾아본 idempotent 하게 텍스트 파일에 라인을 추가하는 방법[1]

(특정 라인이 해당 파일에 존재하지 않는 경우에만 파일에 라인을 추가하게 하는 방법)

결론 : `grep -qxF "특정 라인" file.txt || echo "특정 라인" >> file.txt` 

적어두고 생각 안나면 찾아보고 싶어 정리.

### hello 라는 라인이 없을 경우에만 hello를 맨 아래에 append 하려면?

아래와 같은 `file.txt` 라는 텍스트 파일을 예시로 생각해보자.

```bash
root@dummy-pc:~# cat file.txt
my
name
is
augustkang
```

이 텍스트 파일에 hello 라인이 없을때만 hello 라인을 추가하려면 아래 명령어 조합을 이용하면 된다.

```bash
root@dummy-pc:~# grep -qxF "hello" file.txt || echo "hello" >> file.txt
root@dummy-pc:~# cat file.txt
my
name
is
augustkang
hello
```

`grep -qxF "hello" file.txt || echo "hello" >> file.txt`

명령어 작동 방식

- `file.txt`에 hello 라인이 없으면 앞의 command(`grep -qxF "hello" file.txt`) 결과는 false가 된다.

- `||` 조건식의 앞쪽 결과가 false 이므로 뒤의 command가 실행된다.(뒤의 command 결과가 true 인지 확인을 위해)

- 결과적으로 `file.txt`에 hello 라는 라인이 추가된다.

### 텍스트 파일에 hello 라는 라인이 있을 경우엔 어떻게 될까?

```bash
root@dummy-pc:~# cat file.txt
hello # hello 라는 라인이 이미 있는 상황
my
name
is
augustkang
```

위 파일에 대해 똑같이 명령어를 실행해도 이미 hello가 있기 때문에 변화가 없다.

```bash
root@dummy-pc:~# grep -qxF "hello" file.txt || echo "hello" >> file.txt
root@dummy-pc:~# cat file.txt
hello
my
name
is
augustkang # 아래에 라인이 추가되지 않음
```

명령어 작동 방식

- `grep -qxF "hello" file.txt` 는 file.txt에 hello라는 라인이 있으면 true를 반환.

- `||` (OR)는 앞의 명령어가 true면 뒤에는 실행하지 않음.

- 결론적으로, `file.txt`에 hello 라인이 있으면 앞의 조건이 true가 되므로, 뒤의 command의 실행 여부에 관계없이 전체 command의 결과는 true가 된다. 그러므로 뒤의 command(`echo "hello" >> file.txt`)는 실행 안한다.

### Shell에서 exit code를 보고 true, false를 어떻게 판단할까?

shell에서 command를 실행하면 exit code를 반환한다.

0이 아닌 값(non-zero)이 false이고, 0이 true이다.[2]

참고 :

[1] [Appending a line to a file only if it does not already exist](https://stackoverflow.com/questions/3557037/appending-a-line-to-a-file-only-if-it-does-not-already-exist)

[2] [Why 0 is true but false is 1 in the shell?](https://stackoverflow.com/questions/2933843/why-0-is-true-but-false-is-1-in-the-shell)

추천 : [explainshell.com](https://explainshell.com/)

복잡한 shell 명령어 조합을 나눠서 설명 보게 해주는 사이트. 너무 좋아요.
