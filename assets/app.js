const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

const H = [
  { vi: "Gấp 2,4 lần lead đạt chuẩn mỗi tuần, khi ngân sách chỉ tăng 23%.", en: "2.4× more qualified leads per week, with only 23% more budget." },
  { vi: "Mình tối ưu cho khách hàng thật, không chạy theo lead rẻ.", en: "I optimize for real customers, not cheap leads." },
  { vi: "ROAS 2–3 trên mức hòa vốn 1,56. Quảng cáo phải có lãi.", en: "ROAS 2–3 above the 1.56 break-even. Ads must be profitable." }
];

const M = ['17/3', '6/4', '4/5', '1/6', '29/6', '3/8', '31/8', '28/9*'];
const N = [3, 20, 27, 27, 36, 20, 36, 25];
const D = {
  cpqlk: [3314, 626, 455, 400, 695, 408, 581, 234],
  cpl: [110, 112, 138, 212, 291, 227, 218, 110],
  qr: [3.3, 17.9, 30.3, 52.9, 41.9, 55.6, 37.5, 47.2]
};

const AN = {
  vi: ['Chuyển sang Lead form, nhắm ICP mầm non', 'Xây tệp retarget & lookalike', 'Scale ngân sách ~1,9×/tuần'],
  en: ['Switched to lead forms, preschool ICP', 'Built retarget & lookalike audiences', 'Scaled budget ~1.9×/week']
};

let L = 'vi', h = 0, mode = 'cpqlk';
try {
  L = localStorage.getItem('l') || ((navigator.language || '').toLowerCase().startsWith('vi') ? 'vi' : 'en');
} catch (e) {}

function draw() {
  const v = D[mode];
  const W = 640, Ht = 250, p = 40;
  const mx = Math.max(...v) * 1.18;
  const x = i => p + i * (W - 2 * p) / 7;
  const y = a => Ht - 32 - (a / mx) * (Ht - 80);
  const u = mode === 'qr' ? '%' : 'k';
  let s = '';

  // Grid lines
  for (let k = 0; k < 4; k++) {
    const yy = Ht - 32 - k * (Ht - 80) / 3;
    s += `<line x1="${p}" x2="${W - p}" y1="${yy}" y2="${yy}" stroke="var(--line)" stroke-width="1.5" stroke-dasharray="4 4"/>`;
  }

  if (mode === 'qr') {
    // Playful Chunky Bars with border
    v.forEach((a, i) => {
      const bh = Math.max(Ht - 32 - y(a), 4);
      s += `<rect x="${x(i) - 18}" y="${y(a)}" width="36" height="${bh}" rx="8" fill="var(--quaternary)" stroke="var(--border)" stroke-width="2">
        <title>${M[i]}: ${a}% (n=${N[i]} QL)</title>
      </rect>`;
      s += `<text x="${x(i)}" y="${y(a) - 8}" text-anchor="middle" font-family="Outfit, sans-serif" font-size="12" font-weight="800" fill="var(--ink)">${a}%</text>`;
    });
  } else {
    // Smooth geometric path with playful accent fill
    const d = v.map((a, i) => (i ? 'L' : 'M') + x(i) + ',' + y(a)).join(' ');
    s += `<path d="${d} L${x(7)},${Ht - 32} L${x(0)},${Ht - 32} Z" fill="var(--accent)" opacity="0.12"/>`;
    s += `<path d="${d}" fill="none" stroke="var(--accent)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    
    v.forEach((a, i) => {
      const isSmallSample = N[i] < 5;
      s += `<circle cx="${x(i)}" cy="${y(a)}" r="6" fill="${isSmallSample ? '#FFFFFF' : 'var(--accent)'}" stroke="var(--border)" stroke-width="2.5">
        <title>${M[i]}: ${a}${u} (n=${N[i]} QL)</title>
      </circle>`;
      s += `<text x="${x(i)}" y="${y(a) + (i % 2 ? 22 : -12)}" text-anchor="middle" font-family="Outfit, sans-serif" font-size="11.5" font-weight="700" fill="var(--ink)">${a}${u}</text>`;
    });
  }

  // X Axis dates
  v.forEach((a, i) => {
    s += `<text x="${x(i)}" y="${Ht - 10}" text-anchor="middle" font-family="Outfit, sans-serif" font-size="12" font-weight="700" fill="var(--mut)">${M[i]}</text>`;
  });

  // Highlight badges on milestones
  [1, 3, 4].forEach((i, k) => {
    const yy = Math.max(18, y(v[i]) - 36);
    s += `<circle cx="${x(i)}" cy="${yy}" r="11" fill="var(--tertiary)" stroke="var(--border)" stroke-width="2"/>`;
    s += `<text x="${x(i)}" y="${yy + 4}" text-anchor="middle" font-family="Outfit, sans-serif" font-size="11" font-weight="900" fill="var(--ink)">${k + 1}</text>`;
  });

  $('#c').innerHTML = s;
  $('#lg').innerHTML = AN[L].map((t, k) => `<span><b>${k + 1}</b>${t}</span>`).join('') +
    `<span style="display:inline-flex;align-items:center;gap:6px;"><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:#FFF;border:2px solid var(--border)"></span> ${L === 'vi' ? 'mẫu nhỏ (n=3 lead đạt chuẩn)' : 'small sample (n=3 qualified)'}</span>`;
}

function apply() {
  document.documentElement.lang = L;
  $$('[data-vi]').forEach(e => {
    e.textContent = e.dataset[L];
  });
  $('#h1').textContent = H[h][L];
  $$('.tg button').forEach(b => b.classList.toggle('on', b.dataset.l === L));
  draw();
}

$$('.tg button').forEach(b => {
  b.onclick = () => {
    L = b.dataset.l;
    try {
      localStorage.setItem('l', L);
    } catch (e) {}
    apply();
  };
});

$$('[data-h]').forEach(b => {
  b.onclick = () => {
    h = +b.dataset.h;
    $$('[data-h]').forEach(x => x.classList.toggle('on', x === b));
    apply();
  };
});

$$('[data-m]').forEach(b => {
  b.onclick = () => {
    mode = b.dataset.m;
    $$('[data-m]').forEach(x => x.classList.toggle('on', x === b));
    draw();
  };
});

const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const io = new IntersectionObserver(es => {
  es.forEach(e => {
    if (!e.isIntersecting) return;
    const n = e.target;
    io.unobserve(n);
    if (n.classList.contains('rv')) {
      n.classList.add('in');
      return;
    }
    const t = +n.dataset.to;
    if (rm) {
      n.textContent = t;
      return;
    }
    let st = null;
    const f = ts => {
      st = st || ts;
      const k = Math.min((ts - st) / 1000, 1);
      n.textContent = Math.round(t * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  });
}, { threshold: 0.25 });

$$('.num, .rv').forEach(n => io.observe(n));
apply();
