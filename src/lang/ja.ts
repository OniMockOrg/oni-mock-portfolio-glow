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
    'nav.about': '私について',
    'nav.services': 'サービス',
    'nav.projects': 'プロジェクト',
    'nav.contact': '連絡先',

    // Hero
    'hero.titles.0': 'フルスタック開発者',
    'hero.titles.1': 'デザイナー',
    'hero.titles.2': 'ソリューションクリエイター',
    'hero.titles.3': '問題解決者',
    'hero.titles.4': 'コード愛好家',
    'hero.titles.5': '技術愛好家',
    'hero.description':
      'アイデアをコードに変換し、素晴らしいデジタル体験と革新的なソリューションを生み出し、違いを生み出します。',
    'hero.viewProjects': 'プロジェクトを見る',
    'hero.aboutMe': '私について',

    // About
    'about.title': '私について',
    'about.subtitle':
      '技術に情熱を持つ開発者として、常に人々の生活にポジティブな影響を与えるエレガントで効率的なソリューションを追求しています。',
    'about.journey': '私の軌跡',
    'about.journey.p1':
      'フルスタック開発者として、卓越したデジタル体験の創造に情熱を注いでいます。最新技術に特化し、常に新しいツールや方法論を探求しています。',
    'about.journey.p2':
      'コードは機能的であるだけでなく、エレガントで保守可能であるべきだと信じています。すべてのプロジェクトは新しいことを学び、開発者コミュニティに貢献する機会です。',
    'about.technologies': '技術',
    'about.interests.cleancode.title': 'クリーンコード',
    'about.interests.cleancode.desc': 'クリーンで構造化されたコード',
    'about.interests.innovation.title': 'イノベーション',
    'about.interests.innovation.desc': '常に新しいソリューションを追求',
    'about.interests.performance.title': 'パフォーマンス',
    'about.interests.performance.desc': '最適化と高性能',
    'about.interests.opensource.title': 'オープンソース',
    'about.interests.opensource.desc': 'コミュニティへの貢献',
    'about.stats.location': '所在地',
    'about.stats.country': 'ブラジル',
    'about.stats.experience': '経験',
    'about.stats.years': '{years} 年',
    'about.stats.focus': '焦点',
    'about.stats.fullstack': 'フルスタック',
    'about.cta': 'お問い合わせ',

    // Services
    'services.title': 'サービス',
    'services.subtitle': '抽選自動化とデジタル管理のための専門ソリューション',
    'services.automation.title': '抽選自動化',
    'services.automation.description':
      'AlphaBotプラットフォームを通じた抽選の完全自動化システム。参加者登録から当選者選出まで、効率的で信頼性の高いソリューションを提供します。',
    'services.automation.feature1': '参加者管理と登録の自動化',
    'services.automation.feature2': '透明で安全な当選者選出システム',
    'services.automation.feature3': 'リアルタイムレポートと詳細な分析',
    'services.learnMore': '詳細を見る',

    // Projects
    'projects.title': 'プロジェクト',
    'projects.subtitle':
      '最近の興味深いプロジェクトのセレクション。GitHubで探索と貢献が可能です。',
    'projects.viewAll': 'すべてのプロジェクトを見る',
    'projects.loading': 'プロジェクトを読み込み中...',
    'projects.defaultDesc':
      '情熱と献身を持って開発された興味深いプロジェクト。',
    'projects.error': 'リポジトリ取得エラー:',

    // Contact
    'contact.country': 'ブラジル',
    'contact.title': '話しましょう',
    'contact.subtitle':
      'コラボレーションに興味がある、または素晴らしいアイデアがありますか？一緒にコンセプトを現実に変えましょう。',
    'contact.ready': '次のプロジェクトの準備はできていますか？',
    'contact.button': '連絡を取る',
    'contact.email': 'メール',
    'contact.location': '所在地',
    'contact.social': 'ソーシャルリンク',
    'contact.form.name': '名前',
    'contact.form.email': 'メール',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': '件名',
    'contact.form.subject.placeholder': '何についてですか？',
    'contact.form.message': 'メッセージ',
    'contact.form.message.placeholder':
      'あなたのプロジェクトについて教えてください',
    'contact.form.submit': 'メッセージを送信',
    'contact.form.sending': '送信中...',
    'contact.form.success':
      '✅ メッセージが正常に送信されました！近日中にお答えします。',
    'contact.form.error':
      '❌ メッセージ送信中にエラーが発生しました。EmailJSの設定を確認するか、後でもう一度試してください。',
    'contact.form.error.button': '送信エラー。再試行してください。',
    'contact.form.success.button': 'メッセージが送信されました！',
    'contact.form.name.placeholder': 'お名前',
    'contact.form.validation.name': '名前は2文字以上である必要があります',
    'contact.form.validation.email': '有効なメールアドレスを入力してください',
    'contact.form.validation.subject': '件名は3文字以上である必要があります',
    'contact.form.validation.message': 'メッセージは10文字以上である必要があります',

    // Footer
    'footer.text': '© {year} OniMock. 愛とたくさんのコーヒーで作られました。',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot抽選自動化',
    'alphabot.hero.subtitle':
      '抽選とデジタル管理のための完全自動化プラットフォーム',
    'alphabot.hero.description':
      '高度な自動化システムで抽選管理を変革します。参加者登録から当選者選出まで、AlphaBotは完全で信頼性の高いソリューションを提供します。',
    'alphabot.hero.cta': '始める',
    'alphabot.hero.demo': 'デモを見る',

    // AlphaBot Features
    'alphabot.features.title': '革新的な機能',
    'alphabot.features.subtitle': 'プロジェクト管理を変革する最先端技術',
    'alphabot.features.automation.title': '完全自動化',
    'alphabot.features.automation.description':
      '抽選を最初から最後まで管理する完全自動化システム。',
    'alphabot.features.security.title': '保証されたセキュリティ',
    'alphabot.features.security.description':
      '高度なデータ保護と抽選の完全な透明性。',
    'alphabot.features.reports.title': '詳細なレポート',
    'alphabot.features.reports.description':
      'より良い管理のための完全な分析とリアルタイムレポート。',

    // AlphaBot informative sections
    'alphabot.sections.automation.title': 'Alphabotによる抽選登録自動化',
    'alphabot.sections.automation.description':
      '効率的にチャンスを最大化！Alphabotプラットフォームで登録を自動化し、時間を節約し、NFT獲得の可能性を高めます。',
    'alphabot.sections.automation.feature1':
      '自動登録: 抽選が開始されると即座にアカウントを登録。',
    'alphabot.sections.automation.feature2':
      'マルチアカウント対応: 複数のアカウントを同時に管理。',
    'alphabot.sections.automation.feature3':
      'スマートキュー管理: 制限制御による最適化された登録。',

    'alphabot.sections.notifications.title':
      'DiscordとTelegramによるリアルタイム通知',
    'alphabot.sections.notifications.description':
      '登録、勝利、ミントの機会に関する即時アラートを受け取ります。',
    'alphabot.sections.notifications.feature1':
      '即時アラート: 適切なタイミングで情報提供。',
    'alphabot.sections.notifications.feature2':
      'カスタマイズ可能なWebhook: 好みに合わせて設定。',
    'alphabot.sections.notifications.feature3':
      'ユーザーフレンドリーな更新: 便利なリンク付きの明確なメッセージ。',

    'alphabot.sections.management.title': '堅牢なエラーとデータ管理',
    'alphabot.sections.management.description':
      '戦略を維持するための信頼性の保証。',
    'alphabot.sections.management.feature1': 'スマートエラー回復: 自動再試行。',
    'alphabot.sections.management.feature2':
      '安全なストレージ: 定期的なクリーンアップ付きMongoDB。',
    'alphabot.sections.management.feature3':
      'スケーラブルなインフラ: 高負荷を問題なく処理。',

    'alphabot.sections.learnMore': '詳細を見る',
  },
};

export default ja;
