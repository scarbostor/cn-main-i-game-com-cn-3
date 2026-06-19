function buildCard(title, summary, tags) {
  const card = document.createElement('div');
  card.className = 'site-card';

  const titleEl = document.createElement('h3');
  titleEl.textContent = title;
  card.appendChild(titleEl);

  const summaryEl = document.createElement('p');
  summaryEl.textContent = summary;
  card.appendChild(summaryEl);

  if (tags && tags.length) {
    const badges = document.createElement('div');
    badges.className = 'badge-wrapper';
    tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'keyword-badge';
      span.textContent = tag;
      badges.appendChild(span);
    });
    card.appendChild(badges);
  }

  return card;
}

function buildAccessNote(linkUrl) {
  const note = document.createElement('div');
  note.className = 'access-note';

  const label = document.createElement('span');
  label.textContent = '访问入口：';
  note.appendChild(label);

  const anchor = document.createElement('a');
  anchor.href = linkUrl;
  anchor.target = '_blank';
  anchor.textContent = linkUrl;
  note.appendChild(anchor);

  return note;
}

function initSiteHelper() {
  const container = document.createElement('div');
  container.id = 'site-helper-container';

  const pageContent = document.body || document.documentElement;
  pageContent.prepend(container);

  const sampleCard = buildCard(
    '爱游戏平台指南',
    '了解最新的游戏资讯与活动，轻松开始你的游戏旅程。',
    ['爱游戏', '热门推荐', '新手引导']
  );
  container.appendChild(sampleCard);

  const secondCard = buildCard(
    '每日签到提醒',
    '登录后每日签到可领取积分奖励，不要错过连续签到福利。',
    ['爱游戏', '每日任务']
  );
  container.appendChild(secondCard);

  const access = buildAccessNote('https://cn-main-i-game.com.cn');
  container.appendChild(access);

  const style = document.createElement('style');
  style.textContent = `
    #site-helper-container {
      max-width: 400px;
      margin: 20px auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    .site-card {
      background: #f9fafc;
      border: 1px solid #e0e4ea;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.03);
    }
    .site-card h3 {
      margin: 0 0 6px 0;
      font-size: 1.1em;
      color: #1c2b3a;
    }
    .site-card p {
      margin: 0 0 10px 0;
      color: #3d4e60;
      line-height: 1.4;
    }
    .badge-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .keyword-badge {
      display: inline-block;
      background: #e3ecf5;
      color: #1b3b5c;
      font-size: 0.75em;
      padding: 4px 10px;
      border-radius: 20px;
      font-weight: 500;
    }
    .access-note {
      background: #f3f6fa;
      border-radius: 8px;
      padding: 10px 14px;
      font-size: 0.85em;
      color: #2c3e50;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .access-note a {
      color: #1565c0;
      text-decoration: underline;
      word-break: break-all;
    }
  `;
  container.appendChild(style);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSiteHelper);
} else {
  initSiteHelper();
}