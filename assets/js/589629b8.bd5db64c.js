"use strict";(self.webpackChunkaugustkang_github_io=self.webpackChunkaugustkang_github_io||[]).push([[858],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>g});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),c=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(o.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},k=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),k=n,g=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return t?r.createElement(g,i(i({ref:a},p),{},{components:t})):r.createElement(g,i({ref:a},p))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=k;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8534:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const l={title:"S3 Glacier Flexible Retrieval storage class\uc758 \uac1c\ub150\uacfc \uc0ac\uc6a9\ubc95"},i=void 0,s={unversionedId:"posts/aws/s3-glacier-flexible-retrieval-storage-class",id:"posts/aws/s3-glacier-flexible-retrieval-storage-class",title:"S3 Glacier Flexible Retrieval storage class\uc758 \uac1c\ub150\uacfc \uc0ac\uc6a9\ubc95",description:"2021\ub144 11\uc6d4 30\uc77c Amazon S3 Glacier Instant Retrieval storage class\uac00 \uacf5\uac1c\ub428\uc5d0 \ub530\ub77c \uae30\uc874 S3 Glacier storage class\uc758 \uc774\ub984\uc774 Amazon S3 Glacier Flexible Retrieval storage class\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",source:"@site/docs/posts/aws/s3-glacier-flexible-retrieval-storage-class.md",sourceDirName:"posts/aws",slug:"/posts/aws/s3-glacier-flexible-retrieval-storage-class",permalink:"/posts/aws/s3-glacier-flexible-retrieval-storage-class",draft:!1,tags:[],version:"current",lastUpdatedAt:1698232078,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{title:"S3 Glacier Flexible Retrieval storage class\uc758 \uac1c\ub150\uacfc \uc0ac\uc6a9\ubc95"},sidebar:"tutorialSidebar",previous:{title:"CloudFront Certificate Region",permalink:"/posts/aws/cloudfront-tls-certificate"},next:{title:"Default DNS Configuration of VPC(DHCP Options Set)",permalink:"/posts/aws/vpc-dns-configuration"}},o={},c=[{value:"<strong>Amazon S3 Glacier\ub780?</strong>",id:"amazon-s3-glacier\ub780",level:2},{value:"<strong>Amazon S3 Glacier\uc758 \ud2b9\uc9d5</strong>",id:"amazon-s3-glacier\uc758-\ud2b9\uc9d5",level:2},{value:"<strong>Glacier\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95</strong>",id:"glacier\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95",level:2},{value:"<strong>S3\uc758 Storage Class\ub85c\uc368 Glacier \uc0ac\uc6a9 vs Amazon S3 Glacier \uc11c\ube44\uc2a4 \uc0ac\uc6a9</strong>",id:"s3\uc758-storage-class\ub85c\uc368-glacier-\uc0ac\uc6a9-vs-amazon-s3-glacier-\uc11c\ube44\uc2a4-\uc0ac\uc6a9",level:3},{value:"<strong>\uc608\uc2dc</strong>",id:"\uc608\uc2dc",level:2},{value:"<strong>Glacier storage class\ub97c AWS CLI\ub85c \uc774\uc6a9\ud558\ub294 \ubc29\ubc95</strong>",id:"glacier-storage-class\ub97c-aws-cli\ub85c-\uc774\uc6a9\ud558\ub294-\ubc29\ubc95",level:2},{value:"\ubc84\ud0b7\uc5d0 \uc544\uce74\uc774\ube0c \uc62c\ub9ac\ub294 \uba85\ub839\uc5b4 \uc608\uc2dc",id:"\ubc84\ud0b7\uc5d0-\uc544\uce74\uc774\ube0c-\uc62c\ub9ac\ub294-\uba85\ub839\uc5b4-\uc608\uc2dc",level:3},{value:"s3api\ub85c Glacier\uc5d0 \uc788\ub294 \ub370\uc774\ud130\ub97c Retrieval(\ubc18\ucd9c) \uc694\uccad\ud558\ub294 \uba85\ub839\uc5b4 \uc608\uc2dc",id:"s3api\ub85c-glacier\uc5d0-\uc788\ub294-\ub370\uc774\ud130\ub97c-retrieval\ubc18\ucd9c-\uc694\uccad\ud558\ub294-\uba85\ub839\uc5b4-\uc608\uc2dc",level:3},{value:"\uc2e4\uc81c Retrieval \uc694\uccad \uc2e4\ud589",id:"\uc2e4\uc81c-retrieval-\uc694\uccad-\uc2e4\ud589",level:3},{value:"Retrieval\uc774 \uc9c4\ud589\uc911\uc778\uc9c0 \ud655\uc778\ud558\ub294 \uba85\ub839\uc5b4",id:"retrieval\uc774-\uc9c4\ud589\uc911\uc778\uc9c0-\ud655\uc778\ud558\ub294-\uba85\ub839\uc5b4",level:3},{value:"Retrieva\uc774 \uc644\ub8cc\ub418\uc5c8\uc744 \ub54c head-object \uacb0\uacfc",id:"retrieva\uc774-\uc644\ub8cc\ub418\uc5c8\uc744-\ub54c-head-object-\uacb0\uacfc",level:3},{value:"\uadf8\ub798\uc11c S3 Glacier Flexible Retrieval storage class \uc0ac\uc6a9\ud558\uba74 \uc88b\uc740\uac00\uc694?",id:"\uadf8\ub798\uc11c-s3-glacier-flexible-retrieval-storage-class-\uc0ac\uc6a9\ud558\uba74-\uc88b\uc740\uac00\uc694",level:2}],p={toc:c},u="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(u,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"2021\ub144 11\uc6d4 30\uc77c ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/about-aws/whats-new/2021/11/amazon-s3-glacier-instant-retrieval-storage-class/"},"Amazon S3 Glacier Instant Retrieval storage class"),"\uac00 \uacf5\uac1c\ub428\uc5d0 \ub530\ub77c \uae30\uc874 S3 Glacier storage class\uc758 \uc774\ub984\uc774 Amazon S3 Glacier Flexible Retrieval storage class\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",{parentName:"blockquote"},"\uc774\uc5d0 \uae30\uc874\uc5d0 \uc791\uc131\ud588\ub358 \ud3ec\uc2a4\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uc600\uc2b5\ub2c8\ub2e4. \ucc38\uace0 \ubd80\ud0c1 \ub4dc\ub9bd\ub2c8\ub2e4!\n(\ucc38\uace0 : \uc774 \ud3ec\uc2a4\ud2b8\ub294 S3 Glacier Instant Retrieval storage class, S3 Glacier Deep Archive storage class\uc5d0 \ub300\ud574\uc11c\ub294 \ub2e4\ub8e8\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4..!)")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"S3\uc758 Glacier Flexible Retrieval storage class\ub97c \uc801\uc6a9\ud560 \uc77c\uc774 \uc788\uc5b4 \uacf5\ubd80\ud558\uc600\uc2b5\ub2c8\ub2e4. \uacf5\ubd80\ud55c \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4!"),(0,n.kt)("h2",{id:"amazon-s3-glacier\ub780"},(0,n.kt)("strong",{parentName:"h2"},"Amazon S3 Glacier\ub780?")),(0,n.kt)("p",null,"Amazon S3 Glacier\ub294 \uc624\ub79c \uc138\uc6d4\ub3d9\uc548 \uc548\uc804\ud558\uac8c \ubcf4\uad00\uc774 \ud544\uc694\ud55c \ub370\uc774\ud130, \ud55c\ubc88 \uc800\uc7a5\ud574\ub450\uba74 \uc790\uc8fc \uc811\uadfc\ud558\uc9c0 \uc54a\uc744 \ubcf4\uc874\uc6a9 \ub370\uc774\ud130 \ub4f1\uc744 \uc800\uc7a5\ud558\ub294\ub370 \uc88b\uc740 \uc2a4\ud1a0\ub9ac\uc9c0 \uc11c\ube44\uc2a4 \uc785\ub2c8\ub2e4. (\uc815\uc2dd \uba85\uce6d\uc740 Amazon S3 Glacier \uc774\uc9c0\ub9cc \ud3b8\uc758\uc0c1 \uc9c0\uae08\ubd80\ud130\ub294 S3 Glacier\ub77c\uace0 \ud45c\ud604\ud558\uaca0\uc2b5\ub2c8\ub2e4.)"),(0,n.kt)("p",null,"S3 Glacier\uc5d0\uc11c\ub294 S3\uc640 (\ube44\uc2b7\ud55c \uac1c\ub150\uc774\ub77c\uace0 \uc0dd\uac01\ud558\uc9c0\ub9cc) \ub2e4\ub978 \uc6a9\uc5b4\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud55c \uac1c\ubcc4 \uc800\uc7a5\uc18c\ub294 Vault\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4(S3\uc758 Bucket\uc5d0 \ub300\uc751)."),(0,n.kt)("li",{parentName:"ul"},"Vault\uc5d0 \uc800\uc7a5\ub418\ub294 \uac1c\ubcc4 \ub370\uc774\ud130\ub294 Archive \ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4(S3\uc758 Object\uc5d0 \ub300\uc751)")),(0,n.kt)("p",null,"\uac04\ub2e8\ud788 \uc774\uc57c\uae30\ud558\uc790\uba74 S3 Glacier\ub294 Vault(\u2248Bucket)\uc5d0 Archive(\u2248Object)\ub97c \uc800\uc7a5\ud558\ub294 \uc2dd\uc73c\ub85c \uc774\uc6a9\ud558\ub294 \uc11c\ube44\uc2a4\ub77c\uace0 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"amazon-s3-glacier\uc758-\ud2b9\uc9d5"},(0,n.kt)("strong",{parentName:"h2"},"Amazon S3 Glacier\uc758 \ud2b9\uc9d5")),(0,n.kt)("p",null,"S3 Glacier\ub294\xa0S3\ubcf4\ub2e4 \uc800\ub834\ud55c \uac00\uaca9\uc73c\ub85c \ub354 \ub9ce\uc740 \uc591\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\uc73c\ub098, \uc790\uc8fc \uc811\uadfc\ud558\uc9c0 \uc54a\uc744 \ub370\uc774\ud130 \uc800\uc7a5\uc5d0 \uc801\ud569\ud55c \uc11c\ube44\uc2a4 \uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc77c\ubc18\uc801\uc778 S3\uc5d0\uc11c\ub294 \uc0ac\uc6a9\uc790\uac00 \uc6d0\ud558\uba74 \ud2b9\uc815 \uc624\ube0c\uc81d\ud2b8\ub97c \ubc14\ub85c \ub2e4\uc6b4\ub85c\ub4dc(GetObject)\ubc1b\uc744 \uc218 \uc788\uc9c0\ub9cc, S3 Glacier\ub294 \uadf8\ub807\uc9c0\uac00 \uc54a\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"S3 Glacier\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc6a9\uc5b4\ub85c \ub370\uc774\ud130\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc788\uac8c \uc694\uccad, \uc900\ube44\ud558\ub294 \uacfc\uc815\uc744 Retrieval(\ubc18\ucd9c, \uac80\uc0c9, \ud0d0\uc0c9) \uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\ucc98\uc74c\uc5d0 \uacf5\ubd80\ud560 \ub54c \uc5b4\ub290 \ubd84 \ube14\ub85c\uadf8\uc5d0\uc11c '\ubc18\ucd9c' \uc774\ub77c\ub294 \ud45c\ud604\uc744 \ubd24\uc5c8\ub294\ub370, \uadf8\ub54c \uc544! \uc774\uac70\ub2e4! \ud558\ub294 \uc0dd\uac01\uc774 \ub4e4\uc5c8\uc5c8\uc2b5\ub2c8\ub2e4. \ubc18\ucd9c \uc774\ub77c\ub294 \ud45c\ud604\uc774 \uc81c\uc77c \uc640\ub2ff\uc558\uc2b5\ub2c8\ub2e4.\nS3 Glacier \uc11c\ube44\uc2a4 \uc790\uccb4\uac00 \uc9c0\ud558 \uae4a\uc219\ud55c \uc800\uc7a5\uace0\uc5d0 \ubcf4\uad00\ud574\ub1a8\ub2e4\uac00 \ud544\uc694\ud560\ub54c \uaebc\ub0b4 \uc4f0\ub294 \ub290\ub08c..!"),(0,n.kt)("p",null,"\uc800\uc7a5\ub41c \ub370\uc774\ud130\ub97c \ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uae30 \uc704\ud55c \uae30\ubcf8\uc801\uc778 \uc0ac\uc6a9 \ud750\ub984\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.\n(\uc544\ub9c8 \ub4b7\ub2e8\uc758 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\uc11c \uc0ac\uc6a9\uc790\uac00 \ub2e4\uc6b4\ub85c\ub4dc \uac00\ub2a5\ud55c \uc55e\ub2e8\uae4c\uc9c0 \uac00\uc838\ub2e4\ub193\ub294 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uc9c0 \uc54a\uc744\uae4c \ucd94\uce21\ub429\ub2c8\ub2e4.)"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc0ac\uc6a9\uc790\uac00 \uc800\uc7a5\ub41c \ub370\uc774\ud130\uc758 \ubc18\ucd9c(Retrieval)\uc744 \uc694\uccad")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\uc694\uccad\uc774 \uc644\ub8cc\ub418\uba74 \ud574\ub2f9 \ub370\uc774\ud130\ub97c\xa0\uc77c\uc815 \uc2dc\uac04\ub3d9\uc548\ub9cc\xa0\ub0b4\ub824\ubc1b\uc744 \uc218 \uc788\uac8c\ub428."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\uc800\uc7a5\ub41c \ub370\uc774\ud130\uc758 Retrieval(\ubc18\ucd9c)\uc5d0 \uc18c\uc694\ub418\ub294 \uc2dc\uac04\uacfc \ube44\uc6a9\uc740 \ubc18\ucd9c\uc744 \uc694\uccad\ud558\ub294 \ud0c0\uc785\uc5d0 \ub530\ub77c \uc544\ub798\uc640 \uac19\uc774 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\uc0ac\uc6a9\uc790\uac00 \ud574\ub2f9 \ub370\uc774\ud130\uac00 \uae09\ud788 \ud544\uc694\ud55c\uc9c0, \ub610\ub294 \ub370\uc774\ud130\uac00 \uc870\uae08 \ub2a6\uac8c \uc900\ube44\ub418\uc5b4\ub3c4 \ub418\ub294\uc9c0 \uc5ec\ubd80\uc5d0 \ub530\ub77c \uc544\ub798 3\uac1c \ub4f1\uae09 \uc911 \uc120\ud0dd\ud574\uc11c \uc694\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Expedited(\uae34\uae09) - \uc694\uccad\uc2dc 1~5\ubd84 \uc774\ub0b4\uc5d0 \uc774\uc6a9(\ub2e4\uc6b4\ub85c\ub4dc) \uac00\ub2a5\xa0\u2192 \uac00\uc7a5 \ube44\uc309\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Standard(\ud45c\uc900) - \uc694\uccad\uc2dc 3~5\uc2dc\uac04 \uc774\ub0b4\uc5d0 \uc774\uc6a9(\ub2e4\uc6b4\ub85c\ub4dc) \uac00\ub2a5 \u2192\xa0\uc911\uac04\xa0\uac00\uaca9\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Bulk(\ub300\ub7c9) - \uc694\uccad\uc2dc 5~12\uc2dc\uac04 \uc774\ub0b4\uc5d0 \uc774\uc6a9(\ub2e4\uc6b4\ub85c\ub4dc) \uac00\ub2a5 \u2192\xa0\uac00\uc7a5 \uc800\ub834\ud569\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\ubc18\ucd9c \uc694\uccad\uc744 \ud55c\ub2e4\uace0 \ubc14\ub85c \ub2e4\uc6b4\ub85c\ub4dc \uac00\ub2a5\ud55c\uac8c \uc544\ub2d9\ub2c8\ub2e4. \ubc18\ucd9c \uc694\uccad \uc774\ud6c4 \uc77c\uc815 \uc2dc\uac04 \uae30\ub2e4\ub824\uc57c \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uac00\ub2a5\ud574\uc9d1\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ud45c\uc900\uc73c\ub85c \uc694\uccad\ud558\uba74 3 ~ 5\uc2dc\uac04 \ub4a4\uc5d0\uc57c \ube44\ub85c\uc18c \ub2e4\uc6b4\ub85c\ub4dc \ubc84\ud2bc\uc744 \ud074\ub9ad\ud560 \uc218 \uc788\uac8c \ub41c\ub2e4\uace0 \uc0dd\uac01\ud558\uc2dc\uba74 \uc774\ud574\uc5d0 \ub3c4\uc6c0\uc774 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"(\uc0c1\ud669 \uc608\uc2dc)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1GB\uc758 \ub370\uc774\ud130 \ub2e4\uc6b4\ub85c\ub4dc"),"\uc5d0\xa01\uc2dc\uac04\uc774 \uac78\ub9b0\ub2e4\uace0 \ud574\ubd05\uc2dc\ub2e4.(1GB/hour). 1GB\ub97c \ud45c\uc900(3~5\uc2dc\uac04) \uc720\ud615\uc73c\ub85c \ubc18\ucd9c \uc694\uccad\ud55c\ub2e4\uace0 \uac00\uc815\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\n\uc5ec\uae30\uc11c\ub294\xa0",(0,n.kt)("strong",{parentName:"p"},"\ubc18\ucd9c \uc694\uccad \ucc98\ub9ac"),"\uc5d0\xa05\uc2dc\uac04\uc774 \uac78\ub9b0\ub2e4\uace0 \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc704\uc640 \uac19\uc740 \uc0c1\ud669\uc5d0 S3 Glacier \uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\uc5d0 \ucd1d \uc18c\uc694\ub418\ub294 \uc2dc\uac04\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"5\uc2dc\uac04(\ubc18\ucd9c \uc694\uccad \ucc98\ub9ac) + 1\uc2dc\uac04(1GB\uc758 \ub370\uc774\ud130 \ub2e4\uc6b4\ub85c\ub4dc) = 6\uc2dc\uac04")),(0,n.kt)("h2",{id:"glacier\ub97c-\uc0ac\uc6a9\ud558\ub294-\ubc29\ubc95"},(0,n.kt)("strong",{parentName:"h2"},"Glacier\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95")),(0,n.kt)("h3",{id:"s3\uc758-storage-class\ub85c\uc368-glacier-\uc0ac\uc6a9-vs-amazon-s3-glacier-\uc11c\ube44\uc2a4-\uc0ac\uc6a9"},(0,n.kt)("strong",{parentName:"h3"},"S3\uc758 Storage Class\ub85c\uc368 Glacier \uc0ac\uc6a9 vs Amazon S3 Glacier \uc11c\ube44\uc2a4 \uc0ac\uc6a9")),(0,n.kt)("p",null,"AWS\uc5d0\uc11c Glacier\ub97c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0\ub294 2\uac00\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4. (\uc800\ub3c4 \ucc98\uc74c\uc5d0 \uc774\uac8c \ubb34\uc2a8\ub9d0\uc778\uac00 \uc2f6\uc5c8\uc2b5\ub2c8\ub2e4.)"),(0,n.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc740 \uc720\ub798\uac00 \uc788\ub2e4\uace0 \ud558\ub124\uc694.(",(0,n.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/65929235/11584183"},"https://stackoverflow.com/a/65929235/11584183"),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ucd08\uae30\uc5d0 AWS\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc11c\ube44\uc2a4\ub85c S3\uac00 \uc788\uc5c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"S3\uc640 \ubcc4\uac1c\uc758, \ubc31\uc5c5\uc6a9 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud55c \ucee8\uc149\uc73c\ub85c Amazon Glacier\ub77c\ub294\xa0\uc2a4\ud1a0\ub9ac\uc9c0 \uc11c\ube44\uc2a4\ub3c4 \uc788\uc5c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"S3 \uc0ac\uc6a9\uc790 \uc911 Glacier\uc640 \uac19\uc740 \uc2a4\ud1a0\ub9ac\uc9c0 \uc0ac\uc6a9\ub3c4 \uc6d0\ud558\ub294 \uc218\uc694\uac00 \uc788\uc5c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Amazon Glacier\ub294 \uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c \uc9c1\uc811 \uc0ac\uc6a9\ud558\uae30 \ubd88\ud3b8\ud558\ub2e4. (\ubd88\ud3b8\ud568\uc758 \uc608\uc2dc : \ub370\uc774\ud130 \uc5c5\ub85c\ub4dc \ud558\uace0 \uc5c5\ub85c\ub4dc\ud55c \ub370\uc774\ud130\uac00 \uc798 \ub4e4\uc5b4\uac14\ub294\uc9c0 '\ubaa9\ub85d'\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc73c\ub824\uba74 24\uc2dc\uac04\uc744 \uae30\ub2e4\ub824\uc57c \ud568)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"S3\uc758 Storage Class\ub85c\uc368 S3 Glacier\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \uc81c\uacf5 \uc2dc\uc791\ub428!"))),(0,n.kt)("p",null,"\uc989, Amazon S3 Glacier\ub294 \ub2e4\ub978 AWS \uc11c\ube44\uc2a4\ub4e4\ucc98\ub7fc(ex. SNS, SQS, ...)\xa0\uc6d0\ub798 \ubcc4\ub3c4\uc758 \uc11c\ube44\uc2a4\xa0\uc785\ub2c8\ub2e4. \ucf58\uc194\uc5d0\uc11c Glacier\ub85c \uac80\uc0c9\ud558\uba74 \ub098\uc624\ub294 S3 Glacier \ub77c\uace0 \ub098\uc624\ub294 \uadf8 \uc11c\ube44\uc2a4\uc778\ub370\uc694."),(0,n.kt)("p",null,"\uc774 \uc11c\ube44\uc2a4 - Glacier API\ub97c \uc9c1\uc811 \uc774\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774 Amazon S3 Glacier \ubc29\uc2dd\uc774\uace0,"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"S3 api\ub97c \ud1b5\ud574\uc11c S3 Glacier \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uac8c \ud574\uc8fc\ub294 \ubc29\uc2dd\uc774 S3\uc758 Glacier Flexible Retrieval storage class\ub97c \uc774\uc6a9\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4.")),(0,n.kt)("p",null,"\uac01 \ubc29\ubc95\uc740 \uc774\ub7f0 \ud2b9\uc9d5\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1.\xa0S3 Glacier Flexible Retrieval storage class")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud3b8\ub9ac\ud55c S3 \ucf58\uc194, \uc778\ud130\ud398\uc774\uc2a4, api \ub4f1\uc744 \uadf8\ub300\ub85c \uc774\uc6a9\ud558\uc5ec Glacier\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"S3 \ubc84\ud0b7\uc5d0\uc11c \ubc84\ud0b7 \ub0b4 \uc624\ube0c\uc81d\ud2b8\uc5d0 \ub300\ud574 Storage Class\ub97c Glacier Flexible Retrieval\ub85c \uc124\uc815\ud558\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Download \ud574\uc57c \ud560 \uacbd\uc6b0 \uc704\uc5d0 \uc774\uc57c\uae30 \ud55c Retrieval type(\uac80\uc0c9 \uc720\ud615)\uc744 \uc124\uc815\ud558\uace0 \uc694\uccad\uc744 \uba3c\uc800 \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"(\uba87\uc77c\uac04 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \ud544\uc694\ud560\uc9c0 \uba85\uc2dc\ud574\uc11c) \uc694\uccad\uc744 \ud558\uba74 \uc694\uccad\ud55c \uc720\ud615\uc5d0 \ub530\ub77c \ub2e4\uc6b4\ub85c\ub4dc\ub97c \ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4. (\uc608: Expedited\ub85c \uc694\uccad\ud588\uc73c\uba74 1~5\ubd84 \ub0b4\uc5d0 \ub2e4\uc6b4\ub85c\ub4dc \uac00\ub2a5. Standard\ub85c \uc694\uccad\ud588\uc73c\uba74 \ucd5c\uc18c 3\uc2dc\uac04~5\uc2dc\uac04 \ud6c4\uc5d0 \uc694\uccad\ud55c \ub370\uc774\ud130 \ub2e4\uc6b4\ub85c\ub4dc \uac00\ub2a5)"),(0,n.kt)("li",{parentName:"ul"},"\ubc18\ucd9c\uc744 \uc694\uccad\ud558\uba74 \ub0b4\ubd80\uc801\uc73c\ub85c\ub294 Glacier Flexible Retrieval storage slass\uc5d0\uc11c S3 Standard-IA storage class\ub85c \uac1d\uccb4\ub97c \uc694\uccad\ud55c \uae30\uac04 \ub9cc\ud07c\ub9cc \ubcf5\uc81c\ud574\uc90d\ub2c8\ub2e4. \uc774\ud6c4 \uc0ac\uc6a9\uc790\ub294 S3 Standard-IA storage class\uc5d0 \ubcf5\uc81c\ub418\uc5b4 \uc788\ub294 \uac1d\uccb4\uc5d0 \uc811\uadfc\ud558\ub294 \uc2dd\uc73c\ub85c \ub2e4\uc6b4\ub85c\ub4dc \ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4.(\uc544\ub798 \ub9c1\ud06c\uc5d0\uc11c \uc791\ub3d9\uc5d0 \ub300\ud55c \uc124\uba85 \ud655\uc778 \uac00\ub2a5)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/faqs/#Storage_Classes"},"Reference : S3 FAQs - How can I retrieve my objects that are archived in S3 Glacier Flexible Retrieval and will I be notified when the object is restored?"))),(0,n.kt)("p",null,"(\uc774\uc804\uc5d0 \ud3ec\uc2a4\ud2b8 \uc791\uc131\ud560 \ub54c Reduced Redundancy storage class\ub85c \ubcf5\uc81c\ud55c\ub2e4\uace0 \ubd24\uc5c8\ub294\ub370, Glacier Instant Retrieval storage class \ucd9c\uc2dc \uc774\ud6c4 \ub2e4\uc2dc \ucc3e\uc544\ubcf4\ub2c8 S3 Standard-IA storage class\ub77c\uace0 \ub418\uc5b4\uc788\ub124\uc694...)"),(0,n.kt)("p",null,"\uc774 \ubc29\uc2dd\uc758 \uc7a5\uc810\uc740 \uae30\uc874 S3 \ucf58\uc194(s3 api)\uc744 \uc774\uc6a9\ud558\uc5ec Glacier\ub85c \uac1d\uccb4\ub97c \ubcf4\ub0b4\uace0 \uaebc\ub0b4\uace0 \ud560 \uc218 \uc788\ub2e4\ub294 \uc810 \uc785\ub2c8\ub2e4. S3\ub97c \ud1b5\ud574 Glacier\ub97c \uc774\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \ud070 \ubd88\ud3b8\ud568\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ucc38\uace0\ub85c, S3 Glacier \uc11c\ube44\uc2a4\uc5d0\uc11c \uc9c1\uc811 vault\ub97c \ub9cc\ub4e4\uace0 archive\ub97c \uc62c\ub9ac\uace0 \ud558\ub294 \uc2dd\uc73c\ub85c \uc774\uc6a9\ud560 \uacbd\uc6b0, \uac1d\uccb4\ub97c \uc5c5\ub85c\ub4dc\ud558\uba74 \uac1d\uccb4 \ubaa9\ub85d(\ubc84\ud0b7 \ub0b4 \ud30c\uc77c \ubaa9\ub85d)\uc5d0 \ubc18\uc601\ub418\ub294\ub370\n\uc57d24\uc2dc\uac04\uc774 \uc18c\uc694\ub429\ub2c8\ub2e4. (\uc5c5\ub85c\ub4dc\ub97c \ud558\uba74 \uc5c5\ub85c\ub4dc\ud55c\uac8c \ubaa9\ub85d\uc5d0 \ubc14\ub85c \ub728\uc9c0\uac00 \uc54a\uc2b5\ub2c8\ub2e4.)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Amazon S3 Glacier(AWS \ucf58\uc194\uc5d0\uc11c Glacier \uac80\uc0c9\ud558\uba74 \ub098\uc624\ub294 \uc11c\ube44\uc2a4)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ubcc4\ub3c4\ub85c \ub098\uc654\ub358 \uc11c\ube44\uc2a4\uc778 Glacier\ub97c \uc9c1\uc811 \uc774\uc6a9\ud558\ub294 \ubc29\ubc95\uc785\ub2c8\ub2e4. S3\uc640 \ub2e4\ub978 \ubcc4\ub3c4\uc758 \ucf58\uc194\ub85c \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub3c5\ub9bd\uc801\uc778 glacier api\ub97c \uc0ac\uc6a9\ud558\uace0, S3\ub97c \ud1b5\ud574\uc11c \uc0ac\uc6a9\ud558\uba74 \uc774\uc6a9\ud560 \uc218 \uc5c6\ub294 Vault Lock\uacfc \uac19\uc740 Glacier \uace0\uc720\uc758 \uae30\ub2a5 \ub4f1\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Vault\uc5d0 \uc800\uc7a5\ub41c archive\uc758 \ubaa9\ub85d\uc740 inventory\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc9c0\uae08 \uc800\uc7a5\ub41c archive \ubaa9\ub85d\uc744 \ubcf4\uace0 \uc2f6\uc73c\uba74 inventory\ub97c \uc694\uccad\ud574\uc57c \ud569\ub2c8\ub2e4.(glacier api \uc774\uc6a9)"),(0,n.kt)("li",{parentName:"ul"},"inventory\ub97c \uc694\uccad\ud558\uba74 \uc218\uc2dc\uac04 \ub0b4\uc5d0 vault \ub0b4\uc5d0 \uc800\uc7a5\ub41c archive\uc758 \ubaa9\ub85d\uc744 \ud655\uc778\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\uc989!! \ud604\uc7ac \uc800\uc7a5\ub418\uc5b4 \uc788\ub294 \ubaa9\ub85d\ub9cc \ubcf4\ub294\ub370\ub3c4 \uba87 \uc2dc\uac04\uc774 \uac78\ub9bd\ub2c8\ub2e4.. (\uc0ac\uc6a9\ud558\uae30 \ubd88\ud3b8..)"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\uace0\uc720 \uae30\ub2a5 - Vault Lock")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc774 \uae30\ub2a5\uc740 policy\ub97c \uc815\uc758\ud574\uc11c \ubd99\uc774\uba74 \ud574\ub2f9 \uc815\ucc45\uc744 \uc0ad\uc81c\ud558\uc9c0 \uc54a\ub294 \uc774\uc0c1 \uc218\uc815\uc774 \ubd88\uac00\ud55c \uae30\ub2a5\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4.(bucket policy\uc640 \uc5ed\ud560\uc740 \ube44\uc2b7\ud55c\ub370 \uc218\uc815\uc774 \ubd88\uac00\ud55c \ud2b9\uc131)"),(0,n.kt)("li",{parentName:"ul"},"\ud55c\ubc88 \uc815\uc758\ud55c \uc815\ucc45\uc740 \uc81c\uac70\ud558\uace0 \ub2e4\uc2dc \ub9cc\ub4e4\uc9c0 \uc54a\ub294 \uc774\uc0c1 \uc218\uc815\uc774 \ubd88\uac00!")),(0,n.kt)("p",null,"\uac15\ub825\ud55c \ubcf4\uc548 \uc694\uad6c\uc0ac\ud56d\uc774 \uc788\ub294 \uc870\uc9c1\uc5d0\uc11c \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\uace0 \ud569\ub2c8\ub2e4."),(0,n.kt)("h2",{id:"\uc608\uc2dc"},(0,n.kt)("strong",{parentName:"h2"},"\uc608\uc2dc")),(0,n.kt)("p",null,"\uc544\ub798\ub294 CloudFormation\uc73c\ub85c \uc791\uc131\ud55c S3 Glacier Flexible Retrieval storage class\ub97c \uc0ac\uc6a9\ud558\ub294 \ud15c\ud50c\ub9bf \uc608\uc2dc \uc785\ub2c8\ub2e4."),(0,n.kt)("p",null,"Glacier Flexible Retrieval storage class\uc5d0 \uc800\uc7a5\ud574\ub454 \uc624\ube0c\uc81d\ud2b8\uc758 \ubc18\ucd9c\uc5d0\ub294 \uc2dc\uac04\uc774 \uc624\ub798 \uac78\ub9ac\ubbc0\ub85c, \ubc18\ucd9c \uc644\ub8cc\ub420 \uc2dc \uc54c\ub9bc\uc744 \ubc1b\uac8c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc544\ub798 \uc608\uc2dc\uc5d0\uc11c\ub294 MS Teams\uc758 webhook\uc744 \uc774\uc6a9\ud574 noti\ub97c \ubc1b\uac8c \ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"MS Teams\uac00 \uc544\ub2cc Slack\uc774\ub098 \ub2e4\ub978 \uba54\uc2e0\uc800 \uc11c\ube44\uc2a4\uc758 \uacbd\uc6b0\uc5d0\ub3c4 Webhook\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\uba74 request\ub97c \ub0a0\ub9ac\ub3c4\ub85d Lambda\ub97c  \uc791\uc131\ud55c \ub4a4,\nS3 NotificationConfiguration\uc758 \ub300\uc0c1\uc744 Lambda\ub85c \uc9c0\uc815 \ud6c4 \ud574\ub2f9 Lambda\uc5d0\uc11c webhook url\uc5d0 request\ub97c \ub0a0\ub9ac\ub3c4\ub85d \ud558\ub294 \uc2dd\uc73c\ub85c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'AWSTemplateFormatVersion: "2010-09-09"\n\n# CloudFormation Parameter for MS Teams webhook URL\nParameters:\n  WebhookUrl:\n    Type: String\n    AllowedPattern: ".+" # Set as mandatory\n\nResources:\n  S3Bucket:\n    Type: AWS::S3::Bucket\n    Properties:\n      BucketName: my-glacier-bucket\n      LifecycleConfiguration:\n        Rules:\n        - Id: DefaultAsGlacier\n          Status: Enabled\n          Transitions:\n          - TransitionInDays: 0\n            StorageClass: GLACIER # Objects will be stored as GLACIER Storage Class\n      NotificationConfiguration:\n        LambdaConfigurations:\n        - Event: s3:ObjectRestore:Completed\n          Function: !GetAtt LambdaFunction.Arn\n    DependsOn: LambdaPermission\n\n  S3BucketPolicy:\n    Type: AWS::S3::BucketPolicy\n    Properties:\n      Bucket: !Ref S3Bucket\n      PolicyDocument:\n        Statement:\n          # put bucket policies as per your requirements\n\n  LambdaPermission:\n    Type: AWS::Lambda::Permission\n    Properties:\n      Action: lambda:InvokeFunction\n      Principal: s3.amazonaws.com\n      SourceArn: arn:aws:s3:::my-glacier-bucket\n      FunctionName: !Ref LambdaFunction\n\n  LambdaRole:\n    Type: AWS::IAM::Role\n    Properties:\n      AssumeRolePolicyDocument:\n        Version: \'2012-10-17\'\n        Statement:\n        - Effect: Allow\n          Principal:\n            Service:\n            - lambda.amazonaws.com\n          Action:\n          - sts:AssumeRole\n      ManagedPolicyArns:\n      - arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\n      Path: "/"\n      Description: LambdaRole\n      RoleName: my-lambda-role\n\n  LambdaFunction:\n    Type: AWS::Lambda::Function\n    Properties:\n      Code:\n        ZipFile: |\n          import json\n          import os\n          import logging\n          import boto3\n          from urllib.request import Request, urlopen\n          from urllib.error import URLError, HTTPError\n\n          def lambda_handler(event, context):\n              webhook_url = os.environ.get(\'Webhook\')\n              bucket = event[\'Records\'][0][\'s3\'][\'bucket\'][\'name\']\n              archive = event[\'Records\'][0][\'s3\'][\'object\'][\'key\']\n              size = event[\'Records\'][0][\'s3\'][\'object\'][\'size\']\n\n              teams_message = {\n                  "@context": "https://schema.org/extensions",\n                  "@type": "MessageCard",\n                  "themeColor": "64a837",\n                  "title": "Glacier \uac1d\uccb4 \ubcf5\uc6d0 \uc644\ub8cc",\n                  "text": f"\ubcf5\uc6d0\ub41c \uac1d\uccb4 \uc815\ubcf4\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.",\n                  "sections": [\n                      {\n                          "facts": [\n                              {\n                                  "name": "Bucket",\n                                  "value": f"{bucket}"\n                              },\n                              {\n                                  "name": "Archive name : ",\n                                  "value": f"{archive}"\n                              },\n                              {\n                                  "name": "Size: ",\n                                  "value": f"{size}"\n                              }\n                          ]\n                      }\n                  ]\n              }\n              request = Request(webhook_url, json.dumps(teams_message).encode(\'utf-8\'))\n              try:\n                  response = urlopen(request)\n                  response.read()\n                  print("Success")\n              except HTTPError as err:\n                  print("Fail")\n              except URLError as err:\n                  print("Fail")\n      FunctionName: LambdaWebhook\n      Handler: index.lambda_handler\n      Role: !GetAtt LambdaRole.Arn\n      Runtime: python3.8\n      Environment:\n        Variables:\n          Webhook: !Ref WebhookUrl\n\n')),(0,n.kt)("h2",{id:"glacier-storage-class\ub97c-aws-cli\ub85c-\uc774\uc6a9\ud558\ub294-\ubc29\ubc95"},(0,n.kt)("strong",{parentName:"h2"},"Glacier storage class\ub97c AWS CLI\ub85c \uc774\uc6a9\ud558\ub294 \ubc29\ubc95")),(0,n.kt)("h3",{id:"\ubc84\ud0b7\uc5d0-\uc544\uce74\uc774\ube0c-\uc62c\ub9ac\ub294-\uba85\ub839\uc5b4-\uc608\uc2dc"},"\ubc84\ud0b7\uc5d0 \uc544\uce74\uc774\ube0c \uc62c\ub9ac\ub294 \uba85\ub839\uc5b4 \uc608\uc2dc"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"[august@dummy-pc ~]$ aws s3 cp FILENAME s3://my-glacier-bucket/ --storage-class GLACIER\n# --storage-class GLACIER \uc635\uc158\uc744 \uc918\uc57c \ud569\ub2c8\ub2e4.\n")),(0,n.kt)("h3",{id:"s3api\ub85c-glacier\uc5d0-\uc788\ub294-\ub370\uc774\ud130\ub97c-retrieval\ubc18\ucd9c-\uc694\uccad\ud558\ub294-\uba85\ub839\uc5b4-\uc608\uc2dc"},"s3api\ub85c Glacier\uc5d0 \uc788\ub294 \ub370\uc774\ud130\ub97c Retrieval(\ubc18\ucd9c) \uc694\uccad\ud558\ub294 \uba85\ub839\uc5b4 \uc608\uc2dc"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"--restore-request")," \uc635\uc158\uc744 \uc918\uc57c \ud569\ub2c8\ub2e4. \ud574\ub2f9 \uc635\uc158\uc5d0\ub294 \ubc18\ucd9c\ud55c \uc624\ube0c\uc81d\ud2b8\uac00 \uba87 \uc77c\uac04 \ud544\uc694\ud55c\uc9c0\ub97c \uba85\uc2dc\ud558\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"Days")," \uc640, Retrieval \uc635\uc158\uc744 \uba85\uc2dc\ud574\uc918\uc57c \ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"retrieval option\uc740 ",(0,n.kt)("inlineCode",{parentName:"p"},'GlacierJobParameters={"Tier"="Standard"}')," \ud615\ud0dc\ub85c \uba85\uc2dc\ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'[august@dummy-pc ~]$ aws s3api restore-object --bucket BUCKETNAME --key FILENAME --restore-request Days=1,GlacierJobParameters={"Tier"="Standard"}\n# Tier\ub97c \uc6d0\ud558\ub294 Type\uc73c\ub85c \uc124\uc815. \uc5ec\uae30\uc11c\ub294 Standard\ub85c \ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\n# aws s3api restore-object --bucket BUCKETNAME --key FILENAME --restore-request Days=1,GlacierJobParameters={"Tier"="Expedited"}\n# aws s3api restore-object --bucket BUCKETNAME --key FILENAME --restore-request Days=1,GlacierJobParameters={"Tier"="Bulk"}\n\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Days=1\ub85c \ud558\uba74 Retrieval \ucc98\ub9ac \uc644\ub8cc\ub418\uace0 \ud558\ub8e8 \ub3d9\uc548 \ud574\ub2f9 Archive\ub97c \ub2e4\uc6b4 \ubc1b\uc744 \uc218 \uc788\uac8c\ub429\ub2c8\ub2e4. 7\ub85c \ud558\uba74 \uc77c\uc8fc\uc77c\ub3d9\uc548 \ubc1b\uc744 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Tier\uac00 \uc704\uc5d0\uc11c \uc124\uba85\ud55c Retrieval \uc635\uc158\uc744 \ub73b\ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Expedited : 1~5\ubd84 \ub0b4\uc5d0 \ubc18\ucd9c \uac00\ub2a5\ud574\uc9d0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Standard : 3~5\uc2dc\uac04 \ub0b4\uc5d0 \ubc18\ucd9c \uac00\ub2a5\ud574\uc9d0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Bulk : 5~12\uc2dc\uac04 \ub0b4\uc5d0 \ubc18\ucd9c \uac00\ub2a5\ud574\uc9d0"))),(0,n.kt)("li",{parentName:"ul"},"\ucc38\uace0 \uc0ac\ud56d\uc73c\ub85c, \uc704 \ud15c\ud50c\ub9bf \uc608\uc2dc\uc5d0\uc11c\ub294 Notification\uc744 \uc124\uc815\ud574\uc11c Retrieval\uc774 \uc644\ub8cc\ub418\uba74 teams\ub85c \uc54c\ub9bc\uc744 \ubc1b\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("h3",{id:"\uc2e4\uc81c-retrieval-\uc694\uccad-\uc2e4\ud589"},"\uc2e4\uc81c Retrieval \uc694\uccad \uc2e4\ud589"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'[august@dummy-pc ~]$ aws s3api restore-object --bucket BUCKETNAME --key FILENAME --restore-request Days=1,GlacierJobParameters={"Tier"="Standard"}\n')),(0,n.kt)("h3",{id:"retrieval\uc774-\uc9c4\ud589\uc911\uc778\uc9c0-\ud655\uc778\ud558\ub294-\uba85\ub839\uc5b4"},"Retrieval\uc774 \uc9c4\ud589\uc911\uc778\uc9c0 \ud655\uc778\ud558\ub294 \uba85\ub839\uc5b4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Progress\ub294 \ubcf4\uc5ec\uc8fc\uc9c0 \uc54a\uace0 \uc9c4\ud589\uc911\uc778\uc9c0 \uc644\ub8cc\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub9cc \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub7f0 \uae30\uc57d\uc5c6\ub294? \ubd88\ud3b8\ud568\uc73c\ub85c \uc778\ud574 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 Notification\uc774 \uc788\uc73c\uba74 \uc88b\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'[august@dummy-pc ~]$ aws s3api head-object --bucket BUCKETNAME --key FIELNAME\n{\n    "AcceptRanges": "bytes",\n    "Restore": "ongoing-request=\\"true\\"", # \ud604\uc7ac Retrieval\uc774 \uc9c4\ud589\uc911\uc774\ub77c\ub294\uac78 \ubcf4\uc5ec\uc90c(ongoing-request=true)\n    "LastModified": "2021-03-24T02:13:16+00:00",\n    "ContentLength": 3,\n    "ETag": "\\"abcdefghijklmnopqrstuzwxyz1234567890\\"",\n    "ContentType": "text/plain",\n    "Metadata": {},\n    "StorageClass": "GLACIER"\n}\n')),(0,n.kt)("h3",{id:"retrieva\uc774-\uc644\ub8cc\ub418\uc5c8\uc744-\ub54c-head-object-\uacb0\uacfc"},"Retrieva\uc774 \uc644\ub8cc\ub418\uc5c8\uc744 \ub54c head-object \uacb0\uacfc"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[august@dummy-pc ~]$ aws s3api head-object --bucket BUCKETNAME --key FIELNAME\n{\n    "AcceptRanges": "bytes",\n    # ongoing-request = false(\uc644\ub8cc\ub428) Expiry Date\uac00 \uc704\uc5d0 restore-object \uba85\ub839\uc5b4\uc5d0\uc11c \uba85\uc2dc\ud55c Days\uc758 \uacb0\uacfc\uc785\ub2c8\ub2e4.\n    "Restore": "ongoing-request=\\"false\\", expiry-date=\\"Fri, 26 Mar 2021 00:00:00 GMT\\"",\n    "LastModified": "2021-03-24T02:13:16+00:00",\n    "ContentLength": 3,\n    "ETag": "\\"abcdefghijklmnopqrstuzwxyz1234567890\\"",\n    "ContentType": "text/plain",\n    "Metadata": {},\n    "StorageClass": "GLACIER"\n}\n')),(0,n.kt)("h2",{id:"\uadf8\ub798\uc11c-s3-glacier-flexible-retrieval-storage-class-\uc0ac\uc6a9\ud558\uba74-\uc88b\uc740\uac00\uc694"},"\uadf8\ub798\uc11c S3 Glacier Flexible Retrieval storage class \uc0ac\uc6a9\ud558\uba74 \uc88b\uc740\uac00\uc694?"),(0,n.kt)("p",null,"\ube44\uc6a9\uc744 \ub300\ud3ed \uc544\ub084 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc800\uc758 \uacbd\uc6b0 \ub300\ub7b5 ",(0,n.kt)("a",{parentName:"p",href:"https://calculator.aws/"},"\ube44\uc6a9 \uacc4\uc0b0")," \ud574\ubd24\uc744\ub54c, \ub3d9\uc77c\ud55c \uc591\uc758 \ub370\uc774\ud130\ub97c S3 standard storage class\uc5d0 \uc800\uc7a5\ud560 \ub54c\ubcf4\ub2e4\n80% \uc815\ub3c4 \uc800\ub834\ud558\uac8c \uc774\uc6a9\ud558\uace0 \uc788\ub2e4\uace0 \uacc4\uc0b0\uc774 \ub098\uc654\uc5c8\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uacc4\uc18d \ubcf4\uad00\ub418\uc5b4\uc57c \ud558\uc9c0\ub9cc \ud55c\ubc88 \uc800\uc7a5\ub418\uba74 \uac70\uc758 \ub370\uc774\ud130\ub97c \ucc3e\uc744 \uc77c\uc774 \uc5c6\ub2e4! \ub77c\ub294 \uc694\uad6c\uc0ac\ud56d\uc774 \ud655\uc2e4\ud558\ub2e4\uba74 \uace0\ub824\ud574\ubcf4\uc2dc\uba74 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc77d\uc5b4\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4!"))}m.isMDXComponent=!0}}]);