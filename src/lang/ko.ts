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
    'footer.text': '© {year} OniMock. ❤️와 많은 커피로 개발됨.',
  },
};

export default ko;
