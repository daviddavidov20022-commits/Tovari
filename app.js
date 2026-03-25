// ===== STATE =====
let currentPrice = 'cost_price';
let currentTopCategory = '';
let currentSubCategory = '';
let searchQuery = '';
let filterInStock = false;
let sortField = null;
let sortDir = 'asc';
let mpCalcEnabled = false;
let selectedArticles = new Set();
let bulkCoef = 2.5;
let currentShownArticles = [];

// Persisted data
let ndsMap = {};
let deliveryMap = {}; // per-product delivery overrides
let commissionMap = {}; // per-product commission overrides
let optDynMap = {}; // per-product opt_dyn overrides
let mpConfig = { commission: 35, delivery: 700, tax: 6, spp: 30 };

// ===== PRICE LABELS =====
const PRICE_LABELS = {
    cost_price: 'Учетная',
    spec_opt: 'Спец Опт',
    opt_dyn: 'Опт динамика'
};

// ===== TOP CATEGORIES =====
const TOP_CATEGORIES = [
    { key: 'Контракт', label: 'Контракт' },
    { key: 'Маркеты', label: 'Маркеты' },
    { key: 'Мебель для салонов красоты', label: 'Мебель для салонов' },
    { key: 'Неликвид', label: 'Неликвид' },
    { key: 'Разработки', label: 'Разработки' },
];

// ===== PERSISTENCE =====
function loadNds() {
    try { const s = localStorage.getItem('sobranie_nds'); if (s) ndsMap = JSON.parse(s); } catch(e) {}
}
function saveNds() {
    try { localStorage.setItem('sobranie_nds', JSON.stringify(ndsMap)); } catch(e) {}
}
function isNds(article) { return ndsMap[article] === true; }
function toggleNds(article) {
    ndsMap[article] ? delete ndsMap[article] : ndsMap[article] = true;
    saveNds();
    render();
}

function loadMpConfig() {
    try { const s = localStorage.getItem('sobranie_mp'); if (s) mpConfig = JSON.parse(s); } catch(e) {}
}
function saveMpConfig() {
    try { localStorage.setItem('sobranie_mp', JSON.stringify(mpConfig)); } catch(e) {}
}

function loadDeliveryMap() {
    try { const s = localStorage.getItem('sobranie_delivery'); if (s) deliveryMap = JSON.parse(s); } catch(e) {}
}
function saveDeliveryMap() {
    try { localStorage.setItem('sobranie_delivery', JSON.stringify(deliveryMap)); } catch(e) {}
}
function getDelivery(article) {
    return deliveryMap[article] !== undefined ? deliveryMap[article] : mpConfig.delivery;
}

function loadCommissionMap() {
    try { const s = localStorage.getItem('sobranie_commission'); if (s) commissionMap = JSON.parse(s); } catch(e) {}
}
function saveCommissionMap() {
    try { localStorage.setItem('sobranie_commission', JSON.stringify(commissionMap)); } catch(e) {}
}
function getCommission(article) {
    return commissionMap[article] !== undefined ? commissionMap[article] : mpConfig.commission;
}

function loadOptDynMap() {
    try { const s = localStorage.getItem('sobranie_optdyn'); if (s) optDynMap = JSON.parse(s); } catch(e) {}
}
function saveOptDynMap() {
    try { localStorage.setItem('sobranie_optdyn', JSON.stringify(optDynMap)); } catch(e) {}
}

// Simulation basket
let simBasket = {};
function loadSimBasket() {
    try { const s = localStorage.getItem('sobranie_simbasket'); if (s) simBasket = JSON.parse(s); } catch(e) {}
}
function saveSimBasket() {
    try { localStorage.setItem('sobranie_simbasket', JSON.stringify(simBasket)); } catch(e) {}
}
function updateBasketBadge() {
    const count = Object.keys(simBasket).length;
    const badge = document.getElementById('simBasketBadge');
    if (badge) { badge.textContent = count; badge.style.display = count > 0 ? 'flex' : 'none'; }
}
function getOptDyn(product) {
    // Manual override takes priority
    if (optDynMap[product.article] !== undefined) return optDynMap[product.article];
    // If spec_opt exists and is lower than opt_dyn, use spec_opt
    if (product.spec_opt && product.opt_dyn && product.spec_opt < product.opt_dyn) {
        return product.spec_opt;
    }
    // If opt_dyn is missing but spec_opt exists, use spec_opt
    if (!product.opt_dyn && product.spec_opt) {
        return product.spec_opt;
    }
    return product.opt_dyn;
}

function getEffectiveOptDyn(product) {
    const base = getOptDyn(product);
    if (!base) return base;
    if (isNds(product.article)) {
        return Math.round(base * 1.05);
    }
    return base;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    loadNds();
    loadMpConfig();
    loadDeliveryMap();
    loadCommissionMap();
    loadOptDynMap();
    loadSimBasket();
    initDate();
    initCategoryTabs();
    initMpCalc();
    initEventListeners();
    initBasketListeners();
    updateBasketBadge();
    initSelectionToolbar();
    initSalesSection();
    render();
});

