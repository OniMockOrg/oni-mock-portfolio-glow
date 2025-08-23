import { LanguageFile } from '../types/language';

const ja: LanguageFile = {
  config: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: 'jp',
  },
  translations: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '自己紹介',
    'nav.services': 'サービス',
    'nav.projects': 'プロジェクト',
    'nav.contact': '連絡先',

    // Hero
    'hero.titles.0': 'フルスタック開発者',
    'hero.titles.1': 'デザイナー',
    'hero.titles.2': 'ソリューションクリエイター',
    'hero.titles.3': 'モデレーター',
    'hero.titles.4': 'プログラミング愛好家',
    'hero.titles.5': 'テクノロジー愛好家',
    'hero.description':
      'アイデアをコードに変換し、素晴らしいデジタル体験と革新的なソリューションを生み出し、違いを生み出します。',
    'hero.viewProjects': 'プロジェクトを見る',
    'hero.aboutMe': '自己紹介',

    // About
    'about.title': '自己紹介',
    'about.subtitle':
      'テクノロジーに情熱を注ぐ開発者として、人々の生活にポジティブな影響を与えるエレガントで効率的なソリューションを常に追求しています。',
    'about.journey': '私の軌跡',
    'about.journey.p1':
      'フルスタック開発者として、卓越したデジタル体験の創造に情熱を注いでいます。現代のテクノロジーに特化し、新しいツールや方法論を常に探求しています。',
    'about.journey.p2':
      'コードは機能的であるだけでなく、エレガントでメンテナンスしやすいものであるべきだと信じています。すべてのプロジェクトは新しいことを学び、開発者コミュニティに貢献する機会です。',
    'about.technologies': 'テクノロジー',
    'about.interests.cleancode.title': 'クリーンコード',
    'about.interests.cleancode.desc': 'クリーンで構造化されたコード',
    'about.interests.innovation.title': 'イノベーション',
    'about.interests.innovation.desc': '常に新しいソリューションを模索',
    'about.interests.performance.title': 'パフォーマンス',
    'about.interests.performance.desc': '最適化と高パフォーマンス',
    'about.interests.opensource.title': 'オープンソース',
    'about.interests.opensource.desc': 'コミュニティへの貢献',

    // Services
    'services.title': 'サービス',
    'services.subtitle': '抽選自動化とデジタル管理の専門ソリューション',
    'services.automation.title': '抽選自動化',
    'services.automation.description': 'AlphaBotプラットフォームを通じた包括的な抽選自動化システム。参加者登録から当選者選出まで、効率的で信頼性の高い抽選管理ソリューションを提供します。',
    'services.automation.feature1': '参加者と登録の自動化管理',
    'services.automation.feature2': '透明で安全な当選者選出システム',
    'services.automation.feature3': 'リアルタイムレポートと詳細分析',
    'services.automation.cta': '詳細を見る',

    // Projects
    'projects.title': 'プロジェクト',
    'projects.subtitle':
      '私の最新かつ興味深いプロジェクトのセレクション。GitHubで探索や貢献が可能です。',
    'projects.viewAll': 'すべてのプロジェクトを見る',
    'projects.loading': 'プロジェクトを読み込み中...',
    'projects.defaultDesc': '情熱と献身で開発された興味深いプロジェクト。',
    'projects.error': 'リポジトリの取得エラー：',

    // Contact
    'contact.country': 'ブラジル (Burajiru)',
    'contact.title': '話しましょう',
    'contact.subtitle':
      'コラボレーションに興味がある、または素晴らしいアイデアがありますか？一緒にコンセプトを現実に変えましょう。',
    'contact.ready': '次のプロジェクトの準備はできていますか？',
    'contact.description':
      'フリーランスプロジェクト、仕事の機会、またはテクノロジーについての会話であっても、常に新しい可能性にオープンです。',
    'contact.button': '連絡する',

    // Footer
    'footer.text': '© {year} OniMock. ❤️とたくさんのコーヒーで開発されました。',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot 抽選自動化',
    'alphabot.hero.subtitle': '抽選とデジタル管理のための完全な自動化プラットフォーム',
    'alphabot.hero.description': '私たちの高度な自動化システムで抽選管理を変革しましょう。参加者登録から当選者選択まで、AlphaBotは完全で信頼性の高いソリューションを提供します。',
    'alphabot.hero.cta': '今すぐ始める',
    'alphabot.hero.demo': 'デモを見る',
    
    // AlphaBot Features
    'alphabot.features.automation.title': '完全自動化',
    'alphabot.features.automation.description': '抽選を最初から最後まで管理する完全自動化システム。',
    'alphabot.features.security.title': '保証されたセキュリティ',
    'alphabot.features.security.description': '高度なデータ保護と抽選の完全な透明性。',
    'alphabot.features.reports.title': '詳細レポート',
    'alphabot.features.reports.description': '包括的な分析とリアルタイムレポートによる優れた管理。',

    // AlphaBot情報セクション
    'alphabot.sections.automation.title': 'Alphabotによる抽選登録の自動化',
    'alphabot.sections.automation.description': '効率的にチャンスを最大化！Alphabotプラットフォームでの登録を自動化し、時間を節約してNFTを獲得する可能性を高めます。',
    'alphabot.sections.automation.feature1': '自動登録：抽選がアクティブになるとすぐにアカウントを登録します。',
    'alphabot.sections.automation.feature2': 'マルチアカウントサポート：複数のアカウントを同時に管理します。',
    'alphabot.sections.automation.feature3': 'インテリジェントキュー管理：制限制御による最適化された登録。',

    'alphabot.sections.notifications.title': 'DiscordとTelegramによるリアルタイム通知',
    'alphabot.sections.notifications.description': '登録、勝利、ミント機会に関する即座のアラートを受信します。',
    'alphabot.sections.notifications.feature1': '即座のアラート：適切なタイミングでの情報。',
    'alphabot.sections.notifications.feature2': 'カスタマイズ可能なWebhook：お好みに応じて設定。',
    'alphabot.sections.notifications.feature3': 'ユーザーフレンドリーな更新：有用なリンク付きの明確なメッセージ。',

    'alphabot.sections.management.title': '堅牢なエラーとデータ管理',
    'alphabot.sections.management.description': '戦略を継続的に機能させるための保証された信頼性。',
    'alphabot.sections.management.feature1': 'インテリジェントエラー回復：自動再試行。',
    'alphabot.sections.management.feature2': '安全なストレージ：定期的なクリーンアップ付きMongoDB。',
    'alphabot.sections.management.feature3': 'スケーラブルなインフラストラクチャ：競合なしで大量処理を管理。',

    'alphabot.sections.learnMore': '詳細を見る',
  },
};

export default ja;
