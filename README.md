# GunDex 🔫

총기 모델을 분류·검색하고, 두 모델의 제원을 나란히 비교할 수 있는 **교육용 총기 도감 앱**입니다.
포켓몬 도감처럼, 총기 모델을 찾으면 사진과 제원·설명을 보여줍니다.

> 정보의 성격은 위키피디아의 총기 문서나 도서관의 무기 도감과 같은 **교육·레퍼런스** 용도입니다.

## 기능

- 📚 **도감** — 분류별(권총·소총·산탄총·기관단총·저격소총·기관총) 목록 보기
- 🔍 **검색** — 이름·제조사로 실시간 검색
- 📄 **상세** — 사진, 제원 13항목, 설명, 출처 링크
- ⚖️ **비교** — 두 총의 제원을 나란히 비교

## 기술 스택

- [Expo](https://expo.dev/) (React Native) + JavaScript
- React Navigation (탭 + 스택)
- Jest + @testing-library/react-native (테스트 38개)

## 실행 방법

```bash
npm install
npm start
```

QR 코드가 뜨면 휴대폰의 **Expo Go** 앱으로 스캔하세요.

## 테스트

```bash
npm test
```

## 데이터 출처

총기 정보는 위키피디아, 사진은 [Wikimedia Commons](https://commons.wikimedia.org)의
자유 라이선스 이미지를 사용합니다. 각 항목의 출처는 앱 상세 화면에서 확인할 수 있습니다.

## 프로젝트 구조

```
data/        총기 데이터(JSON) + 분류 매핑
lib/         데이터 접근 함수 + 비교 로직
context/     비교함 상태 (React Context)
components/  재사용 컴포넌트(GunCard)
screens/     화면 4개 (목록/검색/상세/비교)
App.js       네비게이션 조립
```

데이터를 화면과 분리해서, 나중에 위키 API 연동으로 바꿀 때 `lib/gunData.js`만 수정하면 됩니다.