function initDate() {
    const d = new Date();
    const months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    document.getElementById('headerDate').textContent = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function initCategoryTabs() {
    const container = document.getElementById('categoryTabs');
    const allCount = PRODUCTS.length;
    let html = `<button class="category-tab active" data-top="">Все<span class="tab-count">${allCount}</span></button>`;
    TOP_CATEGORIES.forEach(cat => {
        const count = PRODUCTS.filter(p => p.top_category === cat.key).length;
        html += `<button class="category-tab" data-top="${cat.key}">${cat.label}<span class="tab-count">${count}</span></button>`;
    });
    container.innerHTML = html;
}

function initMpCalc() {
    document.getElementById('mpCommission').value = mpConfig.commission;
    document.getElementById('mpDelivery').value = mpConfig.delivery;
    document.getElementById('mpTax').value = mpConfig.tax;
    const sppVal = mpConfig.spp !== undefined ? mpConfig.spp : 30;
    if (document.getElementById('mpSpp')) document.getElementById('mpSpp').value = sppVal;
    if (document.getElementById('globalSpp')) document.getElementById('globalSpp').value = sppVal;
}

function getSubCategories(topCategory) {
    if (!topCategory) return [];
    return [...new Set(PRODUCTS.filter(p => p.top_category === topCategory).map(p => p.sub_category))].sort();
}

function updateSubCategorySelect() {
    const wrap = document.getElementById('subCategorySelectWrap');
    const select = document.getElementById('subCategorySelect');
    if (!currentTopCategory) { wrap.style.display = 'none'; currentSubCategory = ''; return; }
    const subs = getSubCategories(currentTopCategory);
    if (subs.length <= 1) { wrap.style.display = 'none'; currentSubCategory = ''; return; }
    wrap.style.display = 'block';
    let html = `<option value="">Все подкатегории (${subs.length})</option>`;
    subs.forEach(sub => {
        const count = PRODUCTS.filter(p => p.top_category === currentTopCategory && p.sub_category === sub).length;
        html += `<option value="${sub}">${sub} (${count})</option>`;
    });
    select.innerHTML = html;
    select.value = currentSubCategory;
}

function initEventListeners() {
    // Category tabs
    document.getElementById('categoryTabs').addEventListener('click', (e) => {
        const tab = e.target.closest('.category-tab');
        if (!tab) return;
        document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentTopCategory = tab.dataset.top;
        currentSubCategory = '';
        updateSubCategorySelect();
        render();
    });

    document.getElementById('subCategorySelect').addEventListener('change', (e) => {
        currentSubCategory = e.target.value; render();
    });

    // Price switcher
    document.querySelectorAll('.switcher-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.switcher-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPrice = btn.dataset.price;
            document.getElementById('sumPriceLabel').textContent = PRICE_LABELS[currentPrice];
            render();
        });
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    let searchTimeout = null;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = e.target.value.trim().toLowerCase();
            searchClear.classList.toggle('visible', searchQuery.length > 0);
            render();
        }, 150);
    });
    searchClear.addEventListener('click', () => {
        searchInput.value = ''; searchQuery = ''; searchClear.classList.remove('visible'); searchInput.focus(); render();
    });

    document.getElementById('filterInStock').addEventListener('change', (e) => {
        filterInStock = e.target.checked; render();
    });

    // Sort
    document.querySelectorAll('.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const field = th.dataset.sort;
            if (sortField === field) {
                sortDir = sortDir === 'asc' ? 'desc' : (sortField = null, 'asc');
            } else {
                sortField = field; sortDir = 'asc';
            }
            document.querySelectorAll('.sortable').forEach(t => t.classList.remove('sort-asc', 'sort-desc'));
            if (sortField) th.classList.add(sortDir === 'asc' ? 'sort-asc' : 'sort-desc');
            render();
        });
    });

    // NDS toggle
    document.getElementById('tableBody').addEventListener('change', (e) => {
        if (e.target.classList.contains('nds-checkbox')) {
            toggleNds(e.target.dataset.article);
        }
    });

    // Per-product delivery & commission inputs
    document.getElementById('tableBody').addEventListener('input', (e) => {
        if (e.target.classList.contains('delivery-input')) {
            const article = e.target.dataset.article;
            const val = parseFloat(e.target.value);
            if (!isNaN(val) && val >= 0) {
                deliveryMap[article] = val;
            } else {
                delete deliveryMap[article];
            }
            saveDeliveryMap();
            updateRowMp(article, e.target.closest('tr'));
        }
        if (e.target.classList.contains('commission-input')) {
            const article = e.target.dataset.article;
            const val = parseFloat(e.target.value);
            if (!isNaN(val) && val >= 0 && val < 100) {
                commissionMap[article] = val;
            } else {
                delete commissionMap[article];
            }
            saveCommissionMap();
            updateRowMp(article, e.target.closest('tr'));
        }
        // Per-product opt_dyn override
        if (e.target.classList.contains('optdyn-input')) {
            const article = e.target.dataset.article;
            const val = parseFloat(e.target.value);
            if (!isNaN(val) && val > 0) {
                optDynMap[article] = val;
            } else {
                delete optDynMap[article];
            }
            saveOptDynMap();
            e.target.classList.toggle('custom', optDynMap[article] !== undefined);
            // Update this row inline without losing focus
            const tr = e.target.closest('tr');
            const product = PRODUCTS.find(p => p.article === article);
            if (product && tr) {
                const effectivePrice = getEffectiveOptDyn(product);
                const price = effectivePrice;
                const sum = (product.stock > 0 && price) ? product.stock * price : 0;
                const coef = getCoef(product);
                const coefBadge = tr.querySelector('.coef-badge');
                if (coefBadge && coef !== null) {
                    coefBadge.textContent = '×' + coef.toFixed(1);
                    coefBadge.className = 'coef-badge ' + (coef <= 2.5 ? 'coef-low' : coef <= 3.5 ? 'coef-mid' : 'coef-high');
                }
                const sumCell = tr.querySelector('.cell-sum');
                if (sumCell) {
                    sumCell.textContent = sum > 0 ? formatMoney(sum) : '—';
                    sumCell.classList.toggle('zero', sum === 0);
                }
                updateRowMp(article, tr);
            }
            // Update stats
            updateStats();
        }
    });

    // Clickable article -> modal
    document.getElementById('tableBody').addEventListener('click', (e) => {
        const articleLink = e.target.closest('.article-link');
        if (articleLink) {
            e.preventDefault();
            const article = articleLink.dataset.article;
            const product = PRODUCTS.find(p => p.article === article);
            if (product) openProductModal(product);
        }
        // Gear icon -> coef simulator
        const gearBtn = e.target.closest('.coef-gear');
        if (gearBtn) {
            e.stopPropagation();
            const article = gearBtn.dataset.article;
            const product = PRODUCTS.find(p => p.article === article);
            if (product) openCoefSimulator(product, gearBtn);
        }
        // Clock icon -> surcharge calculator
        const clockBtn = e.target.closest('.surcharge-clock');
        if (clockBtn) {
            e.stopPropagation();
            const article = clockBtn.dataset.article;
            const product = PRODUCTS.find(p => p.article === article);
            if (product) openSurchargeCalc(product, clockBtn);
        }
    });

    // MP Calculator toggle
    document.getElementById('mpCalcToggle').addEventListener('click', () => {
        mpCalcEnabled = !mpCalcEnabled;
        document.getElementById('mpCalcToggle').classList.toggle('active', mpCalcEnabled);
        document.getElementById('mpCalcPanel').style.display = mpCalcEnabled ? 'block' : 'none';
        document.getElementById('mpStats').style.display = mpCalcEnabled ? 'grid' : 'none';
        document.querySelectorAll('.col-mp').forEach(el => el.classList.toggle('mp-col-hidden', !mpCalcEnabled));
        render();
    });

    // MP inputs
    ['mpCommission', 'mpDelivery', 'mpTax', 'mpSpp', 'globalSpp', 'basketSpp'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('input', () => {
            const val = parseFloat(el.value) || 0;
            mpConfig.commission = parseFloat(document.getElementById('mpCommission').value) || 0;
            mpConfig.delivery = parseFloat(document.getElementById('mpDelivery').value) || 0;
            mpConfig.tax = parseFloat(document.getElementById('mpTax').value) || 0;
            mpConfig.spp = val; // The one currently being edited set the global config
            
            // Sync all SPP inputs
            ['mpSpp', 'globalSpp', 'basketSpp'].forEach(sppId => {
                const sppEl = document.getElementById(sppId);
                if (sppEl) sppEl.value = mpConfig.spp;
            });

            saveMpConfig();
            
            // Update all items in simulation basket with new SPP
            Object.keys(simBasket).forEach(article => {
                const item = simBasket[article];
                const product = PRODUCTS.find(p => p.article === article);
                if (product) {
                    const mp = calcMp(product, item.optDyn / (isNds(article) ? 1.05 : 1)); // Back-calculate base optDyn
                    if (mp) {
                        simBasket[article].sppPrice = mp.sppPrice;
                    }
                }
            });
            saveSimBasket();
            
            if (id === 'basketSpp') {
                renderSimBasketTable();
            } else {
                render();
            }
        });
    });

    // Selection
    document.getElementById('selectAllItems').addEventListener('change', (e) => {
        if (e.target.checked) {
            currentShownArticles.forEach(art => selectedArticles.add(art));
        } else {
            currentShownArticles.forEach(art => selectedArticles.delete(art));
        }
        render();
    });

    document.getElementById('tableBody').addEventListener('click', (e) => {
        const checkbox = e.target.closest('.row-checkbox');
        if (checkbox) {
            const article = checkbox.dataset.article;
            checkbox.checked ? selectedArticles.add(article) : selectedArticles.delete(article);
            
            // Sync header checkbox
            const allInSet = currentShownArticles.length > 0 && currentShownArticles.every(art => selectedArticles.has(art));
            document.getElementById('selectAllItems').checked = allInSet;
            
            checkbox.closest('tr').classList.toggle('row-selected', checkbox.checked);
            updateSelectionToolbar();
        }
    });

    // Modal close
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target.id === 'productModal' || e.target.closest('.modal-close')) {
            closeProductModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { 
            closeProductModal(); 
            closeSimBasket(); 
            if (selectedArticles.size > 0 && !activeSimulator) {
                selectedArticles.clear(); 
                document.getElementById('selectAllItems').checked = false;
                render(); 
            }
        }
    });

    // Back to top
    const backBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => backBtn.classList.toggle('visible', window.scrollY > 300));
    backBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Info modal close
    document.getElementById('infoModal').addEventListener('click', (e) => {
        if (e.target.id === 'infoModal' || e.target.closest('.info-modal-close')) {
            closeInfoModal();
        }
    });

    // Stat help buttons
    document.getElementById('statsSection').addEventListener('click', (e) => {
        const btn = e.target.closest('.stat-help-btn');
        if (btn) {
            e.preventDefault();
            const type = btn.dataset.info;
            openInfoModal(type);
        }
    });

    // Close popups on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.coef-simulator') && !e.target.closest('.coef-gear')) {
            closeCoefSimulator();
        }
        if (!e.target.closest('.surcharge-calc') && !e.target.closest('.surcharge-clock')) {
            closeSurchargeCalc();
        }
    });
}

// ===== INFO MODAL =====
const INFO_DATA = {
    total: {
        title: "Всего товаров",
        text: "Общее количество уникальных товарных позиций (артикулов), которые отображаются при текущем выборе категории и фильтрах.",
        formula: "Счётчик уникальных артикулов"
    },
    instock: {
        title: "Товаров в наличии",
        text: "Количество товаров, у которых фактический остаток на складе больше нуля.",
        formula: "Количество товаров, где Остаток > 0"
    },
    totalstock: {
        title: "Общий остаток (шт)",
        text: "Суммарное количество всех единиц товара на складе для текущего списка.",
        formula: "Σ (Остаток всех товаров)"
    },
    totalsum: {
        title: "Общая сумма",
        text: "Оценка стоимости склада на основе выбранного типа цены (Учетная, Спец Опт или Опт динамика).",
        formula: "Σ (Активная Цена × Остаток)"
    },
    nds: {
        title: "НДС 5%",
        text: "Сумма дополнительного налога (5%) для товаров, у которых в таблице включен тумблер НДС.",
        formula: "Σ (Цена × Остаток × 0.05)"
    },
    mp_profit: {
        title: "Чистая прибыль",
        text: "Сумма, которая остается после вычета всех расходов: <br><strong>Прибыль = Выручка - Материал - Доставка - Комиссия - Налог</strong>"
    },
    mp_gross: {
        title: "Прибыль (без мат. и нал.)",
        text: "Доход до учета стоимости материала и налогов: <br><strong>Сумма = Выручка - Доставка - Комиссия</strong>"
    },
    mp_rev: {
        title: "Выручка на МП",
        text: "Прогноз общей выручки от продажи всех остатков по расчетной цене маркетплейса.",
        formula: "Σ (Цена МП × Остаток)"
    },
    mp_tax: {
        title: "Общий налог",
        text: "Сумма налога, который необходимо будет уплатить с выручки от продаж на МП (по выбранной ставке %).",
        formula: "Выручка МП × % Налога"
    },
    mp_comm: {
        title: "Общая комиссия МП",
        text: "Суммарные выплаты маркетплейсу за продажи (комиссия площадки).",
        formula: "Выручка МП × % Комиссии"
    },
    mp_profit: {
        title: "Чистая прибыль",
        text: "Итоговая прогнозируемая прибыль после вычета учетной цены, налогов и комиссий маркетплейса.",
        formula: "Σ ((Цена МП − Учет.Цена − Налог − Комиссия) × Остаток)"
    }
};

function openInfoModal(type) {
    const data = INFO_DATA[type];
    if (!data) return;
    
    document.getElementById('infoModalTitle').textContent = data.title;
    document.getElementById('infoModalBody').innerHTML = `
        <strong>Как рассчитывается этот показатель:</strong>
        <p>${data.text}</p>
        <div class="formula-box">${data.formula}</div>
    `;
    document.getElementById('infoModal').classList.add('active');
}

function closeInfoModal() {
    document.getElementById('infoModal').classList.remove('active');
}

// ===== UPDATE SINGLE ROW MP (fast, no full render) =====
function updateRowMp(article, tr) {
    const product = PRODUCTS.find(p => p.article === article);
    if (!product || !tr) return;
    const mp = calcMp(product);
    if (!mp) return;
    
    const stock = product.stock;
    const hasSt = stock > 0;
    const profitClass = mp.profit > 0 ? 'positive' : mp.profit < 0 ? 'negative' : 'zero';
    
    const cells = {
        sell: tr.querySelector('.cell-mp-sell'),
        tax: tr.querySelector('.cell-mp-tax'),
        comm: tr.querySelector('.cell-mp-comm'),
        profit: tr.querySelector('.cell-mp-profit'),
        spp: tr.querySelector('.cell-mp-spp')
    };
    
    if (cells.sell) cells.sell.innerHTML = `${formatMoney(mp.sellPrice)}${hasSt ? `<span class="mp-total">${formatMoney(mp.sellPrice * stock)}</span>` : ''}`;
    if (cells.tax) cells.tax.innerHTML = `${formatMoney(mp.tax)}${hasSt ? `<span class="mp-total">${formatMoney(mp.tax * stock)}</span>` : ''}`;
    if (cells.comm) cells.comm.innerHTML = `${formatMoney(mp.commission)}${hasSt ? `<span class="mp-total">${formatMoney(mp.commission * stock)}</span>` : ''}`;
    if (cells.spp) cells.spp.innerHTML = `${formatMoney(mp.sppPrice)}${hasSt ? `<span class="mp-total">${formatMoney(mp.sppPrice * stock)}</span>` : ''}`;
    if (cells.profit) {
        cells.profit.className = `cell-mp-profit ${profitClass}`;
        cells.profit.innerHTML = `${formatMoney(mp.profit)}${hasSt ? `<span class="mp-total ${profitClass}">${formatMoney(mp.profit * stock)}</span>` : ''}`;
    }
}

