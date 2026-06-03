// الأعلام مع تحديد دقيق للأجزاء والألوان الرسمية هكس
const FLAGS_DATA = [
  {
    name: 'تونس 🇹🇳',
    code: 'tn',
    capital: 'تونس العاصمة',
    fact: 'هل تعلم أن تونس تضم مدينة القيروان، وهي من أقدم المدن الإسلامية وتحتوي على جامع عُقبة بن نافع التاريخي؟',
    palette: ['#E70013', '#FFFFFF', '#007A3D', '#000000', '#FFD700'],
    parts: [
      { id: 'tn-bg', correct: '#E70013' },
      { id: 'tn-circle', correct: '#FFFFFF' },
      { id: 'tn-crescent-star', correct: '#E70013' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="tn-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <circle id="tn-circle" class="flag-part" cx="150" cy="100" r="45" fill="#F5F6FA"/>
        <g id="tn-crescent-star" class="flag-part" fill="#F5F6FA" stroke-linejoin="round">
          <path d="M 155 70 A 30 30 0 1 0 155 130 A 24 24 0 1 1 155 70 Z" />
          <polygon points="158,100 165,95 163,103 170,107 161,107 158,115 155,107 146,107 153,103 151,95" />
        </g>
      </svg>`
  },
  {
    name: 'الجزائر 🇩🇿',
    code: 'dz',
    capital: 'الجزائر العاصمة',
    fact: 'هل تعلم أن الجزائر هي أكبر دولة في القارة الأفريقية والعالم العربي من حيث المساحة؟',
    palette: ['#006233', '#FFFFFF', '#D21034', '#002654', '#FFCF00'],
    parts: [
      { id: 'dz-left', correct: '#006233' },
      { id: 'dz-right', correct: '#FFFFFF' },
      { id: 'dz-crescent-star', correct: '#D21034' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="dz-left" class="flag-part" x="0" y="0" width="150" height="200" fill="#F5F6FA"/>
        <rect id="dz-right" class="flag-part" x="150" y="0" width="150" height="200" fill="#F5F6FA"/>
        <g id="dz-crescent-star" class="flag-part" fill="#F5F6FA" stroke-linejoin="round">
          <path d="M 162 65 A 35 35 0 1 0 162 135 A 28 28 0 1 1 162 65 Z" />
          <polygon points="168,100 176,94 174,103 181,107 172,107 169,116 166,107 157,107 164,103 162,94" />
        </g>
      </svg>`
  },
  {
    name: 'المغرب 🇲🇦',
    code: 'ma',
    capital: 'الرباط',
    fact: 'هل تعلم أن مدينة فاس في المغرب تضم جامعة القرويين، وهي أقدم جامعة في العالم لا تزال تعمل حتى اليوم؟',
    palette: ['#C1272D', '#006233', '#FFFFFF', '#000000', '#FFD700'],
    parts: [
      { id: 'ma-bg', correct: '#C1272D' },
      { id: 'ma-star', correct: '#006233' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ma-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <polygon id="ma-star" class="flag-part" points="150,55 159,84 188,84 165,102 173,131 150,113 127,131 135,102 112,84 141,84" stroke-width="6" stroke="#BDC3C7" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'فرنسا 🇫🇷',
    code: 'fr',
    capital: 'باريس',
    fact: 'هل تعلم أن فرنسا هي الوجهة السياحية الأولى في العالم وتضم برج إيفل الشهير؟',
    palette: ['#002060', '#FFFFFF', '#C00000', '#007A3D', '#FFD700'],
    parts: [
      { id: 'fr-left', correct: '#002060' },
      { id: 'fr-middle', correct: '#FFFFFF' },
      { id: 'fr-right', correct: '#C00000' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="fr-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="fr-middle" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="fr-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'إيطاليا 🇮🇹',
    code: 'it',
    capital: 'روما',
    fact: 'هل تعلم أن إيطاليا تضم دولتين مستقلتين داخل حدودها: الفاتيكان وسان مارينو؟',
    palette: ['#009246', '#FFFFFF', '#CE2B37', '#000000', '#FFD700'],
    parts: [
      { id: 'it-left', correct: '#009246' },
      { id: 'it-middle', correct: '#FFFFFF' },
      { id: 'it-right', correct: '#CE2B37' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="it-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="it-middle" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="it-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'ألمانيا 🇩🇪',
    code: 'de',
    capital: 'برلين',
    fact: 'هل تعلم أن ألمانيا تمتلك أكبر اقتصاد في أوروبا وتشتهر بصناعة السيارات؟',
    palette: ['#000000', '#FF0000', '#FFCC00', '#FFFFFF', '#007A3D'],
    parts: [
      { id: 'de-top', correct: '#000000' },
      { id: 'de-middle', correct: '#FF0000' },
      { id: 'de-bottom', correct: '#FFCC00' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="de-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="de-middle" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="de-bottom" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'فلسطين 🇵🇸',
    code: 'ps',
    capital: 'القدس',
    fact: 'هل تعلم أن فلسطين تضم المسجد الأقصى، أولى القبلتين وثالث الحرمين الشريفين؟',
    palette: ['#000000', '#FFFFFF', '#007A3D', '#CE1126', '#FFD700'],
    parts: [
      { id: 'ps-top', correct: '#000000' },
      { id: 'ps-middle', correct: '#FFFFFF' },
      { id: 'ps-bottom', correct: '#007A3D' },
      { id: 'ps-triangle', correct: '#CE1126' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ps-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ps-middle" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ps-bottom" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <polygon id="ps-triangle" class="flag-part" points="0,0 150,100 0,200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'اليابان 🇯🇵',
    code: 'jp',
    capital: 'طوكيو',
    fact: 'هل تعلم أن اليابان تُعرف بلقب "أرض الشمس المشرقة" وتتكون من آلاف الجزر؟',
    palette: ['#FFFFFF', '#BC002D', '#000000', '#007A3D', '#FFD700'],
    parts: [
      { id: 'jp-bg', correct: '#FFFFFF' },
      { id: 'jp-circle', correct: '#BC002D' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="jp-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <circle id="jp-circle" class="flag-part" cx="150" cy="100" r="60" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'الإمارات 🇦🇪',
    code: 'ae',
    capital: 'أبو ظبي',
    fact: 'هل تعلم أن الإمارات تضم برج خليفة في دبي، وهو أطول مبنى في العالم؟',
    palette: ['#FF0000', '#00732F', '#FFFFFF', '#000000', '#FFD700'],
    parts: [
      { id: 'ae-top', correct: '#00732F' },
      { id: 'ae-middle', correct: '#FFFFFF' },
      { id: 'ae-bottom', correct: '#000000' },
      { id: 'ae-left', correct: '#FF0000' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ae-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ae-middle" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ae-bottom" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <rect id="ae-left" class="flag-part" x="0" y="0" width="80" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'اليمن 🇾🇪',
    code: 'ye',
    capital: 'صنعاء',
    fact: 'هل تعلم أن اليمن يُعرف بلقب "اليمن السعيد" ويضم مدينة شبام التاريخية؟',
    palette: ['#CE1126', '#FFFFFF', '#000000', '#007A3D', '#FFD700'],
    parts: [
      { id: 'ye-top', correct: '#CE1126' },
      { id: 'ye-middle', correct: '#FFFFFF' },
      { id: 'ye-bottom', correct: '#000000' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ye-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ye-middle" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ye-bottom" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'مصر 🇪🇬',
    code: 'eg',
    capital: 'القاهرة',
    fact: 'هل تعلم أن مصر تضم أهرامات الجيزة، وهي من عجائب الدنيا السبع القديمة؟',
    palette: ['#CE1126', '#FFFFFF', '#000000', '#C09300', '#007A3D'],
    parts: [
      { id: 'eg-top', correct: '#CE1126' },
      { id: 'eg-mid', correct: '#FFFFFF' },
      { id: 'eg-bot', correct: '#000000' },
      { id: 'eg-eagle', correct: '#C09300' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="eg-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="eg-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="eg-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <polygon id="eg-eagle" class="flag-part" points="140,85 160,85 165,115 150,120 135,115" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'سوريا 🇸🇾',
    code: 'sy',
    capital: 'دمشق',
    fact: 'هل تعلم أن دمشق تُعد من أقدم المدن المأهولة باستمرار في التاريخ؟',
    palette: ['#CE1126', '#FFFFFF', '#000000', '#007A3D', '#FFD700'],
    parts: [
      { id: 'sy-top', correct: '#007A3D' },
      { id: 'sy-mid', correct: '#FFFFFF' },
      { id: 'sy-bot', correct: '#000000' },
      { id: 'sy-stars', correct: '#CE1126' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="sy-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="sy-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="sy-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <g id="sy-stars" class="flag-part" fill="#F5F6FA">
          <polygon points="75,80 81,94 95,94 84,102 88,116 75,107 62,116 66,102 55,94 69,94" />
          <polygon points="150,80 156,94 170,94 159,102 163,116 150,107 137,116 141,102 130,94 144,94" />
          <polygon points="225,80 231,94 245,94 234,102 238,116 225,107 212,116 216,102 205,94 219,94" />
        </g>
      </svg>`
  },
  {
    name: 'لبنان 🇱🇧',
    code: 'lb',
    capital: 'بيروت',
    fact: 'هل تعلم أن لبنان يشتهر بشجرة الأرز التي تتوسط علمه الوطني كرمز للخلود؟',
    palette: ['#ED1C24', '#FFFFFF', '#00A651', '#000000', '#FFD700'],
    parts: [
      { id: 'lb-top', correct: '#ED1C24' },
      { id: 'lb-bot', correct: '#ED1C24' },
      { id: 'lb-mid', correct: '#FFFFFF' },
      { id: 'lb-tree', correct: '#00A651' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="lb-mid" class="flag-part" x="0" y="50" width="300" height="100" fill="#F5F6FA"/>
        <rect id="lb-top" class="flag-part" x="0" y="0" width="300" height="50" fill="#F5F6FA"/>
        <rect id="lb-bot" class="flag-part" x="0" y="150" width="300" height="50" fill="#F5F6FA"/>
        <polygon id="lb-tree" class="flag-part" points="150,60 165,85 155,85 170,110 160,110 175,135 125,135 140,110 130,110 145,85 135,85" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'الأردن 🇯🇴',
    code: 'jo',
    capital: 'عمان',
    fact: 'هل تعلم أن الأردن يضم مدينة البتراء الوردية، إحدى عجائب الدنيا السبع الجديدة؟',
    palette: ['#000000', '#FFFFFF', '#007A3D', '#CE1126', '#FFD700'],
    parts: [
      { id: 'jo-top', correct: '#000000' },
      { id: 'jo-mid', correct: '#FFFFFF' },
      { id: 'jo-bot', correct: '#007A3D' },
      { id: 'jo-tri', correct: '#CE1126' },
      { id: 'jo-star', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="jo-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="jo-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="jo-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <polygon id="jo-tri" class="flag-part" points="0,0 150,100 0,200" fill="#F5F6FA"/>
        <polygon id="jo-star" class="flag-part" points="50,83 53,92 62,90 56,97 62,105 53,103 50,112 47,103 38,105 44,97 38,90 47,92" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'الكويت 🇰🇼',
    code: 'kw',
    capital: 'الكويت',
    fact: 'هل تعلم أن أبراج الكويت تعد من أبرز المعالم السياحية ورمزاً لنهضة البلاد؟',
    palette: ['#007A3D', '#FFFFFF', '#CE1126', '#000000', '#FFD700'],
    parts: [
      { id: 'kw-top', correct: '#007A3D' },
      { id: 'kw-mid', correct: '#FFFFFF' },
      { id: 'kw-bot', correct: '#CE1126' },
      { id: 'kw-trap', correct: '#000000' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="kw-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="kw-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="kw-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <polygon id="kw-trap" class="flag-part" points="0,0 75,66.6 75,133.2 0,200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'قطر 🇶🇦',
    code: 'qa',
    capital: 'الدوحة',
    fact: 'هل تعلم أن قطر كانت أول دولة عربية في التاريخ تستضيف كأس العالم لكرة القدم؟',
    palette: ['#8A1538', '#FFFFFF', '#000000', '#007A3D', '#FFD700'],
    parts: [
      { id: 'qa-bg', correct: '#8A1538' },
      { id: 'qa-serrated', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="qa-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <polygon id="qa-serrated" class="flag-part" points="0,0 100,0 80,11 100,22 80,33 100,44 80,55 100,66 80,77 100,88 80,100 100,111 80,122 100,133 80,144 100,155 80,166 100,177 80,188 100,200 0,200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'البحرين 🇧🇭',
    code: 'bh',
    capital: 'المنامة',
    fact: 'هل تعلم أن البحرين هي الدولة الجزرية الوحيدة في العالم العربي؟',
    palette: ['#CE1126', '#FFFFFF', '#000000', '#007A3D', '#FFD700'],
    parts: [
      { id: 'bh-bg', correct: '#CE1126' },
      { id: 'bh-serrated', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="bh-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <polygon id="bh-serrated" class="flag-part" points="0,0 100,0 70,20 100,40 70,60 100,80 70,100 100,120 70,140 100,160 70,180 100,200 0,200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'عمان 🇴🇲',
    code: 'om',
    capital: 'مسقط',
    fact: 'هل تعلم أن سلطنة عمان تشتهر بصناعة اللبان العماني الذي يعد من أجود الأنواع في العالم؟',
    palette: ['#FFFFFF', '#CE1126', '#007A3D', '#000000', '#FFD700'],
    parts: [
      { id: 'om-top', correct: '#FFFFFF' },
      { id: 'om-mid', correct: '#CE1126' },
      { id: 'om-bot', correct: '#007A3D' },
      { id: 'om-left', correct: '#CE1126' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="om-top" class="flag-part" x="100" y="0" width="200" height="66.6" fill="#F5F6FA"/>
        <rect id="om-mid" class="flag-part" x="100" y="66.6" width="200" height="66.6" fill="#F5F6FA"/>
        <rect id="om-bot" class="flag-part" x="100" y="133.2" width="200" height="66.8" fill="#F5F6FA"/>
        <rect id="om-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'ليبيا 🇱🇾',
    code: 'ly',
    capital: 'طرابلس',
    fact: 'هل تعلم أن ليبيا تضم مدينة لبدة الكبرى، وهي من أبرز وأجمل المدن الرومانية القديمة؟',
    palette: ['#E70013', '#000000', '#239E46', '#FFFFFF', '#FFD700'],
    parts: [
      { id: 'ly-top', correct: '#E70013' },
      { id: 'ly-mid', correct: '#000000' },
      { id: 'ly-bot', correct: '#239E46' },
      { id: 'ly-crescent-star', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ly-top" class="flag-part" x="0" y="0" width="300" height="50" fill="#F5F6FA"/>
        <rect id="ly-mid" class="flag-part" x="0" y="50" width="300" height="100" fill="#F5F6FA"/>
        <rect id="ly-bot" class="flag-part" x="0" y="150" width="300" height="50" fill="#F5F6FA"/>
        <g id="ly-crescent-star" class="flag-part" fill="#F5F6FA" stroke-linejoin="round">
          <path d="M 155 75 A 25 25 0 1 0 155 125 A 20 20 0 1 1 155 75 Z" />
          <polygon points="160,100 166,95 164,102 170,105 163,105 161,112 159,105 152,105 158,102 156,95" />
        </g>
      </svg>`
  },
  {
    name: 'السودان 🇸🇩',
    code: 'sd',
    capital: 'الخرطوم',
    fact: 'هل تعلم أن السودان يضم أهرامات مروي التاريخية التي يفوق عددها عدد أهرامات مصر؟',
    palette: ['#D21034', '#FFFFFF', '#000000', '#007229', '#FFD700'],
    parts: [
      { id: 'sd-top', correct: '#D21034' },
      { id: 'sd-mid', correct: '#FFFFFF' },
      { id: 'sd-bot', correct: '#000000' },
      { id: 'sd-tri', correct: '#007229' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="sd-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="sd-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="sd-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <polygon id="sd-tri" class="flag-part" points="0,0 100,100 0,200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'تركيا 🇹🇷',
    code: 'tr',
    capital: 'أنقرة',
    fact: 'هل تعلم أن مدينة إسطنبول في تركيا هي المدينة الوحيدة في العالم التي تقع في قارتين (آسيا وأوروبا)؟',
    palette: ['#E30A17', '#FFFFFF', '#000000', '#007A3D', '#FFD700'],
    parts: [
      { id: 'tr-bg', correct: '#E30A17' },
      { id: 'tr-crescent-star', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="tr-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <g id="tr-crescent-star" class="flag-part" fill="#F5F6FA" stroke-linejoin="round">
          <path d="M 140 65 A 35 35 0 1 0 140 135 A 28 28 0 1 1 140 65 Z" />
          <polygon points="146,100 154,94 152,103 159,107 150,107 147,116 144,107 135,107 142,103 140,94" />
        </g>
      </svg>`
  },
  {
    name: 'روسيا 🇷🇺',
    code: 'ru',
    capital: 'موسكو',
    fact: 'هل تعلم أن روسيا هي أكبر دولة في العالم من حيث المساحة وتغطي 11 منطقة زمنية مختلفة؟',
    palette: ['#FFFFFF', '#0039A6', '#D52B1E', '#000000', '#FFD700'],
    parts: [
      { id: 'ru-top', correct: '#FFFFFF' },
      { id: 'ru-mid', correct: '#0039A6' },
      { id: 'ru-bot', correct: '#D52B1E' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ru-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ru-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ru-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'هولندا 🇳🇱',
    code: 'nl',
    capital: 'أمستردام',
    fact: 'هل تعلم أن هولندا تُعرف ببلد طواحين الهواء وزهور التوليب الجميلة؟',
    palette: ['#AE1C28', '#FFFFFF', '#21468B', '#FFD700', '#000000'],
    parts: [
      { id: 'nl-top', correct: '#AE1C28' },
      { id: 'nl-mid', correct: '#FFFFFF' },
      { id: 'nl-bot', correct: '#21468B' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="nl-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="nl-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="nl-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'بلجيكا 🇧🇪',
    code: 'be',
    capital: 'بروكسل',
    fact: 'هل تعلم أن بلجيكا تشتهر عالمياً بصناعة وتصدير أجود أنواع الشوكولاتة؟',
    palette: ['#000000', '#FDDA24', '#EF3340', '#FFFFFF', '#007A3D'],
    parts: [
      { id: 'be-left', correct: '#000000' },
      { id: 'be-mid', correct: '#FDDA24' },
      { id: 'be-right', correct: '#EF3340' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="be-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="be-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="be-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'أيرلندا 🇮🇪',
    code: 'ie',
    capital: 'دبلن',
    fact: 'هل تعلم أن أيرلندا تُعرف باسم "جزيرة الزمرد" بسبب مناظرها الخضراء الخلابة؟',
    palette: ['#169B62', '#FFFFFF', '#FF883E', '#000000', '#0039A6'],
    parts: [
      { id: 'ie-left', correct: '#169B62' },
      { id: 'ie-mid', correct: '#FFFFFF' },
      { id: 'ie-right', correct: '#FF883E' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ie-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ie-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ie-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'كولومبيا 🇨🇴',
    code: 'co',
    capital: 'بوغوتا',
    fact: 'هل تعلم أن كولومبيا هي الدولة الوحيدة في أمريكا الجنوبية التي تطل على المحيطين الهادئ والأطلسي؟',
    palette: ['#FCD116', '#003893', '#CE1126', '#FFFFFF', '#007A3D'],
    parts: [
      { id: 'co-top', correct: '#FCD116' },
      { id: 'co-mid', correct: '#003893' },
      { id: 'co-bot', correct: '#CE1126' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="co-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="co-mid" class="flag-part" x="0" y="100" width="300" height="50" fill="#F5F6FA"/>
        <rect id="co-bot" class="flag-part" x="0" y="150" width="300" height="50" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'أوكرانيا 🇺🇦',
    code: 'ua',
    capital: 'كييف',
    fact: 'هل تعلم أن علم أوكرانيا يرمز إلى السماء الزرقاء الصافية فوق حقول القمح الذهبية؟',
    palette: ['#0057B7', '#FFDD00', '#FFFFFF', '#CE1126', '#007A3D'],
    parts: [
      { id: 'ua-top', correct: '#0057B7' },
      { id: 'ua-bot', correct: '#FFDD00' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ua-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="ua-bot" class="flag-part" x="0" y="100" width="300" height="100" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'بولندا 🇵🇱',
    code: 'pl',
    capital: 'وارسو',
    fact: 'هل تعلم أن بولندا تمتلك واحدة من أقدم الغابات في أوروبا وهي غابة بياوفيجا؟',
    palette: ['#FFFFFF', '#DC143C', '#0057B7', '#FFDD00', '#000000'],
    parts: [
      { id: 'pl-top', correct: '#FFFFFF' },
      { id: 'pl-bot', correct: '#DC143C' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="pl-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="pl-bot" class="flag-part" x="0" y="100" width="300" height="100" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'سويسرا 🇨🇭',
    code: 'ch',
    capital: 'بيرن',
    fact: 'هل تعلم أن سويسرا تشتهر بصناعة الساعات الفاخرة وجبال الألب الخلابة وعلمها المربع الشكل؟',
    palette: ['#FF0000', '#FFFFFF', '#000000', '#FFDD00', '#0057B7'],
    parts: [
      { id: 'ch-bg', correct: '#FF0000' },
      { id: 'ch-cross', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ch-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <path id="ch-cross" class="flag-part" d="M 135 40 h 30 v 45 h 45 v 30 h -45 v 45 h -30 v -45 h -45 v -30 h 45 z" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'السويد 🇸🇪',
    code: 'se',
    capital: 'ستوكهولم',
    fact: 'هل تعلم أن السويد هي مسقط رأس جائزة نوبل العالمية التي تُمنح للمبدعين حول العالم؟',
    palette: ['#004B87', '#FFCD00', '#FFFFFF', '#FF0000', '#000000'],
    parts: [
      { id: 'se-bg', correct: '#004B87' },
      { id: 'se-cross', correct: '#FFCD00' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="se-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <path id="se-cross" class="flag-part" d="M 90 0 h 30 v 85 h 180 v 30 h -180 v 85 h -30 v -85 h -90 v -30 h 90 z" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'النمسا 🇦🇹',
    code: 'at',
    capital: 'فيينا',
    fact: 'هل تعلم أن النمسا هي مسقط رأس العديد من أشهر الموسيقيين الكلاسيكيين مثل موزارت؟',
    palette: ['#ED2939', '#FFFFFF', '#000000', '#0057B7', '#FFDD00'],
    parts: [
      { id: 'at-top', correct: '#ED2939' },
      { id: 'at-mid', correct: '#FFFFFF' },
      { id: 'at-bot', correct: '#ED2939' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="at-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="at-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="at-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'بلغاريا 🇧🇬',
    code: 'bg',
    capital: 'صوفيا',
    fact: 'هل تعلم أن بلغاريا من أقدم الدول الأوروبية وتشتهر عالمياً بإنتاج زيت الورد؟',
    palette: ['#FFFFFF', '#00966E', '#D62612', '#000000', '#FFDD00'],
    parts: [
      { id: 'bg-top', correct: '#FFFFFF' },
      { id: 'bg-mid', correct: '#00966E' },
      { id: 'bg-bot', correct: '#D62612' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="bg-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="bg-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="bg-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'مالي 🇲🇱',
    code: 'ml',
    capital: 'باماكو',
    fact: 'هل تعلم أن مالي كانت موطناً لإمبراطورية قديمة قوية وتضم مدينة تمبكتو التاريخية؟',
    palette: ['#14B53A', '#FCD116', '#CE1126', '#000000', '#FFFFFF'],
    parts: [
      { id: 'ml-left', correct: '#14B53A' },
      { id: 'ml-mid', correct: '#FCD116' },
      { id: 'ml-right', correct: '#CE1126' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ml-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ml-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ml-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'نيجيريا 🇳🇬',
    code: 'ng',
    capital: 'أبوجا',
    fact: 'هل تعلم أن نيجيريا هي الدولة الأكثر تعداداً للسكان في القارة الأفريقية؟',
    palette: ['#008751', '#FFFFFF', '#000000', '#FFD700', '#CE1126'],
    parts: [
      { id: 'ng-left', correct: '#008751' },
      { id: 'ng-mid', correct: '#FFFFFF' },
      { id: 'ng-right', correct: '#008751' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ng-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ng-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ng-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'الصومال 🇸🇴',
    code: 'so',
    capital: 'مقديشو',
    fact: 'هل تعلم أن الصومال تمتلك أطول ساحل في قارة أفريقيا؟',
    palette: ['#418FDE', '#FFFFFF', '#000000', '#FFD700', '#CE1126'],
    parts: [
      { id: 'so-bg', correct: '#418FDE' },
      { id: 'so-star', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="so-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <polygon id="so-star" class="flag-part" points="150,45 159,84 195,84 165,106 176,145 150,123 124,145 135,106 105,84 141,84" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'فيتنام 🇻🇳',
    code: 'vn',
    capital: 'هانوي',
    fact: 'هل تعلم أن فيتنام تشتهر بخليج هالونج الرائع الذي يضم آلاف الجزر الكلسية المذهلة؟',
    palette: ['#DA251D', '#FFFF00', '#000000', '#FFFFFF', '#008751'],
    parts: [
      { id: 'vn-bg', correct: '#DA251D' },
      { id: 'vn-star', correct: '#FFFF00' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="vn-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <polygon id="vn-star" class="flag-part" points="150,45 159,84 195,84 165,106 176,145 150,123 124,145 135,106 105,84 141,84" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'فنلندا 🇫🇮',
    code: 'fi',
    capital: 'هلسنكي',
    fact: 'هل تعلم أن فنلندا تُعرف بـ "بلد الألف بحيرة" حيث تضم أكثر من 188 ألف بحيرة؟',
    palette: ['#FFFFFF', '#002F6C', '#CE1126', '#FFD700', '#000000'],
    parts: [
      { id: 'fi-bg', correct: '#FFFFFF' },
      { id: 'fi-cross', correct: '#002F6C' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="fi-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <path id="fi-cross" class="flag-part" d="M 85 0 h 50 v 75 h 165 v 50 h -165 v 75 h -50 v -75 h -85 v -50 h 85 z" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'الدنمارك 🇩🇰',
    code: 'dk',
    capital: 'كوبنهاغن',
    fact: 'هل تعلم أن الدنمارك تعتبر دائماً من أسعد الدول في العالم وهي مسقط رأس ألعاب الليغو؟',
    palette: ['#C60C30', '#FFFFFF', '#002F6C', '#FFD700', '#000000'],
    parts: [
      { id: 'dk-bg', correct: '#C60C30' },
      { id: 'dk-cross', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="dk-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <path id="dk-cross" class="flag-part" d="M 90 0 h 30 v 85 h 180 v 30 h -180 v 85 h -30 v -85 h -90 v -30 h 90 z" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'رومانيا 🇷🇴',
    code: 'ro',
    capital: 'بوخارست',
    fact: 'هل تعلم أن رومانيا تضم منطقة ترانسيلفانيا الجبلية المشهورة بقلعة بران الأسطورية؟',
    palette: ['#002B7F', '#FCD116', '#CE1126', '#FFFFFF', '#000000'],
    parts: [
      { id: 'ro-left', correct: '#002B7F' },
      { id: 'ro-mid', correct: '#FCD116' },
      { id: 'ro-right', correct: '#CE1126' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ro-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ro-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ro-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'المجر 🇭🇺',
    code: 'hu',
    capital: 'بودابست',
    fact: 'هل تعلم أن بودابست عاصمة المجر تتكون من مدينتين هما "بودا" و "بست" يفصل بينهما نهر الدانوب؟',
    palette: ['#CE2939', '#FFFFFF', '#477050', '#000000', '#FFD700'],
    parts: [
      { id: 'hu-top', correct: '#CE2939' },
      { id: 'hu-mid', correct: '#FFFFFF' },
      { id: 'hu-bot', correct: '#477050' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="hu-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="hu-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="hu-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'التشيك 🇨🇿',
    code: 'cz',
    capital: 'براغ',
    fact: 'هل تعلم أن جمهورية التشيك تشتهر بمدينة براغ التي تُلقب بعاصمة السحر ومدينة المئة برج؟',
    palette: ['#FFFFFF', '#D7141A', '#11457E', '#000000', '#FFD700'],
    parts: [
      { id: 'cz-top', correct: '#FFFFFF' },
      { id: 'cz-bot', correct: '#D7141A' },
      { id: 'cz-tri', correct: '#11457E' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="cz-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="cz-bot" class="flag-part" x="0" y="100" width="300" height="100" fill="#F5F6FA"/>
        <polygon id="cz-tri" class="flag-part" points="0,0 150,100 0,200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'تشيلي 🇨🇱',
    code: 'cl',
    capital: 'سانتياغو',
    fact: 'هل تعلم أن تشيلي تمتلك صحراء أتاكاما، وهي إحدى أكثر المناطق جفافاً في العالم بأكمله؟',
    palette: ['#FFFFFF', '#D52B1E', '#0039A6', '#000000', '#FFD700'],
    parts: [
      { id: 'cl-top', correct: '#FFFFFF' },
      { id: 'cl-bot', correct: '#D52B1E' },
      { id: 'cl-sq', correct: '#0039A6' },
      { id: 'cl-star', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="cl-top" class="flag-part" x="100" y="0" width="200" height="100" fill="#F5F6FA"/>
        <rect id="cl-bot" class="flag-part" x="0" y="100" width="300" height="100" fill="#F5F6FA"/>
        <rect id="cl-sq" class="flag-part" x="0" y="0" width="100" height="100" fill="#F5F6FA"/>
        <polygon id="cl-star" class="flag-part" points="50,22.5 54.5,42 72.5,42 57.5,53 63,72.5 50,61.5 37,72.5 42.5,53 27.5,42 45.5,42" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'بيرو 🇵🇪',
    code: 'pe',
    capital: 'ليما',
    fact: 'هل تعلم أن بيرو تضم أطلال مدينة ماتشو بيتشو التاريخية التي بناها شعب الإنكا قديماً؟',
    palette: ['#D91023', '#FFFFFF', '#000000', '#FFD700', '#002F6C'],
    parts: [
      { id: 'pe-left', correct: '#D91023' },
      { id: 'pe-mid', correct: '#FFFFFF' },
      { id: 'pe-right', correct: '#D91023' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="pe-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="pe-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="pe-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'بنغلاديش 🇧🇩',
    code: 'bd',
    capital: 'دكا',
    fact: 'هل تعلم أن بنغلاديش تضم أكبر غابة مانغروف في العالم وهي غابات سوندربانز؟',
    palette: ['#006A4E', '#F42A41', '#FFFFFF', '#000000', '#FFD700'],
    parts: [
      { id: 'bd-bg', correct: '#006A4E' },
      { id: 'bd-circle', correct: '#F42A41' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="bd-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <circle id="bd-circle" class="flag-part" cx="135" cy="100" r="60" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'بالاو 🇵🇼',
    code: 'pw',
    capital: 'نغيراولمود',
    fact: 'هل تعلم أن بالاو تتكون من مئات الجزر الساحرة وتعد من أفضل وجهات الغوص في العالم؟',
    palette: ['#4AADD6', '#FFDE00', '#FFFFFF', '#000000', '#D91023'],
    parts: [
      { id: 'pw-bg', correct: '#4AADD6' },
      { id: 'pw-circle', correct: '#FFDE00' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="pw-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <circle id="pw-circle" class="flag-part" cx="135" cy="100" r="55" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'لاوس 🇱🇦',
    code: 'la',
    capital: 'فيينتيان',
    fact: 'هل تعلم أن لاوس هي الدولة الوحيدة في منطقة جنوب شرق آسيا التي ليس لها سواحل بحرية؟',
    palette: ['#CE1126', '#002868', '#FFFFFF', '#FFD700', '#000000'],
    parts: [
      { id: 'la-top', correct: '#CE1126' },
      { id: 'la-bot', correct: '#CE1126' },
      { id: 'la-mid', correct: '#002868' },
      { id: 'la-circle', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="la-top" class="flag-part" x="0" y="0" width="300" height="50" fill="#F5F6FA"/>
        <rect id="la-bot" class="flag-part" x="0" y="150" width="300" height="50" fill="#F5F6FA"/>
        <rect id="la-mid" class="flag-part" x="0" y="50" width="300" height="100" fill="#F5F6FA"/>
        <circle id="la-circle" class="flag-part" cx="150" cy="100" r="40" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'تايلاند 🇹🇭',
    code: 'th',
    capital: 'بانكوك',
    fact: 'هل تعلم أن تايلاند كانت الدولة الوحيدة في منطقتها التي لم تتعرض لأي استعمار أوروبي؟',
    palette: ['#ED1C24', '#FFFFFF', '#241D4F', '#000000', '#FFD700'],
    parts: [
      { id: 'th-top', correct: '#ED1C24' },
      { id: 'th-w1', correct: '#FFFFFF' },
      { id: 'th-mid', correct: '#241D4F' },
      { id: 'th-w2', correct: '#FFFFFF' },
      { id: 'th-bot', correct: '#ED1C24' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="th-top" class="flag-part" x="0" y="0" width="300" height="33.3" fill="#F5F6FA"/>
        <rect id="th-w1" class="flag-part" x="0" y="33.3" width="300" height="33.3" fill="#F5F6FA"/>
        <rect id="th-mid" class="flag-part" x="0" y="66.6" width="300" height="66.8" fill="#F5F6FA"/>
        <rect id="th-w2" class="flag-part" x="0" y="133.4" width="300" height="33.3" fill="#F5F6FA"/>
        <rect id="th-bot" class="flag-part" x="0" y="166.7" width="300" height="33.3" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'أرمينيا 🇦🇲',
    code: 'am',
    capital: 'يريفان',
    fact: 'هل تعلم أن أرمينيا تُعد من أقدم الدول الحضارية في العالم وعاصمتها أقدم من روما؟',
    palette: ['#D90012', '#0033A0', '#F2A800', '#FFFFFF', '#000000'],
    parts: [
      { id: 'am-top', correct: '#D90012' },
      { id: 'am-mid', correct: '#0033A0' },
      { id: 'am-bot', correct: '#F2A800' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="am-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="am-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="am-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'ليتوانيا 🇱🇹',
    code: 'lt',
    capital: 'فيلنيوس',
    fact: 'هل تعلم أن ليتوانيا تمتلك لغة تعتبر من أقدم اللغات الحية في العالم اليوم؟',
    palette: ['#FDB913', '#006A44', '#C1272D', '#FFFFFF', '#000000'],
    parts: [
      { id: 'lt-top', correct: '#FDB913' },
      { id: 'lt-mid', correct: '#006A44' },
      { id: 'lt-bot', correct: '#C1272D' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="lt-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="lt-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="lt-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'إستونيا 🇪🇪',
    code: 'ee',
    capital: 'تالين',
    fact: 'هل تعلم أن إستونيا تُعد من أكثر الدول تقدماً في المجال الرقمي والإلكتروني في أوروبا؟',
    palette: ['#0072CE', '#000000', '#FFFFFF', '#C1272D', '#FFD700'],
    parts: [
      { id: 'ee-top', correct: '#0072CE' },
      { id: 'ee-mid', correct: '#000000' },
      { id: 'ee-bot', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ee-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ee-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ee-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'الغابون 🇬🇦',
    code: 'ga',
    capital: 'ليبرفيل',
    fact: 'هل تعلم أن الغابون مغطاة بالغابات المطيرة الاستوائية بنسبة تفوق 80% من مساحتها؟',
    palette: ['#009E60', '#FCD116', '#3A75C4', '#FFFFFF', '#CE1126'],
    parts: [
      { id: 'ga-top', correct: '#009E60' },
      { id: 'ga-mid', correct: '#FCD116' },
      { id: 'ga-bot', correct: '#3A75C4' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ga-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ga-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ga-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'غينيا 🇬🇳',
    code: 'gn',
    capital: 'كوناكري',
    fact: 'هل تعلم أن غينيا تمتلك ثلث احتياطي العالم من مادة البوكسيت المستخدمة في صناعة الألمنيوم؟',
    palette: ['#CE1126', '#FCD116', '#009460', '#FFFFFF', '#000000'],
    parts: [
      { id: 'gn-left', correct: '#CE1126' },
      { id: 'gn-mid', correct: '#FCD116' },
      { id: 'gn-right', correct: '#009460' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="gn-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="gn-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="gn-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'ساحل العاج 🇨🇮',
    code: 'ci',
    capital: 'ياموسوكرو',
    fact: 'هل تعلم أن ساحل العاج (كوت ديفوار) هي أكبر منتج ومصدر للكاكاو في العالم؟',
    palette: ['#F77F00', '#FFFFFF', '#009E60', '#000000', '#CE1126'],
    parts: [
      { id: 'ci-left', correct: '#F77F00' },
      { id: 'ci-mid', correct: '#FFFFFF' },
      { id: 'ci-right', correct: '#009E60' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ci-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ci-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ci-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'موناكو 🇲🇨',
    code: 'mc',
    capital: 'موناكو',
    fact: 'هل تعلم أن موناكو هي ثاني أصغر دولة في العالم وتشتهر بسباقات السيارات العريقة؟',
    palette: ['#CE1126', '#FFFFFF', '#000000', '#FFD700', '#009E60'],
    parts: [
      { id: 'mc-top', correct: '#CE1126' },
      { id: 'mc-bot', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="mc-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="mc-bot" class="flag-part" x="0" y="100" width="300" height="100" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'إسبانيا 🇪🇸',
    code: 'es',
    capital: 'مدريد',
    fact: 'هل تعلم أن إسبانيا هي الدولة الوحيدة في قارة أوروبا التي تمتلك حدوداً برية مع قارة أفريقيا؟',
    palette: ['#AA151B', '#F1BF00', '#FFFFFF', '#000000', '#002395'],
    parts: [
      { id: 'es-top', correct: '#AA151B' },
      { id: 'es-mid', correct: '#F1BF00' },
      { id: 'es-bot', correct: '#AA151B' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="es-top" class="flag-part" x="0" y="0" width="300" height="50" fill="#F5F6FA"/>
        <rect id="es-mid" class="flag-part" x="0" y="50" width="300" height="100" fill="#F5F6FA"/>
        <rect id="es-bot" class="flag-part" x="0" y="150" width="300" height="50" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'أندورا 🇦🇩',
    code: 'ad',
    capital: 'أندورا لا فيلا',
    fact: 'هل تعلم أن أندورا هي إمارة جبلية صغيرة تقع بين إسبانيا وفرنسا وتشتهر بمنتجعات التزلج؟',
    palette: ['#10069F', '#FEDD00', '#D50032', '#FFFFFF', '#000000'],
    parts: [
      { id: 'ad-left', correct: '#10069F' },
      { id: 'ad-mid', correct: '#FEDD00' },
      { id: 'ad-right', correct: '#D50032' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ad-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ad-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="ad-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'لوكسمبورغ 🇱🇺',
    code: 'lu',
    capital: 'لوكسمبورغ',
    fact: 'هل تعلم أن لوكسمبورغ هي الدوقية الكبرى الوحيدة المتبقية في العالم كنظام حكم؟',
    palette: ['#ED2939', '#FFFFFF', '#00A1DE', '#000000', '#FFD700'],
    parts: [
      { id: 'lu-top', correct: '#ED2939' },
      { id: 'lu-mid', correct: '#FFFFFF' },
      { id: 'lu-bot', correct: '#00A1DE' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="lu-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="lu-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="lu-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'مالطا 🇲🇹',
    code: 'mt',
    capital: 'فاليتا',
    fact: 'هل تعلم أن مالطا تضم معابد تعتبر من أقدم الهياكل الحجرية القائمة بذاتها في التاريخ؟',
    palette: ['#FFFFFF', '#CF142B', '#000000', '#007A3D', '#FFD700'],
    parts: [
      { id: 'mt-left', correct: '#FFFFFF' },
      { id: 'mt-right', correct: '#CF142B' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="mt-left" class="flag-part" x="0" y="0" width="150" height="200" fill="#F5F6FA"/>
        <rect id="mt-right" class="flag-part" x="150" y="0" width="150" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'سان مارينو 🇸🇲',
    code: 'sm',
    capital: 'سان مارينو',
    fact: 'هل تعلم أن سان مارينو تُعد أقدم جمهورية مستمرة لا تزال قائمة في العالم حتى اليوم؟',
    palette: ['#FFFFFF', '#55B5E5', '#000000', '#FFD700', '#CE1126'],
    parts: [
      { id: 'sm-top', correct: '#FFFFFF' },
      { id: 'sm-bot', correct: '#55B5E5' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="sm-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="sm-bot" class="flag-part" x="0" y="100" width="300" height="100" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'البرازيل 🇧🇷',
    code: 'br',
    capital: 'برازيليا',
    fact: 'هل تعلم أن البرازيل هي أكبر دولة في أمريكا الجنوبية وتضم الجزء الأكبر من غابات الأمازون؟',
    palette: ['#009C3B', '#FFDF00', '#002776', '#FFFFFF', '#000000'],
    parts: [
      { id: 'br-bg', correct: '#009C3B' },
      { id: 'br-rhombus', correct: '#FFDF00' },
      { id: 'br-circle', correct: '#002776' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="br-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <polygon id="br-rhombus" class="flag-part" points="150,20 270,100 150,180 30,100" fill="#F5F6FA"/>
        <circle id="br-circle" class="flag-part" cx="150" cy="100" r="45" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'الأرجنتين 🇦🇷',
    code: 'ar',
    capital: 'بوينس آيرس',
    fact: 'هل تعلم أن الأرجنتين هي مسقط رأس رقصة التانغو الشهيرة عالمياً؟',
    palette: ['#75AADB', '#FFFFFF', '#FFD700', '#000000', '#CE1126'],
    parts: [
      { id: 'ar-top', correct: '#75AADB' },
      { id: 'ar-mid', correct: '#FFFFFF' },
      { id: 'ar-bot', correct: '#75AADB' },
      { id: 'ar-sun', correct: '#FFD700' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ar-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ar-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ar-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <circle id="ar-sun" class="flag-part" cx="150" cy="100" r="18" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'بوليفيا 🇧🇴',
    code: 'bo',
    capital: 'سوكري',
    fact: 'هل تعلم أن بوليفيا تمتلك أكبر مسطح ملحي طبيعي في العالم ويسمى "سالار دي أويوني"؟',
    palette: ['#D52B1E', '#F9E500', '#007A33', '#FFFFFF', '#000000'],
    parts: [
      { id: 'bo-top', correct: '#D52B1E' },
      { id: 'bo-mid', correct: '#F9E500' },
      { id: 'bo-bot', correct: '#007A33' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="bo-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="bo-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="bo-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'فنزويلا 🇻🇪',
    code: 've',
    capital: 'كاراكاس',
    fact: 'هل تعلم أن فنزويلا تضم شلالات أنجل، وهي أعلى شلالات متدفقة في العالم كله؟',
    palette: ['#FCE300', '#0038A8', '#CE1126', '#FFFFFF', '#000000'],
    parts: [
      { id: 've-top', correct: '#FCE300' },
      { id: 've-mid', correct: '#0038A8' },
      { id: 've-bot', correct: '#CE1126' },
      { id: 've-stars', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ve-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ve-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ve-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <g id="ve-stars" class="flag-part" fill="#F5F6FA">
          <circle cx="110" cy="108" r="4"/><circle cx="118" cy="98" r="4"/><circle cx="129" cy="90" r="4"/><circle cx="142" cy="86" r="4"/>
          <circle cx="158" cy="86" r="4"/><circle cx="171" cy="90" r="4"/><circle cx="182" cy="98" r="4"/><circle cx="190" cy="108" r="4"/>
        </g>
      </svg>`
  },
  {
    name: 'باراغواي 🇵🇾',
    code: 'py',
    capital: 'أسونسيون',
    fact: 'هل تعلم أن باراغواي تمتلك علماً وطنياً بوجهين مختلفين (الأمامي يختلف عن الخلفي)؟',
    palette: ['#D52B1E', '#FFFFFF', '#0038A8', '#007A3D', '#FFD700'],
    parts: [
      { id: 'py-top', correct: '#D52B1E' },
      { id: 'py-mid', correct: '#FFFFFF' },
      { id: 'py-bot', correct: '#0038A8' },
      { id: 'py-emblem', correct: '#FFD700' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="py-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="py-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="py-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <circle id="py-emblem" class="flag-part" cx="150" cy="100" r="15" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'الإكوادور 🇪🇨',
    code: 'ec',
    capital: 'كيتو',
    fact: 'هل تعلم أن الإكوادور سُميت بهذا الاسم نسبة إلى خط الاستواء الذي يمر عبر أراضيها؟',
    palette: ['#FFD100', '#003087', '#CE1126', '#FFFFFF', '#000000'],
    parts: [
      { id: 'ec-top', correct: '#FFD100' },
      { id: 'ec-mid', correct: '#003087' },
      { id: 'ec-bot', correct: '#CE1126' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ec-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="ec-mid" class="flag-part" x="0" y="100" width="300" height="50" fill="#F5F6FA"/>
        <rect id="ec-bot" class="flag-part" x="0" y="150" width="300" height="50" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'هندوراس 🇭🇳',
    code: 'hn',
    capital: 'تيغوسيغالبا',
    fact: 'هل تعلم أن هندوراس تقع في أمريكا الوسطى وتشتهر بغاباتها الاستوائية وآثار حضارة المايا؟',
    palette: ['#0073CF', '#FFFFFF', '#000000', '#FFD700', '#CE1126'],
    parts: [
      { id: 'hn-top', correct: '#0073CF' },
      { id: 'hn-mid', correct: '#FFFFFF' },
      { id: 'hn-bot', correct: '#0073CF' },
      { id: 'hn-stars', correct: '#0073CF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="hn-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="hn-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="hn-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <g id="hn-stars" class="flag-part" fill="#F5F6FA">
          <circle cx="150" cy="100" r="5"/><circle cx="130" cy="90" r="5"/><circle cx="170" cy="90" r="5"/><circle cx="130" cy="110" r="5"/><circle cx="170" cy="110" r="5"/>
        </g>
      </svg>`
  },
  {
    name: 'السلفادور 🇸🇻',
    code: 'sv',
    capital: 'سان سلفادور',
    fact: 'هل تعلم أن السلفادور هي أصغر دولة في أمريكا الوسطى وتُعرف ببلد البراكين لكثرتها هناك؟',
    palette: ['#0047AB', '#FFFFFF', '#000000', '#FFD700', '#CE1126'],
    parts: [
      { id: 'sv-top', correct: '#0047AB' },
      { id: 'sv-mid', correct: '#FFFFFF' },
      { id: 'sv-bot', correct: '#0047AB' },
      { id: 'sv-emblem', correct: '#FFD700' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="sv-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="sv-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="sv-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <circle id="sv-emblem" class="flag-part" cx="150" cy="100" r="15" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'نيكاراغوا 🇳🇮',
    code: 'ni',
    capital: 'ماناغوا',
    fact: 'هل تعلم أن نيكاراغوا تضم أكبر بحيرة للمياه العذبة في أمريكا الوسطى (بحيرة نيكاراغوا)؟',
    palette: ['#0067C6', '#FFFFFF', '#000000', '#FFD700', '#CE1126'],
    parts: [
      { id: 'ni-top', correct: '#0067C6' },
      { id: 'ni-mid', correct: '#FFFFFF' },
      { id: 'ni-bot', correct: '#0067C6' },
      { id: 'ni-emblem', correct: '#FFD700' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ni-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ni-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ni-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <polygon id="ni-emblem" class="flag-part" points="150,85 165,110 135,110" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'كوستاريكا 🇨🇷',
    code: 'cr',
    capital: 'سان خوسيه',
    fact: 'هل تعلم أن كوستاريكا ألغت جيشها منذ عام 1948 وتعتبر من أكثر الدول حماية للبيئة في العالم؟',
    palette: ['#002B7F', '#FFFFFF', '#CE1126', '#000000', '#FFD700'],
    parts: [
      { id: 'cr-1', correct: '#002B7F' },
      { id: 'cr-2', correct: '#FFFFFF' },
      { id: 'cr-3', correct: '#CE1126' },
      { id: 'cr-4', correct: '#FFFFFF' },
      { id: 'cr-5', correct: '#002B7F' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="cr-1" class="flag-part" x="0" y="0" width="300" height="33.3" fill="#F5F6FA"/>
        <rect id="cr-2" class="flag-part" x="0" y="33.3" width="300" height="33.3" fill="#F5F6FA"/>
        <rect id="cr-3" class="flag-part" x="0" y="66.6" width="300" height="66.8" fill="#F5F6FA"/>
        <rect id="cr-4" class="flag-part" x="0" y="133.4" width="300" height="33.3" fill="#F5F6FA"/>
        <rect id="cr-5" class="flag-part" x="0" y="166.7" width="300" height="33.3" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'المكسيك 🇲🇽',
    code: 'mx',
    capital: 'مكسيكو سيتي',
    fact: 'هل تعلم أن المكسيك هي موطن لواحدة من عجائب الدنيا السبع الجديدة وهي هرم تشيتشن إيتزا؟',
    palette: ['#006847', '#FFFFFF', '#CE1126', '#000000', '#FFD700'],
    parts: [
      { id: 'mx-left', correct: '#006847' },
      { id: 'mx-mid', correct: '#FFFFFF' },
      { id: 'mx-right', correct: '#CE1126' },
      { id: 'mx-emblem', correct: '#000000' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="mx-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="mx-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="mx-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
        <circle id="mx-emblem" class="flag-part" cx="150" cy="100" r="18" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'غواتيمالا 🇬🇹',
    code: 'gt',
    capital: 'غواتيمالا سيتي',
    fact: 'هل تعلم أن غواتيمالا كانت مركزاً حضارياً مهماً وموطناً قديماً لحضارة المايا العريقة؟',
    palette: ['#4997D0', '#FFFFFF', '#000000', '#FFD700', '#CE1126'],
    parts: [
      { id: 'gt-left', correct: '#4997D0' },
      { id: 'gt-mid', correct: '#FFFFFF' },
      { id: 'gt-right', correct: '#4997D0' },
      { id: 'gt-emblem', correct: '#FFD700' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="gt-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="gt-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="gt-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
        <circle id="gt-emblem" class="flag-part" cx="150" cy="100" r="15" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'كوبا 🇨🇺',
    code: 'cu',
    capital: 'هافانا',
    fact: 'هل تعلم أن كوبا تُعد أكبر جزيرة في البحر الكاريبي وتتميز بالسيارات الكلاسيكية الملونة؟',
    palette: ['#002A8F', '#FFFFFF', '#CB1515', '#000000', '#FFD700'],
    parts: [
      { id: 'cu-1', correct: '#002A8F' },
      { id: 'cu-2', correct: '#FFFFFF' },
      { id: 'cu-3', correct: '#002A8F' },
      { id: 'cu-4', correct: '#FFFFFF' },
      { id: 'cu-5', correct: '#002A8F' },
      { id: 'cu-tri', correct: '#CB1515' },
      { id: 'cu-star', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="cu-1" class="flag-part" x="0" y="0" width="300" height="40" fill="#F5F6FA"/>
        <rect id="cu-2" class="flag-part" x="0" y="40" width="300" height="40" fill="#F5F6FA"/>
        <rect id="cu-3" class="flag-part" x="0" y="80" width="300" height="40" fill="#F5F6FA"/>
        <rect id="cu-4" class="flag-part" x="0" y="120" width="300" height="40" fill="#F5F6FA"/>
        <rect id="cu-5" class="flag-part" x="0" y="160" width="300" height="40" fill="#F5F6FA"/>
        <polygon id="cu-tri" class="flag-part" points="0,0 120,100 0,200" fill="#F5F6FA"/>
        <polygon id="cu-star" class="flag-part" points="40,85 45,98 58,98 48,106 52,118 40,110 28,118 32,106 22,98 35,98" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'باهاماس 🇧🇸',
    code: 'bs',
    capital: 'ناساو',
    fact: 'هل تعلم أن جزر البهاما تتكون من أكثر من 700 جزيرة رملية مذهلة في المحيط الأطلسي؟',
    palette: ['#00ABC9', '#FAE042', '#000000', '#FFFFFF', '#CE1126'],
    parts: [
      { id: 'bs-top', correct: '#00ABC9' },
      { id: 'bs-mid', correct: '#FAE042' },
      { id: 'bs-bot', correct: '#00ABC9' },
      { id: 'bs-tri', correct: '#000000' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="bs-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="bs-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="bs-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <polygon id="bs-tri" class="flag-part" points="0,0 115,100 0,200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'جامايكا 🇯🇲',
    code: 'jm',
    capital: 'كينغستون',
    fact: 'هل تعلم أن جامايكا هي مسقط رأس موسيقى الريغي الشهيرة وموطن أسرع العدائين في العالم؟',
    palette: ['#007749', '#FFB81C', '#000000', '#FFFFFF', '#CE1126'],
    parts: [
      { id: 'jm-top', correct: '#007749' },
      { id: 'jm-bot', correct: '#007749' },
      { id: 'jm-left', correct: '#000000' },
      { id: 'jm-right', correct: '#000000' },
      { id: 'jm-cross', correct: '#FFB81C' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <polygon id="jm-top" class="flag-part" points="0,0 300,0 150,100" fill="#F5F6FA"/>
        <polygon id="jm-bot" class="flag-part" points="0,200 300,200 150,100" fill="#F5F6FA"/>
        <polygon id="jm-left" class="flag-part" points="0,0 0,200 150,100" fill="#F5F6FA"/>
        <polygon id="jm-right" class="flag-part" points="300,0 300,200 150,100" fill="#F5F6FA"/>
        <path id="jm-cross" class="flag-part" d="M 0 0 L 300 200 M 0 200 L 300 0" fill="none" stroke="#F5F6FA" stroke-width="25"/>
      </svg>`
  },
  {
    name: 'إندونيسيا 🇮🇩',
    code: 'id',
    capital: 'جاكرتا',
    fact: 'هل تعلم أن إندونيسيا هي أكبر أرخبيل في العالم وتتكون من أكثر من 17 ألف جزيرة؟',
    palette: ['#FF0000', '#FFFFFF', '#000000', '#007A3D', '#FFD700'],
    parts: [
      { id: 'id-top', correct: '#FF0000' },
      { id: 'id-bot', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="id-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="id-bot" class="flag-part" x="0" y="100" width="300" height="100" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'سنغافورة 🇸🇬',
    code: 'sg',
    capital: 'سنغافورة',
    fact: 'هل تعلم أن سنغافورة هي مدينة وعاصمة ودولة وجزيرة في نفس الوقت؟',
    palette: ['#EF3340', '#FFFFFF', '#000000', '#007A3D', '#FFD700'],
    parts: [
      { id: 'sg-top', correct: '#EF3340' },
      { id: 'sg-bot', correct: '#FFFFFF' },
      { id: 'sg-crescent-stars', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="sg-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="sg-bot" class="flag-part" x="0" y="100" width="300" height="100" fill="#F5F6FA"/>
        <g id="sg-crescent-stars" class="flag-part" fill="#F5F6FA">
          <path d="M 70 25 A 25 25 0 1 0 70 75 A 20 20 0 1 1 70 25 Z" />
          <circle cx="85" cy="40" r="4"/><circle cx="95" cy="50" r="4"/><circle cx="85" cy="60" r="4"/><circle cx="75" cy="50" r="4"/><circle cx="90" cy="50" r="4"/>
        </g>
      </svg>`
  },
  {
    name: 'الفلبين 🇵🇭',
    code: 'ph',
    capital: 'مانيلا',
    fact: 'هل تعلم أن الفلبين تتكون من أكثر من 7600 جزيرة وتشتهر بتنوعها البيولوجي الكبير؟',
    palette: ['#0038A8', '#CE1126', '#FFFFFF', '#FCD116', '#000000'],
    parts: [
      { id: 'ph-top', correct: '#0038A8' },
      { id: 'ph-bot', correct: '#CE1126' },
      { id: 'ph-tri', correct: '#FFFFFF' },
      { id: 'ph-sun-stars', correct: '#FCD116' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ph-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="ph-bot" class="flag-part" x="0" y="100" width="300" height="100" fill="#F5F6FA"/>
        <polygon id="ph-tri" class="flag-part" points="0,0 150,100 0,200" fill="#F5F6FA"/>
        <g id="ph-sun-stars" class="flag-part" fill="#F5F6FA">
          <circle cx="50" cy="100" r="12"/><circle cx="15" cy="25" r="3"/><circle cx="15" cy="175" r="3"/><circle cx="120" cy="100" r="3"/>
        </g>
      </svg>`
  },
  {
    name: 'أفغانستان 🇦🇫',
    code: 'af',
    capital: 'كابول',
    fact: 'هل تعلم أن أفغانستان تُعد من أكبر منتجي فاكهة الرمان وتتميز بطبيعتها الجبلية الشاهقة؟',
    palette: ['#000000', '#D32011', '#007A36', '#FFFFFF', '#FFD700'],
    parts: [
      { id: 'af-left', correct: '#000000' },
      { id: 'af-mid', correct: '#D32011' },
      { id: 'af-right', correct: '#007A36' },
      { id: 'af-emblem', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="af-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="af-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="af-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
        <circle id="af-emblem" class="flag-part" cx="150" cy="100" r="25" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'إيران 🇮🇷',
    code: 'ir',
    capital: 'طهران',
    fact: 'هل تعلم أن إيران كانت موطناً لواحدة من أقدم وأقوى الحضارات في التاريخ (الإمبراطورية الفارسية)؟',
    palette: ['#239F40', '#FFFFFF', '#DA0000', '#000000', '#FFD700'],
    parts: [
      { id: 'ir-top', correct: '#239F40' },
      { id: 'ir-mid', correct: '#FFFFFF' },
      { id: 'ir-bot', correct: '#DA0000' },
      { id: 'ir-emblem', correct: '#DA0000' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="ir-top" class="flag-part" x="0" y="0" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ir-mid" class="flag-part" x="0" y="66.6" width="300" height="66.6" fill="#F5F6FA"/>
        <rect id="ir-bot" class="flag-part" x="0" y="133.2" width="300" height="66.8" fill="#F5F6FA"/>
        <circle id="ir-emblem" class="flag-part" cx="150" cy="100" r="18" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'باكستان 🇵🇰',
    code: 'pk',
    capital: 'إسلام آباد',
    fact: 'هل تعلم أن باكستان تضم ثاني أعلى قمة جبلية في العالم وتعرف باسم قمة كي-2 (K2)؟',
    palette: ['#01411C', '#FFFFFF', '#000000', '#CE1126', '#FFD700'],
    parts: [
      { id: 'pk-bg', correct: '#01411C' },
      { id: 'pk-band', correct: '#FFFFFF' },
      { id: 'pk-crescent-star', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="pk-bg" class="flag-part" x="0" y="0" width="300" height="200" fill="#F5F6FA"/>
        <rect id="pk-band" class="flag-part" x="0" y="0" width="80" height="200" fill="#F5F6FA"/>
        <g id="pk-crescent-star" class="flag-part" fill="#F5F6FA" stroke-linejoin="round">
          <path d="M 190 55 A 45 45 0 1 0 190 145 A 35 35 0 1 1 190 55 Z" />
          <polygon points="200,90 210,85 208,95 215,100 205,100 200,110 195,100 185,100 192,95 190,85" />
        </g>
      </svg>`
  },
  {
    name: 'بنين 🇧🇯',
    code: 'bj',
    capital: 'بورتو نوفو',
    fact: 'هل تعلم أن بنين كانت قديماً موطناً لمملكة داهومي التاريخية القوية والمزدهرة؟',
    palette: ['#008751', '#FCD116', '#E8112D', '#FFFFFF', '#000000'],
    parts: [
      { id: 'bj-left', correct: '#008751' },
      { id: 'bj-top', correct: '#FCD116' },
      { id: 'bj-bot', correct: '#E8112D' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="bj-top" class="flag-part" x="100" y="0" width="200" height="100" fill="#F5F6FA"/>
        <rect id="bj-bot" class="flag-part" x="100" y="100" width="200" height="100" fill="#F5F6FA"/>
        <rect id="bj-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'توغو 🇹🇬',
    code: 'tg',
    capital: 'لومي',
    fact: 'هل تعلم أن توغو تُعد واحدة من أصغر دول غرب أفريقيا ومع ذلك تتمتع بتنوع ثقافي مذهل؟',
    palette: ['#006A4E', '#FFCE00', '#D21034', '#FFFFFF', '#000000'],
    parts: [
      { id: 'tg-1', correct: '#006A4E' },
      { id: 'tg-2', correct: '#FFCE00' },
      { id: 'tg-3', correct: '#006A4E' },
      { id: 'tg-4', correct: '#FFCE00' },
      { id: 'tg-5', correct: '#006A4E' },
      { id: 'tg-sq', correct: '#D21034' },
      { id: 'tg-star', correct: '#FFFFFF' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="tg-1" class="flag-part" x="0" y="0" width="300" height="40" fill="#F5F6FA"/>
        <rect id="tg-2" class="flag-part" x="0" y="40" width="300" height="40" fill="#F5F6FA"/>
        <rect id="tg-3" class="flag-part" x="0" y="80" width="300" height="40" fill="#F5F6FA"/>
        <rect id="tg-4" class="flag-part" x="0" y="120" width="300" height="40" fill="#F5F6FA"/>
        <rect id="tg-5" class="flag-part" x="0" y="160" width="300" height="40" fill="#F5F6FA"/>
        <rect id="tg-sq" class="flag-part" x="0" y="0" width="120" height="120" fill="#F5F6FA"/>
        <polygon id="tg-star" class="flag-part" points="60,35 68,55 90,55 72,68 79,90 60,76 41,90 48,68 30,55 52,55" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'السنغال 🇸🇳',
    code: 'sn',
    capital: 'داكار',
    fact: 'هل تعلم أن السنغال هي موطن لـ "البحيرة الوردية" التي يتميز ماؤها بلون وردي مدهش؟',
    palette: ['#00853F', '#FDEF42', '#E31B23', '#FFFFFF', '#000000'],
    parts: [
      { id: 'sn-left', correct: '#00853F' },
      { id: 'sn-mid', correct: '#FDEF42' },
      { id: 'sn-right', correct: '#E31B23' },
      { id: 'sn-star', correct: '#00853F' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="sn-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="sn-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="sn-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
        <polygon id="sn-star" class="flag-part" points="150,80 156,95 172,95 159,105 164,120 150,110 136,120 141,105 128,95 144,95" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'غينيا بيساو 🇬🇼',
    code: 'gw',
    capital: 'بيساو',
    fact: 'هل تعلم أن غينيا بيساو تضم أرخبيل بيجاغوس الرائع الذي تعيش فيه أفراس النهر في المحيط؟',
    palette: ['#CE1126', '#FCD116', '#009E60', '#000000', '#FFFFFF'],
    parts: [
      { id: 'gw-left', correct: '#CE1126' },
      { id: 'gw-top', correct: '#FCD116' },
      { id: 'gw-bot', correct: '#009E60' },
      { id: 'gw-star', correct: '#000000' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="gw-top" class="flag-part" x="100" y="0" width="200" height="100" fill="#F5F6FA"/>
        <rect id="gw-bot" class="flag-part" x="100" y="100" width="200" height="100" fill="#F5F6FA"/>
        <rect id="gw-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <polygon id="gw-star" class="flag-part" points="50,80 56,95 72,95 59,105 64,120 50,110 36,120 41,105 28,95 44,95" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'الكاميرون 🇨🇲',
    code: 'cm',
    capital: 'ياوندي',
    fact: 'هل تعلم أن الكاميرون تُلقب بـ "أفريقيا المصغرة" بسبب تنوعها الجغرافي والثقافي الهائل؟',
    palette: ['#007A5E', '#CE1126', '#FCD116', '#FFFFFF', '#000000'],
    parts: [
      { id: 'cm-left', correct: '#007A5E' },
      { id: 'cm-mid', correct: '#CE1126' },
      { id: 'cm-right', correct: '#FCD116' },
      { id: 'cm-star', correct: '#FCD116' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="cm-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="cm-mid" class="flag-part" x="100" y="0" width="100" height="200" fill="#F5F6FA"/>
        <rect id="cm-right" class="flag-part" x="200" y="0" width="100" height="200" fill="#F5F6FA"/>
        <polygon id="cm-star" class="flag-part" points="150,80 156,95 172,95 159,105 164,120 150,110 136,120 141,105 128,95 144,95" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'مدغشقر 🇲🇬',
    code: 'mg',
    capital: 'أنتاناناريفو',
    fact: 'هل تعلم أن مدغشقر هي رابع أكبر جزيرة في العالم وتضم حيوانات فريدة مثل الليمور؟',
    palette: ['#FFFFFF', '#FC3D32', '#007E3A', '#000000', '#FFD700'],
    parts: [
      { id: 'mg-left', correct: '#FFFFFF' },
      { id: 'mg-top', correct: '#FC3D32' },
      { id: 'mg-bot', correct: '#007E3A' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="mg-top" class="flag-part" x="100" y="0" width="200" height="100" fill="#F5F6FA"/>
        <rect id="mg-bot" class="flag-part" x="100" y="100" width="200" height="100" fill="#F5F6FA"/>
        <rect id="mg-left" class="flag-part" x="0" y="0" width="100" height="200" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'موريشيوس 🇲🇺',
    code: 'mu',
    capital: 'بورت لويس',
    fact: 'هل تعلم أن موريشيوس كانت الموطن الأصلي والوحيد لطائر الدودو الشهير الذي انقرض؟',
    palette: ['#EA2839', '#1A206D', '#FFD500', '#00A551', '#FFFFFF'],
    parts: [
      { id: 'mu-1', correct: '#EA2839' },
      { id: 'mu-2', correct: '#1A206D' },
      { id: 'mu-3', correct: '#FFD500' },
      { id: 'mu-4', correct: '#00A551' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="mu-1" class="flag-part" x="0" y="0" width="300" height="50" fill="#F5F6FA"/>
        <rect id="mu-2" class="flag-part" x="0" y="50" width="300" height="50" fill="#F5F6FA"/>
        <rect id="mu-3" class="flag-part" x="0" y="100" width="300" height="50" fill="#F5F6FA"/>
        <rect id="mu-4" class="flag-part" x="0" y="150" width="300" height="50" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'رواندا 🇷🇼',
    code: 'rw',
    capital: 'كيغالي',
    fact: 'هل تعلم أن رواندا تُعرف بـ "أرض الألف تل" بفضل طبيعتها الخضراء والجبلية الخلابة؟',
    palette: ['#00A1DE', '#FAD201', '#20603D', '#FFFFFF', '#000000'],
    parts: [
      { id: 'rw-top', correct: '#00A1DE' },
      { id: 'rw-mid', correct: '#FAD201' },
      { id: 'rw-bot', correct: '#20603D' },
      { id: 'rw-sun', correct: '#FAD201' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="rw-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="rw-mid" class="flag-part" x="0" y="100" width="300" height="50" fill="#F5F6FA"/>
        <rect id="rw-bot" class="flag-part" x="0" y="150" width="300" height="50" fill="#F5F6FA"/>
        <circle id="rw-sun" class="flag-part" cx="240" cy="50" r="25" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'جيبوتي 🇩🇯',
    code: 'dj',
    capital: 'جيبوتي',
    fact: 'هل تعلم أن جيبوتي تضم بحيرة عسل التي تعتبر أخفض نقطة جغرافية في القارة الأفريقية؟',
    palette: ['#6AB2E7', '#12AD2B', '#FFFFFF', '#D7141A', '#000000'],
    parts: [
      { id: 'dj-top', correct: '#6AB2E7' },
      { id: 'dj-bot', correct: '#12AD2B' },
      { id: 'dj-tri', correct: '#FFFFFF' },
      { id: 'dj-star', correct: '#D7141A' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="dj-top" class="flag-part" x="0" y="0" width="300" height="100" fill="#F5F6FA"/>
        <rect id="dj-bot" class="flag-part" x="0" y="100" width="300" height="100" fill="#F5F6FA"/>
        <polygon id="dj-tri" class="flag-part" points="0,0 150,100 0,200" fill="#F5F6FA"/>
        <polygon id="dj-star" class="flag-part" points="50,85 55,98 68,98 58,106 62,118 50,110 38,118 42,106 32,98 45,98" fill="#F5F6FA"/>
      </svg>`
  },
  {
    name: 'طاجيكستان 🇹🇯',
    code: 'tj',
    capital: 'دوشنبه',
    fact: 'هل تعلم أن طاجيكستان هي دولة جبلية بامتياز حيث تغطي الجبال أكثر من 90% من مساحتها؟',
    palette: ['#CC0000', '#FFFFFF', '#006600', '#FFD700', '#000000'],
    parts: [
      { id: 'tj-top', correct: '#CC0000' },
      { id: 'tj-mid', correct: '#FFFFFF' },
      { id: 'tj-bot', correct: '#006600' },
      { id: 'tj-emblem', correct: '#FFD700' }
    ],
    svg: `
      <svg viewBox="0 0 300 200" width="100%" max-width="360" style="border-radius:12px; box-shadow:0 6px 15px rgba(0,0,0,0.1); background:#F5F6FA;">
        <rect id="tj-top" class="flag-part" x="0" y="0" width="300" height="57" fill="#F5F6FA"/>
        <rect id="tj-mid" class="flag-part" x="0" y="57" width="300" height="86" fill="#F5F6FA"/>
        <rect id="tj-bot" class="flag-part" x="0" y="143" width="300" height="57" fill="#F5F6FA"/>
        <circle id="tj-emblem" class="flag-part" cx="150" cy="100" r="20" fill="#F5F6FA"/>
      </svg>`
  }
];