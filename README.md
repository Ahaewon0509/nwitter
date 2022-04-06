# 안혜원

[4월 6일]
## 라우터 적용하기
1. useState 함수 사용하기: 
- import { useState } from "react";
- const [isLoggedIn, setIsLoggedIn] = useState(false);
2.




[3월 30일]

## src/components/routs 경로에 새로운 파일 생성
1. Auth.js
2. EditProfile.js
3. Home.js
4. Profile.js

## .gitignore 파일 코드 작성
.env 코드 작성 -> 깃허브 파일 안 보이게 함

## 버전 코드
1. index.js 파일에 
[firebase 8버전 이하]
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
<br>
[firebase 9버전 이상]
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
<br>
버전에 맞는 코드를 복사 후 실행

## 수업 내용
1. $npm install firebase
2. src 폴더에 새 파일 firedase.js 생성

[3월 23일]

## 로컬PC에서 push
$ git config -- global user.name "Your Name" <br>
$ git config -- global user.email you@example.com <br>

## 확인방법
git config user.name<br>
git config user.email<br>

## 수업한 파일
1. README.me<br>
2. package.json<br>
3. App.js<br>
4. index.js<br>

## 수업에서 삭제한 파일
1. App.css<br>
2. App.test.js<br>
3. index.css<br>
4. logo.svg<br>
5. reportWebVitals.js<br>
6. setupTest.js<br>