// ===== NDS STATS =====
function updateNdsStats() {
    const catProducts = getCategoryProducts();
    const ndsCount = catProducts.filter(p => isNds(p.article)).length;
    const ndsSum = catProducts.filter(p => isNds(p.article) && p.stock > 0).reduce((s, p) => {
        const basePrice = currentPrice === 'opt_dyn' ? getOptDyn(p) : p[currentPrice];
        return basePrice ? s + Math.round(p.stock * basePrice * 0.05) : s;
    }, 0);
    document.getElementById('ndsCount').textContent = ndsCount;
    document.getElementById('statNdsValue').textContent = formatMoney(ndsSum);
}

function getCategoryProducts() {
    return PRODUCTS.filter(p => {
        if (currentTopCategory && p.top_category !== currentTopCategory) return false;
        if (currentSubCategory && p.sub_category !== currentSubCategory) return false;
        return true;
    });
}

// ===== MP CALCULATIONS =====
function calcMp(product, overrideOptDyn) {
    let optDyn = overrideOptDyn !== undefined ? overrideOptDyn : getOptDyn(product);
    const costPrice = product.cost_price;
    if (!optDyn || !costPrice) return null;
    
    // If NDS is enabled, add 5% to the base price
    if (isNds(product.article)) {
        optDyn = Math.round(optDyn * 1.05);
    }
    
    const commissionPct = getCommission(product.article);
    const commissionRate = commissionPct / 100;
    const taxRate = mpConfig.tax / 100;
    const delivery = getDelivery(product.article);
    
    const divisor = 1 - commissionRate;
    if (divisor <= 0) return null;
    
    const sellPrice = Math.round((optDyn + delivery) / divisor);
    const commission = Math.round(sellPrice * commissionRate);
    const tax = Math.round(sellPrice * taxRate);
    const profit = optDyn - costPrice - tax;
    
    const sppRate = (mpConfig.spp || 0) / 100;
    const sppPrice = Math.round(sellPrice * (1 - sppRate));
    
    return { sellPrice, commission, commissionPct, delivery, tax, profit, optDyn, sppPrice };
}

// ===== COEF SIMULATOR =====
let activeSimulator = null;

function openCoefSimulator(product, gearBtn) {
    closeCoefSimulator();
    if (!product.cost_price) return;
    
    const coef = getCoef(product) || 2.5;
    const minCoef = 1.0;
    const maxCoef = Math.max(coef + 1.5, 6.0);
    const stock = product.stock;
    const costPrice = product.cost_price;
    
    const popup = document.createElement('div');
    popup.className = 'coef-simulator';
    popup.innerHTML = buildSimulatorHTML(product, coef, minCoef, maxCoef);
    
    // Position near the gear button
    const rect = gearBtn.getBoundingClientRect();
    popup.style.position = 'fixed';
    popup.style.zIndex = '999';
    
    document.body.appendChild(popup);
    
    // Adjust position to stay in viewport
    const popW = 380;
    const popH = popup.offsetHeight || 400;
    let left = rect.right + 8;
    let top = rect.top - 40;
    
    if (left + popW > window.innerWidth) left = rect.left - popW - 8;
    if (top + popH > window.innerHeight) top = window.innerHeight - popH - 16;
    if (top < 8) top = 8;
    
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
    
    activeSimulator = popup;
    
    // Drag to move
    const header = popup.querySelector('.sim-header');
    if (header) {
        let isDragging = false, dragX = 0, dragY = 0;
        header.addEventListener('pointerdown', (e) => {
            if (e.target.closest('input, button, a')) return;
            isDragging = true;
            dragX = e.clientX - popup.offsetLeft;
            dragY = e.clientY - popup.offsetTop;
            header.setPointerCapture(e.pointerId);
            e.preventDefault();
        });
        header.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            let newLeft = e.clientX - dragX;
            let newTop = e.clientY - dragY;
            // Keep within viewport
            newLeft = Math.max(0, Math.min(newLeft, window.innerWidth - popup.offsetWidth));
            newTop = Math.max(0, Math.min(newTop, window.innerHeight - 40));
            popup.style.left = newLeft + 'px';
            popup.style.top = newTop + 'px';
        });
        header.addEventListener('pointerup', () => { isDragging = false; });
        header.addEventListener('lostpointercapture', () => { isDragging = false; });
    }
    
    // Track current simulated coef
    let simulatedCoef = coef;
    const origCoef = coef;
    
    // Slider interaction
    const slider = popup.querySelector('.sim-slider');
    const coefLabel = popup.querySelector('.sim-coef-value');
    const sendBtn = popup.querySelector('.sim-send-btn');
    
    slider.addEventListener('input', () => {
        const newCoef = parseFloat(slider.value);
        simulatedCoef = newCoef;
        coefLabel.textContent = '×' + newCoef.toFixed(1);
        updateSimulatorValues(popup, product, newCoef);
        // Show send button when coef differs from original
        if (sendBtn) {
            const changed = Math.abs(newCoef - origCoef) > 0.05;
            sendBtn.classList.toggle('visible', changed);
        }
    });
    
    // Send button
    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            addToSimBasket(product, simulatedCoef);
            sendBtn.classList.add('sent');
            sendBtn.textContent = '✓ Добавлено';
            setTimeout(() => closeCoefSimulator(), 600);
        });
    }
}

function closeCoefSimulator() {
    if (activeSimulator) {
        activeSimulator.remove();
        activeSimulator = null;
    }
}

function buildSimulatorHTML(product, currentCoef, minCoef, maxCoef) {
    const stock = product.stock;
    const costPrice = product.cost_price;
    const effectiveOptDyn = getEffectiveOptDyn(product);
    const usesSpecOpt = product.spec_opt && (!product.opt_dyn || product.spec_opt < product.opt_dyn) && optDynMap[product.article] === undefined;
    const priceLabel = usesSpecOpt ? 'Спец цена (1 шт)' : 'Опт динамика (1 шт)';
    const mp = calcMp(product);
    
    return `
        <div class="sim-header">
            <div class="sim-title">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.2 2.1a2.7 2.7 0 013.7 3.7L5.5 16H2v-3.5L12.2 2.1z"/></svg>
                Симулятор кэф наценки
            </div>
            <span class="sim-article">${escapeHtml(product.article)}</span>
        </div>
        <div class="sim-slider-wrap">
            <span class="sim-coef-value">×${currentCoef.toFixed(1)}</span>
            <input type="range" class="sim-slider" min="${minCoef}" max="${maxCoef}" step="0.1" value="${currentCoef.toFixed(1)}">
            <div class="sim-slider-labels">
                <span>×${minCoef.toFixed(1)}</span>
                <span>×${maxCoef.toFixed(1)}</span>
            </div>
        </div>
        <div class="sim-body">
            <div class="sim-row sim-row-header">
                <span></span><span>Текущий</span><span>Симуляция</span>
            </div>
            <div class="sim-row">
                <span class="sim-label">Кэф наценки</span>
                <span class="sim-val-orig">${currentCoef.toFixed(1)}</span>
                <span class="sim-val-new" data-field="coef">${currentCoef.toFixed(1)}</span>
            </div>
            <div class="sim-row">
                <span class="sim-label">${priceLabel}</span>
                <span class="sim-val-orig">${effectiveOptDyn ? formatMoney(effectiveOptDyn) : '—'}</span>
                <span class="sim-val-new" data-field="optdyn">${effectiveOptDyn ? formatMoney(effectiveOptDyn) : '—'}</span>
            </div>
            <div class="sim-divider"></div>
            <div class="sim-row">
                <span class="sim-label">💰 Цена МП</span>
                <span class="sim-val-orig">${mp ? formatMoney(mp.sellPrice) : '—'}</span>
                <span class="sim-val-new" data-field="sellprice">${mp ? formatMoney(mp.sellPrice) : '—'}</span>
            </div>
            <div class="sim-row" style="background:rgba(124, 92, 252, 0.05);border-radius:6px;">
                <span class="sim-label" style="font-weight:600;color:var(--accent-light);">🛒 Для покупателя (СПП)</span>
                <span class="sim-val-orig" style="color:var(--accent-light);opacity:0.8;">${mp ? formatMoney(mp.sppPrice) : '—'}</span>
                <span class="sim-val-new" style="font-weight:700;color:var(--accent-light);" data-field="sppprice">${mp ? formatMoney(mp.sppPrice) : '—'}</span>
            </div>
            <div class="sim-row">
                <span class="sim-label">📋 Налог</span>
                <span class="sim-val-orig">${mp ? formatMoney(mp.tax) : '—'}</span>
                <span class="sim-val-new" data-field="tax">${mp ? formatMoney(mp.tax) : '—'}</span>
            </div>
            <div class="sim-row">
                <span class="sim-label">🏪 Комиссия</span>
                <span class="sim-val-orig">${mp ? formatMoney(mp.commission) : '—'}</span>
                <span class="sim-val-new" data-field="commission">${mp ? formatMoney(mp.commission) : '—'}</span>
            </div>
            <div class="sim-divider"></div>
            <div class="sim-row sim-row-profit">
                <span class="sim-label">✅ Прибыль (1 шт)</span>
                <span class="sim-val-orig ${mp ? (mp.profit > 0 ? 'positive' : 'negative') : ''}">${mp ? formatMoney(mp.profit) : '—'}</span>
                <span class="sim-val-new" data-field="profit1">${mp ? formatMoney(mp.profit) : '—'}</span>
            </div>
            ${stock > 0 ? `<div class="sim-row sim-row-total">
                <span class="sim-label">📦 Прибыль (${formatNumber(stock)} шт)</span>
                <span class="sim-val-orig ${mp ? (mp.profit > 0 ? 'positive' : 'negative') : ''}">${mp ? formatMoney(mp.profit * stock) : '—'}</span>
                <span class="sim-val-new" data-field="profitall">${mp ? formatMoney(mp.profit * stock) : '—'}</span>
            </div>` : ''}
        </div>
        <button class="sim-send-btn">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5-5-5-5"/></svg>
            Отправить в сводку
        </button>`;
}

