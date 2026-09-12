import { DrinkPackage, RoomInfo, FaqItem } from '../types';

export const CONTACT_INFO = {
  brandName: '건대 W (CLUB W)',
  brandSubtitle: '건대 1등 여성전용 프라이빗 호스트클럽',
  phone: '010-7700-9100',
  phoneDisplay: '010.7700.9100',
  kakaoId: 'wbar8254',
  kakaoLink: 'https://open.kakao.com/o/snjsbdKi',
  address: '서울특별시 광진구 화양동 (건대입구역 2번 출구 도보 5분)',
  operatingHours: '매일 20:00 - 익일 06:00 (연중무휴)',
  managerName: 'W 총괄 지점장',
  pickupRegions: ['건대', '구의', '성수', '잠실', '강남', '동대문', '서울 전지역'],
};

export const DRINK_PACKAGES: DrinkPackage[] = [
  {
    id: 'whisky-12y',
    name: '스탠다드 위스키 세트',
    badge: '가장 인기 · 기본 추천',
    category: 'standard',
    bottleInfo: '골든블루 12년 or 윈저 12년 (500ml 1병)',
    price: 160000,
    description: '처음 방문하시거나 부담 없이 즐기기 가장 좋은 대표 시그니처 세트입니다.',
    included: [
      '고급 위스키 12년산 1병',
      '신선한 계절 특선 과일 안주',
      '고소한 모듬 마른 안주',
      '맥주 & 음료 & 토닉워터 무제한 제공',
      '단독 룸 이용료 100% 무료 (시간 무제한)'
    ],
    popular: true
  },
  {
    id: 'whisky-17y',
    name: '프리미엄 17년 세트',
    badge: 'VIP 추천',
    category: 'premium',
    bottleInfo: '골든블루 사피루스/다이아 17년 or 발렌타인 17년 (1병)',
    price: 210000,
    description: '더 부드럽고 격조 높은 자리를 위한 17년산 프리미엄 위스키 코스입니다.',
    included: [
      '프리미엄 위스키 17년산 1병',
      '스페셜 계절 과일 플레이터',
      '카나페 & 치즈 플레이트',
      '맥주, 음료, 탄산수, 에너지드링크 무제한',
      'VIP 프라이빗 대형 룸 우선 배정'
    ],
    popular: false
  },
  {
    id: 'champagne-party',
    name: '샴페인 & 파티 패키지',
    badge: '생일 · 파티 특화',
    category: 'special',
    bottleInfo: '모에샹동 / 뵈브클리코 or 돔페리뇽 라인업',
    price: 280000,
    description: '생일파티, 브라이덜 샤워, 특별한 기념일을 위한 샴페인 불꽃 세트입니다.',
    included: [
      '프리미엄 샴페인 1병 + 파티 스파클링',
      '생일/기념일 축하 레터링 & 파티 소품 세팅',
      '특선 과일 & 디저트 핑거푸드',
      '모든 음료 및 칵테일 믹서 무제한',
      '최고급 파티 스위트룸 배정 & 전담 매니저 케어'
    ],
    popular: false
  }
];

export const SYSTEM_RATES = {
  tcPerHour: 60000, // 선수 1인 1시간 T/C (6만원)
  waiterTip: 50000, // 웨이터 팁 (테이블당 5만원 1회)
  roomCharge: 0, // 룸 이용료 무료!
  beveragesUnlimited: true, // 음료 및 기본 안주 무제한
};

