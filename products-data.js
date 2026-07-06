/**
 * Central product catalog for Purvoday Chemicals LLP.
 * Used by the product portfolio grid, detail pages, specs sheet, and enquiry forms.
 */
const PURVODAY_PRODUCTS = [
    {
        slug: 'isopropyl-alcohol',
        name: 'Isopropyl Alcohol (IPA)',
        inquiryValue: 'Isopropyl Alcohol',
        category: 'Alcohols',
        formula: 'C<sub>3</sub>H<sub>8</sub>O',
        assay: '≥ 99.8%',
        moisture: '≤ 0.10% wt',
        specificGravity: '0.785 – 0.787',
        boilingPoint: '82.5 °C',
        applications: 'Pharmaceutical extraction, sanitizers, coatings, electronics cleaning, cosmetic formulations',
        industries: ['Pharmaceuticals', 'Electronics', 'Cosmetics', 'Healthcare'],
        packaging: ['190 kg HDPE Drums', 'ISO Tankers', 'IBC Totes', 'Bulk Tanker Loads'],
        image: 'images/drum-ipa.png'
    },
    {
        slug: 'acetone',
        name: 'Acetone',
        inquiryValue: 'Acetone',
        category: 'Ketones',
        formula: 'C<sub>3</sub>H<sub>6</sub>O',
        assay: '≥ 99.5%',
        moisture: '≤ 0.30% wt',
        specificGravity: '0.790 – 0.793',
        boilingPoint: '56.1 °C',
        applications: 'Laboratory solvent, acrylic plastics processing, fiberglass thinning, industrial degreasing',
        industries: ['Plastics', 'Automotive', 'Laboratory', 'Manufacturing'],
        packaging: ['160 kg Drums', 'ISO Tankers', 'Bulk Road Tankers'],
        image: 'images/drum-acetone.png'
    },
    {
        slug: 'toluene',
        name: 'Toluene',
        inquiryValue: 'Toluene',
        category: 'Solvents',
        formula: 'C<sub>7</sub>H<sub>8</sub>',
        assay: '≥ 99.8%',
        moisture: '≤ 0.03% wt',
        specificGravity: '0.865 – 0.868',
        boilingPoint: '110.6 °C',
        applications: 'Paint formulations, thinners, rubber adhesives, chemical syntheses, coatings',
        industries: ['Paints & Coatings', 'Rubber', 'Adhesives', 'Chemical Synthesis'],
        packaging: ['180 kg Drums', 'ISO Tankers', 'Bulk Tanker Loads'],
        image: 'images/drum-toluene.png'
    },
    {
        slug: 'methylene-dichloride',
        name: 'Methylene Dichloride (MDC)',
        inquiryValue: 'Methylene Dichloride (MDC)',
        category: 'Chlorinated Solvents',
        formula: 'CH<sub>2</sub>Cl<sub>2</sub>',
        assay: '≥ 99.5%',
        moisture: '≤ 0.05% wt',
        specificGravity: '1.325 – 1.327',
        boilingPoint: '39.8 °C',
        applications: 'Paint stripper, metal degreasing, pharmaceutical extraction, foam blowing',
        industries: ['Pharmaceuticals', 'Metal Finishing', 'Paints', 'Foam Manufacturing'],
        packaging: ['270 kg Drums', 'ISO Tankers', 'Bulk Shipments'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'chloroform',
        name: 'Chloroform',
        inquiryValue: 'Chloroform',
        category: 'Chlorinated Solvents',
        formula: 'CHCl<sub>3</sub>',
        assay: '≥ 99.0%',
        moisture: '≤ 0.05% wt',
        specificGravity: '1.483 – 1.489',
        boilingPoint: '61.2 °C',
        applications: 'Laboratory reagent, pharmaceutical intermediate, solvent extraction, chemical synthesis',
        industries: ['Pharmaceuticals', 'Laboratory', 'Chemical Research', 'Manufacturing'],
        packaging: ['250 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'ethyl-acetate',
        name: 'Ethyl Acetate',
        inquiryValue: 'Ethyl Acetate',
        category: 'Esters',
        formula: 'C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>',
        assay: '≥ 99.8%',
        moisture: '≤ 0.05% wt',
        specificGravity: '0.897 – 0.902',
        boilingPoint: '77.1 °C',
        applications: 'Flexographic printing inks, packaging films, synthetic leather, adhesives, decaffeination',
        industries: ['Printing & Packaging', 'Adhesives', 'Food Processing', 'Leather'],
        packaging: ['180 kg Drums', 'ISO Tankers', 'IBC Totes'],
        image: 'images/drum-ethyl-acetate.png'
    },
    {
        slug: 'xylene',
        name: 'Xylene',
        inquiryValue: 'Xylene',
        category: 'Solvents',
        formula: 'C<sub>8</sub>H<sub>10</sub>',
        assay: '≥ 99.0%',
        moisture: '≤ 0.05% wt',
        specificGravity: '0.864 – 0.870',
        boilingPoint: '138 – 140 °C',
        applications: 'Paint thinners, printing inks, rubber processing, leather tanning, chemical intermediates',
        industries: ['Paints & Coatings', 'Printing', 'Rubber', 'Leather'],
        packaging: ['180 kg Drums', 'ISO Tankers', 'Bulk Tanker Loads'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'n-butanol',
        name: 'N-Butanol (NBA)',
        inquiryValue: 'N-Butanol (NBA)',
        category: 'Alcohols',
        formula: 'C<sub>4</sub>H<sub>10</sub>O',
        assay: '≥ 99.5%',
        moisture: '≤ 0.10% wt',
        specificGravity: '0.809 – 0.813',
        boilingPoint: '117.7 °C',
        applications: 'Coatings, plasticizers, glycol ethers, extractants, chemical intermediates',
        industries: ['Coatings', 'Plastics', 'Pharmaceuticals', 'Chemical Synthesis'],
        packaging: ['160 kg Drums', 'ISO Tankers', 'Bulk Shipments'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'acetonitrile',
        name: 'Acetonitrile',
        inquiryValue: 'Acetonitrile',
        category: 'Nitriles',
        formula: 'CH<sub>3</sub>CN',
        assay: '≥ 99.9%',
        moisture: '≤ 0.05% wt',
        specificGravity: '0.782 – 0.784',
        boilingPoint: '81.6 °C',
        applications: 'HPLC mobile phase, pharmaceutical synthesis, battery electrolytes, solvent extraction',
        industries: ['Pharmaceuticals', 'Laboratory', 'Battery', 'Electronics'],
        packaging: ['160 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'thf',
        name: 'THF (Tetrahydrofuran)',
        inquiryValue: 'THF (Tetrahydrofuran)',
        category: 'Ethers',
        formula: 'C<sub>4</sub>H<sub>8</sub>O',
        assay: '≥ 99.9%',
        moisture: '≤ 0.05% wt',
        specificGravity: '0.887 – 0.889',
        boilingPoint: '66.0 °C',
        applications: 'Polymer synthesis, pharmaceutical reactions, PVC cements, coating formulations',
        industries: ['Pharmaceuticals', 'Polymers', 'Coatings', 'Adhesives'],
        packaging: ['180 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'n-hexane',
        name: 'N-Hexane',
        inquiryValue: 'N-Hexane',
        category: 'Aliphatic Solvents',
        formula: 'C<sub>6</sub>H<sub>14</sub>',
        assay: '≥ 99.0%',
        moisture: '≤ 0.05% wt',
        specificGravity: '0.659 – 0.661',
        boilingPoint: '68.7 °C',
        applications: 'Edible oil extraction, adhesive formulations, rubber cement, laboratory solvent',
        industries: ['Food Processing', 'Adhesives', 'Rubber', 'Laboratory'],
        packaging: ['140 kg Drums', 'ISO Tankers', 'Bulk Tanker Loads'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'cyclohexane',
        name: 'Cyclohexane',
        inquiryValue: 'Cyclohexane',
        category: 'Aliphatic Solvents',
        formula: 'C<sub>6</sub>H<sub>12</sub>',
        assay: '≥ 99.5%',
        moisture: '≤ 0.05% wt',
        specificGravity: '0.778 – 0.781',
        boilingPoint: '80.7 °C',
        applications: 'Nylon precursor, solvent extraction, paint formulations, chemical synthesis',
        industries: ['Textiles', 'Paints', 'Pharmaceuticals', 'Chemical Synthesis'],
        packaging: ['160 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'dioxane',
        name: '1,4-Dioxane',
        inquiryValue: '1,4-Dioxane',
        category: 'Ethers',
        formula: 'C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>',
        assay: '≥ 99.5%',
        moisture: '≤ 0.10% wt',
        specificGravity: '1.033 – 1.036',
        boilingPoint: '101.1 °C',
        applications: 'Laboratory solvent, pharmaceutical synthesis, resin processing, cellulose esters',
        industries: ['Pharmaceuticals', 'Laboratory', 'Resins', 'Chemical Research'],
        packaging: ['200 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'dmf',
        name: 'DMF (Dimethylformamide)',
        inquiryValue: 'DMF (Dimethylformamide)',
        category: 'Amides',
        formula: 'C<sub>3</sub>H<sub>7</sub>NO',
        assay: '≥ 99.8%',
        moisture: '≤ 0.05% wt',
        specificGravity: '0.944 – 0.946',
        boilingPoint: '153.0 °C',
        applications: 'Acrylic fiber spinning, polyurethane coatings, pharmaceutical synthesis, resin processing',
        industries: ['Textiles', 'Coatings', 'Pharmaceuticals', 'Polymers'],
        packaging: ['190 kg Drums', 'ISO Tankers', 'IBC Totes'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'dmso',
        name: 'DMSO (Dimethyl Sulfoxide)',
        inquiryValue: 'DMSO (Dimethyl Sulfoxide)',
        category: 'Sulfoxides',
        formula: 'C<sub>2</sub>H<sub>6</sub>OS',
        assay: '≥ 99.5%',
        moisture: '≤ 0.10% wt',
        specificGravity: '1.095 – 1.102',
        boilingPoint: '189.0 °C',
        applications: 'Pharmaceutical carrier, polymer processing, electronics cleaning, solvent extraction',
        industries: ['Pharmaceuticals', 'Electronics', 'Polymers', 'Agriculture'],
        packaging: ['225 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'npa',
        name: 'NPA (N-Propyl Alcohol)',
        inquiryValue: 'NPA (N-Propyl Alcohol)',
        category: 'Alcohols',
        formula: 'C<sub>3</sub>H<sub>8</sub>O',
        assay: '≥ 99.5%',
        moisture: '≤ 0.10% wt',
        specificGravity: '0.803 – 0.807',
        boilingPoint: '97.2 °C',
        applications: 'Coatings, printing inks, chemical intermediates, solvent formulations',
        industries: ['Coatings', 'Printing', 'Chemical Synthesis', 'Manufacturing'],
        packaging: ['160 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'benzene',
        name: 'Benzene',
        inquiryValue: 'Benzene',
        category: 'Aromatics',
        formula: 'C<sub>6</sub>H<sub>6</sub>',
        assay: '≥ 99.5%',
        moisture: '≤ 0.05% wt',
        specificGravity: '0.874 – 0.879',
        boilingPoint: '80.1 °C',
        applications: 'Styrene production, phenol synthesis, chemical intermediates, laboratory reagent',
        industries: ['Petrochemicals', 'Plastics', 'Pharmaceuticals', 'Laboratory'],
        packaging: ['180 kg Drums', 'ISO Tankers', 'Bulk Tanker Loads'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'peredine',
        name: 'Peredine',
        inquiryValue: 'Peredine',
        category: 'Heterocyclics',
        formula: 'C<sub>5</sub>H<sub>5</sub>N',
        assay: '≥ 99.5%',
        moisture: '≤ 0.10% wt',
        specificGravity: '0.978 – 0.982',
        boilingPoint: '115.2 °C',
        applications: 'Pharmaceutical intermediate, agrochemical synthesis, solvent, chemical reagent',
        industries: ['Pharmaceuticals', 'Agrochemicals', 'Laboratory', 'Chemical Synthesis'],
        packaging: ['200 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'mibk',
        name: 'MIBK (Methyl Isobutyl Ketone)',
        inquiryValue: 'MIBK (Methyl Isobutyl Ketone)',
        category: 'Ketones',
        formula: 'C<sub>6</sub>H<sub>12</sub>O',
        assay: '≥ 99.0%',
        moisture: '≤ 0.10% wt',
        specificGravity: '0.801 – 0.804',
        boilingPoint: '116.0 °C',
        applications: 'Surface coatings, rubber chemicals, adhesives, extraction solvent, nitrocellulose lacquers',
        industries: ['Coatings', 'Rubber', 'Adhesives', 'Manufacturing'],
        packaging: ['160 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'mek',
        name: 'MEK (Methyl Ethyl Ketone)',
        inquiryValue: 'MEK (Methyl Ethyl Ketone)',
        category: 'Ketones',
        formula: 'C<sub>4</sub>H<sub>8</sub>O',
        assay: '≥ 99.5%',
        moisture: '≤ 0.10% wt',
        specificGravity: '0.804 – 0.806',
        boilingPoint: '79.6 °C',
        applications: 'Surface coatings, adhesives, printing inks, synthetic leather, chemical intermediates',
        industries: ['Coatings', 'Printing', 'Adhesives', 'Leather'],
        packaging: ['160 kg Drums', 'ISO Tankers', 'Bulk Shipments'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'butyl-acetate',
        name: 'Butyl Acetate',
        inquiryValue: 'Butyl Acetate',
        category: 'Esters',
        formula: 'C<sub>6</sub>H<sub>12</sub>O<sub>2</sub>',
        assay: '≥ 99.5%',
        moisture: '≤ 0.05% wt',
        specificGravity: '0.878 – 0.882',
        boilingPoint: '126.1 °C',
        applications: 'Automotive coatings, wood finishes, lacquers, adhesives, flexographic inks',
        industries: ['Automotive', 'Wood Finishing', 'Coatings', 'Printing'],
        packaging: ['180 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    },
    {
        slug: 'carbon-tetrachloride',
        name: 'Carbon Tetrachloride (CCl4)',
        inquiryValue: 'Carbon Tetrachloride (CCl4)',
        category: 'Chlorinated Solvents',
        formula: 'CCl<sub>4</sub>',
        assay: '≥ 99.0%',
        moisture: '≤ 0.05% wt',
        specificGravity: '1.594 – 1.598',
        boilingPoint: '76.7 °C',
        applications: 'Refrigerant precursor, chemical intermediate, laboratory reagent, specialty synthesis',
        industries: ['Refrigeration', 'Chemical Synthesis', 'Laboratory', 'Specialty Chemicals'],
        packaging: ['300 kg Drums', 'ISO Tankers'],
        image: 'images/hero-chemical.png'
    }
];

const PRODUCT_PORTFOLIO_ICON = `
    <span class="product-portfolio-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M3 1.5L7 5L3 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </span>
`;

function getProductDetailUrl(slug, basePath) {
    const prefix = basePath || '';
    return `${prefix}products/detail.html?slug=${slug}`;
}

function getProductBySlug(slug) {
    return PURVODAY_PRODUCTS.find((product) => product.slug === slug) || null;
}

function renderSpecsTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const tableRows = PURVODAY_PRODUCTS.map((product) => `
        <tr>
            <td data-label="Product Name"><strong><a href="products/detail.html?slug=${product.slug}" class="spec-product-link">${product.name}</a></strong></td>
            <td data-label="Chemical Formula">${product.formula}</td>
            <td data-label="Assay (Purity)">${product.assay}</td>
            <td data-label="Moisture Content">${product.moisture}</td>
            <td data-label="Specific Gravity (20°C)">${product.specificGravity}</td>
            <td data-label="Boiling Point">${product.boilingPoint}</td>
            <td data-label="Typical Applications">${product.applications}</td>
        </tr>
    `).join('');

    container.innerHTML = `
        <table class="specs-table">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Chemical Formula</th>
                    <th>Assay (Purity)</th>
                    <th>Moisture Content</th>
                    <th>Specific Gravity (20°C)</th>
                    <th>Boiling Point</th>
                    <th>Typical Applications</th>
                </tr>
            </thead>
            <tbody>${tableRows}</tbody>
        </table>
    `;
}

function initProductDetailPage() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    const product = slug ? getProductBySlug(slug) : null;

    const titleEl = document.getElementById('product-detail-title');
    const breadcrumbEl = document.getElementById('product-detail-breadcrumb');
    const contentEl = document.getElementById('product-detail-content');

    if (!product) {
        if (titleEl) titleEl.textContent = 'Product Not Found';
        if (breadcrumbEl) breadcrumbEl.textContent = 'Product';
        if (contentEl) {
            contentEl.innerHTML = `
                <div class="col-lg-8 text-center">
                    <p>The requested product could not be found. Browse our full portfolio for available solvents.</p>
                    <a href="../products.html" class="primary-btn1 btn-hover" style="text-decoration:none; margin-top:20px; display:inline-flex;">
                        View All Products
                        <span></span>
                    </a>
                </div>
            `;
        }
        return;
    }

    document.title = `${product.name} | Purvoday Chemicals LLP`;
    if (titleEl) titleEl.textContent = product.name;
    if (breadcrumbEl) breadcrumbEl.textContent = product.name;

    const industriesHtml = product.industries.map((ind) => `<span class="product-tag">${ind}</span>`).join('');
    const packagingHtml = product.packaging.map((pkg) => `<li><i class="bi bi-check-circle-fill"></i> ${pkg}</li>`).join('');

    if (contentEl) {
        contentEl.innerHTML = `
            <div class="col-lg-5 mb-4 mb-lg-0">
                <div class="product-detail-image-wrap">
                    <img src="../${product.image}" alt="${product.name}" class="product-detail-image" loading="lazy">
                    <span class="product-detail-category">${product.category}</span>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="product-detail-info">
                    <h2 class="product-detail-name">${product.name}</h2>
                    <div class="product-spec-grid">
                        <div class="product-spec-item">
                            <span class="spec-label">Chemical Formula</span>
                            <span class="spec-value">${product.formula}</span>
                        </div>
                        <div class="product-spec-item">
                            <span class="spec-label">Assay (Purity)</span>
                            <span class="spec-value">${product.assay}</span>
                        </div>
                        <div class="product-spec-item">
                            <span class="spec-label">Moisture Content</span>
                            <span class="spec-value">${product.moisture}</span>
                        </div>
                        <div class="product-spec-item">
                            <span class="spec-label">Specific Gravity (20°C)</span>
                            <span class="spec-value">${product.specificGravity}</span>
                        </div>
                        <div class="product-spec-item">
                            <span class="spec-label">Boiling Point</span>
                            <span class="spec-value">${product.boilingPoint}</span>
                        </div>
                    </div>
                    <div class="product-detail-section">
                        <h4>Typical Applications</h4>
                        <p>${product.applications}</p>
                    </div>
                    <div class="product-detail-section">
                        <h4>Industries Served</h4>
                        <div class="product-tags">${industriesHtml}</div>
                    </div>
                    <div class="product-detail-section">
                        <h4>Packaging Availability</h4>
                        <ul class="product-packaging-list">${packagingHtml}</ul>
                    </div>
                    <div class="product-detail-actions d-flex flex-wrap gap-3">
                        <a id="product-detail-inquire" href="../products.html?product=${encodeURIComponent(product.inquiryValue)}#contact" class="primary-btn1 btn-hover product-inquire" data-product="${product.inquiryValue}" style="text-decoration:none;">
                            Get Quote
                            <span></span>
                        </a>
                        <a href="../contact.html" class="primary-btn1 btn-hover product-contact-btn" style="text-decoration:none;">
                            Contact Us
                            <span></span>
                        </a>
                        <a href="../products.html" class="product-back-link">← Back to Portfolio</a>
                    </div>
                </div>
            </div>
        `;
    }
}

function applyProductQueryParam() {
    const params = new URLSearchParams(window.location.search);
    const productValue = params.get('product');
    const productSelect = document.getElementById('product-select');

    if (!productValue || !productSelect) return;

    const matchingOption = Array.from(productSelect.options).find((option) => option.value === productValue);
    if (matchingOption) {
        productSelect.value = productValue;
    }
}

function createProductPortfolioItem(product) {
    const link = document.createElement('a');
    link.href = getProductDetailUrl(product.slug);
    link.className = 'product-portfolio-item';
    link.setAttribute('data-product', product.inquiryValue);
    link.setAttribute('data-product-slug', product.slug);
    link.setAttribute('title', `View ${product.name} details`);
    link.innerHTML = `${PRODUCT_PORTFOLIO_ICON}<span class="product-portfolio-name">${product.name}</span>`;
    return link;
}

function getPortfolioColumnCount(grid) {
    const template = window.getComputedStyle(grid).gridTemplateColumns;
    if (!template || template === 'none') return 1;
    return template.split(' ').filter(Boolean).length;
}

function markPortfolioLastRow(grid) {
    const items = grid.querySelectorAll('.product-portfolio-item');
    items.forEach((item) => item.classList.remove('last-row'));

    const columnCount = getPortfolioColumnCount(grid);
    const lastRowCount = PURVODAY_PRODUCTS.length % columnCount || columnCount;
    const startIndex = PURVODAY_PRODUCTS.length - lastRowCount;

    for (let i = startIndex; i < items.length; i += 1) {
        items[i].classList.add('last-row');
    }
}

function renderProductPortfolio(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const grid = document.createElement('div');
    grid.className = 'product-portfolio-grid';
    grid.setAttribute('role', 'list');

    PURVODAY_PRODUCTS.forEach((product) => {
        grid.appendChild(createProductPortfolioItem(product));
    });

    container.appendChild(grid);
    markPortfolioLastRow(grid);

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => markPortfolioLastRow(grid), 150);
    });
}

function populateProductSelect(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return;

    select.innerHTML = '<option value="">-Select-</option>';

    PURVODAY_PRODUCTS.forEach((product) => {
        const option = document.createElement('option');
        option.value = product.inquiryValue;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

function initProductPortfolio() {
    renderProductPortfolio('product-portfolio-grid');
    populateProductSelect('product-select');
    renderSpecsTable('specs-table-container');
    applyProductQueryParam();
}