function updateSimulatorValues(popup, product, newCoef) {
    const costPrice = product.cost_price;
    const stock = product.stock;
    const newOptDyn = Math.round(costPrice * newCoef);
    const mp = calcMp(product, newOptDyn);
    
    const set = (field, val, cls) => {
        const el = popup.querySelector(`[data-field="${field}"]`);
        if (el) {
            el.textContent = val;
            if (cls !== undefined) el.className = 'sim-val-new ' + cls;
        }
    };
    
    set('coef', newCoef.toFixed(1));
    // Show the effective price (with NDS if enabled)
    const displayOptDyn = mp ? mp.optDyn : newOptDyn;
    set('optdyn', formatMoney(displayOptDyn));
    
    if (mp) {
        set('sellprice', formatMoney(mp.sellPrice));
        set('sppprice', formatMoney(mp.sppPrice));
        set('tax', formatMoney(mp.tax));
        set('commission', formatMoney(mp.commission));
        const profitClass = mp.profit > 0 ? 'positive' : mp.profit < 0 ? 'negative' : '';
        set('profit1', formatMoney(mp.profit), profitClass);
        if (stock > 0) set('profitall', formatMoney(mp.profit * stock), profitClass);
    }
}

// ===== SURCHARGE CALCULATOR =====
let activeSurchargeCalc = null;

function calcKs(hours, type) {
    const Tn = 15;
    switch (type) {
        case 'standard':
            if (hours <= 13) return -1;
            if (hours <= 15) return 0;
            if (hours <= 42) return Math.round((hours - Tn) * 0.15 * 100) / 100;
            return Math.round((hours - Tn) * 0.25 * 100) / 100;
        case 'sgt':
            if (hours <= Tn) return 0;
            return Math.round((hours - Tn) * 0.1 * 100) / 100;
        case 'courier':
            if (hours <= Tn) return 0;
            return Math.round((hours - Tn) * 0.1 * 100) / 100;
        case 'express':
            if (hours <= Tn) return 0;
            return Math.round((hours - Tn) * 1.0 * 100) / 100;
        default: return 0;
    }
}

function openSurchargeCalc(product, btn) {
    closeSurchargeCalc();
    closeCoefSimulator();
    const mp = calcMp(product);
    if (!mp) return;
    
    const popup = document.createElement('div');
    popup.className = 'surcharge-calc';
    popup.dataset.article = product.article;
    popup.innerHTML = buildSurchargeHTML(product, 0, 'standard');
    
    popup.style.position = 'fixed';
    popup.style.zIndex = '999';
    document.body.appendChild(popup);
    
    const rect = btn.getBoundingClientRect();
    const popW = 420;
    let left = rect.right + 8;
    let top = rect.top - 60;
    if (left + popW > window.innerWidth) left = rect.left - popW - 8;
    if (top + popup.offsetHeight > window.innerHeight) top = window.innerHeight - popup.offsetHeight - 16;
    if (top < 8) top = 8;
    popup.style.left = left + 'px';
    popup.style.top = top + 'px';
    
    activeSurchargeCalc = popup;
    
    let currentType = 'standard';
    
    // Slider
    const slider = popup.querySelector('.sur-slider');
    const hoursLabel = popup.querySelector('.sur-hours-value');
    slider.addEventListener('input', () => {
        const h = parseInt(slider.value);
        hoursLabel.textContent = h + 'ч';
        updateSurchargeValues(popup, product, h, currentType);
    });
    
    // Type tabs
    popup.querySelectorAll('.sur-type-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            currentType = tab.dataset.type;
            popup.querySelectorAll('.sur-type-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const h = parseInt(slider.value);
            updateSurchargeValues(popup, product, h, currentType);
        });
    });
}

function closeSurchargeCalc() {
    if (activeSurchargeCalc) {
        activeSurchargeCalc.remove();
        activeSurchargeCalc = null;
    }
}

function buildSurchargeHTML(product, hours, type) {
    const baseComm = 30; // WB base commission
    const mp = calcMp(product);
    const stock = product.stock;
    const ks = calcKs(hours, type);
    const adjustedComm = baseComm + ks;
    const baseCommAmt = mp ? mp.commission : 0;
    const adjustedCommAmt = mp ? Math.round(mp.sellPrice * adjustedComm / 100) : 0;
    const diff = adjustedCommAmt - baseCommAmt;
    
    return `
        <div class="sur-header">
            <div class="sur-title">
                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/></svg>
                Переплата по комиссии
            </div>
            <span class="sur-article">${escapeHtml(product.article)}</span>
        </div>
        <div class="sur-types">
            <button class="sur-type-tab active" data-type="standard">Стандарт</button>
            <button class="sur-type-tab" data-type="sgt">СГТ</button>
            <button class="sur-type-tab" data-type="courier">Курьер</button>
            <button class="sur-type-tab" data-type="express">Экспресс</button>
        </div>
        <div class="sur-slider-wrap">
            <span class="sur-hours-value">${hours}ч</span>
            <input type="range" class="sur-slider" min="0" max="72" step="1" value="${hours}">
            <div class="sur-slider-labels">
                <span>0ч</span>
                <span>72ч</span>
            </div>
        </div>
        <div class="sur-body">
            <div class="sur-row sur-row-ks">
                <span class="sur-label">кС (изменение комиссии)</span>
                <span class="sur-val" data-field="ks">${ks > 0 ? '+' : ''}${ks.toFixed(2)}%</span>
            </div>
            <div class="sur-divider"></div>
            <div class="sur-row">
                <span class="sur-label">Базовая комиссия</span>
                <span class="sur-val" data-field="base-comm">${baseComm}%</span>
            </div>
            <div class="sur-row">
                <span class="sur-label">Скорректированная комиссия</span>
                <span class="sur-val ${adjustedComm > baseComm ? 'negative' : adjustedComm < baseComm ? 'positive' : ''}" data-field="adj-comm">${adjustedComm.toFixed(2)}%</span>
            </div>
            <div class="sur-divider"></div>
            <div class="sur-row">
                <span class="sur-label">Комиссия базовая (1 шт)</span>
                <span class="sur-val" data-field="base-amt">${formatMoney(baseCommAmt)}</span>
            </div>
            <div class="sur-row">
                <span class="sur-label">Комиссия с кС (1 шт)</span>
                <span class="sur-val" data-field="adj-amt">${formatMoney(adjustedCommAmt)}</span>
            </div>
            <div class="sur-divider"></div>
            <div class="sur-row sur-row-diff">
                <span class="sur-label">${diff >= 0 ? '💸 Переплата (1 шт)' : '💰 Экономия (1 шт)'}</span>
                <span class="sur-val ${diff > 0 ? 'negative' : diff < 0 ? 'positive' : ''}" data-field="diff1">${diff > 0 ? '+' : ''}${formatMoney(diff)}</span>
            </div>
            ${stock > 0 ? `<div class="sur-row sur-row-total">
                <span class="sur-label">${diff >= 0 ? '💸 Переплата' : '💰 Экономия'} (${formatNumber(stock)} шт)</span>
                <span class="sur-val ${diff > 0 ? 'negative' : diff < 0 ? 'positive' : ''}" data-field="diffall">${diff > 0 ? '+' : ''}${formatMoney(diff * stock)}</span>
            </div>` : ''}
        </div>`;
}

function updateSurchargeValues(popup, product, hours, type) {
    const baseComm = 30; // WB base commission
    const mp = calcMp(product);
    const stock = product.stock;
    if (!mp) return;
    
    const ks = calcKs(hours, type);
    const adjustedComm = baseComm + ks;
    const baseCommAmt = mp.commission;
    const adjustedCommAmt = Math.round(mp.sellPrice * adjustedComm / 100);
    const diff = adjustedCommAmt - baseCommAmt;
    
    const set = (field, val, cls) => {
        const el = popup.querySelector(`[data-field="${field}"]`);
        if (el) {
            el.textContent = val;
            if (cls !== undefined) el.className = 'sur-val ' + cls;
        }
    };
    
    set('ks', (ks > 0 ? '+' : '') + ks.toFixed(2) + '%', ks > 0 ? 'negative' : ks < 0 ? 'positive' : '');
    set('base-comm', baseComm + '%');
    set('adj-comm', adjustedComm.toFixed(2) + '%', adjustedComm > baseComm ? 'negative' : adjustedComm < baseComm ? 'positive' : '');
    set('base-amt', formatMoney(baseCommAmt));
    set('adj-amt', formatMoney(adjustedCommAmt));
    
    // Update diff label text + value
    const diff1Row = popup.querySelector('[data-field="diff1"]');
    if (diff1Row) {
        const label = diff1Row.closest('.sur-row').querySelector('.sur-label');
        if (label) label.textContent = diff >= 0 ? '💸 Переплата (1 шт)' : '💰 Экономия (1 шт)';
        diff1Row.textContent = (diff > 0 ? '+' : '') + formatMoney(diff);
        diff1Row.className = 'sur-val ' + (diff > 0 ? 'negative' : diff < 0 ? 'positive' : '');
    }
    
    const diffAllEl = popup.querySelector('[data-field="diffall"]');
    if (diffAllEl && stock > 0) {
        const label = diffAllEl.closest('.sur-row').querySelector('.sur-label');
        if (label) label.textContent = (diff >= 0 ? '💸 Переплата' : '💰 Экономия') + ` (${formatNumber(stock)} шт)`;
        diffAllEl.textContent = (diff > 0 ? '+' : '') + formatMoney(diff * stock);
        diffAllEl.className = 'sur-val ' + (diff > 0 ? 'negative' : diff < 0 ? 'positive' : '');
    }
}

