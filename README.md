# 602277111 안혜원

<h2>[5월 18일]</h2>
<h3>1. 트윗 목록 출력해 보기</h3>
- Home.js 코드 입력: <br>
div
    {nweets.map((nweet) => ( <br>
        div key={nweet.id} <br>
        {nweet.text}<br>
        /div<br>
    ))}<br>
/div

<h3>2. 트윗 컴포넌트 분리하기 위해, src/components/Nweet.js 파일 생성</h3>
- Nweet.js 코드 입력: "트윗<수정>, 트윗<삭제> 버튼 추가하기"<br>
const Nweet = ({ nweetObj }) => {<br>
    return (<br>
        div <br>
            h4 {nweetObj.text} /h4 <br>
            button Delete Nweet /button <br>
            button Exit Nweet /button <br>
        /div
    ); <br>
};<br>
export default Nweet;

<h3>3. Nweet.js 파일에 작성한 기능들</h3>
- Home.js 코드를 Nweet.js 파일에 트윗 컴포넌트 분리<br>
- <수정>,<삭제> 버튼 추가<br>
- 내가 쓴 트윗은 나만 지우거나 수정할 수 있도록 하기<br>
- 버튼에 삭제 기능 추가<br>
- ` 백틱사용 코드 추가( const data = await dbService.doc(`nweets/${nweetObj.id}`); )


<h2>[5월 11일]</h2>
<h3>1. 파이어베이스 데이터베이스 사용하기</h3> 
- fbase.js 코드 입력: <br>
import "firebase/firestore";<br>
export const dbService = firebase.firestore();<br>

<h3>2. 파이어스토어에 데이터 저장하기: Create</h3> 
- Home.js 코드 입력: <br>
import { dbService } from "fbase";<br>
const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
        });
        setNweet("");
    };

<h2>[5월 4일]</h2>

## Clone 직후
<h3>1. cache 삭제</h3>
- $npm cache clean --force<br>

<h3>2. node module 설치</h3>
- $ npm install<br>
<h3>3. 내비게이션 컴포넌트 만들고 라우터에 추가하기</h3>
- ./src/components/Navigaion.js 새로운 파일 생성<br>

<h3>4. 로그인 시 "This is Navigaion!" 글 보여주는 코드</h3>
- const Navigation = () => {
    return <nav>This is Navigation!</nav>
};
export default Navigation;<br>

<h3>5. Redirect로 로그아웃 후 주소 이동</h3>
- Router.js 코드 import부분에 Redirect 추가
- <Redirect from="*" to="/" /> 추가
 -> import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";<br>

<h3>6. useHistory로 로그아웃 후 주소 이동</h3>
- Router.js 코드에 import부분에 Redirect 삭제
- Profile.js 코드에 import { useHistory } from "react-router-dom"; 추가
- const onLogOutClick부분에 history.push("/"); 추가

<h2>[4월 27일]</h2>

## 이메일, 비밀번호 인증 기능 사용해 보기
1. App.js 코드 수정<br>
<h3>2. 로그인, 회원가입 토클 버튼 적용하기</h3>
- <span onClick={toggleAccount}>
    {newAccount ? "Sing In" : "Create Account"}
    </span><br>
<h3>3. error.message 화면에 출력</h3>
- setError(error.message);
- {error}


<h2>[4월 13일]</h2>

## 파이어베이스 로그인 설정하기
<h3>1. 파이어베이스 -> Authentication -> Sign-in method<br></h3>
- 이메일, 비밀번호 로그인 설정<br>
- 구글 소셜 로그인 설정하기<br>
- 깃허브 소셜 로그인 설정<br>
## 이메일, 비밀번호 인증 기능 사용해 보기
1. Auth.js 파일 작성

## 파이어베이스 인증 모듈 사용하기
<h3>1. 오류 수정 코드</h3>
- 버전 8 이전<br>
import firebase from 'friebase/app';<br>
import 'firebase/auth';<br>
import 'firebase/firestore';<br>
- 버전 9 이후<br>
import firebase from 'friebase/compat/app';<br>
import 'firebase/comapt/auth';<br>
import 'firebase/combat/firestore';<br>
<h3>2. firebase 다운그레이드 코드</h3>
- package-lock.json 파일<br>
npm i firebase @8.8.0


<h2>[4월 6일]</h2>

## 라우터 적용하기
<h3>1. useState 함수 사용하기: </h3>
- import { useState } from "react";
- const [isLoggedIn, setIsLoggedIn] = useState(false);
## 파이어베이스 로그인 준비하기
<h3>2. useState 함수 위치 이동하기</h3>
- import { useState } from "react";
- const [isLoggedIn, setIsLoggedIn] = useState(false);
- <>
    <AppRouter isLoggedIn={isLoggedIn} />
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>

<h2>[3월 30일]</h2>

## src/components/routs 경로에 새로운 파일 생성
1. Auth.js
2. EditProfile.js
3. Home.js
4. Profile.js

## .gitignore 파일 코드 작성
.env 코드 작성 -> 깃허브 파일 안 보이게 함

## 버전 코드
<h3>1. index.js 파일에</h3> 
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

<h2>[3월 23일]</h2>

<h3> ## 로컬PC에서 push</h3>
$ git config -- global user.name "Your Name" <br>
$ git config -- global user.email you@example.com <br>

<h3>## 확인방법</h3>
git config user.name<br>
git config user.email<br>

<h3>## 수업한 파일</h3>
1. README.me<br>
2. package.json<br>
3. App.js<br>
4. index.js<br>

<h3> ## 수업에서 삭제한 파일</h3>
1. App.css<br>
2. App.test.js<br>
3. index.css<br>
4. logo.svg<br>
5. reportWebVitals.js<br>
6. setupTest.js<br>