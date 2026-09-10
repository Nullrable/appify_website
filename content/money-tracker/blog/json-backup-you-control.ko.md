---
title: 당신이 관리하는 JSON 백업 - 열어 볼 수 있는 파일 하나
description: Money Tracker 데이터를 단일 JSON 파일 — 계좌, 카테고리, 거래 — 로 내보내고, 이미 사용 중인 백업 위치에 저장하거나 시스템 공유 시트로 바로 보낼 수 있습니다.
date: 2026-09-10
lang: ko
slug: json-backup-you-control
---

내보내기 화면이 만드는 파일은 단 하나: `money_tracker_<timestamp>.json`. 모든 계좌(유형, 잔액 스냅샷, 메타데이터 포함), 모든 카테고리(시스템과 사용자 정의), 모든 거래(날짜, 금액, 계좌, 카테고리, 메모, 유형)를 담습니다. 파일 하나로 데이터베이스 전체입니다.

저장 위치는 당신이 정합니다. iOS는 문서 선택기를, Android는 Storage Access Framework를 띄우므로, iCloud Drive, Google Drive, USB 메모리, Documents provider로 등록된 서드파티 앱 어디든 놓을 수 있습니다. 특정 클라우드에 묶이지 않습니다.

선택기 옆에는 시스템 공유 시트가 있습니다. 거기서 이메일, 메신저, 노트 앱, AirDrop, Nearby Share로 바로 보낼 수 있습니다. 송수신은 OS 차원에서 일어나며 Money Tracker 서버를 거치지 않습니다.

JSON은 평문입니다. 어떤 편집기에서든 열면 구조가 보입니다: `accounts`, `categories`, `transactions` 세 배열을 가진 객체, 각 레코드는 명명된 필드로 구성된 평이한 구조. base64 블롭도, 암호화된 컨테이너도, 버전에 종속된 스키마도 없습니다.

가져오기는 같은 파일을 받습니다. 가져온 항목이 기존 항목과 같은 ID를 공유하면 새로 만들지 않고 그 자리에서 덮어씁니다 — 즉 새 백업을 오래된 백업 위에 얹으면 실제로 새로 추가된 행만 더해집니다.
