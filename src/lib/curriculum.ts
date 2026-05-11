// カリキュラム全体のメタデータ。ルーティング・サイドバー・進捗管理・ロードマップ表示が
// このファイルを単一の情報源として参照する。

export type LessonId = string;

export type Lesson = {
  id: LessonId;
  title: string;
  path: string;
  blurb: string;
  goals: string[]; // 「このレッスンで学べること」
  minutes: number; // 想定学習時間（分）
  hasInteractive?: boolean;
};

export type Chapter = {
  id: string;
  number: number | 'intro' | 'advanced';
  title: string;
  subtitle: string;
  emoji: string;
  color: string; // tailwind色クラスの一部 (例: 'navy')
  lessons: Lesson[];
  quiz?: {
    id: string;
    path: string;
    title: string;
  };
};

export const chapters: Chapter[] = [
  {
    id: 'intro',
    number: 'intro',
    title: 'はじめに',
    subtitle: 'お金の旅をたどる',
    emoji: '🧭',
    color: 'slate',
    lessons: [
      {
        id: 'intro-money-journey',
        title: 'お金の旅 — 全体の流れ',
        path: '/intro/money-journey',
        blurb: '入金から利益確定・出金まで、株式投資の流れを一気に俯瞰します',
        goals: [
          '株を「買う・持つ・売る」の3局面で何が起こるかを説明できる',
          '配当益と値上がり益の違いを理解する',
          'お金がどう手元に戻ってくるかをイメージできる',
        ],
        minutes: 8,
      },
    ],
  },
  {
    id: 'ch1',
    number: 1,
    title: '株の基礎を知る',
    subtitle: 'そもそも株って何？',
    emoji: '🌱',
    color: 'navy',
    lessons: [
      {
        id: 'ch1-l1',
        title: '株式とは',
        path: '/chapter/1/lesson/1',
        blurb: '会社のオーナー権を細かく分けたもの、それが株式',
        goals: [
          '株主が持つ3つの権利を言える',
          '株式と債券・預金の違いを説明できる',
        ],
        minutes: 7,
      },
      {
        id: 'ch1-l2',
        title: '株価が動く仕組み',
        path: '/chapter/1/lesson/2',
        blurb: '需要と供給、業績、金利、心理 — 株価を動かす4つの力',
        goals: [
          '株価が「買いたい人と売りたい人のバランス」で決まることを理解する',
          '業績・金利・センチメントが株価に与える影響を区別できる',
        ],
        minutes: 8,
      },
      {
        id: 'ch1-l3',
        title: '取引所と証券口座',
        path: '/chapter/1/lesson/3',
        blurb: '東証・NYSE・NASDAQ … 株はどこで取引されている？',
        goals: [
          '主要な取引所を3つ以上挙げられる',
          '証券口座を開く流れと必要書類を理解する',
        ],
        minutes: 6,
      },
      {
        id: 'ch1-l4',
        title: 'NISAとiDeCo — 税優遇制度',
        path: '/chapter/1/lesson/4',
        blurb: '利益にかかる約20%の税金を非課税にできる強力な制度',
        goals: [
          '新NISA（つみたて枠/成長投資枠）の枠を理解する',
          'iDeCoとNISAの使い分けを判断できる',
        ],
        minutes: 8,
        hasInteractive: true,
      },
    ],
    quiz: { id: 'ch1-quiz', path: '/chapter/1/quiz', title: 'Chapter 1 章末クイズ' },
  },
  {
    id: 'ch2',
    number: 2,
    title: '投資を始める',
    subtitle: '注文・コスト・タイミング',
    emoji: '🚀',
    color: 'navy',
    lessons: [
      {
        id: 'ch2-l1',
        title: '注文の種類 — 成行と指値',
        path: '/chapter/2/lesson/1',
        blurb: '「いくらでもいいから今すぐ」と「この値段なら買う」を使い分ける',
        goals: [
          '成行・指値・逆指値の違いを説明できる',
          '板情報（気配値）の読み方を理解する',
        ],
        minutes: 8,
        hasInteractive: true,
      },
      {
        id: 'ch2-l2',
        title: '手数料・税金・コスト',
        path: '/chapter/2/lesson/2',
        blurb: '見えにくいコストが長期リターンを蝕む',
        goals: [
          '売買手数料・スプレッド・税金の3つを区別できる',
          '信託報酬がリターンに与える影響を計算できる',
        ],
        minutes: 7,
      },
      {
        id: 'ch2-l3',
        title: '売買のタイミング基礎',
        path: '/chapter/2/lesson/3',
        blurb: '「安く買って高く売る」が難しい理由とドルコスト平均法',
        goals: [
          'タイミング投資の難しさを理解する',
          'ドルコスト平均法の仕組みと向き不向きを説明できる',
        ],
        minutes: 8,
      },
    ],
    quiz: { id: 'ch2-quiz', path: '/chapter/2/quiz', title: 'Chapter 2 章末クイズ' },
  },
  {
    id: 'ch3',
    number: 3,
    title: '銘柄を分析する',
    subtitle: 'ファンダメンタル分析',
    emoji: '🔬',
    color: 'navy',
    lessons: [
      {
        id: 'ch3-l1',
        title: '主要指標 — PER・PBR・ROE・配当利回り',
        path: '/chapter/3/lesson/1',
        blurb: '4つの指標で会社の「価格」と「稼ぐ力」を測る',
        goals: [
          'PER・PBR・ROE・配当利回りの計算式と意味を言える',
          '指標の目安と業種ごとの違いを理解する',
        ],
        minutes: 10,
        hasInteractive: true,
      },
      {
        id: 'ch3-l2',
        title: '決算書を読む',
        path: '/chapter/3/lesson/2',
        blurb: '損益計算書・貸借対照表・キャッシュフロー計算書の3点セット',
        goals: [
          '財務3表のつながりを図解できる',
          '売上・営業利益・純利益の違いを区別できる',
        ],
        minutes: 10,
      },
      {
        id: 'ch3-l3',
        title: 'ビジネスモデルとセクター',
        path: '/chapter/3/lesson/3',
        blurb: '何で儲けている会社か？セクターによって評価軸は変わる',
        goals: [
          '主要10セクターを言える',
          'グロース株とバリュー株の違いを説明できる',
        ],
        minutes: 8,
      },
      {
        id: 'ch3-l4',
        title: 'バリュエーション基本',
        path: '/chapter/3/lesson/4',
        blurb: '「割安／割高」をどう判断する？マルチプル法とDCFのさわり',
        goals: [
          'マルチプル法の考え方を理解する',
          'DCFが「将来のキャッシュを現在価値に割り引く」ものだと説明できる',
        ],
        minutes: 9,
      },
    ],
    quiz: { id: 'ch3-quiz', path: '/chapter/3/quiz', title: 'Chapter 3 章末クイズ' },
  },
  {
    id: 'ch4',
    number: 4,
    title: 'チャートを読む',
    subtitle: 'テクニカル分析',
    emoji: '📈',
    color: 'navy',
    lessons: [
      {
        id: 'ch4-l1',
        title: 'ローソク足の読み方',
        path: '/chapter/4/lesson/1',
        blurb: '1本のローソクに4つの価格情報が詰まっている',
        goals: [
          '始値・高値・安値・終値（OHLC）の関係を図示できる',
          '陽線・陰線の意味と代表的な形を識別できる',
        ],
        minutes: 8,
        hasInteractive: true,
      },
      {
        id: 'ch4-l2',
        title: '移動平均線',
        path: '/chapter/4/lesson/2',
        blurb: 'トレンドを「滑らかにして」見るための定番ツール',
        goals: [
          '5/25/75日移動平均線の使い分けを理解する',
          'ゴールデンクロス・デッドクロスの意味を説明できる',
        ],
        minutes: 8,
      },
      {
        id: 'ch4-l3',
        title: 'トレンドとパターン',
        path: '/chapter/4/lesson/3',
        blurb: '上昇／下降／横ばい — トレンドを見極める',
        goals: [
          'サポート・レジスタンスを引ける',
          '代表的なチャートパターンを2〜3個説明できる',
        ],
        minutes: 7,
      },
      {
        id: 'ch4-l4',
        title: '出来高と需給',
        path: '/chapter/4/lesson/4',
        blurb: '価格だけ見ても見えない、市場参加者の「熱量」',
        goals: [
          '出来高の急増が意味することを理解する',
          '価格と出来高の組み合わせから判断できる',
        ],
        minutes: 6,
      },
    ],
    quiz: { id: 'ch4-quiz', path: '/chapter/4/quiz', title: 'Chapter 4 章末クイズ' },
  },
  {
    id: 'ch5',
    number: 5,
    title: 'ポートフォリオを組む',
    subtitle: 'リスク管理と長期戦略',
    emoji: '🛡️',
    color: 'navy',
    lessons: [
      {
        id: 'ch5-l1',
        title: 'リスクとリターン',
        path: '/chapter/5/lesson/1',
        blurb: 'リスクは「危険」ではなく「ブレ幅」のこと',
        goals: [
          '標準偏差をリスクの尺度として説明できる',
          'リスクとリターンが基本的に比例することを理解する',
        ],
        minutes: 8,
      },
      {
        id: 'ch5-l2',
        title: '分散投資の力',
        path: '/chapter/5/lesson/2',
        blurb: '相関の低い資産を組み合わせるとリスクが下がる',
        goals: [
          '銘柄分散・地域分散・時間分散の3つを区別できる',
          '分散がリスクを下げる仕組みを直感的に説明できる',
        ],
        minutes: 9,
        hasInteractive: true,
      },
      {
        id: 'ch5-l3',
        title: 'アセットアロケーション',
        path: '/chapter/5/lesson/3',
        blurb: '株・債券・現金の配分が長期リターンの大半を決める',
        goals: [
          '年齢・目的別の典型的なアセアロを知る',
          'リバランスの考え方を理解する',
        ],
        minutes: 7,
      },
      {
        id: 'ch5-l4',
        title: 'インデックス投資 vs アクティブ運用',
        path: '/chapter/5/lesson/4',
        blurb: '市場平均に乗るか、平均超えを狙うか',
        goals: [
          '両者のコストとリターンの統計を理解する',
          '自分に合うスタイルを選ぶ判断軸を持つ',
        ],
        minutes: 8,
      },
      {
        id: 'ch5-l5',
        title: '投資心理とバイアス',
        path: '/chapter/5/lesson/5',
        blurb: '最大の敵は市場ではなく、自分自身',
        goals: [
          '損失回避バイアス・確証バイアスなど主要なバイアスを挙げられる',
          '心理的落とし穴を避けるルール作りができる',
        ],
        minutes: 8,
      },
    ],
    quiz: { id: 'ch5-quiz', path: '/chapter/5/quiz', title: 'Chapter 5 章末クイズ' },
  },
  {
    id: 'advanced',
    number: 'advanced',
    title: '応用編',
    subtitle: '実例で身につける',
    emoji: '🎯',
    color: 'accent',
    lessons: [
      {
        id: 'adv-jp',
        title: '日本株の実例で学ぶ',
        path: '/advanced/japan-stocks',
        blurb: 'トヨタ・任天堂・三菱UFJ … 学んだ理論を実銘柄で確認',
        goals: [
          '代表的な日本株の指標を読み取れる',
          '業種別の見方の違いを実感する',
        ],
        minutes: 10,
      },
      {
        id: 'adv-us',
        title: '米国株の実例で学ぶ',
        path: '/advanced/us-stocks',
        blurb: 'Apple・Microsoft・S&P500 ETF … 米国市場の特徴',
        goals: [
          '米国大型株の見方を理解する',
          'インデックスETF（VOO/VTI等）の違いがわかる',
        ],
        minutes: 10,
      },
      {
        id: 'adv-cases',
        title: 'ケーススタディ — こういう時どうする？',
        path: '/advanced/case-studies',
        blurb: '10の状況であなたの判断を試す。即答後に解説を読もう',
        goals: [
          '実戦的な判断軸が身につく',
          'よくある失敗パターンを知る',
        ],
        minutes: 15,
        hasInteractive: true,
      },
    ],
  },
];

// 進捗計算などに使うフラットなレッスン一覧
export const allLessons: Lesson[] = chapters.flatMap((c) => c.lessons);

export const allQuizzes = chapters
  .filter((c) => c.quiz)
  .map((c) => ({ chapterId: c.id, ...c.quiz! }));

// 全 trackable アイテム（レッスン + クイズ）の ID 集合
export const allTrackableIds: string[] = [
  ...allLessons.map((l) => l.id),
  ...allQuizzes.map((q) => q.id),
];

export function findLesson(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

export function findChapterByLessonId(lessonId: string): Chapter | undefined {
  return chapters.find((c) => c.lessons.some((l) => l.id === lessonId));
}

export function getNextLesson(currentId: string): Lesson | undefined {
  const idx = allLessons.findIndex((l) => l.id === currentId);
  if (idx < 0 || idx >= allLessons.length - 1) return undefined;
  return allLessons[idx + 1];
}

export function getPrevLesson(currentId: string): Lesson | undefined {
  const idx = allLessons.findIndex((l) => l.id === currentId);
  if (idx <= 0) return undefined;
  return allLessons[idx - 1];
}
