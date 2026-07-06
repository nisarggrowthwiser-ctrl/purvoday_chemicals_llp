const CERTIFICATES = [
    {
        image: 'cert_dgft.png',
        title: 'DGFT',
        description: 'Directorate General of Foreign Trade',
        alt: 'DGFT - Directorate General of Foreign Trade Logo'
    },
    {
        image: 'cert_icegate.png',
        title: 'ICEGATE',
        description: 'Indian Customs Electronic Gateway',
        alt: 'ICEGATE - Indian Customs Electronic Gateway Logo'
    },
    {
        image: 'cert_hdfc.png',
        title: 'HDFC Bank',
        description: 'Authorized Banking Partner',
        alt: 'HDFC Bank - Authorized Banking Partner Logo'
    },
    {
        image: 'cert_msme.png',
        title: 'MSME Registration',
        description: 'Ministry of Micro, Small & Medium Enterprises',
        alt: 'MSME Registration - Ministry of Micro, Small and Medium Enterprises Logo'
    },
    {
        image: 'cert_msc.png',
        title: 'MSC',
        description: 'Mediterranean Shipping Company',
        alt: 'Mediterranean Shipping Company (MSC) - Shipping Partner Certification Logo'
    },
    {
        image: 'cert_udyam.png',
        title: 'Udyam Registration',
        description: 'Government Business Registration',
        alt: 'Udyam Registration - Government Business Registration Logo'
    },
    {
        image: 'cert_gst.png',
        title: 'GST Registration',
        description: 'Goods & Services Tax Identification',
        alt: 'GST Registration - Goods and Services Tax Identification Logo'
    },
    {
        image: 'cert_incometax.png',
        title: 'Income Tax Department',
        description: 'PAN & Tax Compliance Registration',
        alt: 'Income Tax Department - PAN and Tax Compliance Registration Logo'
    },
    {
        image: 'cert_trademark.png',
        title: 'Registered Trademark',
        description: 'Intellectual Property Protection',
        alt: 'Registered Trademark - Intellectual Property Protection Logo'
    }
];

function renderCertificates(imageBasePath, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    container.innerHTML = CERTIFICATES.map(cert => `
        <article class="reveal group bg-white border border-[#163A70]/20 rounded-[16px] p-6 min-h-[260px] flex flex-col justify-between items-center shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-in-out">
            <div class="flex-grow flex items-center justify-center w-full p-4 overflow-hidden">
                <img
                    src="${imageBasePath}${cert.image}"
                    alt="${cert.alt}"
                    class="max-h-36 max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-300 ease-in-out"
                    loading="lazy"
                >
            </div>
            <div class="w-full text-center border-t border-slate-100 pt-4 mt-2">
                <h3 class="text-sm font-semibold text-[#163A70] font-sans m-0">${cert.title}</h3>
                <p class="text-xs text-slate-500 font-sans mt-1 mb-0">${cert.description}</p>
            </div>
        </article>
    `).join('');
}
