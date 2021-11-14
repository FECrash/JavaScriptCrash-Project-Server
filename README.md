# JavaScriptCrash-Project-Server

## API 정의
### /user
- post : /login, 로그인
- post : /register, 회원가입
- get : /logout, 로그아웃
- get : /mypage, 마이페이지

<br>

### /menu
- get : /, 메뉴 전체 리스트 불러오기
- get : /list?category={category}, 카테고리 메뉴 불러오기

<br>

### /store
- get : /:keyword, 매장 찾기

<br>

### /admin
- get : /user, 유저 리스트 불러오기
- get : /menu, 메뉴 리스트 불러오기
- post : /user/:userId, 유저 추가
- post : /menu/:menuId, 메뉴 추가
- patch : /user/:userId, 유저 수정
- patch : /menu/:menuId, 메뉴 수정
- delete : /user/:userId, 유저 삭제
- delete : /menu/:menuId, 메뉴 삭제

<br>