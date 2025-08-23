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
    'hero.titles.2': '솔루션 창작자',
    'hero.titles.3': '모더레이터',
    'hero.titles.4': '프로그래밍 열정가',
    'hero.titles.5': '기술 열정가',
    'hero.description':
      '아이디어를 코드로 변환하여 놀라운 디지털 경험과 혁신적인 솔루션을 만들며 차이를 만듭니다.',
    'hero.viewProjects': '프로젝트 보기',
    'hero.aboutMe': '소개',

    // About
    'about.title': '소개',
    'about.subtitle':
      '기술에 열정을 가진 개발자로, 사람들의 삶에 긍정적인 영향을 미치는 우아하고 효율적인 솔루션을 항상 추구합니다.',
    'about.journey': '나의 여정',
    'about.journey.p1':
      '풀스택 개발자로서 뛰어난 디지털 경험을 만드는 데 열정을 가지고 있습니다. 현대 기술에 전문화되어 있으며 새로운 도구와 방법론을 끊임없이 탐구합니다.',
    'about.journey.p2':
      '코드는 기능적일 뿐만 아니라 우아하고 유지보수가 쉬워야 한다고 믿습니다. 모든 프로젝트는 새로운 것을 배우고 개발자 커뮤니티에 기여할 기회입니다.',
    'about.technologies': '기술',
    'about.interests.cleancode.title': '클린 코드',
    'about.interests.cleancode.desc': '깔끔하고 잘 구조화된 코드',
    'about.interests.innovation.title': '혁신',
    'about.interests.innovation.desc': '항상 새로운 솔루션을 찾고 있음',
    'about.interests.performance.title': '성능',
    'about.interests.performance.desc': '최적화와 고성능',
    'about.interests.opensource.title': '오픈 소스',
    'about.interests.opensource.desc': '커뮤니티에 기여',

    // Services
    'services.title': '서비스',
    'services.subtitle': '추첨 자동화 및 디지털 관리 전문 솔루션',
    'services.automation.title': '추첨 자동화',
    'services.automation.description': 'AlphaBot 플랫폼을 통한 포괄적인 추첨 자동화 시스템. 참가자 등록부터 당첨자 선정까지 효율적이고 신뢰할 수 있는 추첨 관리 솔루션을 제공합니다.',
    'services.automation.feature1': '참가자 및 등록의 자동화된 관리',
    'services.automation.feature2': '투명하고 안전한 당첨자 선정 시스템',
    'services.automation.feature3': '실시간 보고서 및 상세 분석',
    'services.automation.cta': '자세히 보기',

    // Projects
    'projects.title': '프로젝트',
    'projects.subtitle':
      '최신 및 가장 흥미로운 프로젝트 선별, GitHub에서 탐색 및 기여 가능.',
    'projects.viewAll': '모든 프로젝트 보기',
    'projects.loading': '프로젝트 로드 중...',
    'projects.defaultDesc': '열정과 헌신으로 개발된 흥미로운 프로젝트.',
    'projects.error': '리포지토리 가져오기 오류:',

    // Contact
    'contact.country': '브라질 (Beurajil)',
    'contact.title': '대화합시다',
    'contact.subtitle':
      '협업에 관심이 있거나 멋진 아이디어가 있나요? 함께 개념을 현실로 바꿉시다.',
    'contact.ready': '다음 프로젝트 준비됐나요?',
    'contact.description':
      '프리랜스 프로젝트, 일자리 기회, 또는 기술에 대한 대화든, 저는 항상 새로운 가능성에 열려 있습니다.',
    'contact.button': '연락하기',

    // Footer
    'footer.text': '© {year} OniMock. ❤️와 많은 커피로 개발되었습니다.',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot 추첨 자동화',
    'alphabot.hero.subtitle': '추첨 및 디지털 관리를 위한 완전한 자동화 플랫폼',
    'alphabot.hero.description': '우리의 고급 자동화 시스템으로 추첨 관리를 혁신하세요. 참가자 등록부터 당첨자 선택까지, AlphaBot은 완전하고 신뢰할 수 있는 솔루션을 제공합니다.',
    'alphabot.hero.cta': '지금 시작하기',
    'alphabot.hero.demo': '데모 보기',
    
    // AlphaBot Features
    'alphabot.features.automation.title': '완전 자동화',
    'alphabot.features.automation.description': '처음부터 끝까지 추첨을 관리하는 완전 자동화 시스템.',
    'alphabot.features.security.title': '보장된 보안',
    'alphabot.features.security.description': '고급 데이터 보호 및 추첨의 완전한 투명성.',
    'alphabot.features.reports.title': '상세 보고서',
    'alphabot.features.reports.description': '포괄적인 분석 및 실시간 보고서로 더 나은 관리.',

    // AlphaBot 정보 섹션
    'alphabot.sections.automation.title': 'Alphabot을 통한 추첨 등록 자동화',
    'alphabot.sections.automation.description': '효율성으로 기회를 극대화하세요! Alphabot 플랫폼에서 등록을 자동화하여 시간을 절약하고 NFT 획득 가능성을 높이세요.',
    'alphabot.sections.automation.feature1': '자동 등록: 추첨이 활성화되는 즉시 계정을 등록합니다.',
    'alphabot.sections.automation.feature2': '멀티 계정 지원: 여러 계정을 동시에 관리합니다.',
    'alphabot.sections.automation.feature3': '지능형 대기열 관리: 제한 제어를 통한 최적화된 등록.',

    'alphabot.sections.notifications.title': 'Discord 및 Telegram을 통한 실시간 알림',
    'alphabot.sections.notifications.description': '등록, 승리 및 민트 기회에 대한 즉각적인 알림을 받으세요.',
    'alphabot.sections.notifications.feature1': '즉각적인 알림: 적절한 시점의 정보.',
    'alphabot.sections.notifications.feature2': '사용자 정의 가능한 웹훅: 선호도에 따라 구성.',
    'alphabot.sections.notifications.feature3': '사용자 친화적인 업데이트: 유용한 링크가 포함된 명확한 메시지.',

    'alphabot.sections.management.title': '강력한 오류 및 데이터 관리',
    'alphabot.sections.management.description': '전략을 계속 작동시키기 위한 보장된 신뢰성.',
    'alphabot.sections.management.feature1': '지능형 오류 복구: 자동 재시도.',
    'alphabot.sections.management.feature2': '안전한 저장소: 정기적인 정리가 포함된 MongoDB.',
    'alphabot.sections.management.feature3': '확장 가능한 인프라: 충돌 없이 대용량 처리 관리.',

    'alphabot.sections.learnMore': '자세히 보기',
  },
};

export default ko;