// ===== PRODUCT MODAL =====
function openProductModal(p) {
    const mp = calcMp(p);
    const coef = getCoef(p);
    const delivery = getDelivery(p.article);
    const stock = p.stock;
    const hasNds = isNds(p.article);
    
    let mpBlock = '';
    if (mp) {
        const profitClass = mp.profit > 0 ? 'positive' : mp.profit < 0 ? 'negative' : 'zero';
        const commPct = getCommission(p.article);
        mpBlock = `
        <div class="modal-section">
            <h3 class="modal-section-title">
                <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="14" height="14" rx="2"/><path d="M5 9h8M9 5v8"/></svg>
                МП Калькулятор (Комиссия ${commPct}%, Доставка ${delivery}₽, Налог ${mpConfig.tax}%)
            </h3>
            <div class="modal-breakdown">
                <div class="breakdown-row header-row">
                    <span></span><span>За 1 шт</span><span>За ${stock} шт</span>
                </div>
                <div class="breakdown-row sell-row">
                    <span class="br-label">💰 Цена на МП</span>
                    <span class="br-value accent">${formatMoney(mp.sellPrice)}</span>
                    <span class="br-value accent">${stock > 0 ? formatMoney(mp.sellPrice * stock) : '—'}</span>
                </div>
                <div class="breakdown-row">
                    <span class="br-label">📦 Доставка</span>
                    <span class="br-value">${formatMoney(mp.delivery)}</span>
                    <span class="br-value">${stock > 0 ? formatMoney(mp.delivery * stock) : '—'}</span>
                </div>
                <div class="breakdown-row warn-row">
                    <span class="br-label">🏪 Комиссия МП (${commPct}%)</span>
                    <span class="br-value orange">−${formatMoney(mp.commission)}</span>
                    <span class="br-value orange">${stock > 0 ? '−' + formatMoney(mp.commission * stock) : '—'}</span>
                </div>
                <div class="breakdown-row warn-row">
                    <span class="br-label">📋 Налог (${mpConfig.tax}%)</span>
                    <span class="br-value red">−${formatMoney(mp.tax)}</span>
                    <span class="br-value red">${stock > 0 ? '−' + formatMoney(mp.tax * stock) : '—'}</span>
                </div>
                <div class="breakdown-row">
                    <span class="br-label">🏭 Себестоимость</span>
                    <span class="br-value">−${formatMoney(p.cost_price)}</span>
                    <span class="br-value">${stock > 0 ? '−' + formatMoney(p.cost_price * stock) : '—'}</span>
                </div>
                <div class="breakdown-divider"></div>
                <div class="breakdown-row profit-row">
                    <span class="br-label">✅ Чистая прибыль</span>
                    <span class="br-value ${profitClass} big">${formatMoney(mp.profit)}</span>
                    <span class="br-value ${profitClass} big">${stock > 0 ? formatMoney(mp.profit * stock) : '—'}</span>
                </div>
            </div>
        </div>`;
    }

    const content = `
        <div class="modal-header">
            <div class="modal-title-group">
                <span class="modal-article">${escapeHtml(p.article)}</span>
                <h2 class="modal-title">${escapeHtml(p.name)}</h2>
            </div>
            <button class="modal-close" title="Закрыть">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
        </div>
        
        <div class="modal-body">
            <div class="modal-info-grid">
                <div class="modal-info-card">
                    <span class="mic-label">Категория</span>
                    <span class="mic-value">${escapeHtml(p.top_category)}</span>
                    <span class="mic-sub">${escapeHtml(p.sub_category)}</span>
                </div>
                <div class="modal-info-card">
                    <span class="mic-label">Остаток</span>
                    <span class="mic-value ${stock > 0 ? 'green' : 'red'}">${formatNumber(stock)} шт</span>
                </div>
                <div class="modal-info-card">
                    <span class="mic-label">Кэф наценки</span>
                    <span class="mic-value">${coef ? '×' + coef.toFixed(1) : '—'}</span>
                </div>
                <div class="modal-info-card">
                    <span class="mic-label">НДС 5%</span>
                    <span class="mic-value ${hasNds ? 'amber' : ''}">${hasNds ? 'Да' : 'Нет'}</span>
                </div>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
                    Цены
                </h3>
                <div class="modal-prices">
                    <div class="price-card">
                        <span class="pc-label">Учетная</span>
                        <span class="pc-price">${p.cost_price ? formatMoney(p.cost_price) : '—'}</span>
                        <span class="pc-total">${p.cost_price && stock > 0 ? formatMoney(p.cost_price * stock) : '—'}</span>
                    </div>
                    <div class="price-card">
                        <span class="pc-label">Спец Опт</span>
                        <span class="pc-price">${p.spec_opt ? formatMoney(p.spec_opt) : '—'}</span>
                        <span class="pc-total">${p.spec_opt && stock > 0 ? formatMoney(p.spec_opt * stock) : '—'}</span>
                    </div>
                    <div class="price-card${getOptDyn(p) === p.spec_opt && p.spec_opt ? ' spec-active' : ''}">
                        <span class="pc-label">Базовая цена${optDynMap[p.article] !== undefined ? ' ✏️' : (getOptDyn(p) === p.spec_opt && p.spec_opt ? ' ⭐' : '')}</span>
                        <span class="pc-price">${getOptDyn(p) ? formatMoney(getOptDyn(p)) : '—'}</span>
                        <span class="pc-total">${getOptDyn(p) && stock > 0 ? formatMoney(getOptDyn(p) * stock) : '—'}</span>
                    </div>
                </div>
            </div>

            ${mpBlock}
        </div>`;
    
    document.getElementById('modalContent').innerHTML = content;
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== UPDATE STATS (without full render) =====
function updateStats() {
    const catProducts = getCategoryProducts();
    const totalSum = catProducts.reduce((s, p) => {
        const price = currentPrice === 'opt_dyn' ? getEffectiveOptDyn(p) : p[currentPrice];
        return (p.stock > 0 && price) ? s + p.stock * price : s;
    }, 0);
    document.getElementById('statTotalSumValue').textContent = formatMoney(totalSum);
    updateNdsStats();
    if (mpCalcEnabled) {
        let totalTax = 0, totalComm = 0, totalProfit = 0, totalSellRevenue = 0, totalGross = 0;
        catProducts.forEach(p => {
            if (p.stock > 0) {
                const mp = calcMp(p);
                if (mp) {
                    totalSellRevenue += mp.sellPrice * p.stock;
                    totalTax += mp.tax * p.stock;
                    totalComm += mp.commission * p.stock;
                    totalProfit += mp.profit * p.stock;
                    totalGross += mp.optDyn * p.stock;
                }
            }
        });
        document.getElementById('statMpRevenue').textContent = formatMoney(Math.round(totalSellRevenue));
        document.getElementById('statTaxTotal').textContent = formatMoney(Math.round(totalTax));
        document.getElementById('statCommTotal').textContent = formatMoney(Math.round(totalComm));
        document.getElementById('statProfitTotal').textContent = formatMoney(Math.round(totalProfit));
        document.getElementById('statProfitTotal').style.color = totalProfit >= 0 ? '#34d399' : '#f87171';
        const grossEl = document.getElementById('statGrossTotal');
        if (grossEl) grossEl.textContent = formatMoney(Math.round(totalGross));
    }
}

// ===== RENDER =====
function render() {
    let filtered = PRODUCTS.filter(p => {
        if (currentTopCategory && p.top_category !== currentTopCategory) return false;
        if (currentSubCategory && p.sub_category !== currentSubCategory) return false;
        if (filterInStock && p.stock <= 0) return false;
        if (searchQuery) {
            const q = searchQuery;
            if (!p.article.toLowerCase().includes(q) && !p.name.toLowerCase().includes(q) && !p.sub_category.toLowerCase().includes(q)) return false;
        }
        return true;
    });

    currentShownArticles = filtered.map(p => p.article);

    // Sync header checkbox on every render
    const allInSet = currentShownArticles.length > 0 && currentShownArticles.every(art => selectedArticles.has(art));
    const headerCheck = document.getElementById('selectAllItems');
    if (headerCheck) headerCheck.checked = allInSet;

    // Sort
    if (sortField) {
        filtered.sort((a, b) => {
            let va, vb;
            switch (sortField) {
                case 'article': va = a.article.toLowerCase(); vb = b.article.toLowerCase(); break;
                case 'name': va = a.name.toLowerCase(); vb = b.name.toLowerCase(); break;
                case 'stock': va = a.stock; vb = b.stock; break;
                case 'coef': va = getCoef(a) || 0; vb = getCoef(b) || 0; break;
                case 'price': va = a[currentPrice] || 0; vb = b[currentPrice] || 0; break;
                case 'sellprice':
                    const spA = calcMp(a); const spB = calcMp(b);
                    va = spA ? spA.sellPrice : 0; vb = spB ? spB.sellPrice : 0; break;
                case 'profit':
                    const mpA = calcMp(a); const mpB = calcMp(b);
                    va = mpA ? mpA.profit : -Infinity; vb = mpB ? mpB.profit : -Infinity; break;
                default: return 0;
            }
            if (va < vb) return sortDir === 'asc' ? -1 : 1;
            if (va > vb) return sortDir === 'asc' ? 1 : -1;
            return 0;
        });
    }

    // Stats
    const catProducts = getCategoryProducts();
    const totalProducts = catProducts.length;
    const inStockProducts = catProducts.filter(p => p.stock > 0).length;
    const totalStockUnits = catProducts.reduce((s, p) => s + p.stock, 0);
    const totalSum = catProducts.reduce((s, p) => {
        const price = currentPrice === 'opt_dyn' ? getEffectiveOptDyn(p) : p[currentPrice];
        return (p.stock > 0 && price) ? s + p.stock * price : s;
    }, 0);
    const filteredSum = filtered.reduce((s, p) => {
        const price = currentPrice === 'opt_dyn' ? getEffectiveOptDyn(p) : p[currentPrice];
        return (p.stock > 0 && price) ? s + p.stock * price : s;
    }, 0);

    document.getElementById('statTotalValue').textContent = totalProducts;
    document.getElementById('statInStockValue').textContent = inStockProducts;
    document.getElementById('statTotalStockValue').textContent = formatNumber(totalStockUnits);
    document.getElementById('statTotalSumValue').textContent = formatMoney(totalSum);
    updateNdsStats();

    // MP Stats
    if (mpCalcEnabled) {
        let totalTax = 0, totalComm = 0, totalProfit = 0, totalSellRevenue = 0, totalGross = 0;
        catProducts.forEach(p => {
            if (p.stock > 0) {
                const mp = calcMp(p);
                if (mp) {
                    totalSellRevenue += mp.sellPrice * p.stock;
                    totalTax += mp.tax * p.stock;
                    totalComm += mp.commission * p.stock;
                    totalProfit += mp.profit * p.stock;
                    totalGross += mp.optDyn * p.stock;
                }
            }
        });
        document.getElementById('statMpRevenue').textContent = formatMoney(Math.round(totalSellRevenue));
        document.getElementById('statTaxTotal').textContent = formatMoney(Math.round(totalTax));
        document.getElementById('statCommTotal').textContent = formatMoney(Math.round(totalComm));
        document.getElementById('statProfitTotal').textContent = formatMoney(Math.round(totalProfit));
        document.getElementById('statProfitTotal').style.color = totalProfit >= 0 ? '#34d399' : '#f87171';
        const grossEl = document.getElementById('statGrossTotal');
        if (grossEl) grossEl.textContent = formatMoney(Math.round(totalGross));
    }

    // Table
    const tbody = document.getElementById('tableBody');
    const colSpan = mpCalcEnabled ? 17 : 10;

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${colSpan}"><div class="empty-state"><svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="24" r="20"/><path d="M16 20h0M32 20h0M18 30s2 4 6 4 6-4 6-4"/></svg><p>Товары не найдены</p></div></td></tr>`;
    } else {
        let html = '';
        filtered.forEach((p, i) => {
            const isSelected = selectedArticles.has(p.article);
            const rawOptDyn = getOptDyn(p);
            const effectiveOptDyn = getEffectiveOptDyn(p);
            const price = currentPrice === 'opt_dyn' ? effectiveOptDyn : p[currentPrice];
            const sum = (p.stock > 0 && price) ? p.stock * price : 0;
            const coef = getCoef(p);
            const coefDisplay = coef !== null ? coef.toFixed(1) : '—';
            const coefClass = coef !== null ? (coef <= 2.5 ? 'coef-low' : coef <= 3.5 ? 'coef-mid' : 'coef-high') : 'coef-none';
            const hasNds = isNds(p.article);
            const delay = Math.min(i * 10, 500);
            const prodDelivery = getDelivery(p.article);
            const isCustomDelivery = deliveryMap[p.article] !== undefined;
            const prodCommission = getCommission(p.article);
            const isCustomCommission = commissionMap[p.article] !== undefined;
            const isCustomOptDyn = optDynMap[p.article] !== undefined;

            // MP columns
            let mpCols = '';
            if (mpCalcEnabled) {
                const mp = calcMp(p);
                
                // Commission input column
                mpCols += `<td class="cell-mp-comm-input">
                    <input type="number" class="commission-input ${isCustomCommission ? 'custom' : ''}" 
                        data-article="${escapeHtml(p.article)}" 
                        value="${prodCommission}" min="0" max="99" step="1" 
                        title="Комиссия % для ${escapeHtml(p.article)}">
                    <button class="surcharge-clock" data-article="${escapeHtml(p.article)}" title="Калькулятор переплаты">
                        <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6" cy="6" r="5"/><path d="M6 3v3l2 1.5"/></svg>
                    </button>
                </td>`;
                
                // Delivery input column
                mpCols += `<td class="cell-mp-deliv">
                    <input type="number" class="delivery-input ${isCustomDelivery ? 'custom' : ''}" 
                        data-article="${escapeHtml(p.article)}" 
                        value="${prodDelivery}" min="0" step="50" 
                        title="Доставка для ${escapeHtml(p.article)}">
                </td>`;
                
                if (mp) {
                    const profitClass = mp.profit > 0 ? 'positive' : mp.profit < 0 ? 'negative' : 'zero';
                    const stock = p.stock;
                    const hasSt = stock > 0;

                    mpCols += `
                        <td class="cell-mp-sell">
                            ${formatMoney(mp.sellPrice)}
                            ${hasSt ? `<span class="mp-total">${formatMoney(mp.sellPrice * stock)}</span>` : ''}
                        </td>
                        <td class="cell-mp-spp" style="color:var(--accent-light);">
                            ${formatMoney(mp.sppPrice)}
                            ${hasSt ? `<span class="mp-total" style="color:var(--accent-light); opacity:0.8;">${formatMoney(mp.sppPrice * stock)}</span>` : ''}
                        </td>
                        <td class="cell-mp-tax">
                            ${formatMoney(mp.tax)}
                            ${hasSt ? `<span class="mp-total">${formatMoney(mp.tax * stock)}</span>` : ''}
                        </td>
                        <td class="cell-mp-comm">
                            ${formatMoney(mp.commission)}
                            ${hasSt ? `<span class="mp-total">${formatMoney(mp.commission * stock)}</span>` : ''}
                        </td>
                        <td class="cell-mp-profit ${profitClass}">
                            ${formatMoney(mp.profit)}
                            ${hasSt ? `<span class="mp-total ${profitClass}">${formatMoney(mp.profit * stock)}</span>` : ''}
                        </td>`;
                } else {
                    mpCols += `
                        <td class="cell-mp-sell">—</td>
                        <td class="cell-mp-spp">—</td>
                        <td class="cell-mp-tax">—</td>
                        <td class="cell-mp-comm">—</td>
                        <td class="cell-mp-profit zero">—</td>`;
                }
            }

            html += `<tr style="animation-delay:${delay}ms" class="${isSelected ? 'row-selected' : ''}">
                <td class="cell-select">
                    <label class="row-select-label">
                        <input type="checkbox" class="row-checkbox" data-article="${escapeHtml(p.article)}" ${isSelected ? 'checked' : ''}>
                        <span class="checkbox-custom"></span>
                    </label>
                </td>
                <td class="cell-num">${i + 1}</td>
                <td class="cell-article"><a href="#" class="article-link" data-article="${escapeHtml(p.article)}">${highlightMatch(escapeHtml(p.article), searchQuery)}</a></td>
                <td class="cell-name">${highlightMatch(escapeHtml(p.name), searchQuery)}</td>
                <td class="cell-cat"><span class="cat-badge" title="${escapeHtml(p.sub_category)}">${escapeHtml(p.sub_category)}</span></td>
                <td class="cell-stock"><span class="stock-badge ${p.stock > 0 ? 'has-stock' : 'no-stock'}">${formatNumber(p.stock)}</span></td>
                <td class="cell-coef">
                    <span class="coef-badge ${coefClass}">×${coefDisplay}</span>
                    ${coef !== null ? `<button class="coef-gear" data-article="${escapeHtml(p.article)}" title="Симулятор кэф наценки">
                        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 9a2 2 0 100-4 2 2 0 000 4z"/><path d="M11.4 8.6l.9.5a.5.5 0 01.2.6l-.5 1a.5.5 0 01-.6.3l-1-.2a4.4 4.4 0 01-.9.5l-.2 1a.5.5 0 01-.5.4H6.2a.5.5 0 01-.5-.4l-.2-1a4.4 4.4 0 01-.9-.5l-1 .2a.5.5 0 01-.6-.3l-.5-1a.5.5 0 01.2-.6l.9-.5a4 4 0 010-1l-.9-.6a.5.5 0 01-.2-.5l.5-1a.5.5 0 01.6-.3l1 .2a4.4 4.4 0 01.9-.5l.2-1a.5.5 0 01.5-.4h1.6a.5.5 0 01.5.4l.2 1 .9.5 1-.2a.5.5 0 01.6.3l.5 1a.5.5 0 01-.2.5l-.9.6a4 4 0 010 1z"/></svg>
                    </button>` : ''}
                </td>
                <td class="cell-price ${price == null ? 'no-price' : ''}">
                    ${currentPrice === 'opt_dyn' && p.cost_price 
                        ? `<input type="number" class="optdyn-input ${isCustomOptDyn ? 'custom' : ''}" 
                            data-article="${escapeHtml(p.article)}" 
                            value="${rawOptDyn || ''}" min="0" step="10" 
                            title="Опт динамика для ${escapeHtml(p.article)}">`
                        : (price != null ? formatMoney(price) : '—')}
                </td>
                <td class="cell-sum ${sum === 0 ? 'zero' : ''}">${sum > 0 ? formatMoney(sum) : '—'}</td>
                ${mpCols}
                <td class="cell-nds">
                    <label class="nds-toggle" title="НДС 5%">
                        <input type="checkbox" class="nds-checkbox" data-article="${escapeHtml(p.article)}" ${hasNds ? 'checked' : ''}>
                        <span class="nds-slider"></span>
                    </label>
                </td>
            </tr>`;
        });
        tbody.innerHTML = html;
    }

    // Footer
    const filteredStockUnits = filtered.reduce((s, p) => s + p.stock, 0);
    let footerText = `Показано: ${filtered.length} из ${totalProducts}  •  Остаток: ${formatNumber(filteredStockUnits)} шт  •  Сумма: ${formatMoney(filteredSum)}`;
    if (mpCalcEnabled) {
        let filteredProfit = 0;
        filtered.forEach(p => {
            if (p.stock > 0) {
                const mp = calcMp(p);
                if (mp) filteredProfit += mp.profit * p.stock;
            }
        });
        footerText += `  •  Прибыль: ${formatMoney(Math.round(filteredProfit))}`;
    }
    document.getElementById('showingCount').textContent = footerText;
    updateSelectionToolbar();
}

