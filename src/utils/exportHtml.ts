import QRCode from 'qrcode';
import { PresentationConfig } from '../types';
import { CAMPUS_LABELS } from '../data/slidesData';

export async function exportStandaloneHtml(config: PresentationConfig): Promise<void> {
  const qrCandidature = await QRCode.toDataURL('https://alesia_formation.osc3.tech/', {
    width: 240,
    margin: 1,
    color: { dark: '#10222E', light: '#FFFFFF' },
  });
  const qrEvents = await QRCode.toDataURL('https://evenements.alesiaformationapp.cloud', {
    width: 240,
    margin: 1,
    color: { dark: '#10222E', light: '#FFFFFF' },
  });

  const campusLabel = CAMPUS_LABELS[config.campus];

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Alésia Formation — Présentation Interactive (${campusLabel})</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700;800;900&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --cyan: #12AEDB; --cyan-ink: #0A8DB9; --cyan-soft: #D3F0FA;
      --teal: #2BB3A3; --teal-ink: #13806F; --teal-soft: #D5F1EE;
      --orange: #F39200; --orange-ink: #B35A00; --orange-soft: #FDE5C2;
      --ink: #10222E; --ink-deep: #0E1A22; --bg: #F3F7F9; --line: #DCE6EB;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0; padding: 0; background: #F3F7F9; color: #2E3F4A;
      font-family: 'Outfit', sans-serif; overflow: hidden; height: 100vh; width: 100vw;
      display: flex; align-items: center; justify-content: center;
    }
    .stage {
      width: 1920px; height: 1080px; background: #F3F7F9; position: relative;
      padding: 100px 96px 40px 96px; display: flex; flex-direction: column; justify-content: space-between;
      transform-origin: center center; overflow: hidden;
    }
    h1, h2, .spartan {
      font-family: 'League Spartan', sans-serif; font-weight: 800;
      text-transform: uppercase; letter-spacing: -0.035em; line-height: 0.88; margin: 0;
    }
    .pill {
      display: inline-block; padding: 8px 18px; border-radius: 22px;
      background: #F39200; color: #0E1A22; font-weight: 600; font-size: 20px;
      text-transform: uppercase; letter-spacing: 0.14em; margin-bottom: 18px;
    }
    .card {
      background: #FFF; border: 1px solid #DCE6EB; border-top: 12px solid #12AEDB;
      border-radius: 24px; padding: 36px;
    }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
    .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
    .slide { display: none; flex: 1; flex-direction: column; justify-content: space-between; }
    .slide.active { display: flex; }
    .footer {
      border-top: 1px solid #DCE6EB; padding-top: 18px; display: flex;
      justify-content: space-between; align-items: center; font-size: 20px; font-weight: 600;
    }
    .controls {
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      background: #10222E; color: #FFF; padding: 10px 24px; border-radius: 999px;
      display: flex; align-items: center; gap: 18px; z-index: 50;
    }
    .controls button {
      background: #12AEDB; color: #0E1A22; border: none; padding: 8px 18px;
      border-radius: 999px; font-family: 'Outfit', sans-serif; font-weight: 600; font-size: 16px; cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="stage" id="stage">
    <div class="slide active" data-chapter="Tests d'admission">
      <div>
        <span class="pill">SESSION D'ADMISSION · ${campusLabel}</span>
        <h1 style="font-size:112px;"><span style="color:#0A8DB9;">CONSIGNES DES </span><span style="color:#B35A00;">TESTS D'ADMISSION</span></h1>
        <p style="font-size:28px;font-weight:300;">3 épreuves chronométrées : <strong>Test 1 (15 min)</strong> trouver la 4e case · <strong>Test 2 (10 min)</strong> 2 cases suivantes & 3 essais · <strong>Test 3</strong> questionnaire logique.</p>
      </div>
      <div class="grid-3">
        <div class="card">
          <h2 style="font-size:40px;color:#0A8DB9;">01 · TEST 1 (15 MIN)</h2>
          <p style="font-size:23px;">Trouver la 4e case logique. Exemples : 1 → Réponse n°2 · 2 → Réponse n°6 · 3 → Réponse n°2 · 4 → Réponse n°3 · 5 → Réponse n°5.</p>
        </div>
        <div class="card" style="border-top-color:#2BB3A3;">
          <h2 style="font-size:40px;color:#13806F;">02 · TEST 2 (10 MIN)</h2>
          <p style="font-size:23px;">Deviner les 2 cases suivantes (3 colonnes d'essais). Astuce : analysez les éléments séparément.</p>
        </div>
        <div class="card" style="border-top-color:#F39200;">
          <h2 style="font-size:40px;color:#B35A00;">03 · TEST 3 (QCM)</h2>
          <p style="font-size:23px;">Questionnaire de logique. Exemple Jacques & Jean : 1.000 € + 200 € = Réponse C (1.200 €).</p>
        </div>
      </div>
    </div>

    <div class="slide" data-chapter="Introduction">
      <div>
        <span class="pill">DEPUIS 1996 · LILLE · LENS · AMIENS</span>
        <h1 style="font-size:180px;color:#0A8DB9;">BIENVENUE</h1>
        <h2 style="font-size:64px;color:#B35A00;margin-top:12px;">ALÉSIA FORMATION – VOTRE AVENIR COMMENCE MAINTENANT</h2>
        <p style="font-size:30px;font-weight:300;">Tu ne seras <strong>jamais seul(e)</strong> : on t'accompagne jusqu'à la signature de ton contrat.</p>
      </div>
      <div class="grid-3">
        <div class="card"><h2 style="font-size:48px;color:#0A8DB9;">+90 %</h2><p style="font-size:24px;">de réussite aux examens · 8/10 en emploi ou études à 6 mois</p></div>
        <div class="card" style="border-top-color:#2BB3A3;"><h2 style="font-size:48px;color:#13806F;">1 500</h2><p style="font-size:24px;">entreprises partenaires · 400 étudiants formés / an</p></div>
        <div class="card" style="border-top-color:#F39200;"><h2 style="font-size:48px;color:#B35A00;">12 FORMATIONS</h2><p style="font-size:24px;">du BTS au Bac+5 · 30 ans d'expérience · 0 € de frais</p></div>
      </div>
    </div>

    <div class="slide" data-chapter="Conclusion">
      <div>
        <span class="pill">PASSEZ À L'ACTION</span>
        <h1 style="font-size:112px;"><span style="color:#0A8DB9;">PRÊT(E) À </span><span style="color:#B35A00;">COMMENCER ?</span></h1>
      </div>
      <div class="grid-2">
        <div class="card" style="display:flex;align-items:center;justify-content:space-between;gap:24px;">
          <div>
            <h2 style="font-size:42px;color:#0A8DB9;">DOSSIER DE CANDIDATURE</h2>
            <p style="font-size:22px;">https://alesia_formation.osc3.tech/</p>
          </div>
          <img src="${qrCandidature}" width="200" height="200" alt="QR Dossier de candidature" />
        </div>
        <div class="card" style="border-top-color:#F39200;display:flex;align-items:center;justify-content:space-between;gap:24px;">
          <div>
            <h2 style="font-size:42px;color:#B35A00;">NOS PROCHAINS ÉVÉNEMENTS</h2>
            <p style="font-size:22px;">https://evenements.alesiaformationapp.cloud</p>
          </div>
          <img src="${qrEvents}" width="200" height="200" alt="QR Événements" />
        </div>
      </div>
    </div>

    <div class="footer">
      <div>ALÉSIA FORMATION · <span id="chap" style="color:#B35A00;">Tests d'admission</span></div>
      <div>contact@alesiaformation.fr · 09 70 24 95 10 · alesia-formation.fr</div>
    </div>
  </div>

  <div class="controls">
    <button onclick="prev()">← Précédent</button>
    <span id="cnt" class="spartan" style="font-size:22px;color:#FFB54D;">01 / 03</span>
    <button onclick="next()">Suivant →</button>
  </div>

  <script>
    const slides = Array.from(document.querySelectorAll('.slide'));
    let idx = 0;
    function show(i) {
      idx = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('active', k === idx));
      document.getElementById('cnt').textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
      document.getElementById('chap').textContent = slides[idx].getAttribute('data-chapter') || '';
    }
    function next() { show(idx + 1); }
    function prev() { show(idx - 1); }
    function fit() {
      const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
      document.getElementById('stage').style.transform = 'scale(' + s + ')';
    }
    window.addEventListener('resize', fit);
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      if (e.key === 'ArrowLeft') prev();
    });
    fit();
  </script>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Alesia-Formation-Presentation.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
