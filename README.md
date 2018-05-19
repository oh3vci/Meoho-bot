# 네코동 AI 챌린지: Five!

넥슨 프로그래밍 동호회 네코동에서 AI 챌린지를 엽니다. 간단한 게임 AI를 만들고, 다른 AI를 이기기 위한 전략을 구상해서, 다른 사람들과 붙어볼 수 있는 AI 대회를 준비해보았습니다.

직접 플레이해보면서 룰을 익혀본 다음, 좋은 결과를 낼 수 있는 AI를 제출해 주세요!
바로 해보려면 [이 사이트](http://necodong.com/five/)를 참고해 주세요.

프로그래밍을 엄청 잘하지 않으시더라도 만드는 걸 시도해볼 수 있을 정도로 간단한 게임을 준비해보았습니다. 더 잘하기 위해 고민하고, 구현하고, 다시 더 나아지기 위해 고민하면서 AI를 만드는 것 자체가 엄청 재밌는 일이에요. 1등하면 닌텐도 스위치가 기다리고 있습니다! 많은 참여 부탁드립니다.

## 룰

게임 한 판을 이기기 위한 **게임 룰**과 대회에서 어떻게 AI를 평가하게 될지에 대한 **대회 룰**을 설명합니다.

## 게임 룰

- 6장의 카드 (1, 2, 3, 4, 5, !)를 가지고 시작합니다.
- 각 턴마다 서로 한 장씩 냅니다. 낸 카드를 동시에 공개합니다.
- 일반적으로 큰 숫자가 이깁니다. 단, 1은 5를 이깁니다. !는 짝수(2,4)를 이깁니다.
- 0점에서 시작하여 내가 이기면 +1점, 상대가 이기면 -1점씩 변합니다.
- 3점, -3점이 되거나 6장 카드를 모두 사용하면 한 게임이 종료됩니다.
- 게임이 종료된 시점에 점수가 양이면 나의 승리, 음이면 상대방의 승리, 0이면 무승부입니다.

## 대회 룰 (8강 결정까지)

- AI 작성은 4월 13일부터 22일까지 진행됩니다. (22일 마감!)
- 제출한 AI 전체를 서로 상대로 하여 1:1로 대전시킵니다. (N*(N-1))
- 한번의 대전은 11판6선승제로 구성합니다.
- 각 대전 마다 승은 3점, 무승부는 1점의 승점을 얻습니다. 그리고 승점 별로 등수를 매깁니다. 승점이 같은 경우 제출 시간이 빠른 쪽을 상위 등수로 합니다.
- 22일 자정에 제출 만료된 AI 기준으로 상위 8개의 AI를 토너먼트로 대전 시켜 1등부터 등수를 결정합니다. 이 결과로 상품을 결정합니다.
- 대회가 끝나기전 21일까지 중간 집계로 당시 시점까지 제출된 AI별 등수를 매일 공개합니다. 단 22일 제출된 AI를 포함한 등수는 공개하지 않으며, 중간 집계로 공개된 등수는 최종 등수랑은 무관합니다.
- 한 사람당 하나의 AI만 인정합니다. 메일 주소 여럿을 쓰면 알아내기 어렵지만, 대회 진행을 위해 협력해주세요.
- 여러번 제출하는 경우 마지막 제출을 기준으로 진행합니다.

### 대회 룰의 예

A, B, C가 AI를 제출했다고 해봅시다.

A:B, B:C, C:A 상대로 11판 6선승제로 대전을 합니다.

A:B = 6승 3패로 A가 대전을 승리

B:C = 6승 1패로 B가 대전을 승리

C:A = 5승 5패 1무로 대전 무승부

위와 같이 결과가 나온 경우, 대전 결과를 종합하면

A: 1승 1무로 4점

B: 1승 1패로 3점

C: 1무 1패로 1점

A, B, C 순서대로 1, 2, 3등이 됩니다. 만약 점수가 같았다면 제출 순서를 따져 먼저 제출한 AI가 상위 등수를 차지합니다.

## 직접 게임 해보기

PC나 폰으로 아래 주소로 접속하여 사람들과 붙어볼 수 있습니다.

necodong.com/five

## 참가하는 방법

AI 함수를 작성한 후 압축해서 첨부파일로 메일로 necodong@gmail.com으로 전송하시면 됩니다! ([자세한 제출방법](#제출-방법)을 참고 해주세요)

심사의 편의를 위해 참가 가능한 언어는 Python3와 Javascript로 제한합니다. 불필요한 동작을 하는 코드의 경우 실격처리할 수 있습니다(파일 오픈, 외부와 통신, 해킹 시도, 특수한 기법으로 룰을 우회하는 등).

라이브러리, 모듈 등의 사용은 허용하지 않습니다. python은 ```import```를 해선 안되며, ```__builtins__```모듈에 포함된 것은 ```__import__```, ```exec``` ```eval```를 제외하고 사용할 수 있습니다. javascript의 Math, Date 등도 금지됩니다. 언어에서 모듈없이 사용할 수 있는 [ ], { } 등과 일반적으로 같이 사용할 꺼라 기대되는 append, push 등의 메서드들은 사용해도 괜찮습니다. 일반적이지 않은 사용의 예를 들자면, python에서 ```object.__subclasses__()```
```[93].read.__globals__['open']('other_ai.py').read()``` 와 같은 코드로 특정 파일을 읽어들이는 건 "일반적인 사용"이 아닙니다. (04/17 추가)

알고리즘 경쟁을 위해 [언어에 제공되는 랜덤의 사용을 금지](#랜덤-금지)합니다. 좀더 정확히는, 제출한 think 함수는 **같은 인자가 들어오면, 항상 같은 카드를 고르는 결정론적 알고리즘**이어야 합니다. 아래 랜덤 금지 섹션을 참고해주세요. (04/13 추가)

다음 형태의 함수를 작성하시면 됩니다. 인자 설명은 아래에…
만약 구현상 다른 함수를 추가해야할 경우 자유롭게 추가해서 구현해 주세요. 프로그래밍 초보이신 경우 아래의 return 부분을 수정하여 특정 순서로 내는 AI를 쉽게 만드실 수 있습니다.

```python
# Python3
# 5 4 3 2 1 ! 순서대로 내는 AI 예제입니다.
def think(hands, history, old_games):
    if len(history) == 0:
        return '5'
    if len(history) == 1:
        return '4'
    if len(history) == 2:
        return '3'
    if len(history) == 3:
        return '2'
    if len(history) == 4:
        return '1'
    if len(history) == 5:
        return '!'
```

```js
// Javascript
// 5 4 3 2 1 ! 순서대로 내는 AI 예제입니다.
function think(hands, history, old_games) {
	if (history.length == 0)
		return '5';
	if (history.length == 1)
		return '4';
	if (history.length == 2)
		return '3';
	if (history.length == 3)
		return '2';
	if (history.length == 4)
		return '1';
	if (history.length == 5)
		return '!';
}
```

- think 함수는 3개의 인자를 받아 이번 턴에 플레이할 카드를 리턴합니다.
- think 함수는 1초안에 실행이 완료되어야 합니다. ([성능 측정](#성능-측정) 참고)
- 전역 변수를 사용할 수는 있지만, 매번 새로 실행하기 때문에, think가 호출될 때 이전에 저장한 값이 유지되지는 않습니다.
- hands: 이번 턴에 사용 가능한 카드들이 문자열의 배열로 주어집니다. 맨처음 think가 불릴 때 hands는 [‘1’, ‘2’, ‘3’, ‘4’, ‘5’, ‘!’] 의 형태입니다. think는 hands에 속한 값 중에 하나를 리턴해야합니다.
- history: 이번 게임에 각 턴마다 사용된 카드들의 기록이 배열의 배열 형태로 주어집니다. 각 턴은 [내가 낸 카드, 상대가 낸 카드] 형태로 저장되며, history[0]이 첫번째 턴, history[1]이 두번째 턴이 됩니다. 맨처음 think가 불릴 때 history는 빈 배열, [] 값을 가집니다.
- old_games: 이전 게임들의 history가 저장된 배열입니다. (즉 배열의 배열의 배열 꼴을 가집니다.) 한 대전은 최대 11번 경기를 하므로 old_games에는 최대 10개의 history가 저장됩니다.
- old_games의 길이를 이용하여 몇번째 게임인지 확인할 수 있습니다.
- 실행 중에 1초가 넘거나, 오류가 나거나, 잘못된 카드를 리턴하는 경우, 해당 게임을 패배로 처리하고, 다음 게임으로 진행합니다. 오류가 발생한 게임의 history는 old_games에 저장되지않습니다.

### think가 호출될 때 인자의 예

- hands = [‘1’, ‘2’, ‘5’, ‘!’]
- history = [[‘3’, ‘4’], [‘4’, ‘1’]]
- old_games = [[[‘3’, ‘2’], [‘2’, ‘1’], [‘4’, ‘3’]], (다른 history들)…]

내가 3을 내고 상대가 4, 내가 4를 내고 상대가 1을 내어 0점인 상태입니다. (상대 남은 카드는 2, 3, 5, ! 겠죠). 상대가 1을 내 버렸으므로 내 5를 안전하게 내거나, 1을 내고 상대 5를 잡는 시도를 해보거나(성공하면 엄청 유리해집니다), old_games를 살펴서 어떤 수가 더 유리할지 더 고민해 볼 수 있습니다.

### AI 테스트하기

아래 사이트에서 제작한 AI를 54321! 순서로 내는 AI와 대전 해볼 수 있습니다. 제출 전에 동작하는지 테스트 용으로 사용하실 수 있습니다.

예제 AI나 제출시 공개 하기로 결정한 AI 와 대전해 볼 수 있습니다. 콤보 박스에서 선택 후 공개 AI 와 겨뤄보기를 눌러보세요. (4/17 추가)

http://necodong.com/test

브라우저용 파이썬을 사용해서 일부 기능이 동작하지 않을 수 있습니다. 휴대폰 보단 PC로 접속해주세요. 크롬 최신버전을 사용하시는 것을 추전드립니다. 코드가 동작하지 않는 경우 개발자 도구를 열어 콘솔을 확인하면 관련 메시지가 출력되어 있는 경우가 있습니다. 버그가 있으면 문의주세요.

### 제출 방법

제출은 necodong@gmail.com 으로 “[AI대회] AI이름” 제목으로 메일을 보내주세요. 작성한 AI 코드를 **zip으로 압축하여 첨부파일로 제출**하시면 됩니다.

제출은 4월 13일부터 4월 22일까지 받습니다.

압축파일에 포함되어야할 내용은 아래와 같습니다. 확장자를 기준으로 판단하므로 파일이름은 아래와 달라도 괜찮습니다.

필수

- ```code.py``` 또는 ```code.j``` : think가 구현된 코드가 들어있는 파일. email 클라이언트들이 .js가 포함된 압축파일의 전송을 금지하고 있으므로, 확장자를 j로 바꿔서 압축해주세요. (04/13 변경)

옵션: 8강에 진출한 경우 중계할 때 사용합니다. 8강에 진출했는데 설명이나 이미지가 없는 경우 다시 요청드릴 수도 있습니다.

- ```readme.txt```: AI 설명.
- ```image.png``` 또는 image.jpg : AI의 대표 이미지.

만약 제출한 AI를 공개하여 웹에서 테스트로 겨루게하고 싶은 경우, 제목에 “- 공개” 라고 붙여주세요. 코드가 공개되지는 않습니다.
제출하는 코드는 16384 바이트 이하여야합니다.

예)

[AI대회] BigHead

[AI대회] LazyThinker - 공개

## 랜덤 금지

random 모듈이나 Math.random 등의 사용이 금지됩니다. int(time.time()%1*10)같은 시간을 이용한 랜덤도 금지됩니다. 하지만 완전히 "랜덤을 금지"한다고 말할 수는 없는데, 예를 들어 몇 번째 게임의 몇 번째 턴에서 어떤 카드를 낼지 66개의 if문으로 AI를 만든 경우 완전히 랜덤한 AI를 작성할 수 있기 때문입니다.

따라서 이번 대회에서 정확한 제약 사항은 같은 인자가 주어졌을 때 think 함수가 항상 같은 카드를 골라야 한다는 것입니다. 이 조건만 만족한다면 Linear congruential generator나 Mersenne Twister로 랜덤을 구현하여 사용하셔도 괜찮습니다. 단 time이나 Date 사용도 금지되므로 시간으로 seed를 설정하는 것은 룰 위반입니다.

## 성능 측정

클라우드 서비스를 제공하는 서버에서 테스트를 진행하고 있어, 정확한 CPU 속도를 제공하기 어렵습니다. 아래 코드를 참고해서 성능 비교에 사용해주세요. (4/18 추가)

python:

```python
>>> def f():
...     i = 0
...     t = time.time()
...     while 1:
...             i += 1
...             if time.time() - t > 1:
...                     break
...     return i
...
>>> sum(f() for i in range(10))/10.
3650210.7
>>> def g(n):
...     t = time.time()
...     i = 0
...     while i < n:
...              i += 1
...     return time.time() - t
...
>>> g(f())
0.23052167892456055
```

javascript:

```js
let f = () => {
  const t = Date.now();
  i = 0;
  while(1) {
    i ++;
    if (Date.now()-t > 1000)
      break;
  }
  return i
};

let s = 0;
for(let i = 0; i < 10; i ++) {
  s += f();
}
console.log(s/10);

let g = (n) => {
  const t = Date.now();
  i = 0;
  while(i < n)
    i++;
  return Date.now() - t;
}

console.log(g(f())/1000);
```

실행결과:

```console
12043876.3
0.044
```

