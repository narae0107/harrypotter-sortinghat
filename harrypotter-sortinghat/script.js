
let G = 0, H = 0, R = 0, S = 0;
let currentQuestion = 0;

const questions = [
  {
    text: 'Q1) 새벽 아니면 해질녘?',
    choices: ['새벽', '해질녘'],
    answer: (choice) => {
      if (choice === 0) { G++; R++; }
      else { H++; S++; }
    }
  },
  {
    text: 'Q2) 만약 죽는다면, 사람들이 어떻게 기억해주기를 원하나요?',
    choices: ['선한 자', '위대한 자', '현명한 자', '용감한 자'],
    answer: (choice) => {
      if (choice === 0) H += 2;
      else if (choice === 1) S += 2;
      else if (choice === 2) R += 2;
      else if (choice === 3) G += 2;
    }
  },
  {
    text: 'Q3) 어떤 악기의 소리를 좋아하나요?',
    choices: ['바이올린', '트럼펫', '피아노', '드럼'],
    answer: (choice) => {
      if (choice === 0) S += 4;
      else if (choice === 1) H += 4;
      else if (choice === 2) R += 4;
      else if (choice === 3) G += 4;
    }
  }
];

function nextQuestion() {
  const quizDiv = document.getElementById('quiz');
  const resultDiv = document.getElementById('result');
  quizDiv.innerHTML = '';
  resultDiv.innerHTML = '';

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    quizDiv.innerHTML = `<p>${q.text}</p>`;

    q.choices.forEach((choice, index) => {
      const btn = document.createElement('button');
      btn.textContent = choice;
      btn.onclick = () => {
        q.answer(index);
        currentQuestion++;
        nextQuestion();
      };
      quizDiv.appendChild(btn);
      quizDiv.appendChild(document.createElement('br'));
    });
  } else {
    let house = '';
    let description = '';
    let people = '';
    if (G >= R && G >= H && G >= S) {
      house = '🦁 그리핀도르!';
      description = '용기와 모험심, 정의를 중시하는 기숙사예요.';
      people = '대표 인물: 해리 포터, 헤르미온느 그레인저, 론 위즐리';
    } else if (R >= H && R >= S) {
      house = '🦅 래번클로!';
      description = '지혜와 지식을 추구하는 이들의 기숙사랍니다.';
      people = '대표 인물: 루나 러브굿, 초 챙, 필리우스 플리트윅';
    } else if (H >= S) {
      house = '🦡 후플푸프!';
      description = '성실하고 인내심 강한 이들이 모이는 따뜻한 기숙사예요.';
      people = '대표 인물: 세드릭 디고리, 뉴트 스캐맨더, 팜파도라';
    } else {
      house = '🐍 슬리데린!';
      description = '야망과 리더십, 자기 목표에 집착하는 사람들이 모이는 곳이에요.';
      people = '대표 인물: 드레이코 말포이, 세베루스 스네이프, 톰 리들(볼드모트)';
    }
    resultDiv.innerHTML = `<h2>${house}</h2><p>${description}</p><p>${people}</p>`;
  }
}
