# AWS 서비스
### 1. EC2
- Elastic Compute Cloud, 가상 머신
- 가장 중심이 되는 서비스
- Node, Go, Java, Python 등으로 만들어진 프로젝트으 ㅣ백엔드를 실행하기 위해 필수항목

### 2. S3
- Simple Storage Service, 정적 파일 관리
- 사진, 비디오, 문서, frontend 코드, Lambda 함수 코드를 저장
- cloudFront를 구성하면 S3에 저장된 정적 파일이 CDN을 통해 더 효율적으로 빠르게 보급

### 3. IAM Console
- AWES 서비스 관련 엑세스와 권한 설정하는 Key 관리 서비스

### 4. Route 53
- DNS 설정

### 5. CloudFront
- AWS의 CDN(Content Delivery Network)
- - 강력한 네트워크 상의 cache 세팅을 통해 웹 서버와 사용자 사이의 지역적 거리를 극복하여 콘텐츠 로드 지연 최소화

### 6. RDS
- Relational Database Service, 관계형 데이터베이스 엔진 제공

### 7. Lambda
- Serverless Compute Service
- JS로 function 작성하고 AWS Lambda로 푸시하면, 백엔드 없이, 그 이벤트가 있을 때마다 function 실행

### 8. AWS Amplify
- repository와 연동만 하면 알아서 다해줌
  - 로드밸런싱, 보안, CDN, SSL 등 알아서 함
- 12개월 제한된 리소스 안에서 무료 사용 가능

### 9. AWS App Runner
- 컨테이너 이미지만 업로드하면 알아서 다해줌
- 저렴한 비용 : 딱 쓴만큼만 비용 지불
- AWS Amplify와 Ec2에 직접 CI/CD 세팅하는 것의 중간 녀석

### 10. Vercel
- 간편한 사용 : github repository와 연동만 하면 알아서 다해줌
  - 로브래런싱, 보안, CDN, SSL 등 알아서 함
- 무료 사용 가능 (조직 제외, 일정 범위까지)


# Reference
- [AWS 서비스 종류](https://www.hanl.tech/blog/helpful-9-amazon-web-services-for-developers/)