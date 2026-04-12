# Commit Message Guide

## 형식

```
<type>: <문제번호> <설명>
```

## Type

| Type | 설명 |
|------|------|
| `solve` | 문제 풀이 완료 |
| `fix` | 버그 수정 |
| `refactor` | 코드 개선 (기능 변경 없음) |
| `style` | CSS/디자인 수정 |
| `docs` | 문서 추가/수정 |
| `chore` | 기타 설정, 파일 정리 등 |

## 예시

```
solve: B20 틱택토
solve: B19 캘린더
fix: B20 승리 판정 버그 수정
refactor: B20 상태기반 패턴으로 리팩토링
style: B19 주말 색상 적용
docs: 커밋 가이드 추가
chore: .gitignore 설정
```

## 규칙

- 한 커밋에는 하나의 문제만 포함한다.
- 설명은 간결하게 작성한다.
- type은 소문자로 작성한다.