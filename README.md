<h1>🏦 회원제 가계부 프로젝트</h1>

이번 프로젝트는 누구나 쉽게 사용할 수 있는 **회원제 가계부**입니다. 이 프로젝트는 일상에서 자주 사용되는 가계부를 디지털화하여, 사용자가 편리하게 자신의 지출과 수입을 관리할 수 있도록 설계되었습니다.

- 배포URL : https://new-financial.vercel.app/

---

## 📜 프로젝트 소개
---
    
### 사용자 친화적인 큼지막한 UI

- 처음 사용하시는 분들도 쉽게 적응할 수 있도록 직관적이고 시각적으로 편안한 UI를 제공합니다. 큰 버튼과 명확한 아이콘을 사용하여 사용자 경험을 극대화했습니다. 이를 통해 나이와 상관없이 누구나 손쉽게 가계부를 사용할 수 있습니다.

### 간편한 회원가입 및 로그인

- 회원가입과 로그인을 최소한의 정보로 간단하게 구현하였습니다. 이메일과 비밀번호만으로 빠르게 가입할 수 있습니다.

## 개발기간
- 2024.06.11 ~ 2024.06.13

## 🛠️ 기술스택
---
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<img src="https://img.shields.io/badge/glitch-3333FF?style=for-the-badge&logo=glitch&logoColor=white">
<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">

---
## ⚙️ 채택한 개발 기술
---
- **Front-end**: React, styled-components,React-modal, React-toastify
- **Back-end**: REST API, JSON Server(Glich통해 배포)
- **버전 및 이슈 관리**: Github
- **서비스 배포 환경**: Vercel
- [**커밋 컨벤션**](https://teamsparta.notion.site/Github-Rules-35366b3e27a941f496600797a3196c9f)을 참고하세요.

## 🪜 프로젝트 구조
---
project-root/
├── README.md
├── package.json
├── .gitignore
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── no_img.jpg
|   ├── axios/
|   |   ├── auth
│   │   ├── authApi.js
│   │   └── expenseApi.js
│   ├── components/
│   │   ├── Addform.jsx
│   │   ├── addInputs.jsx
│   │   ├── ExpenditureItem.jsx
│   │   ├── Header.jsx
│   │   ├── Monthlist.jsx
│   │   ├── Totalex.jsx
│   │   ├── TotalexLi.jsx
│   │   └── TotalGraph.jsx
│   ├── pages/
│   │   ├── ExpendiDetail.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── queryclient/
│   │   └── QueryProvider.jsx
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── activeIndexSlice.js
│   │   │   ├── authSlice.js
│   │   │   ├── categoryLisSlice.js
│   │   │   └── userSlice.js
│   │   ├── store/
│   │   │   └── store.js
│   ├── styles/
│   │   └── modalStyles.js
│   ├── StyledComponents/
│   │   ├── ExpendiDetail.jsx
│   │   ├── Expenditurestyle.jsx
│   │   ├── Formstyle.jsx
│   │   ├── GlobalStyle.jsx
│   │   ├── Header.jsx
│   │   ├── LoginSignin.jsx
│   │   ├── Modaledit.jsx
│   │   ├── Modallogout.jsx
│   │   ├── Monthstyle.jsx
│   │   └── Totalamount.jsx
│   ├── util/
│   │   └── toast.js
│   ├── App.js
│   ├── main.jsx
│   └── ...
├── server/
│   ├── db.json
│   └── ...
└── vercel.json
## 📔 기능 소개
---
**회원가입 및 로그인**: 간편하고 빠르게 회원가입을 할 수 있으며, 기존 회원은 로그인 후 자신의 데이터를 관리할 수 있습니다.

**지출 추가**: 클릭 몇 번으로 손쉽게 지출 추가하고, 카테고리별 분류할 수 있습니다.

**월별 지출 현황**: 날짜별로 내림차순으로 정렬된 월별 지출 현황을 볼 수 있으며, 동일한 날짜의 지출 항목은 금액별로 오름차순으로 정렬됩니다.

**통계 그래프**: 지출 및 수입 데이터를 시각화하여 한눈에 파악할 수 있는 그래프를 제공합니다.

**수정 가능한 항목**: 잘못 입력한 항목은 클릭을 통해 날짜와 금액 등의 항목 내용을 수정할 수 있습니다.

**프로필 수정**: 사용자 정보 및 프로필 사진을 쉽게 변경할 수 있습니다.

## 🔧 트러블슈팅
### 1. 로그인 시 Authorization 오류 발생
#### **오류**: 로그인 시도 시 Authorization 헤더가 없어서 인증 오류가 발생했습니다. 이는 expensesApi.interceptors에서 헤더 설정이 부족했고, 지나치게 많은 로컬 스토리지 클리어로 인해 발생했습니다.
#### **조치**: 코드를 수정하여 expensesApi.interceptors에 Authorization 헤더를 추가하였고, 로컬 스토리지 관리를 개선했습니다. 이후 정상적으로 로그인이 작동하게 되었습니다.
### 2. 로그인 후 지출목록 불러오기 오류
#### **오류**: 로그인 후 지출 목록을 불러오는 과정에서 오류가 발생했습니다. 이는 로그인 시도 시 발생한 오류의 부수적인 문제였습니다.
#### **조치**: 위에서 해결한 Authorization 오류 조치가 이 문제를 자동으로 해결하였습니다.
### 3. 로그인 세션 만료 시 화면 전환 오류
#### **오류**: 로그인 세션이 만료될 경우 자동으로 로그인 화면으로 전환되지 않았습니다. 이는 라우터 구조에서 현재 로그인 상태를 실시간으로 확인할 수 있는 메커니즘이 부족했기 때문입니다.
#### **조치**: 라우터 구조를 개선하여 authSlice의 isAuthenticated 값을 구독하여 세션 만료 시 로그인 페이지로 리다이렉트하도록 조치했습니다. 이로 인해 사용자가 수동으로 홈페이지로 이동할 수 있는 문제도 함께 해결되었습니다.
### 4. Vercel 배포 경로 오류
#### **오류**: Vercel 또는 Netlify로 배포 시 styled-components의 경로 문제가 반복적으로 발생했습니다. 이는 이전에 GitHub에 업로드된 StyledComponents 폴더명이 일치하지 않아 발생한 문제였습니다.
#### **조치**: 폴더명을 일치시키고, VSCode를 재실행하여 캐시된 데이터를 삭제한 후 로컬 서버를 실행하여 문제를 확인하고 경로를 수정하였습니다. 이후 정상적으로 배포가 완료되었습니다.
### 5. 배포된 애플리케이션 방문하고 새로고침 시 404 Not Found 오류
#### **오류**: Vercel로 배포한 페이지에서 새로고침 시 404 Not Found 오류가 발생했습니다.
#### **조치**: Vercel에서 제공하는 vercel.json 파일을 생성하고 필요한 설정을 추가하여 문제를 해결하였습니다.
