import { LanguageFile } from '../types/language';

const ko: LanguageFile = {
  config: {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: 'kr',
  },
  translations: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.services': '서비스',
    'nav.projects': '프로젝트',
    'nav.contact': '연락처',

    // Hero
    'hero.titles.0': '풀스택 개발자',
    'hero.titles.1': '디자이너',
    'hero.titles.2': '솔루션 크리에이터',
    'hero.titles.3': '문제 해결사',
    'hero.titles.4': '코드 애호가',
    'hero.titles.5': '기술 애호가',
    'hero.description':
      '아이디어를 코드로 변환하여 놀라운 디지털 경험과 혁신적인 솔루션을 만들어 차이를 창출합니다.',
    'hero.viewProjects': '프로젝트 보기',
    'hero.aboutMe': '나에 대해',

    // About
    'about.title': '나에 대해',
    'about.subtitle':
      '기술에 열정을 가진 개발자로, 사람들의 삶에 긍정적인 영향을 미치는 우아하고 효율적인 솔루션을 만들기 위해 항상 노력합니다.',
    'about.journey': '나의 여정',
    'about.journey.p1':
      '풀스택 개발자로서 뛰어난 디지털 경험을 만드는 데 열정을 가지고 있습니다. 현대 기술에 전문화되어 있으며, 항상 새로운 도구와 방법론을 탐구합니다.',
    'about.journey.p2':
      '코드는 기능적일 뿐만 아니라 우아하고 유지보수 가능해야 한다고 믿습니다. 모든 프로젝트는 새로운 것을 배우고 개발자 커뮤니티에 기여할 기회입니다.',
    'about.technologies': '기술',
    'about.interests.cleancode.title': '클린 코드',
    'about.interests.cleancode.desc': '깔끔하고 잘 구조화된 코드',
    'about.interests.innovation.title': '혁신',
    'about.interests.innovation.desc': '항상 새로운 솔루션을 추구',
    'about.interests.performance.title': '성능',
    'about.interests.performance.desc': '최적화와 높은 성능',
    'about.interests.opensource.title': '오픈 소스',
    'about.interests.opensource.desc': '커뮤니티에 기여',
    'about.stats.location': '위치',
    'about.stats.country': '브라질',
    'about.stats.experience': '경험',
    'about.stats.years': '{years}년',
    'about.stats.focus': '초점',
    'about.stats.fullstack': '풀스택',
    'about.cta': '연락하기',

    // Services
    'services.title': '서비스',
    'services.subtitle': '추첨 자동화 및 디지털 관리를 위한 전문 솔루션',
    'services.automation.title': '추첨 자동화',
    'services.automation.description':
      'AlphaBot 플랫폼을 통한 추첨의 완전한 자동화 시스템. 참가자 등록부터 우승자 선정까지 효율적이고 신뢰할 수 있는 솔루션을 제공합니다.',
    'services.automation.feature1': '자동화된 참가자 관리 및 등록',
    'services.automation.feature2': '투명하고 안전한 우승자 선정 시스템',
    'services.automation.feature3': '실시간 보고서 및 상세 분석',
    'services.learnMore': '자세히 알아보기',

    // Projects
    'projects.title': '프로젝트',
    'projects.subtitle':
      '가장 최근이고 흥미로운 프로젝트들을 선별하여 GitHub에서 탐색하고 기여할 수 있습니다.',
    'projects.viewAll': '모든 프로젝트 보기',
    'projects.loading': '프로젝트 로드 중...',
    'projects.defaultDesc': '열정과 헌신으로 개발된 흥미로운 프로젝트.',
    'projects.error': '리포지토리 가져오기 오류:',

    // Contact
    'contact.country': '브라질',
    'contact.title': '대화합시다',
    'contact.subtitle':
      '협업에 관심이 있거나 멋진 아이디어가 있나요? 함께 개념을 현실로 바꿔봅시다.',
    'contact.ready': '다음 프로젝트를 준비했나요?',
    'contact.button': '연락하기',
    'contact.email': '이메일',
    'contact.location': '위치',
    'contact.social': '소셜 링크',
    'contact.form.name': '이름',
    'contact.form.email': '이메일',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': '제목',
    'contact.form.subject.placeholder': '무엇에 관한 건가요?',
    'contact.form.message': '메시지',
    'contact.form.message.placeholder': '프로젝트에 대해 알려주세요',
    'contact.form.submit': '메시지 보내기',
    'contact.form.sending': '보내는 중...',
    'contact.form.success':
      '✅ 메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.',
    'contact.form.error':
      '❌ 메시지 전송 중 오류가 발생했습니다. EmailJS 설정을 확인하거나 나중에 다시 시도해주세요.',
    'contact.form.error.button': '전송 오류. 다시 시도하세요.',
    'contact.form.success.button': '메시지가 전송되었습니다!',
    'contact.form.name.placeholder': '성함',
    'contact.form.validation.name': '이름은 최소 2자 이상이어야 합니다',
    'contact.form.validation.email': '유효한 이메일 주소를 입력해주세요',
    'contact.form.validation.subject': '제목은 최소 3자 이상이어야 합니다',
    'contact.form.validation.message': '메시지는 최소 10자 이상이어야 합니다',
    
    

    // Footer
    'footer.text': '© {year} OniMock. ❤️와 많은 커피로 제작됨.',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot 추첨 자동화',
    'alphabot.hero.subtitle': '추첨 및 디지털 관리를 위한 완전한 자동화 플랫폼',
    'alphabot.hero.description':
      '고급 자동화 시스템으로 추첨 관리를 혁신하세요. 참가자 등록부터 우승자 선정까지 AlphaBot은 완전하고 신뢰할 수 있는 솔루션을 제공합니다.',
    'alphabot.hero.cta': '시작하기',
    'alphabot.hero.demo': '데모 보기',

    // AlphaBot Features
    'alphabot.features.title': '혁신적인 기능',
    'alphabot.features.subtitle': '프로젝트 관리 방식을 변화시키는 최첨단 기술',
    'alphabot.features.automation.title': '완전한 자동화',
    'alphabot.features.automation.description':
      '추첨을 처음부터 끝까지 관리하는 완전 자동화 시스템.',
    'alphabot.features.security.title': '보장된 보안',
    'alphabot.features.security.description':
      '고급 데이터 보호 및 추첨의 완전한 투명성.',
    'alphabot.features.reports.title': '상세 보고서',
    'alphabot.features.reports.description':
      '더 나은 관리를 위한 완전한 분석 및 실시간 보고서.',

    // AlphaBot informative sections
    'alphabot.sections.automation.title': 'Alphabot으로 추첨 등록 자동화',
    'alphabot.sections.automation.description':
      '효율적으로 기회를 극대화하세요! Alphabot 플랫폼에서 등록을 자동화하여 시간을 절약하고 NFT 당첨 가능성을 높입니다.',
    'alphabot.sections.automation.feature1':
      '자동 등록: 추첨이 활성화되자마자 계정을 등록합니다.',
    'alphabot.sections.automation.feature2':
      '다중 계정 지원: 여러 계정을 동시에 관리합니다.',
    'alphabot.sections.automation.feature3':
      '스마트 대기열 관리: 제한 제어로 최적화된 등록.',

    'alphabot.sections.notifications.title':
      'Discord 및 Telegram을 통한 실시간 알림',
    'alphabot.sections.notifications.description':
      '등록, 당첨, 민팅 기회에 대한 즉각적인 알림을 받으세요.',
    'alphabot.sections.notifications.feature1':
      '즉각적인 알림: 적시에 정보 제공.',
    'alphabot.sections.notifications.feature2':
      '맞춤형 웹훅: 원하는 대로 구성 가능.',
    'alphabot.sections.notifications.feature3':
      '사용자 친화적 업데이트: 유용한 링크와 명확한 메시지.',

    'alphabot.sections.management.title': '견고한 오류 및 데이터 관리',
    'alphabot.sections.management.description':
      '전략을 지속적으로 실행하기 위한 신뢰성 보장.',
    'alphabot.sections.management.feature1': '스마트 오류 복구: 자동 재시도.',
    'alphabot.sections.management.feature2':
      '안전한 저장: 주기적 정리와 함께 MongoDB 사용.',
    'alphabot.sections.management.feature3':
      '확장 가능한 인프라: 충돌 없이 대량 처리.',

    'alphabot.sections.learnMore': '자세히 알아보기',
  },
};

export default ko;
