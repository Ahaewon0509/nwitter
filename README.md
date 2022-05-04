# 602277111 안혜원
[5월 4일]
## Clone 직후
1. // cache 삭제
- $npm cache clean --force
2. // node module 설치
- $ npm install
3. 내비게이션 컴포넌트 만들고 라우터에 추가하기
- ./src/components/Navigaion.js 새로운 파일 생성
4. 로그인 시 "This is Navigaion!" 글 보여주는 코드
- const Navigation = () => {
    return <nav>This is Navigation!</nav>
};
export default Navigation;
5. 

[4월 27일]
## 이메일, 비밀번호 인증 기능 사용해 보기
1. App.js 코드 수정
2. 로그인, 회원가입 토클 버튼 적용하기
- <span onClick={toggleAccount}>
    {newAccount ? "Sing In" : "Create Account"}
    </span>
3. error.message 화면에 출력
- setError(error.message);
- {error}




[4월 13일]
## 파이어베이스 로그인 설정하기
1. 파이어베이스 -> Authentication -> Sign-in method<br>
- 이메일, 비밀번호 로그인 설정<br>
- 구글 소셜 로그인 설정하기<br>
- 깃허브 소셜 로그인 설정<br>
## 이메일, 비밀번호 인증 기능 사용해 보기
1. Auth.js 파일 작성

## 파이어베이스 인증 모듈 사용하기
1. 오류 수정 코드
- 버전 8 이전<br>
import firebase from 'friebase/app';<br>
import 'firebase/auth';<br>
import 'firebase/firestore';<br>
- 버전 9 이후<br>
import firebase from 'friebase/compat/app';<br>
import 'firebase/comapt/auth';<br>
import 'firebase/combat/firestore';<br>
2. firebase 다운그레이드 코드
- package-lock.json 파일<br>
npm i firebase @8.8.0



[4월 6일]
## 라우터 적용하기
1. useState 함수 사용하기: 
- import { useState } from "react";
- const [isLoggedIn, setIsLoggedIn] = useState(false);
## 파이어베이스 로그인 준비하기
2. useState 함수 위치 이동하기
- import { useState } from "react";
- const [isLoggedIn, setIsLoggedIn] = useState(false);
- <>
    <AppRouter isLoggedIn={isLoggedIn} />
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>





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