// ===== UTILS =====
function getCoef(p) {
    const optDyn = getEffectiveOptDyn(p);
    return (p.cost_price && optDyn) ? optDyn / p.cost_price : null;
}

function formatNumber(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function formatMoney(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function highlightMatch(html, query) {
    if (!query) return html;
    return html.replace(new RegExp(`(${escapeRegex(query)})`, 'gi'), '<mark>$1</mark>');
}

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ===== SIMULATION BASKET =====
function addToSimBasket(product, newCoef) {
    const costPrice = product.cost_price;
    const newOptDyn = Math.round(costPrice * newCoef);
    const mp = calcMp(product, newOptDyn);
    if (!mp) return;
    
    simBasket[product.article] = {
        article: product.article,
        name: product.name,
        stock: product.stock,
        costPrice: costPrice,
        coef: newCoef,
        optDyn: mp.optDyn,
        sellPrice: mp.sellPrice,
        sppPrice: mp.sppPrice,
        tax: mp.tax,
        commission: mp.commission,
        profit: mp.profit,
        delivery: mp.delivery,
        commissionPct: mp.commissionPct,
        hasNds: isNds(product.article)
    };
    saveSimBasket();
    updateBasketBadge();
}

function removeFromSimBasket(article) {
    delete simBasket[article];
    saveSimBasket();
    updateBasketBadge();
    renderSimBasketTable();
}

function clearSimBasket() {
    simBasket = {};
    saveSimBasket();
    updateBasketBadge();
    renderSimBasketTable();
}

function openSimBasket() {
    renderSimBasketTable();
    document.getElementById('simBasketModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSimBasket() {
    const basketModal = document.getElementById('simBasketModal');
    const basketContainer = document.getElementById('basketModalContainer');
    if (basketModal) basketModal.classList.remove('active');
    if (basketContainer) {
        basketContainer.style.left = '';
        basketContainer.style.top = '';
        basketContainer.style.width = '';
        basketContainer.style.height = '';
        basketContainer.style.transform = '';
    }
    document.body.style.overflow = '';
}

function renderSimBasketTable() {
    const items = Object.values(simBasket);
    const container = document.getElementById('simBasketContent');
    if (!container) return;
    
    if (items.length === 0) {
        container.innerHTML = `
            <div class="basket-empty">
                <svg width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3">
                    <rect x="8" y="12" width="48" height="40" rx="4"/>
                    <path d="M20 12V8a4 4 0 018 0v4"/>
                    <path d="M24 28v12M18 34h12"/>
                </svg>
                <p>Нет сохранённых симуляций</p>
                <span>Откройте симулятор ⚙ у товара, измените кэф и нажмите «Отправить»</span>
            </div>`;
        return;
    }
    
    let totalRevenue = 0, totalSpp = 0, totalProfit = 0, totalTax = 0, totalComm = 0, totalItems = 0, totalClean = 0;
    
    let html = `
        <div class="basket-toolbar">
            <span class="basket-count">📋 ${items.length} ${items.length === 1 ? 'товар' : items.length < 5 ? 'товара' : 'товаров'}</span>
            <div class="basket-spp-block">
                <label for="basketSpp">СПП покупателя:</label>
                <div class="basket-spp-input">
                    <input type="number" id="basketSpp" value="${mpConfig.spp}" min="0" max="100" step="1">
                    <span>%</span>
                </div>
            </div>
            <div class="basket-btns">
                <button class="basket-excel-btn" id="exportSimBasket">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14.5l2-2.5m0 0l2 2.5m-2-2.5V3m2 1h.5a2.5 2.5 0 012.5 2.5v7a2.5 2.5 0 01-2.5 2.5h-5a2.5 2.5 0 01-2.5-2.5v-7A2.5 2.5 0 014 4h.5"/></svg>
                    Скачать Excel
                </button>
                <button class="basket-clear-btn" id="clearSimBasket">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h10M5 6V5a2 2 0 012-2h2a2 2 0 012 2v1M6 8v4M10 8v4"/></svg>
                    Очистить все
                </button>
            </div>
        </div>
        <div class="basket-table-wrap">
        <table class="basket-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Артикул</th>
                    <th>Наименование</th>
                    <th>Ост.</th>
                    <th>НДС</th>
                    <th>Кэф</th>
                    <th>Опт дин.</th>
                    <th>Цена МП</th>
                    <th>Цена СПП</th>
                    <th>Налог</th>
                    <th>Комиссия</th>
                    <th>Прибыль (1шт)</th>
                    <th>Прибыль (всего)</th>
                    <th style="color:var(--green); opacity:0.9;">Чистая (с мат. и нал.)</th>
                    <th style="color:var(--green); opacity:0.9;">ИТОГО (с мат. и нал.)</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>`;
    
    items.forEach((item, i) => {
        const totalItemProfit = item.profit * item.stock;
        const totalItemRevenue = item.sellPrice * item.stock;
        const profitClass = item.profit > 0 ? 'positive' : item.profit < 0 ? 'negative' : '';
        
        const totalItemSpp = (item.sppPrice || 0) * item.stock;
        
        if (item.stock > 0) {
            totalRevenue += totalItemRevenue;
            totalSpp += totalItemSpp;
            totalProfit += totalItemProfit;
            totalTax += item.tax * item.stock;
            totalComm += item.commission * item.stock;
            totalItems += item.stock;
            totalClean += item.optDyn * item.stock;
        }
        
        html += `
            <tr>
                <td class="basket-num">${i + 1}</td>
                <td class="basket-article">${escapeHtml(item.article)}</td>
                <td class="basket-name">${escapeHtml(item.name)}</td>
                <td class="basket-stock">${formatNumber(item.stock)}</td>
                <td>${item.hasNds ? '<span class="nds-yes">5%</span>' : '—'}</td>
                <td><span class="coef-badge ${item.coef <= 2.5 ? 'coef-low' : item.coef <= 3.5 ? 'coef-mid' : 'coef-high'}">×${item.coef.toFixed(1)}</span></td>
                <td>${formatMoney(item.optDyn)}</td>
                <td class="basket-accent">${formatMoney(item.sellPrice)}</td>
                <td style="color:var(--accent-light);font-weight:700;">${formatMoney(item.sppPrice || 0)}</td>
                <td>${formatMoney(item.tax)}</td>
                <td>${formatMoney(item.commission)}</td>
                <td class="${profitClass}">${formatMoney(item.profit)}</td>
                <td class="${profitClass} basket-profit-total">${item.stock > 0 ? formatMoney(Math.round(totalItemProfit)) : '—'}</td>
                <td style="color:var(--green); font-weight:600;">${formatMoney(item.optDyn)}</td>
                <td style="color:var(--green); font-weight:700;">${item.stock > 0 ? formatMoney(Math.round(item.optDyn * item.stock)) : '—'}</td>
                <td><button class="basket-remove-btn" data-article="${escapeHtml(item.article)}" title="Удалить">
                    <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l8 8M12 4l-8 8"/></svg>
                </button></td>
            </tr>`;
    });
    
    const totalProfitClass = totalProfit > 0 ? 'positive' : totalProfit < 0 ? 'negative' : '';
    
    html += `
            </tbody>
            <tfoot>
                <tr class="basket-totals">
                    <td colspan="3">ИТОГО</td>
                    <td class="basket-stock">${formatNumber(totalItems)} шт</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="basket-accent">${formatMoney(Math.round(totalRevenue))}</td>
                    <td style="color:var(--accent-light); font-weight:700;">${formatMoney(Math.round(totalSpp))}</td>
                    <td>${formatMoney(Math.round(totalTax))}</td>
                    <td>${formatMoney(Math.round(totalComm))}</td>
                    <td></td>
                    <td class="${totalProfitClass} basket-profit-total">${formatMoney(Math.round(totalProfit))}</td>
                    <td style="color:var(--green); font-weight:700;"></td>
                    <td style="color:var(--green); font-weight:700;">${formatMoney(Math.round(totalClean))}</td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        </div>`;
    
    container.innerHTML = html;
}

function initBasketListeners() {
    // Open basket
    const basketBtn = document.getElementById('simBasketBtn');
    if (basketBtn) {
        basketBtn.addEventListener('click', openSimBasket);
    }
    
    // Close basket modal
    const basketModal = document.getElementById('simBasketModal');
    const basketContainer = document.getElementById('basketModalContainer');
    const basketHeader = document.getElementById('basketModalHeader');
    const resizer = document.getElementById('basketModalResizer');
    
    if (basketModal) {
        basketModal.addEventListener('click', (e) => {
            if (e.target.id === 'simBasketModal' || e.target.closest('.basket-modal-close')) {
                closeSimBasket();
            }
            // Remove single item
            const removeBtn = e.target.closest('.basket-remove-btn');
            if (removeBtn) {
                removeFromSimBasket(removeBtn.dataset.article);
            }
            // Clear all
            if (e.target.closest('#clearSimBasket')) {
                clearSimBasket();
            }
            // Export excel
            if (e.target.closest('#exportSimBasket')) {
                exportSimToExcel();
            }
        });
    }

    // Dragging
    if (basketHeader && basketContainer) {
        let isDragging = false, dragX = 0, dragY = 0;
        basketHeader.addEventListener('pointerdown', (e) => {
            if (e.target.closest('button')) return;
            isDragging = true;
            
            // Fix position by removing transform and setting real offset
            const rect = basketContainer.getBoundingClientRect();
            basketContainer.style.transform = 'none';
            basketContainer.style.left = rect.left + 'px';
            basketContainer.style.top = rect.top + 'px';
            
            dragX = e.clientX - rect.left;
            dragY = e.clientY - rect.top;
            basketHeader.setPointerCapture(e.pointerId);
            e.preventDefault();
        });
        basketHeader.addEventListener('pointermove', (e) => {
            if (!isDragging) return;
            const x = e.clientX - dragX;
            const y = e.clientY - dragY;
            basketContainer.style.left = x + 'px';
            basketContainer.style.top = y + 'px';
        });
        basketHeader.addEventListener('pointerup', () => isDragging = false);
    }

    // Resizing
    if (resizer && basketContainer) {
        let isResizing = false;
        resizer.addEventListener('pointerdown', (e) => {
            isResizing = true;
            
            // Fix position by removing transform same as drag
            const rect = basketContainer.getBoundingClientRect();
            basketContainer.style.transform = 'none';
            basketContainer.style.left = rect.left + 'px';
            basketContainer.style.top = rect.top + 'px';
            
            resizer.setPointerCapture(e.pointerId);
            e.preventDefault();
        });
        window.addEventListener('pointermove', (e) => {
            if (!isResizing) return;
            const w = e.clientX - basketContainer.offsetLeft;
            const h = e.clientY - basketContainer.offsetTop;
            if (w > 400) basketContainer.style.width = w + 'px';
            if (h > 300) basketContainer.style.height = h + 'px';
        });
        window.addEventListener('pointerup', () => isResizing = false);
    }
}

function exportSimToExcel() {
    const items = Object.values(simBasket);
    if (items.length === 0) return;

    // Build HTML table that Excel understands natively (no libraries needed)
    let html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
<head><meta charset="utf-8">
<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
<x:Name>Сводка</x:Name>
<x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
</x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
<style>th{background:#4472C4;color:#fff;font-weight:bold;padding:8px;border:1px solid #ccc}td{padding:6px 8px;border:1px solid #ddd}tr:nth-child(even){background:#D9E2F3}.num{mso-number-format:"\\#\\,\\#\\#0";text-align:right}.coef{mso-number-format:"0\\.0";text-align:center}</style>
</head><body><table>`;

    // Header
    html += '<tr><th>Артикул</th><th>Наименование</th><th>Остаток (шт)</th><th>НДС</th><th>Кэф</th><th>Опт дин (1шт)</th><th>Цена МП (1шт)</th><th>Налог (1шт)</th><th>Комиссия (1шт)</th><th>Прибыль (1шт)</th><th>Прибыль (всего)</th><th>Прибыль с мат. и нал. (1шт)</th><th>Общая прибыль с мат. и нал.</th></tr>';

    // Data rows
    let totStock = 0, totSell = 0, totTax = 0, totComm = 0, totProfit = 0;
    items.forEach(item => {
        const profitAll = Math.round(item.profit * item.stock);
        totStock += item.stock;
        totSell += item.sellPrice * item.stock;
        totTax += item.tax * item.stock;
        totComm += item.commission * item.stock;
        totProfit += profitAll;
        html += '<tr>';
        html += '<td>' + item.article + '</td>';
        html += '<td>' + item.name + '</td>';
        html += '<td class="num">' + item.stock + '</td>';
        html += '<td style="text-align:center">' + (item.hasNds ? '5%' : '—') + '</td>';
        html += '<td class="coef">' + item.coef.toFixed(1) + '</td>';
        html += '<td class="num">' + item.optDyn + '</td>';
        html += '<td class="num">' + item.sellPrice + '</td>';
        html += '<td class="num">' + item.tax + '</td>';
        html += '<td class="num">' + item.commission + '</td>';
        html += '<td class="num">' + item.profit + '</td>';
        html += '<td class="num" style="font-weight:bold;color:' + (profitAll >= 0 ? '#2E7D32' : '#C62828') + '">' + profitAll + '</td>';
        html += '<td class="num">' + item.optDyn + '</td>';
        html += '<td class="num" style="font-weight:bold;color:#2E7D32">' + Math.round(item.optDyn * item.stock) + '</td>';
        html += '</tr>';
    });

    // Totals row
    html += '<tr style="background:#4472C4;color:#fff;font-weight:bold">';
    html += '<td colspan="2">ИТОГО</td>';
    html += '<td class="num">' + totStock + '</td>';
    html += '<td></td><td></td><td></td>';
    html += '<td class="num">' + Math.round(totSell) + '</td>';
    html += '<td class="num">' + Math.round(totTax) + '</td>';
    html += '<td class="num">' + Math.round(totComm) + '</td>';
    html += '<td></td>';
    html += '<td class="num">' + Math.round(totProfit) + '</td>';
    html += '<td></td>';
    html += '<td class="num">' + Math.round(items.reduce((s,i) => s + (i.optDyn * i.stock), 0)) + '</td>';
    html += '</tr>';

    html += '</table></body></html>';

    // Encode to base64 data URI — most reliable for file:// protocol
    const base64 = btoa(unescape(encodeURIComponent('\uFEFF' + html)));
    const dataUri = 'data:application/vnd.ms-excel;base64,' + base64;
    
    const a = document.createElement('a');
    a.href = dataUri;
    a.download = 'report.xls';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// ===== SELECTION TOOLBAR LOGIC =====
function initSelectionToolbar() {
    const toolbar = document.getElementById('selectionToolbar');
    if (!toolbar) return;

    toolbar.addEventListener('input', (e) => {
        if (e.target.classList.contains('sel-slider')) {
            bulkCoef = parseFloat(e.target.value);
            updateSelectionToolbar();
        }
    });

    toolbar.addEventListener('click', (e) => {
        if (e.target.closest('.sel-send-btn')) {
            bulkAddToSimBasket();
        }
    });
}

function updateSelectionToolbar() {
    const toolbar = document.getElementById('selectionToolbar');
    if (!toolbar) return;

    if (selectedArticles.size === 0) {
        toolbar.classList.remove('active');
        return;
    }

    toolbar.classList.add('active');
    
    // Calculate preview stats for selection at bulkCoef
    let totalRevenue = 0;
    let totalProfit = 0;
    let selectedCount = 0;

    selectedArticles.forEach(article => {
        const p = PRODUCTS.find(prod => prod.article === article);
        if (p && p.stock > 0) {
            const virtualMp = calcMp(p, Math.round(p.cost_price * bulkCoef));
            if (virtualMp) {
                totalRevenue += virtualMp.sellPrice * p.stock;
                totalProfit += virtualMp.profit * p.stock;
                selectedCount++;
            }
        }
    });

    toolbar.innerHTML = `
        <div class="sel-count">
            <span class="sel-count-val">${selectedArticles.size}</span>
            <span class="sel-count-label">выбрано</span>
        </div>
        <div class="sel-slider-wrap">
            <span class="sel-coef-label">Массовый кэф:</span>
            <span class="sel-coef-val">×${bulkCoef.toFixed(1)}</span>
            <input type="range" class="sel-slider" min="1.0" max="6.0" step="0.1" value="${bulkCoef}">
        </div>
        <div class="sel-stats">
            <div class="sel-stat-item">
                <span class="sel-stat-label">Прогноз выручки</span>
                <span class="sel-stat-val">${formatMoney(Math.round(totalRevenue))}</span>
            </div>
            <div class="sel-stat-item">
                <span class="sel-stat-label">Прогноз прибыли</span>
                <span class="sel-stat-val ${totalProfit > 0 ? 'positive' : totalProfit < 0 ? 'negative' : ''}">${formatMoney(Math.round(totalProfit))}</span>
            </div>
        </div>
        <button class="sel-send-btn">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5-5-5-5"/></svg>
            Отправить ${selectedArticles.size} шт
        </button>
    `;
}

function bulkAddToSimBasket() {
    let addCount = 0;
    selectedArticles.forEach(article => {
        const p = PRODUCTS.find(prod => prod.article === article);
        if (p) {
            addToSimBasket(p, bulkCoef);
            addCount++;
        }
    });
    
    const btn = document.querySelector('.sel-send-btn');
    if (btn) {
        btn.innerHTML = '✓ Добавлено';
        btn.style.background = 'var(--green)';
    }

    setTimeout(() => {
        selectedArticles.clear();
        document.getElementById('selectAllItems').checked = false;
        render();
    }, 800);
}

// ===== SALES SECTION =====
let salesDataRaw = [];
let salesSortField = 'count';
let salesSortDir = 'desc';

function initSalesSection() {
    const showSalesBtn = document.getElementById('showSalesBtn');
    const salesModal = document.getElementById('salesModal');
    const salesFileInput = document.getElementById('salesFileInput');
    const loadSalesBtn = document.getElementById('loadSalesBtn');
    const closeBtn = document.querySelector('.sales-close');

    if (showSalesBtn) {
        showSalesBtn.onclick = () => {
            if (typeof SALES_DATA !== 'undefined' && !salesDataRaw.length) {
                processSalesJson(SALES_DATA, true); // data already formatted?
            }
            salesModal.classList.add('active');
        };
    }
    if (closeBtn) closeBtn.onclick = () => salesModal.classList.remove('active');
}

function handleSalesFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);
        processSalesJson(json);
    };
    reader.readAsArrayBuffer(file);
}

function processSalesJson(json, isPreformatted = false) {
    if (isPreformatted) {
        salesDataRaw = json.map(s => {
            const p = PRODUCTS.find(prod => prod.article === s.article || prod.name === s.name);
            let coef = 0;
            if (p) {
                const base = getEffectiveOptDyn(p);
                if (base && p.cost_price) coef = base / p.cost_price;
            }
            return { ...s, coef };
        });
        renderSales();
        return;
    }
    const artKeys = ['Артикул поставщика', 'Артикул', 'Vendor Code', 'Supplier Article', 'Арт.'];
    const qtyKeys = ['Количество', 'Кол-во', 'Продано', 'Qty', 'Продано (шт)'];
    const nameKeys = ['Наименование', 'Название', 'Product Name', 'Предмет'];

    const summary = {};

    json.forEach(row => {
        let art = '';
        let qty = 0;
        let name = '';

        for (let k of artKeys) if (row[k] !== undefined) art = String(row[k]).trim();
        for (let k of qtyKeys) if (row[k] !== undefined) qty = parseFloat(row[k]) || 0;
        for (let k of nameKeys) if (row[k] !== undefined) name = String(row[k]).trim();

        if (art) {
            if (!summary[art]) summary[art] = { count: 0, name: name };
            summary[art].count += qty;
        }
    });

    salesDataRaw = Object.entries(summary).map(([art, info]) => {
        const p = PRODUCTS.find(prod => prod.article === art || prod.name === info.name);
        let coef = 0;
        if (p) {
            const base = getEffectiveOptDyn(p);
            if (base && p.cost_price) coef = base / p.cost_price;
        }
        return { article: art, name: info.name || (p?p.name:'—'), count: info.count, coef: coef };
    }).filter(s => s.count > 0);

    renderSales();
}

function renderSales() {
    const body = document.getElementById('salesBody');
    if (!salesDataRaw.length) {
        body.innerHTML = '<div class="sales-empty"><p>Данные не найдены. Проверьте содержимое файла.</p></div>';
        return;
    }

    salesDataRaw.sort((a, b) => {
        let vA = a[salesSortField], vB = b[salesSortField];
        if (typeof vA === 'string') { vA = vA.toLowerCase(); vB = vB.toLowerCase(); }
        return salesSortDir === 'desc' ? (vA < vB ? 1 : -1) : (vA > vB ? 1 : -1);
    });

    let html = `<table class="sales-table"><thead><tr>
        <th onclick="toggleSalesSort('num')">#</th>
        <th>Арт</th>
        <th onclick="toggleSalesSort('name')" style="cursor:pointer">Название ${salesSortField==='name'?(salesSortDir==='desc'?'▼':'▲'):''}</th>
        <th onclick="toggleSalesSort('count')" style="cursor:pointer">Продажи шт. ${salesSortField==='count'?(salesSortDir==='desc'?'▼':'▲'):''}</th>
        <th onclick="toggleSalesSort('coef')" style="cursor:pointer">Тек. Кэф ${salesSortField==='coef'?(salesSortDir==='desc'?'▼':'▲'):''}</th>
    </tr></thead><tbody>`;

    salesDataRaw.forEach((s, i) => {
        html += `<tr>
            <td class="sales-rank">${i+1}</td>
            <td style="font-size:11px; color:var(--text-muted)">${s.article}</td>
            <td class="sales-name">${s.name}</td>
            <td class="sales-count">${formatNumber(Math.round(s.count))}</td>
            <td class="sales-coef-col">${s.coef ? '×' + s.coef.toFixed(2) : '—'}</td>
        </tr>`;
    });
    html += '</tbody></table>';
    body.innerHTML = html;
}

window.toggleSalesSort = function(f) {
    if (salesSortField === f) salesSortDir = salesSortDir === 'desc' ? 'asc' : 'desc';
    else { salesSortField = f; salesSortDir = 'desc'; }
    renderSales();
};
