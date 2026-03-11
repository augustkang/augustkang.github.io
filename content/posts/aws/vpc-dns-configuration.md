---
title: "[AWS] Default DNS Configuration of VPC(DHCP Options Set)"
date: 2021-04-30T14:20:00+09:00
categories:
- aws
draft: false
---

깡통 EC2 인스턴스 기본 설정을 살펴보다가 `/etc/resolv.conf` 에 `10.101.1.2` 라는 ip가 nameserver로 설정되어 있는걸 보고
"이게 뭘까 난 이런걸 넣어주질 않았는데. AWS가 넣어줄텐데 이걸 뭐라 하나" 같은 생각이 들었습니다.

궁금해서 한참을 찾아봤습니다. 너무 당연하게 모르면서도 궁금해하지 않고 지나갔던 것 같습니다..;

관련해서 검색을 하다가 DHCP Options Set 이라는 공식 문서에서 설명을 찾을 수 있었습니다.

[공식 문서](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html#AmazonDNS)에 의하면 우리가 VPC를 생성하면 자동으로 DHCP Options Set이 같이 생성되고 우리가 만든 VPC와 연결된다고 합니다.

이 DHCP Options Set이 VPC 내에서 필요한 설정 정보(DNS 서버, NTP, NETBIOS 등)를 전달받을 수 있게 해준다고 합니다.
(VPC 생성할때 같이 생성되는 DHCP Options Set에는 Domain name과 Domain name servers 만 기본으로 들어가있음)

제가 궁금했던/etc/resolv.conf 에 있던 IP에 대한 내용도 해당 문서의 AmazonDNS 항목에 나와 있습니다.

> AmazonProvidedDNS is an Amazon Route 53 Resolver server, and this option enables DNS for instances that need to communicate over the VPC's internet gateway.
> The string AmazonProvidedDNS maps to a DNS server running on a reserved IP address at the base of the VPC IPv4 network range, plus two.
> For example, the DNS Server on a 10.0.0.0/16 network is located at 10.0.0.2.
> For VPCs with multiple IPv4 CIDR blocks, the DNS server IP address is located in the primary CIDR block.
> The DNS server does not reside within a specific subnet or Availability Zone in a VPC 

DHCP Options Set 항목 중 제공되는 *AmazonProvidedDNS* 라는 항목이 AWS에서(Route53) VPC에 제공해주는 DNS 서버의 IP이고(VPC의 CIDR에서 +2 한 ip를 써서 제공)
이 DNS 서버 제공 덕분에 ec2에서 dns 질의를 할 수 있게 된다는 내용입니다.

(Route53 콘솔에서 보면 Resolver항목에 Internet Resolver들이 VPC와 연결된 것을 볼 수 있는데, VPC 생성할때 여기에 자동으로 규칙이 생성되는 걸 볼 수 있어요!) 

저는 정말 모르는게 너무 많은 것 같아요. 열심히 공부해야겠습니다!


참고 :

* [1] DHCP Options Sets - <https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html>