export const ROOMS: RoomInfo[] = [
  {
    id: 'grand-vip',
    name: 'Grand VIP Suite',
    subtitle: '최고급 프라이빗 스위트 룸',
    capacity: '4~10인 추천 (단체 파티 가능)',
    tag: 'VIP SUITE',
    features: [
      '최고급 뱅앤올룹슨/보스 하이엔드 오디오 시스템',
      'TJ 최신형 반주기 및 무선 마이크 4기',
      '스마트 감성 앰비언트 무드등 컨트롤',
      '초대형 이탈리아 천연 가죽 소파'
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    description: '생일 파티 및 지인 모임에 최적화된 건대 W의 가장 넓고 웅장한 VIP 스위트 룸입니다.'
  },
  {
    id: 'private-lounge',
    name: 'Private Modern Lounge',
    subtitle: '감성적인 모던 라운지 룸',
    capacity: '2~4인 추천',
    tag: 'PRIVATE LOUNGE',
    features: [
      '미니멀하고 따뜻한 간접 조명 인테리어',
      '완벽한 흡음 및 방음 시공 (사생활 100% 보장)',
      '쾌적한 공기청정 및 환기 시스템 상시 가동',
      '스마트폰 초고속 무선 충전기 완비'
    ],
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1200&auto=format&fit=crop',
    description: '도심 속 지친 하루, 친구와 함께 프라이빗하게 술 한잔과 깊은 대화를 나누기 최적의 공간입니다.'
  },
  {
    id: 'cozy-solo',
    name: 'Cozy Studio for Solo',
    subtitle: '1인 단독 고객 전용 프라이빗 룸',
    capacity: '1인 전용 (혼술 맞춤)',
    tag: 'SOLO PRIVATE',
    features: [
      '1인 고객을 위한 아늑하고 부담 없는 스케일',
      '조도 조절 가능한 웜톤 간접등',
      '부담 없이 편안하게 머무는 전담 에스코트',
      '블루투스 음악 감상 및 넷플릭스/유튜브 시청 가능'
    ],
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200&auto=format&fit=crop',
    description: '혼자 방문하시는 분들을 위해 부담 없는 아늑한 분위기와 철저한 사생활을 약속하는 전용 룸입니다.'
  },
  {
    id: 'powder-zone',
    name: 'Powder & Dressing Lounge',
    subtitle: '여성 고객 전용 파우더 & 포토존',
    capacity: '전 고객 이용 가능',
    tag: 'FACILITY',
    features: [
      '다이슨 에어랩 및 최고급 헤어 스타일러 구비',
      '유명 브랜드 향수 & 핸드크림 비치',
      '셀카 명소 조명 거울 포토존',
      '여성 전용 1인 독립 럭셔리 파우더룸'
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
    description: '언제든 메이크업을 수정하고 예쁜 인생샷을 남길 수 있도록 최고급 어메니티를 완비했습니다.'
  }
];

export const CORE_VALUES = [
  {
    number: '01',
    title: '100% 정찰제 시스템',
    subtitle: '투명하고 정직한 주대',
    desc: '입장 전 안내드린 주대 외에 어떠한 바가지나 불필요한 추가 요금(룸비 등)을 일절 청구하지 않습니다. 영수증 내역을 투명하게 확인하실 수 있습니다.'
  },
  {
    number: '02',
    title: '건대 최다 50+ 에이스 라인업',
    subtitle: '매일 엄선된 다양한 매력',
    desc: '아이돌/모델상부터 듬직하고 유쾌한 훈남까지, 다양한 스타일의 엄선된 에이스들이 매일 50명 이상 대기하여 고객님의 이상형을 맞춰드립니다.'
  },
  {
    number: '03',
    title: '철저한 비밀보장 & 프라이빗',
    subtitle: '완벽한 사생활 보호',
    desc: '단독 룸 독립 동선, 전 직원 철저한 비밀유지 서약, 프라이빗 발렛 및 지하 출입구로 처음부터 끝까지 안심하고 머무실 수 있습니다.'
  },
  {
    number: '04',
    title: '1인 혼술 환영 & VIP 픽업',
    subtitle: '누구나 편안한 방문',
    desc: '방문 고객의 40% 이상이 1인 단독 고객입니다. 어색함 전혀 없이 편안하게 즐기실 수 있으며, 사전 예약 시 최고급 세단 픽업 서비스를 무료 제공합니다.'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: 'first-timer',
    question: '처음인데 혼자 방문해도 정말 어색하지 않을까요?',
    answer: '네, 전혀 부담 갖지 않으셔도 됩니다! 건대 W를 찾아주시는 고객님의 약 40%가 1인 단독 방문 고객님이십니다. 입장부터 룸 배정, 담당 실장의 섬세한 상담과 배려로 가장 편안하고 기분 좋은 시간이 되도록 끝까지 책임지고 케어해 드립니다.'
  },
  {
    category: 'pricing',
    question: '계산할 때 추가 요금(바가지)이 나오지 않나요?',
    answer: '건대 W는 철저한 ‘100% 가격 정찰제’를 운영합니다. 안내해 드린 기본 정찰 요금 외에 불합리한 추가금이나 룸비는 일절 발생하지 않습니다. 상세 주대 및 패키지는 방문 시 또는 유선/카톡 상담 시 친절하고 투명하게 안내해 드립니다.'
  },
  {
    category: 'service',
    question: '초이스(파트너 선택)는 마음에 들 때까지 가능한가요?',
    answer: '물론입니다. 건대 W는 매일 40~50명 이상의 다양한 매력의 에이스 선수들이 상시 대기 중입니다. 고객님의 취향(외모, 성향, 대화 스타일 등)에 맞을 때까지 제한 없이 편안하게 초이스하실 수 있습니다.'
  },
  {
    category: 'service',
    question: '무료 픽업 서비스는 어떻게 이용하나요?',
    answer: '방문 30분~1시간 전에 미리 연락(전화 또는 카카오톡) 주시면, 계신 위치(건대, 강남, 잠실, 성수 등 서울 전지역)로 고급 세단 픽업 차량을 보내 편안하고 안전하게 모셔옵니다. 자차 이용 시 전용 무료 발렛 파킹도 지원됩니다.'
  },
  {
    category: 'pricing',
    question: '결제 방식은 어떤 것들이 가능한가요?',
    answer: '신용카드, 체크카드, 계좌이체, 현금 결제 모두 가능합니다. 결제 시 명세서나 카드 영수증에도 안심하실 수 있도록 일반 서비스 업종명으로 깔끔하게 처리됩니다.'
  },
  {
    category: 'reservation',
    question: '예약 없이 당일 바로 방문해도 되나요?',
    answer: '당일 방문도 가능하지만, 피크 타임(금/토 및 밤 10시~새벽 2시)에는 대기 시간이 발생할 수 있습니다. 30분 전이라도 미리 연락 주시면 대기 없이 가장 좋은 룸으로 즉시 배정해 드립니다.'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: '이지* 님',
    type: '1인 혼술 방문',
    rating: 5,
    date: '2026.08',
    content: '호빠 처음 가보는 거라 혼자 가기 진짜 망설여졌는데, 실장님이 너무 친절하고 매너 있게 안내해 주셔서 긴장 싹 풀렸어요. 파트너분도 대화 너무 잘 이끌어줘서 스트레스 제대로 풀고 왔네요. 정찰제라 금액도 깔끔!'
  },
  {
    id: 2,
    name: '김서* 님',
    type: '친구 3명 생일파티',
    rating: 5,
    date: '2026.09',
    content: '친구 생파로 샴페인 세트 예약했는데 룸도 엄청 넓고 고급스러워서 사진 수백 장 건졌어요! 선수분들 텐션도 좋고 잘생기셔서 친구들 다 대만족했습니다. 강남 쪽보다 가성비 훨씬 좋아요.'
  },
  {
    id: 3,
    name: '박유* 님',
    type: '2인 방문 / 픽업 이용',
    rating: 5,
    date: '2026.09',
    content: '강남 쪽에서 놀다가 픽업 요청드렸는데 벤츠로 데리러 와주셔서 너무 편했습니다. 술값이나 T/C 설명도 처음부터 딱 정확하게 짚어줘서 바가지 걱정 1도 없었어요. 건대 올 일 있으면 무조건 W입니다.'
  }
];

export const RECRUIT_INFO = {
  title: '건대 W 20~30대 남성 에이스 & 스태프 상시 모집',
  highlights: [
    '당일 100% 수당 전액 지급 (T/C 밀림 Zero)',
    '초보자도 1:1 맞춤 트레이닝으로 당일 근무 가능',
    '텃세 없는 화목하고 밝은 매장 분위기 약속',
    '지방 거주자 및 필요 시 쾌적한 전용 숙소 지원',
    '투잡, 주말 알바, 대학생 단기 알바 환영'
  ],
  qualifications: '20세 이상 대한민국 신체 건강한 남성 (군필/면제/재학 무관, 외모·끼·센스 환영)',
  contactPhone: '010-7700-9100',
  contactKakao: 'wbar8254'
};
